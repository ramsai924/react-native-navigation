import { View, Text, StyleSheet, FlatList } from 'react-native'
import MEALS from '../../utils/mocks/meals.json'
import CATEGORIES from '../../utils/mocks/categories.json'
import React, { useLayoutEffect } from 'react'
import MealInfo from './Item';

const CategoryOverView = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const filteredMeals = MEALS.filter((meal) => meal.mealsKey === categoryId)

  useLayoutEffect(() => {
    const mealTitle = CATEGORIES.filter((category) => category.mealsKey === categoryId)
    navigation.setOptions({
        title: mealTitle.length > 0 ? mealTitle[0].categoryName : 'All Meals'
      })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        renderItem={(itemData) => (
          <MealInfo {...itemData.item} />
        )}
        disableScrollViewPanResponder
      />
    </View>
  )
}

export default CategoryOverView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})