import React from 'react'
import './styles.css'

const Institutional = ({title, link}) => (
 <a href={link} className="institucional" >{title}</a>
)

export default Institutional