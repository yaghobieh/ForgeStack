import { FC, useState } from 'react';
import { LibraryRibbon } from '../LibraryRibbon';
import { LogoText } from '../Logo';
import { COVER_IMAGE_SRC, LAUNCHER_HINT } from '@constants/launcher.const';
import { TAGLINE } from '@constants';

export const Launcher: FC = () => {
  const [coverLoaded, setCoverLoaded] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <section className="fs-launcher">
      <div className="fs-launcher__bg" aria-hidden>
        {!coverFailed && (
          <img
            src={COVER_IMAGE_SRC}
            alt=""
            className={`fs-launcher__cover ${coverLoaded ? 'fs-launcher__cover--loaded' : ''}`}
            onLoad={() => setCoverLoaded(true)}
            onError={() => setCoverFailed(true)}
          />
        )}
        <div className="fs-launcher__overlay" />
      </div>

      <div className="fs-launcher__brand">
        <h1 className="fs-launcher__title">
          <LogoText />
        </h1>
        <p className="fs-launcher__kicker">{TAGLINE}</p>
      </div>

      <div className="fs-launcher__dock">
        <LibraryRibbon />
      </div>

      <div className="fs-launcher__hint" aria-hidden>
        <span>{LAUNCHER_HINT}</span>
      </div>
    </section>
  );
};
