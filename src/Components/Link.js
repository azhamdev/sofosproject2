import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Edit from '../../assets/images/fi_edit.png'

const Link = ({ navigation, title, image }) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, borderBottomWidth: 1, paddingBottom: 15 }}>
          <Image source={image} style={{ height: 30, resizeMode: 'contain' }} />
          <Text style={{ color: '#9E579D', fontWeight: '600', fontSize: 20, marginLeft: 20 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({})