export interface IBlogArticleInfo {
  /** Unique identification number of the article in our blog */
  id: number;
  /** Title of the article */
  title: string;
  /** Link to the image for the article */
  imgLink: string;
  /** Link to the article in our blog */
  link: string;
}

export const blogArticleInfo: IBlogArticleInfo = {
  id: 1,
  title: 'serveFruitSorbets',
  imgLink: '/fruit-sorbets',
  link: '#',
};
