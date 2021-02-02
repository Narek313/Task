import React from 'react'
import './DropdownLanguage.css'

export default function DropdownLanguage(props) {
    return (
        <>
            <ul className='dropdown-language'>
                <li onClick={() => props.setDropdownLanguage(false)}>Ռուս</li>
                <li onClick={() => props.setDropdownLanguage(false)}>Անգ</li>
            </ul>
        </>
    )
}
