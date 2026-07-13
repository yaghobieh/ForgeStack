import { FC, CSSProperties } from 'react';
import { Badge, Button } from '@forgedevstack/bear';
import {
  RIBBON_ACTION_LABELS,
  RIBBON_DOWNLOADS_LABEL,
  RIBBON_VERSION_PREFIX,
  npmPackageUrl,
} from '@constants/ribbon.const';
import { formatDownloads } from '@hooks/useNpmStats';
import type { RibbonSliceProps } from './types';

interface SliceCssVars extends CSSProperties {
  '--slice-from': string;
  '--slice-to': string;
  '--slice-glow': string;
}

export const RibbonSlice: FC<RibbonSliceProps> = (props) => {
  const { library, stats, onOpenDocs, onSliceResized } = props;

  const style: SliceCssVars = {
    '--slice-from': library.colorFrom,
    '--slice-to': library.colorTo,
    '--slice-glow': library.glow,
  };

  return (
    <div
      className="fs-slice"
      style={style}
      onTransitionEnd={onSliceResized}
      role="group"
      aria-label={library.name}
      tabIndex={-1}
    >
      <div className="fs-slice__inner">
        <div className="fs-slice__sheen" aria-hidden />

        <div className="fs-slice__head">
          <span className="fs-slice__icon" aria-hidden>{library.icon}</span>
          <div className="fs-slice__meta">
            {stats?.version && (
              <Badge size="sm" pill className="fs-slice__badge">
                {RIBBON_VERSION_PREFIX}{stats.version}
              </Badge>
            )}
            {typeof stats?.weeklyDownloads === 'number' && (
              <span className="fs-slice__downloads">
                ⇣ {formatDownloads(stats.weeklyDownloads)}{RIBBON_DOWNLOADS_LABEL}
              </span>
            )}
          </div>
        </div>

        <div className="fs-slice__body">
          <span className="fs-slice__name">{library.name}</span>
          <span className="fs-slice__pkg">{library.npmPackage}</span>
          <p className="fs-slice__tagline">{library.tagline}</p>

          <div className="fs-slice__actions">
            <Button size="sm" variant="primary" className="fs-slice__btn" onClick={() => onOpenDocs(library)}>
              {RIBBON_ACTION_LABELS.docs}
            </Button>
            <a
              href={npmPackageUrl(library.npmPackage)}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-slice__link"
            >
              {RIBBON_ACTION_LABELS.npm}
            </a>
            <a
              href={library.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-slice__link"
            >
              {RIBBON_ACTION_LABELS.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
