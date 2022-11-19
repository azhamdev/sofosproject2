import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ICArrow from '../../assets/iconRightArrow.png'
import NavTop from '../Components/NavTop'
import Product from '../../assets/images/1.png'
import CardItemMekanik from '../Components/CardItemMekanik'

const MekanikScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingBottom: 20, backgroundColor: '#9E579D' }}>
      <NavTop isBack={true} isNext={true} onPress1={() => navigation.goBack(null)} title={"Mekanik"} onPress={() => navigation.navigate('Software')} />
      <ScrollView style={styles.wrapper}>
        <View style={styles.contentView}>
          <CardItemMekanik />
          <CardItemMekanik />
        </View>
        <View style={styles.contentView}>
          <CardItemMekanik />
          <CardItemMekanik />
        </View>
        <View style={styles.contentView}>
          <CardItemMekanik />
          <CardItemMekanik />
        </View>
      </ScrollView>
    </View>
  )
}

export default MekanikScreen

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#9E579D',
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
  }
})