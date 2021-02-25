import React from 'react'
import './SidebarRow.css';

const SidebarRow = ({ title, Icon }) => {
    return (
        <div className="sidebar-row">
            {<Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
