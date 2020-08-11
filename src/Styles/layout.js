import styled from 'styled-components'

export const LayoutWrapper = styled.div `
    padding: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    
`;

export const FooterWrapper = styled.footer `
    margin: 1rem 0;
    div {
        margin: .5rem 0;
        a {
            color: black;
            font-weight: bold;
            text-decoration: none;
            transition: opacity 250ms ease;
            &:hover, &:focus {
                opacity: 0.7;
            }
        }
    }
`;

// Grid container
export const GridContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    img {
        width: 100%;
    }
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5 rem;
        img {
            max-height: 250px;
            object-fit: cover;
        }
    }

`;

// Pull Quote
export const PullQuote = styled.div `
    padding: 4rem 0;
    text-align: center;
    blockquote {
        font-size: 2rem;
        margin: 2rem 0 1rem;
        line-height: 1.1em;
        letter-spacing: .8px;
        p {
            margin: 0;
        }
        @media screen and (min-width: 768px){
            font-size: 5rem;
            max-width: 800px;
            margin: 2rem auto 1rem;
        }
    }

    h6 {
        text-align: center;
        margin-top: 0;
        @media screen and (min-width: 768px){
            font-size: 1.4rem;
            font-weight: 500;
        }
    }
`;


export const Section = styled.section `
    margin: 3rem 0;
    @media screen and (min-width: 768px){
        // marin: 6rem 0;
        :first-child {
            // margin-top: 25%;
        }
    }
`;
