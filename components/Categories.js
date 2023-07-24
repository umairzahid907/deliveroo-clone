import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
