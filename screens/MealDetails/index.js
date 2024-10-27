import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import MEALS from '../../utils/mocks/meals.json'
import Entypo from '@expo/vector-icons/Entypo';
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const MealDetails = ({ route }) => {
    const navigation = useNavigation()
    const mealId = route.params.mealId;
    const mealDetails = MEALS.find((meal) => meal.id === mealId)

    if(!mealDetails){
        return (
            <View>
                <Text>Meal - {mealId} not found</Text>
            </View>
        )
    }
    const { name, image, description, preparationSteps  } = mealDetails;

    useEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [])

  return (
    <View style={styles.mealInfoContainer}>
      <View>
        <Image style={styles.mealImage} source={{ uri: image }} />
      </View>
      <View style={styles.mealInfo}>
        <Text style={styles.mealInfoTitle}>{name}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.mealStepsContainer}>
            {
                preparationSteps.map((step, i) => (
                    <View style={styles.mealStepsInnerContainer} key={step + i}>
                        <Entypo style={{ alignSelf: 'flex-start' }} size={25} name='dot-single' color={'black'} />
                        <Text style={styles.mealStepText}>
                            {step}
                        </Text>
                    </View>
                ))
            }
      </View>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    mealInfoContainer: {
        flex: 1,
        gap: 4,
        borderRadius: 8,
        elevation: 4,
        padding: 16,
        margin: 12,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' // this helps when pressable overflows grid
    },
    mealInfo: {
        borderBottomWidth: 2,
        borderBottomColor: '#656dc1',
        paddingVertical: 8,
    },
    mealInfoTitle: {
        fontSize:18,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 8
    },
    mealStepsContainer: {
        gap: 8,
        marginVertical: 8,
        paddingRight: 12
    },
    mealStepsInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    mealStepText: {
        color: 'grey'
    },
    mealImage: { height: 350, width: '100%', borderRadius: 8 }
})