import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { DateTime } from 'luxon'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    paddingBottom: 16,
  },
  h1: {
    fontSize: 24,
    fonttWeight: 600,
  },
  h2: {
    fontSize: 20,
  },
  left: {
    flex: 1,
  },
  right: {
    // textAlign: 'right',
  },
})

function Header({ date, formTypeName }) {
  const formattedDate =
    date && DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.h1}>A & J Paving, Inc.</Text>
        <Text>1911 N Sayre Ave</Text>
        <Text>Chicago, IL 60707</Text>
        <Text>(773) 889-9133</Text>
        <Text>coccoaj@gmail.com</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.h2}>{formTypeName}</Text>
        <Text>{formattedDate}</Text>
      </View>
    </View>
  )
}

export default Header
