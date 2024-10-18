import {Link} from "react-router-dom";
import {styled} from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    top: 0;
    left: 0;
    display:block;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title>React Introduction</Title>
            <nav style={{margin: "auto"}}>
                <Link to="/" style={{padding: "0.5rem", margin:"0.25rem"}}>Home</Link>
                <Link to="/about" style={{padding: "0.5rem", margin:"0.25rem"}}>About Page</Link>
            </nav>

        </StyledHeader>
    )

}