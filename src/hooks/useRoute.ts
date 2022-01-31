import { useCallback, useContext } from 'preact/hooks';
import { HashRouteContext } from '../HashRouteContext';

export function useRouteUpdater(newRoute: string): () => void {
  const { handleRouteChange } = useContext(HashRouteContext);
  return useCallback(() => {
    handleRouteChange(newRoute);
  }, [handleRouteChange]);
}

export function useRoute(): string {
  return useContext(HashRouteContext).route;
}
