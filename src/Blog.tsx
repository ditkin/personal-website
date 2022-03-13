import { Article } from './types/Article';
import { BLOG } from './constants/routes';
import { useRoute, useRouteUpdater } from './hooks/useRoute';
import officeArticle from './blogArticles/officeArticle';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const articles = [officeArticle];

function getCurrentArticle(route: string): Article | false | undefined {
  const routeChunks = route.split('/').filter(Boolean);
  const lastRouteChunk = routeChunks[routeChunks.length - 1];

  return (
    routeChunks.length > 1 &&
    articles.find(article => article.id === lastRouteChunk)
  );
}

export function ArticleLink({ article }: { article: Article }) {
  const routeToArticle = useRouteUpdater(`${BLOG}/${article.id}`);

  return (
    <div class="cursor-pointer mb-3" onClick={routeToArticle}>
      <b>{article.title}</b>
      <br />
      {new Date(article.timestamp).toLocaleDateString(
        'en-US',
        dateFormatOptions
      )}
    </div>
  );
}

export default function Blog() {
  const route = useRoute();

  const routeToBlogListing = useRouteUpdater(BLOG);

  // if we're on a specific blog article route, render it. Otherwise render blog listing
  const CurrentArticle = getCurrentArticle(route);
  if (CurrentArticle) {
    return (
      <div>
        <span class="text-blue-600 cursor-pointer" onClick={routeToBlogListing}>
          {'< Back'}
        </span>
        <br />
        <br />
        <CurrentArticle />
      </div>
    );
  }

  return (
    <>
      {articles.map(article => (
        <ArticleLink article={article} />
      ))}
    </>
  );
}
