import { ABOUT, BLOG, PROJECTS, RESUME } from './constants/routes';
import { useRoute } from './hooks/useRoute';
import Blog from './Blog';
import AboutMe from './AboutMe';

type routeType = typeof ABOUT | typeof BLOG | typeof PROJECTS | typeof RESUME;

function getBaseRoutePage(route: string): routeType {
  return route.split('/')[0] as routeType;
}

export default function Router() {
  const route = useRoute();
  const baseRoute = getBaseRoutePage(route);

  return (
    <div class="pb-14" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
      {baseRoute === BLOG && <Blog />}
      {baseRoute === PROJECTS && 'projects'}
      {baseRoute === ABOUT && <AboutMe />}
      {baseRoute === RESUME && 'resume'}
    </div>
  );
}
