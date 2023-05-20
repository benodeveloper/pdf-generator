import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { useFormik } from 'formik'
import { Button } from '@material-ui/core'
import { DateTime } from 'luxon'

import './styles.css'

import GridColumn from './components/GridColumn'
import Pdf from './pdf/Pdf.js'
import TextField from './components/TextField'
import Select from './components/Select'
import SelectTemplateMenu from './app/SelectTemplateMenu'

export default function App() {
  const [ready, setReady] = useState(false)

  const formik = useFormik({
    initialValues: {
      formType: 'invoice',
      date: DateTime.now().toISODate(),
      to: '',
      address: '',
      phone: '',
      jobLocation: '',
      amount: '',
      body: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  const handleChange = (evt) => {
    setReady(false)
    formik.handleChange(evt)
  }

  const handleTemplateChange = (body) => {
    formik.setFieldValue('body', body)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
        height: '100%',
      }}
    >
      <div style={{ padding: '24px' }}>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            // onChange={console.log(JSON.stringify(formik.values, null, 2))}
          >
            <GridColumn>
              <Select
                label="Form Type"
                name="formType"
                onChange={handleChange}
                options={[
                  { text: 'Invoice', value: 'invoice' },
                  { text: 'Proposal', value: 'proposal' },
                ]}
                value={formik.values.formType}
              />
              <TextField
                label="Date"
                name="date"
                onChange={handleChange}
                shrinkLabel
                type="date"
                value={formik.values.date}
              />
              <TextField
                label="To"
                name="to"
                onChange={handleChange}
                value={formik.values.to}
              />
              <TextField
                label="Client Address"
                multiline
                name="address"
                onChange={handleChange}
                rows={3}
                value={formik.values.address}
              />
              <TextField
                label="Client Phone"
                name="phone"
                onChange={handleChange}
                value={formik.values.phone}
              />
              <TextField
                label="Job Location"
                name="jobLocation"
                onChange={handleChange}
                value={formik.values.jobLocation}
              />
              <TextField
                label="Amount"
                name="amount"
                onChange={handleChange}
                type="number"
                start="$"
                step={1}
                value={formik.values.amount}
              />
              <TextField
                helper={
                  <SelectTemplateMenu
                    onChange={(value) => handleTemplateChange(value)}
                  />
                }
                label="Body"
                multiline
                name="body"
                onChange={handleChange}
                value={formik.values.body}
              />
              {!ready && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setReady(true)}
                >
                  Prepare PDF
                </Button>
              )}
              {ready && (
                <PDFDownloadLink
                  document={<Pdf {...formik.values} />}
                  fileName={`ajpaving-invoice-${formik.values.date}.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                  }
                </PDFDownloadLink>
              )}
            </GridColumn>
          </form>
        </div>
      </div>
      <div>
        <PDFViewer
          style={{
            width: '100%',
            border: 0,
            height: '100%',
          }}
        >
          <Pdf {...formik.values} />
        </PDFViewer>
      </div>
    </div>
  )
}
