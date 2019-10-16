import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
const CardContainer = styled.li`
  img {
    width:calc(100% - 40px);
    border-radius:2px;
    align-self:center;
  }
  margin-left:20px;
  margin-bottom:20px;
  background:#ecf0f1;
  border-radius:2px;
  min-width:200px;
  display:flex;
  flex: 1 1;
  flex-flow:column;
  padding-top:20px;
`

const CardName = styled.h4`
  font-size:18px;
  margin:0;
  margin-bottom:20px;
  a {
    text-decoration:none;
    color:tomato;
  }
`

const CardContent = styled.div`
  padding:20px;
`

const CardInfo = styled.span`
  color:rgba(0,0,0,0.6);
  margin-bottom:10px;
  display:flex;
  align-items:flex-start;
  font-size:16px;
  font-weight:600;
`
const RepoCard = ({ repo }) => {
  const { avatar, name, stargazers_count, forks_count, open_issues_count, owner, html_url } = repo

  return (
    <CardContainer>
      <img src={owner.avatar_url} alt={`image for ${name}`}/>
      <CardContent>
       
        <CardName>
          <a href={html_url} rel='noopener' target='_blank'>{name}</a>
        </CardName>
        <CardInfo>
          <FaUser style={{ marginRight: 10 }} color='#34495e'/>{owner.login}
        </CardInfo>
        <CardInfo>
          <FaStar style={{ marginRight: 10 }} color='#f1c40f' />{stargazers_count.toLocaleString()} stars
        </CardInfo>
        <CardInfo>
          <FaCodeBranch style={{ marginRight: 10 }} color='#3498db' /> {forks_count.toLocaleString()} forks
        </CardInfo>
        <CardInfo>
          <FaExclamationTriangle style={{ marginRight: 10 }} color='#e74c3c' />{open_issues_count.toLocaleString()} open issues
        </CardInfo>
      </CardContent>
    </CardContainer>
  )
}

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoCard