import {styled} from 'styled-components';

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`;

export default function AboutPage() {
    return (
        <AboutContentDiv>
            <h1>I am a CS391 Student</h1>
            <p>I love making fun React components</p>
        </AboutContentDiv>
    )

}