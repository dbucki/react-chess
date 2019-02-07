import React from 'react'
import PropTypes from 'prop-types'
import css from './Sheet.css'

const Sheet = ({ sheet }) => {
  const len = sheet.length

  return (
    <ul className={css.sheet}>
      {sheet.map((item, idx) => {
        const { white, black } = item
        const key = `${idx}-${white}-${black}`

        return (
          <li key={key} className="l-flex-row">
            <span className={css.sheetIndex}>{len - idx}</span>
            <span className={css.sheetWhite}>{white}</span>
            <span className={css.sheetBlack}>{black}</span>
          </li>
        )
      })}
    </ul>
  )
}

Sheet.propTypes = {
  sheet: PropTypes.array
}

Sheet.defaultProps = {
  sheet: []
}

export default Sheet
