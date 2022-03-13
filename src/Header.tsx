import { useRouteUpdater } from './hooks/useRoute';
import * as routes from './constants/routes';
import funnyKitty from '../assets/funny_kitty.jpeg';

function HeaderButton({ route }: { route: string }) {
  const handleRouteChange = useRouteUpdater(route);
  return (
    <span
      class="cursor-pointer font-medium hover:text-white transition-all ease-in-out"
      onClick={handleRouteChange}
    >
      {route.toUpperCase()}
    </span>
  );
}

export default function Header() {
  const routeToBlog = useRouteUpdater(routes.BLOG);

  return (
    <div
      class="w-full py-2 px-2 flex items-center justify-between border-b border-black bg-slate-300 text-xl"
      style={{ paddingLeft: '20%', paddingRight: '20%' }}
    >
      <span
        class="w-48 flex justify-around items-center cursor-pointer"
        onClick={routeToBlog}
      >
        <img class="h-16 w-16 rounded-lg shadow-xl" src={funnyKitty} />
        DAVID ITKIN
      </span>
      <span class="w-96 flex justify-around">
        {Object.values(routes).map(route => (
          <HeaderButton route={route} />
        ))}
      </span>
    </div>
  );
}
