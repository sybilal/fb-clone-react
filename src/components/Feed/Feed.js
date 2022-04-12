import React from 'react'
import styled from 'styled-components'
import MessageSender from '../MessageSender/MessageSender'
import StoryReel from '../StoryReel/StoryReel'

const Feed = () => {

    const Wrapper = styled.div`
        flex: 1;
        padding: 30px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        min-width: 530px;
    `

    return (
        <Wrapper>
            <StoryReel />
            <MessageSender />
        </Wrapper>
    )
}

export default Feed
