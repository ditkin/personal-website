import { ABOUT, PROJECTS, RESUME } from './constants/routes';
import { useRoute } from './hooks/useRoute';

export default function Router() {
  const route = useRoute();
  return (
    <div class="pb-14">
      {route === PROJECTS && 'projects'}
      {route === ABOUT && (
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
      {route === RESUME && 'resume'}
    </div>
  );
}
