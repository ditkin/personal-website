import { ABOUT, BLOG, PROJECTS, RESUME } from './constants/routes';
import { useRoute } from './hooks/useRoute';
import Blog from './Blog';

type routeType = typeof ABOUT | typeof BLOG | typeof PROJECTS | typeof RESUME;

function getBaseRoutePage(route: string): routeType {
  return route.split('/')[0] as routeType;
}

export default function Router() {
  const route = useRoute();
  const baseRoute = getBaseRoutePage(route);

  return (
    <div class="pb-14">
      {baseRoute === BLOG && <Blog />}
      {baseRoute === PROJECTS && 'projects'}
      {baseRoute === ABOUT && (
        /** @TODO remove, filler to test long screen */
        <div>
          {Array(100)
            .fill('aboit')
            .map((x) => (
              <>
                <br />
                {x}
              </>
            ))}
        </div>
      )}
      {baseRoute === RESUME && 'resume'}
    </div>
  );
}
