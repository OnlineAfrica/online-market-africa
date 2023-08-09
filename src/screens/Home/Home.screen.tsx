import React from 'react';
import {Container, StyleableImage} from './Home.styles';
import {SectionHeader} from 'components/SectionHeader/SectionHeader.component';
import lang from 'utils/language/en.json';

export const Home = () => {
  return (
    <Container>
      <StyleableImage
        source={require('../../assets/images/shop-banner.jpeg')}
      />
      <SectionHeader
        title={lang.home.recomended}
        buttonTitle={lang.home.seeAll}
      />
      <SectionHeader
        title={lang.home.whatsHot}
        buttonTitle={lang.home.seeAll}
      />
      <SectionHeader
        title={lang.home.promotions}
        buttonTitle={lang.home.seeAll}
      />
    </Container>
  );
};
