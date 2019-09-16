import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import styled from 'styled-components'

const Layout = styled.main`
  max-width:1000px;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-flow:column;
  padding-top:40px;
`
class App extends React.Component {
  render () {
    return (
      <Layout>
        <Popular/>
      </Layout>
    )
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
