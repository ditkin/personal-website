import { useRouteUpdater } from './hooks/useRoute';
import { ABOUT, PROJECTS, RESUME } from './constants/routes';
import funnyKitty from '../assets/funny_kitty.jpeg';
import { FunctionalComponent, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';

function HeaderButton({
  route,
  onClick,
}: {
  route: string;
  onClick: Function;
}) {
  // reassigning to satisfy onClick type
  const clickHandler = useCallback(() => onClick(), [onClick]);
  return (
    <span
      class="cursor-pointer font-medium hover:text-white transition-all ease-in-out"
      onClick={clickHandler}
    >
      {route}
    </span>
  );
}

export default function Header() {
  const routeToProjects = useRouteUpdater(PROJECTS);
  const routeToAbout = useRouteUpdater(ABOUT);
  const routeToResume = useRouteUpdater(RESUME);

  return (
    <div class="w-full py-2 px-2 flex items-center justify-between">
      <span
        class="w-40 flex justify-around items-center cursor-pointer"
        onClick={routeToProjects}
      >
        <img class="h-16 w-16 rounded-lg shadow-xl" src={funnyKitty} />
        DAVID ITKIN
      </span>
      <span class="w-64 flex justify-around">
        <HeaderButton
          route={PROJECTS.toUpperCase()}
          onClick={routeToProjects}
        />
        <HeaderButton route={ABOUT.toUpperCase()} onClick={routeToAbout} />
        <HeaderButton route={RESUME.toUpperCase()} onClick={routeToResume} />
      </span>
    </div>
  );
}
