import React from 'react'
import styled from 'styled-components';

const SidebarRow = ({ title, Icon }) => {

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;

        &:hover{
            background-color: lightgray;
            border-radius: 10px;
        }

        &>h4 {
            margin: 0 20px;
            font-weight: 600;
        }

    &>.MuiSvgIcon-root {
        color: #2e81f4;
    }
    `;


    return (
        <Wrapper>
            {<Icon />}
            <h4>{title}</h4>
        </Wrapper>
    )
}

export default SidebarRow
