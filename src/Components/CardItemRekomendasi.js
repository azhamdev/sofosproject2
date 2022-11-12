import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import robotdayaangkut from '../../assets/images/robotdayaangkut.png'
const CardItemRekomendasi = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardItem}>
          <Image source={robotdayaangkut} />
          <Text style={{ color: '#000' }}>Rp5000.000</Text>
          <Text style={{ color: '#000' }}>ROBOT AVG KAIBO</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default CardItemRekomendasi

const styles = StyleSheet.create({
  cardItem: {
    height: 170,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})