import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NavTop from '../Components/NavTop'
import ProfileImage from '../../assets/images/profile.jpg'
import { Button } from 'native-base'
import Edit from '../../assets/images/fi_edit.png'
import Setting from '../../assets/images/fi_settings.png'
import LogOut from '../../assets/images/fi_log-out.png'
import Link from '../Components/Link'

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
      </View>
      <View style={{ padding: 20 }}>
        <Link image={Edit} title={"Ubah Akun"} />
        <Link image={Setting} title={"Pengaturan Akun"} />
        <Link image={LogOut} title={"Keluar"} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  ImageWrapper: {
    // justifyContent: 'space-between',
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