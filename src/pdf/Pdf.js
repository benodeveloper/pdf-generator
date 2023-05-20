import { Document, Font, Page, StyleSheet, View } from '@react-pdf/renderer'

import Amount from './Amount'
import Body from './Body'
import Client from './Client'
import Footer from './Footer'
import Header from './Header'
import ProposalSignature from './ProposalSignature'

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    fontFamiy: 'Source Sans',
    fontSize: 12,
    lineHeight: 1.4,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 32,
    height: '100vh',
  },
  top: {
    flex: 1,
  },
  h1: {
    fontSize: 32,
    marginBottom: 16,
  },
})

Font.register({
  family: 'Source Sans',
  src: '/fonts/SourceSansPro-Regular.otf',
})

Font.register({
  src: `/fonts/SourceSansPro-Bold.otf`,
  family: 'Source Sans',
  fontWeight: 'bold',
})

Font.register({
  src: `/fonts/SourceSansPro-It.otf`,
  family: 'Source Sans',
  fontStyle: 'italic',
})

function Invoice(data) {
  const { body, formType, date, to, address, jobLocation, phone, amount } = data

  const formTypeName = formType === 'proposal' ? 'Proposal' : 'Invoice'

  return (
    <Document>
      <Page style={styles.body} wrap>
        <View style={styles.top}>
          <Header date={date} formTypeName={formTypeName} />
          <Client to={to} phone={phone} address={address} />
          <Body formType={formType} body={body} jobLocation={jobLocation} />
        </View>
        <View style={styles.bottom}>
          <Amount amount={amount} formType={formType} />
          {formType === 'proposal' && <ProposalSignature />}
          <Footer />
        </View>
      </Page>
    </Document>
  )
}

export default Invoice
