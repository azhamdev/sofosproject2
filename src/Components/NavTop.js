import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ICArrow from '../../assets/iconRightArrow.png'
import LeftIcon from '../../assets/iconLeftArrow.png'


const NavTop = ({ title, onPress, onPress1, navigate, navigation, isBack, isNext }) => {
  const [back, setBack] = useState(false)

  const showBack = (isBack) => {
    if (isBack == true) {
      return (
        <TouchableOpacity onPress={onPress1}>
          <Image source={LeftIcon} style={{
            width: 30,
            height: 30,
            marginLeft: 20,
          }} />
        </TouchableOpacity>
      )
    }
  }

  const showNext = (isNext) => {
    if (isNext == true) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Image source={ICArrow} style={{
            width: 30,
            height: 30,
            marginRight: 20,
          }} />
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.navTop}>
        <View style={styles.top}>
          {showBack(isBack)}
        </View>
        <View style={styles.titleNav}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View>
            {showNext(isNext)}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NavTop

const styles = StyleSheet.create({
  navTop: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  titleNav: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  arrow: {
    width: 20,
    height: 20,
  }
})