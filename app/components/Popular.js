import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  display:flex;
  align-items:center;
`

const NavButton = styled.button`
  display:flex;
  border:none;
  background:transparent;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  :hover {
    color:Rgba(0,0,0,0.75);
  }
`
export default class Popular extends React.Component {
  render () {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

    const MenuItems = languages.map(lang => <NavButton key={lang}>{lang}</NavButton>)

    return (
      <Container>
        {MenuItems}
      </Container>
    )
  }
}