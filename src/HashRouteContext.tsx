import { createContext, ComponentChildren } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { PROJECTS } from './constants/routes';

interface HashRouteContextInterface {
  route: string;
  handleRouteChange: (newRoute: string) => void;
}

const HashRouteContext = createContext<HashRouteContextInterface>({
  route: '',
  handleRouteChange: (newRoute) => {},
});

function getHashRoute(): string {
  return window.location.hash.substring(1) || PROJECTS;
}

type ChildrenProps = {
  children: ComponentChildren;
};

function HashRouteProvider({ children }: ChildrenProps) {
  const [route, setRoute] = useState(getHashRoute());

  const handleRouteChange = useCallback((newRoute: string) => {
    setRoute(newRoute);
    window.location.hash = newRoute;
  }, []);

  const contextValueObject = useMemo(
    () => ({
      route,
      handleRouteChange,
    }),
    [route, handleRouteChange]
  );
  return (
    <HashRouteContext.Provider value={contextValueObject}>
      {children}
    </HashRouteContext.Provider>
  );
}

export { HashRouteContext, HashRouteProvider };
