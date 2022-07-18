import styled from "styled-components"

type LeadType = {
  small: boolean
}

const Lead = styled.h1<LeadType>`
  font-family: 'Flamenco', cursive;
  text-align: center;
  margin: 50px;
  font-size: 30px;
  ${props => {
    if(props.small){
      return `
        margin-top: -30px;
        font-size: 20px;
      `
    }
  }}
`

export default Lead