import styled from "styled-components"

const StyledWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
`

const Container = ({ children }) => {
    return <StyledWrapper>
        {children}
    </StyledWrapper>
}

export default Container