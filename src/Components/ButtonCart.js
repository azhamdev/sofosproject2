import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCart = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
      <View style={styles.buttonCart}>
        <Text style={styles.textButton}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCart

const styles = StyleSheet.create({
  buttonCart: {
    backgroundColor: 'white',
    width: 180,
    padding: 20,
    borderRadius: 50,

  },
  textButton: {
    color: '#9E579D',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '600'
  }
})