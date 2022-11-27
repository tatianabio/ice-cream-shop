import React, { HTMLProps } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { IBlogArticleInfo } from '../../../mock/data/blog-article-info';
import './BlogArticleTile.scss';

interface IBlogArticleTile extends HTMLProps<HTMLAnchorElement> {
  /** Data of the article: id, title, img, link */
  info: IBlogArticleInfo;
  /** Technical attributes */
  'data-testid': string;
}

const BlogArticleTile = ({ info, 'data-testid': testID, ...props }: IBlogArticleTile) => {
  const { title, link, imgLink } = info;
  const { t } = useTranslation();
  return (
    <a
      {...props}
      href={link}
      className={cx('article-tile', props.className)}
      target='_blank'
      rel='noreferrer'
      data-testid={`${testID}--link`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <span className='article-tile__label-new'>{t('recentInBlog')}</span>
      <h2 className='article-tile__title' data-testid={`${testID}--title`}>
        {t(title)}
      </h2>
    </a>
  );
};

export default BlogArticleTile;
