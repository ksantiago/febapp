import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: ${({ cName }) => (cName === 'show' ? 'block' : 'none')};
`

const ShowAndHide = () => {
  const [count, setCount] = useState(1)
  const [show, setShow] = useState(false)

  const [cName, setCName] = useState('hide')

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  const showHideClickHandler = () => {
    if (cName === 'show') {
      setCName('hide')
    }
    if (cName === 'hide') {
      setCName('show')
    }
  }

  return (
    <>
      <button onClick={showHideClickHandler}>SHOW ME THE TEXT</button>
      <StyledDiv cName={cName}>
        hello there this should not show by default
      </StyledDiv>
    </>
  )
}

export default ShowAndHide
