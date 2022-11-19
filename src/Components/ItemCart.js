import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemCart = () => {
  return (
    <View style={styles.card}>
      <Image source={Agv} />
      <View style={styles.details}>
        <Text style={styles.title}>Robot Agv</Text>
        <Text style={styles.price}>Rp 5000.000</Text>
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 10,
    shadowRadius: 9,

    elevation: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    color: "#9E579D",
    fontSize: 18,
    marginTop: 5
  },
  details: {
    paddingLeft: 20,
  }
})