import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryReel from '../StoryReel/StoryReel'
import './Feed.css'
const Feed = () => {
    return (
        <div className="feed">

            <div className="start"></div>
            <StoryReel />
            <div className="end"></div>
            <MessageSender />
        </div>
    )
}

export default Feed
