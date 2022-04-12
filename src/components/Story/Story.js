import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from "styled-components";



const Story = ({ image, profileSrc, title, seen=false }) => {
    const Wrapper = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    min-width: 90px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 100ms ease-in;
    display: inline-block;

    padding: 10px 10px;
    margin: 0 10px;

    &:hover {
        transform: scale(1.07); // <Thing> when hovered
    }

    & h4{
        color: white;
    }

    & .story__avatar{
        border: 2px solid ${seen ? '#f1f2f5' : '#2E81F4'} ;
        position: unset;
        padding: 1px;

        img{
            border-radius:50%;
        }
    }

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
`;
    return (
        <Wrapper image={image} className="story">
            <div>
                <Avatar className="story__avatar" src={profileSrc} />
                <h4>{title}</h4>
            </div>
        </Wrapper>
    )
}

export default Story
