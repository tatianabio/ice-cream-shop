import React from 'react';
import './MainPage.scss';
import { shallow } from 'zustand/shallow';
import OfferSection from '../../organisms/OfferSection';
import { IIceCreamOffer } from '../../../mock/data/iceCreamOffers';
import SectionTile from '../../organisms/SectionTile';
import TileContainer from '../../organisms/TileContainer';
import GiftTile from '../../molecules/GiftTile';
import { gifts } from '../../../mock/data/gifts';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../../atoms/SliderTile/SliderTile.store';
import CatalogList from '../../molecules/CatalogList';
import { products } from '../../../mock/data/products';
import BenefitsTile from '../../atoms/BenefitsTile';
import BlogArticleTile from '../../atoms/BlogArticleTile';
import { blogArticleInfo } from '../../../mock/data/blogArticleInfo';
import SubscriptionSection from '../../organisms/SubscriptionSection';
import DeliverySection from '../../organisms/DeliverySection';
import Contacts from '../../organisms/Contacts';

interface IMainPage {
  /** Technical attributes */
  'data-testid': string;
}

const MainPage = ({ 'data-testid': testId }: IMainPage) => {
  // TODO: create a callback for adding a product to the Cart, check data-testId
  const onClickHandler = async (data: IIceCreamOffer) => {
    console.log(data);
  };

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const { backgroundColor } = offers[activeItemIndex];

  return (
    <main
      className='main-page'
      data-testid={`${testId}-main-page`}
      style={{ backgroundColor: `var(--special-${backgroundColor})` }}
    >
      <OfferSection addToCart={onClickHandler} data-testid='demo' />
      <SectionTile data-testid='gift' title='giftTileTitle'>
        <TileContainer data-testid='gift-tile-container'>
          <>
            <GiftTile data-testid='raspberry-gift' data={gifts[0]} />
            <GiftTile data-testid='marshmallow-gift' data={gifts[1]} />
          </>
        </TileContainer>
      </SectionTile>
      <SectionTile data-testid='popular-products' title='popularProductsTitle'>
        <CatalogList data-testid='main-page' displayedProductsNumber={4} productsList={products} />
      </SectionTile>
      <BenefitsTile />
      <TileContainer data-testid='blog-article'>
        <>
          <BlogArticleTile data-testid='fruit-sorbets' info={blogArticleInfo} />
          <SubscriptionSection data-testid='main-page' />
        </>
      </TileContainer>
      <DeliverySection data-testid='main-page' />
      <Contacts data-testid='main-page' />
    </main>
  );
};

export default MainPage;
