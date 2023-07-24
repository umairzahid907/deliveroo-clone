import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row pt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Shushi"
          rating={4.5}
          genre="Japenese"
          address="123 Main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={50}
        />

        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Shushi"
          rating={4.5}
          genre="Japenese"
          address="123 Main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={50}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
