import { FC, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rail, RailSlide, FreeMode, Mousewheel, Navigation } from '@forgedevstack/rail';
import type { RailInstance } from '@forgedevstack/rail';
import {
  RIBBON_LIBRARIES,
  RIBBON_PACKAGE_NAMES,
  RIBBON_TITLE,
  RIBBON_HINT,
  RIBBON_GAP_PX,
} from '@constants/ribbon.const';
import type { RibbonLibrary } from '@constants/ribbon.const';
import { useNpmStats } from '@hooks/useNpmStats';
import { RibbonSlice } from './RibbonSlice';

const RAIL_MODULES = [FreeMode, Mousewheel, Navigation];

export const LibraryRibbon: FC = () => {
  const navigate = useNavigate();
  const stats = useNpmStats(RIBBON_PACKAGE_NAMES);
  const railRef = useRef<RailInstance | null>(null);

  const handleRail = useCallback((instance: RailInstance) => {
    railRef.current = instance;
  }, []);

  const handleSliceResized = useCallback(() => {
    railRef.current?.update();
  }, []);

  const handleOpenDocs = useCallback(
    (library: RibbonLibrary) => {
      if (library.docsRoute) {
        navigate(library.docsRoute);
        return;
      }
      window.open(library.docsUrl ?? library.githubUrl, '_blank', 'noopener,noreferrer');
    },
    [navigate]
  );

  return (
    <div className="fs-ribbon" aria-label={RIBBON_TITLE}>
      <p className="fs-ribbon__hint">{RIBBON_HINT}</p>

      <div className="fs-ribbon__band">
        <Rail
          slidesPerView="auto"
          spaceBetween={RIBBON_GAP_PX}
          freeMode
          grabCursor
          navigation
          mousewheel={{ forceToAxis: true }}
          modules={RAIL_MODULES}
          onRail={handleRail}
          className="fs-ribbon__rail"
        >
          {RIBBON_LIBRARIES.map((library) => (
            <RailSlide key={library.id} className="fs-ribbon__slide">
              <RibbonSlice
                library={library}
                stats={stats[library.npmPackage]}
                onOpenDocs={handleOpenDocs}
                onSliceResized={handleSliceResized}
              />
            </RailSlide>
          ))}
        </Rail>
      </div>
    </div>
  );
};
