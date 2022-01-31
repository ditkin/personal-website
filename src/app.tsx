import { HashRouteContext, HashRouteProvider } from './HashRouteContext';
import Header from './Header';
import Router from './Router';

export function App() {
  return (
    <HashRouteProvider>
      <Header />
      <Router />
    </HashRouteProvider>
  );
}
