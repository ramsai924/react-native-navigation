import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import React from 'react'

const MealItem = ({ name, id, identifier, onPress }) => {
  return (
        <Pressable 
            style={({ pressed }) => {
                return pressed ? [styles.gridItem, {opacity: 0.5 }] : styles.gridItem
            }} 
            onPress={onPress}
        >
            <View style={styles.innerGridItem}>
                <Text style={styles.gridText}>{name}</Text>
            </View>
        </Pressable>
  )
}

export default MealItem

const styles  = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 160,
        margin: 16,
        elevation: 4,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' // this helps when pressable overflows grid
    },
    innerGridItem: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7c83bd',
        borderRadius: 8,
    },
    gridText: {
        fontSize: 18,
        color: '#e0e2f8',
        fontWeight: 'bold'
    }
})