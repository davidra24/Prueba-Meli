import React from 'react'
import '../styles/tooltip.scss'

/**
 * 
 * @param {ReactComponent} children Hijo que va a tener la información de tooltip
 * @param {String} text Información que se mostrará en el tooltip
 * @returns Tooltip para indicar cualquier información de un elemento de forma visual
 */
export const Tooltip = ({children, text}) => (
    <div className='tooltip'>
        {children}
        <span className='tooltiptext'>{text}</span>
    </div>
)