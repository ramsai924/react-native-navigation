import { View, Text, Image, StyleSheet, Platform, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MealInfo = ({ id, name, image, description, preparationSteps }) => {
    const navigation = useNavigation()

    const onPressHandler = () => {
        navigation.navigate('mealDetails', {
            mealId: id
        })
    }

  return (
    <Pressable 
        onPress={onPressHandler}
        style={({ pressed }) => {
            return pressed ? [styles.mealInfoContainer, { opacity: 0.5 }] : styles.mealInfoContainer
        }}
    >
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
    </Pressable>
  )
}

export default MealInfo


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
        
        gap: 4,
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
    mealImage: { height: 200, width: '100%', borderRadius: 8 }
})