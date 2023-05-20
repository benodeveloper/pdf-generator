import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    borderTop: '1px double #666',
    marginTop: 24,
    paddingTop: 24,
  },
  bold: {
    fontSize: 11,
  },
  body: {
    borderLeft: '1px solid #aaa',
    lineHeight: 1.8,
    marginLeft: 4,
    marginTop: 8,
    paddingLeft: 8,
  },
})

function Body({ formType, body, jobLocation }) {
  const text =
    formType === 'proposal'
      ? 'We propose hereby to furnish labor, material, equipment, and insuranace necessary for the completion of:'
      : 'Specifications for Work Completed'

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Job Location: {jobLocation}</Text>
      <Text style={styles.bold}>{text}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}

export default Body
