import { View, Text, FlatList, StyleSheet, Platform } from 'react-native'
import CATEGORIES from '../../utils/mocks/categories.json'
import React, { useEffect } from 'react'
import MealItem from './Item'

const Categories = ({ navigation }) => {

  const mealItem = (itemData) => {
    const { 
      categoryName,
      categoryId,
      mealsKey
    } = itemData;

    const onPressHandler = () => {
      navigation.navigate('CategoryOverview', { 
        categoryId: mealsKey
      })
    }

    return (
      <MealItem 
        id={categoryId}
        name={categoryName}
        identifier={mealsKey}
        onPress={onPressHandler}
      />
    )
  }
  
  useEffect(() => {
      navigation.setOptions({
        title: 'All categories'
      })
  }, [])

  return (
      <FlatList 
        data={CATEGORIES} 
        renderItem={(itemData) => mealItem(itemData.item)} 
        keyExtractor={(itemData) => itemData.categoryId} 
        numColumns={2}
        style={styles.categoriesContainer}
      />
  )
}

export default Categories

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? 54 : 64
  }
})