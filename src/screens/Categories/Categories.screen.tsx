import React from 'react';
import {
  CategoriesContainer,
  CategoryContainer,
  Container,
} from './Categories.styles';
import {FlatList} from 'react-native';
import {Typography} from 'components/Typography/Typography.component';
import {useCategories} from './useCategories';
import {Category} from 'generated/types';
import {IconBackground} from 'components/IconBackground/IconBackground.component';

export const Categories = () => {
  const {categoryData} = useCategories();

  const renderItem = ({item}: {item: Category}) => {
    return (
      <CategoryContainer>
        <IconBackground>
          <Typography variant="body2">{item.id}</Typography>
        </IconBackground>
        <Typography variant="body2">{item.title}</Typography>
      </CategoryContainer>
    );
  };

  const keyExtractor = (item: Category) => item.id;

  return (
    <Container>
      <CategoriesContainer>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={categoryData}
        />
      </CategoriesContainer>
    </Container>
  );
};
