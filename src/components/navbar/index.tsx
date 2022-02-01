import React, { ReactElement } from 'react'
import Icon from '../icon'

export default function Navbar(): ReactElement {
    return (
        <div className="navbar">
            <div>
                <img className="navbar__logo" src="./assets/images/logo.png" />
            </div>
            <div>
                <Icon icon="profile" size="large" />
            </div>
        </div>
    )
}
