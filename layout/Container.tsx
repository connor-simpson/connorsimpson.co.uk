import styled from "styled-components"

const StyledWrapper = styled.div`
    margin: 20px;
    overflow-x: hidden;

    @media (min-width: 768px) { 
        width: 700px;
        margin: 0 auto;
    }

    @media (min-width: 1200px) {
        width: 1000px;
        margin: 0 auto;
    }

`

const Container: React.FC = ({ children }) => {
    return <StyledWrapper>
        {children}
    </StyledWrapper>
}

export default Container