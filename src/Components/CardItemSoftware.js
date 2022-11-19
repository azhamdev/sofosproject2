import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'


const CardItemSoftware = ({ image, title, price }) => {
  const [quantity, setQuantity] = useState(0)
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Tidak Bisa Kurang dari 0",
      "Tambah Kuantiti",
      [
        { text: "OK", onPress: () => addQuantity() }
      ]
    );
  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const minQuantity = () => {
    if (quantity < 1) {
      createTwoButtonAlert();
      setQuantity(0)
    } if (quantity >= 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <View style={styles.contentWrapper}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>Rp {price}</Text>
      <View style={styles.quantityWrapper}>
        <TouchableOpacity onPress={minQuantity}><Text style={{ fontSize: 30, fontWeight: '600' }}>-</Text></TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={addQuantity}><Text style={{ fontSize: 30, fontWeight: '600' }}>+</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default CardItemSoftware

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 150,
    borderRadius: 20,
    marginTop: 20,

  },
  title: {
    marginVertical: 10,
    fontWeight: '700',
    fontSize: 18,
  },
  price: {
    color: '#9E579D',
    fontSize: 16,
    fontWeight: '600'
  },
  quantityWrapper: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center'
  },
  image: {
    width: '90%',
    resizeMode: 'contain'
  }
})