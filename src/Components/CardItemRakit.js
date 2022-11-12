import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import robotics from "../../assets/robotics.png"
import automation from "../../assets/automation.png"
import consult from "../../assets/consult.png"

const CardItemRakit = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={robotics} />
        </View>
      </TouchableOpacity>
    </>
  )
}

export default CardItemRakit

{/*const styles = StyleSheet.create({
  cardItem: {
    height: 170,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})
*/}