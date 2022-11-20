import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Product from '../../assets/images/1.png'
import ButtonCart from '../Components/ButtonCart'

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Product} style={styles.images} />
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.title}>
            Robot AGV KAIBO
          </Text>
          <Text style={styles.price}>
            Rp. 5000.000
          </Text>
          <Text style={styles.detail}>
            Robot AGV KAIBO mampu berjalan pada jalur yang sudah ditentukan, dan memiliki daya angkut hingga 300 kg. Robot ini didesain untuk membawa dan memindahkan barang dalam suatu proses produksi di pabrik.
          </Text>
        </View>
        <ButtonCart onPress={() => navigation.navigate("Cart")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    width: '80%',
  },
  wrapper: {
    backgroundColor: 'white',
    paddingTop: 40,
    flex: 1
  },
  details: {
    backgroundColor: "#9E579D",
    padding: 30,
    flex: 1,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between"
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  price: {
    color: 'white',
    fontSize: 17,
    marginBottom: 20,
  },
  detail: {
    lineHeight: 20,
    color: 'white',
    textAlign: 'justify'
  },
  buttonCart: {
    backgroundColor: 'white',
    width: 180,
    padding: 20,
    borderRadius: 50,

  },
  textButton: {
    color: '#9E579D',
    textAlign: "center",
    fontSize: 18,
    fontWeight: '600'
  }
})