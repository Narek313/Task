import React from 'react'
import './DropdownProfile.css'

export default function DropdownProfile(props) {
    return (
        <>
            <ul className='dropdown-profile'>
                <li onClick={() => props.setDropdownProfile(false)}>Իմ հաշիվը</li>
                <li onClick={() => props.setDropdownProfile(false)}>Պատերներ</li>
                <li onClick={() => props.setDropdownProfile(false)}>Հավանումներ</li>
                <li onClick={() => props.setDropdownProfile(false)}>Դուրս գալ</li>
            </ul>
        </>
    )
}
