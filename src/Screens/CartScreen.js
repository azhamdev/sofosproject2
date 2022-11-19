import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Agv from '../../assets/images/1.png'
import ButtonPayment from '../Components/ButtonPayment'
import NavTop from '../Components/NavTop'

const CartScreen = () => {
  return (
    <View>
      <NavTop title={"Cart"} />
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Image source={Agv} />
          <View style={styles.details}>
            <Text style={styles.title}>Robot Agv</Text>
            <Text style={styles.price}>Rp 5000.000</Text>
          </View>
        </View>
        <View style={{ marginVertical: 30, }}>
          <View>
            <Text>Total :</Text>
            <Text style={{ fontSize: 20, color: '#9E579D', fontWeight: '600' }}>Rp 5000.000</Text>
          </View>
        </View>
        <ButtonPayment />
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
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