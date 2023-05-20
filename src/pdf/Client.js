import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  bold: {
    // fontFamily: 'Arial',
    fontWeight: 'bold',
  },
})

function Client({ address, phone, to }) {
  return (
    <View>
      <Text style={styles.bold}>Submitted To:</Text>
      <Text>{to}</Text>
      <Text>{address}</Text>
      <Text>{phone}</Text>
    </View>
  )
}

export default Client
