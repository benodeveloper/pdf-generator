import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { ToWords } from 'to-words'

const styles = StyleSheet.create({
  container: {
    borderTop: '1px solid #999',
    fontSize: 10,
    marginTop: 16,
    paddingTop: 16,
  },
  amount: {
    borderLeft: '1px solid #aaa',
    fontSize: 12,
    marginLeft: 4,
    marginTop: 8,
    paddingLeft: 8,
  },
  signature: {
    marginTop: 24,
  },
})

function Amount({ amount, formType }) {
  const amountInWords = new ToWords({
    localeCode: 'en-US',
    converterOptions: {
      currency: true,
    },
  })
    .convert(amount || 0)
    .replace(' Only', '')

  const currency = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(amount)

  const text =
    formType === 'proposal'
      ? 'WE PROPOSE: to complete in accordance with the above specifications, for the sum of:'
      : 'Payment to be made, in accordance with the above specifications, in the sum of:'

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <View style={styles.amount}>
        <Text>
          {amountInWords} ({currency})
        </Text>
      </View>
      <Text style={styles.signature}>
        Authorized Signature:
        _____________________________________________________________________________
      </Text>
    </View>
  )
}

export default Amount
