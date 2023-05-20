import shortId from 'shortid'

import {
  FormControl,
  InputLabel,
  Select as MaterialSelect,
} from '@material-ui/core'

function Select({ id, label, options, ...props }) {
  const inputId = id || shortId.generate()

  return (
    <FormControl margin="dense" variant="outlined">
      <InputLabel shrink htmlFor={inputId}>
        {label}
      </InputLabel>
      <MaterialSelect
        id={inputId}
        native
        size="small"
        variant="outlined"
        label={label}
        {...props}
      >
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </MaterialSelect>
    </FormControl>
  )
}

export default Select
