import { css } from '@emotion/css'

function GridColumn({ children, gap = '24px' }) {
  const styles = css`
    display: grid;
    gap: ${gap};
  `

  return <div className={styles}>{children}</div>
}

export default GridColumn
