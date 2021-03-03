import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <div>
                <Avatar className="story__avatar" src={profileSrc} />
                <h4>{title}</h4>
            </div>

        </div>
    )
}

export default Story
