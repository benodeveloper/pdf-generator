import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    borderTop: '1px solid #999',
    fontSize: 10,
    marginTop: 16,
    paddingTop: 16,
  },
  signature: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
  },
})

function ProposalSignature() {
  return (
    <View style={styles.container}>
      <Text>
        ACCEPTANCE OF PROPOSAL: The above specifications and prices are
        satisfactory and are hereby accepted. We also agree that payment will be
        made upon completion of job.
      </Text>
      <View style={styles.signature}>
        <Text>Date: _______________________________</Text>
        <Text style={{ paddingLeft: 16 }}>
          Signature: _______________________________________________
        </Text>
      </View>
    </View>
  )
}

export default ProposalSignature
