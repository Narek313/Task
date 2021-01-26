import React from 'react'
import './Button.css'

export default function Button(props) {

    const type = props.type
    const cls = props.cls

    return (
        <div>
            <button className={ `btn btn-${type} btn-${cls}`}>
                {props.text}
            </button>
        </div>
    )
}
