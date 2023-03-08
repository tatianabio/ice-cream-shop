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
import cartStore, { ICartStore } from '../../molecules/CartTile/Cart.store';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import Page from '../Page';

interface IMainPage {
  /** Technical attributes */
  'data-testid': string;
}

const MainPage = ({ 'data-testid': testId }: IMainPage) => {
  const addProductToCart = cartStore((store: ICartStore) => store.addProduct, shallow);

  const onClickHandler = async (data: IIceCreamOffer) => {
    addProductToCart(data.productInfo);
    sendMessageToDisplay('successfulAddingToCart');
  };

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const { backgroundColor } = offers[activeItemIndex];

  // TODO: Added Gift list from MSW

  return (
    <Page data-testid='app'>
      <main
        className='main-page'
        data-testid={`${testId}-main-page`}
        style={{ backgroundColor: `var(--special-${backgroundColor})` }}
      >
        <OfferSection addToCart={onClickHandler} data-testid='main-page' />
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
    </Page>
  );
};

export default MainPage;
