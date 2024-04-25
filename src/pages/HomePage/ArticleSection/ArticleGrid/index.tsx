import { GridLayout } from "#layouts/GridLayout";
import { ArticleElement } from '../ArticleElement';
import type { Article } from "../types";

type Props = {
  articles: Article[],
}

export function ArticleGrid ({ articles }: Props) {
  const articleElements = articles.map(({ image, author, title, paragraph }) => (
    <li key={crypto.randomUUID()}>
      <ArticleElement 
        image={image}
        author={author}
        title={title}
        paragraph={paragraph}
      />
    </li>
  ));

  return (
    <GridLayout>
      {articleElements}
    </GridLayout>
  );
}