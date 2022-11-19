import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import LineTracking from '../../assets/images/f6.jpg'
import GpsTracking from '../../assets/images/f3.jpg'
import CardItemFitur from '../Components/CardItemFitur'
import NavTop from '../Components/NavTop'
import ButtonCart from '../Components/ButtonCart'

const FiturScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingBottom: 20, backgroundColor: '#9E579D' }}>
      <NavTop onPress1={() => navigation.goBack(null)} isBack={true} title={"Fitur"} />
      <ScrollView style={styles.wrapper}>
        <View style={styles.contentView}>
          <CardItemFitur image={LineTracking} title={"Line Tracking"} price={5000000} />
          <CardItemFitur title={"Wall Tracking"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemFitur title={"Camera Tracking"} price={5000000} />
          <CardItemFitur image={GpsTracking} title={"GPS Tracking"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemFitur title={"Camera Tracking"} price={5000000} />
          <CardItemFitur image={GpsTracking} title={"GPS Tracking"} price={5000000} />
        </View>
      </ScrollView>
      <View style={{ paddingTop: 10 }}>
        <ButtonCart onPress={() => navigation.navigate('Cart')} />
      </View>
    </View>
  )
}

export default FiturScreen

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#9E579D',
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
})