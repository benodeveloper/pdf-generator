import { FormHelperText, Link, Menu, MenuItem } from '@material-ui/core'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const TEMPLATES = {
  asphalt: {
    display: 'Asphalt Repairs',
    body:
      'ASPHALT REPAIRS TO PARKING AREA\n\nSaw-cut and break-out designated areas of damaaged asphalt. Haul away debris.\nApply primer emultion (an adhesive for hot asphalt) to designated areas.\nApply hot, modified surface asphalt to designated areas. Compress hot asphalt with vibratory compactor.',
  },
  concreteWalks: {
    display: 'Concrete Walks',
    body:
      'NEW CONCRETE WALKS\n\nSaw-cut and break-out designated damaged sidwalks. Haul away debris.\nSet forms for new concrete walks.\nApply CA-6 stone to area and compact with vibratory compactor.\nApply approximately five inches of six bag mix concrete for new walks. Apply expansion joint.\nFinish and lightly broom new concrete.',
  },
  sealcoat: {
    display: 'Sealcoat',
    body: `SEALCOAT, STRIPING, AND PARKING LOT MAINTENANCE\n\nUsing a wire wheel, clean out all large cracks of debris.\nClean entire parking lot with blowers. Haul away all debris.\nApply silica sand to assist sealer in filling cracks and to create a coarse finish.\nApply sealcoat with fine, bristle Tampico brooms.\nRestripe parking lines and handicap with a fast dry IL SPEC yellow traffic paint.`,
  },
  sewers: {
    display: 'Sewers',
    body: `REBUILD DAMAGED CAVED-IN SEWER\n\nSaw-cut approximately 6'x6' area around sewer.\nBreak out asphalt and deteriorated bricks/blocks in catch basin sewer. Clean bottom of sewer.\nHaul away all debris.\nRebuild damaged sewer with catch basin concrete cone blocks, hydraulic cement, and mortar.\nAdjust height of sewer with concrete adjusting rings.\nInstall original cast iron frame and lid.\nReplace damaged clay pipe if necessary.\nBack fill area around sewer with new CA-6 stone and compact with a vibratory compactor.\nApply approximately three inches of hot surface ashphalt to area. Compact hot asphalt with vibratory compactor.`,
  },
}

function SelectTemplateMenu({ onChange }) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'selectTemplate',
  })

  function handleChange(key) {
    popupState.close()
    onChange(TEMPLATES[key].body)
  }

  return (
    <div>
      <FormHelperText>
        <Link component="button" {...bindTrigger(popupState)}>
          Select a template
        </Link>
      </FormHelperText>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {Object.keys(TEMPLATES).map((key) => (
          <MenuItem key={key} onClick={() => handleChange(key)}>
            {TEMPLATES[key].display}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default SelectTemplateMenu
