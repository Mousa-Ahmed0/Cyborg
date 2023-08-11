import './SectionWrapper.css'
import React from 'react'

const SectionWrapper = (props) => {
  return (
    <div className="most-popular-items">
        {props.children}
    </div>
  )
}

export default SectionWrapper