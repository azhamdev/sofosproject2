import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NavTop from '../Components/NavTop'
import ProfileImage from '../../assets/images/profile.jpg'
import { Button } from 'native-base'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <NavTop title={"Profile"} />
      <View style={styles.ImageWrapper}>
        <View style={{ alignItems: 'center' }}>
          <Image source={ProfileImage} style={styles.imageProfile} />
          <Text style={{ marginTop: 20, fontSize: 40, fontWeight: '600' }}>James Airwalk</Text>
          <Text style={{ marginTop: 10, fontSize: 15, }}>Electric Engineer</Text>
        </View>
        <View>
          <Button paddingRight={20} paddingLeft={20} bgColor={'red.500'}>
            Logout
          </Button>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  ImageWrapper: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
  },
  imageProfile: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,

  }
})