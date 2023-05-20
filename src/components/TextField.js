import shortId from 'shortid'
import {
  FormControl,
  InputAdornment,
  TextField as MaterialTextField,
} from '@material-ui/core'

import useDebouncedChange from '../utils/useDebouncedChange'

function TextField({
  debounce = 750,
  end,
  helper,
  id,
  onChange,
  shrinkLabel,
  start,
  value,
  ...props
}) {
  const [debouncedValue, handleChangeDebounced] = useDebouncedChange(
    debounce,
    value,
    onChange,
  )

  const inputId = id || shortId.generate()

  return (
    <FormControl variant="outlined">
      <MaterialTextField
        id={inputId}
        onChange={handleChangeDebounced}
        size="small"
        value={debouncedValue}
        variant="outlined"
        InputLabelProps={{
          shrink: shrinkLabel,
        }}
        InputProps={{
          ...(start && {
            startAdornment: (
              <InputAdornment position="start">{start}</InputAdornment>
            ),
          }),
          ...(end && {
            endAdornment: <InputAdornment position="end">{end}</InputAdornment>,
          }),
        }}
        {...props}
      />
      {helper}
    </FormControl>
  )
}

export default TextField
