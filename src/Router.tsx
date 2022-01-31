import { ABOUT, PROJECTS, RESUME } from './constants/routes';
import { useRoute } from './hooks/useRoute';

export default function Router() {
  const route = useRoute();
  return (
    <>
      {route === PROJECTS && 'projects'}
      {route === ABOUT && 'about'}
      {route === RESUME && 'resume'}
    </>
  );
}
