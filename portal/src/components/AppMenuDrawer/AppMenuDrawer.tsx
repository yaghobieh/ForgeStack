import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, Badge, Switch } from '@forgedevstack/bear';
import {
  APP_MENU_ITEMS,
  MENU_DRAWER_TITLE,
  MENU_SOON_LABEL,
} from '@constants/menu.const';
import type { AppMenuItem } from '@constants/menu.const';
import {
  VIEW_MODE_CLASSIC,
  VIEW_MODE_LAUNCHER,
  VIEW_MODE_TOGGLE_LABEL,
} from '@constants/viewMode.const';
import { useViewMode, setViewMode } from '@hooks/useViewMode';

interface AppMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppMenuDrawer: FC<AppMenuDrawerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const viewMode = useViewMode();

  const handleRouteClick = (route: string) => {
    onClose();
    navigate(route);
  };

  const handleViewModeToggle = (checked: boolean) => {
    setViewMode(checked ? VIEW_MODE_CLASSIC : VIEW_MODE_LAUNCHER);
  };

  const renderItem = (item: AppMenuItem) => {
    if (item.comingSoon) {
      return (
        <div key={item.id} className="fs-menu__item fs-menu__item--disabled" aria-disabled>
          <span>{item.label}</span>
          <Badge size="sm" pill variant="warning">{MENU_SOON_LABEL}</Badge>
        </div>
      );
    }

    if (item.href) {
      return (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-menu__item"
          onClick={onClose}
        >
          <span>{item.label}</span>
          <span className="fs-menu__hint" aria-hidden>↗</span>
        </a>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        className="fs-menu__item"
        onClick={() => item.route && handleRouteClick(item.route)}
      >
        <span>{item.label}</span>
      </button>
    );
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      side="left"
      title={MENU_DRAWER_TITLE}
      className="fs-menu"
    >
      <nav className="fs-menu__list">
        {APP_MENU_ITEMS.map(renderItem)}
      </nav>

      <div className="fs-menu__footer">
        <Switch
          checked={viewMode === VIEW_MODE_CLASSIC}
          onCheckedChange={handleViewModeToggle}
          label={VIEW_MODE_TOGGLE_LABEL}
        />
      </div>
    </Drawer>
  );
};
