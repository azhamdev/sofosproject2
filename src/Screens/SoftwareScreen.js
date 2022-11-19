import React from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import CardItemMekanik from '../Components/CardItemMekanik'
import NavTop from '../Components/NavTop'
import LeftIcon from '../../assets/iconLeftArrow.png'
import CardItemSoftware from '../Components/CardItemSoftware'
import MobileBase from '../../assets/images/m4.jpg'
import Database from '../../assets/images/m3.jpg'


const SoftwareScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingBottom: 20, backgroundColor: '#9E579D' }}>
      <NavTop onPress1={() => navigation.goBack(null)} isBack={true} title={"Software"} onPress={() => navigation.navigate('Fitur')} isNext={true} />
      <ScrollView style={styles.wrapper}>
        <View style={styles.contentView}>
          <CardItemSoftware image={Database} title={"Database"} price={5000000} />
          <CardItemSoftware image={MobileBase} title={"Mobile Base"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemSoftware image={Database} title={"Database"} price={5000000} />
          <CardItemSoftware image={MobileBase} title={"Mobile Base"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemSoftware image={Database} title={"Database"} price={5000000} />
          <CardItemSoftware image={MobileBase} title={"Mobile Base"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemSoftware image={Database} title={"Database"} price={5000000} />
          <CardItemSoftware image={MobileBase} title={"Mobile Base"} price={5000000} />
        </View>
        <View style={styles.contentView}>
          <CardItemSoftware image={Database} title={"Database"} price={5000000} />
          <CardItemSoftware image={MobileBase} title={"Mobile Base"} price={5000000} />
        </View>

      </ScrollView>
    </View>
  )
}

export default SoftwareScreen

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#9E579D',
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
})