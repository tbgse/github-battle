import React from 'react'
import styled from 'styled-components'
import { getPopularRepos } from '../utils/api'
import PropTypes from 'prop-types'

const Container = styled.nav`
  display:flex;
  align-items:center;
`

const NavButton = styled.button`
  display:flex;
  border:none;
  background:transparent;
  font-size:16px;
  color:${props => props.active ? 'tomato' : 'black'};
  font-weight:600;
  cursor:pointer;
  :focus {
    outline:none;
  }
  :hover {
    color:${props => props.active ? 'tomato' : 'rgba(0,0,0,0.75)'};
  }
`

function LanguageNav ({ selectedLanguage, onUpdateLanguage}) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

  const MenuItems = languages.map(lang => <NavButton key={lang} onClick={() => onUpdateLanguage(lang)} active={selectedLanguage === lang}>{lang}</NavButton>)

  return (
    <Container>
      {MenuItems}
    </Container>
  )
}

LanguageNav.propTypes= {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render () {
    const { selectedLanguage } = this.state
    return (
    <React.Fragment>
      <LanguageNav selectedLanguage={selectedLanguage} onUpdateLanguage={this.updateLanguage}/>
    </React.Fragment>
    )
  }
}