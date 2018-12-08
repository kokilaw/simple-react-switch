import React from 'react'
import styled, { css } from 'styled-components'
import { rem, rgba, darken } from 'polished'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import { HorizontalSwitch } from '../../lib'

const displayStyles = {
    height: '100%',
    fontFamily: 'Roboto, Arial',
    color: '#adafb6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f9ff',
}

const StyledProvider = styled(LiveProvider)`
    border-radius: ${rem(3)};
    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
    overflow: hidden;
    margin-bottom: ${rem(100)};
`

const LiveWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const column = css`
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;
    @media (max-width: 600px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
    }
`

const StyledEditor = styled(LiveEditor)`
    background: ${darken(0.05, '#282a36')};
    font-family: 'Source Code Pro', monospace;
    font-size: ${rem(14)};
    height: ${rem(550)};
    overflow: scroll;
    ${column}
`

const StyledPreview = styled(LivePreview)`
    position: relative;
    padding: 0.5rem;
    background: white;
    color: black;
    height: auto;
    overflow: hidden;
    ${column}
`

const StyledError = styled(LiveError)`
    display: block;
    padding: ${rem(8)};
    background: '#ff5555';
    color: '#f8f8f2';
`

const CodeEditor = ({ code }) => (
    <StyledProvider code={code} scope={{ HorizontalSwitch, displayStyles }}>
        <LiveWrapper>
            <StyledEditor />
            <StyledPreview />
        </LiveWrapper>
        <StyledError />
    </StyledProvider>
)

export default CodeEditor
