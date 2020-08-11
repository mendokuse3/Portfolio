import styled from 'styled-components';

// H levels
export const HeaderOne = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
        text-align: right;
    }

`;

export const HeaderTwo = styled.h2 `
    font-size: ${props => props.larger ? '3rem' : '1.6rem'};
    text-align: ${props => props.align ? props.align : 'initial' };
    margin: 3rem 0;
    @media screen and (min-width: 768px) {
        font-size: ${props => props.larger ? '5rem' : '1.6rem'}
    }
`;

export const HeaderThree = styled.h3 `
    font-size: 1.2rem;
    margin-bottom: .5rem;
    @media screen and (min-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const SmallFlex = styled.small `
    display: flex;
    justify-content: space-evenly;
    > div {
        margin: 0 .5rem 0 0;
    }
`;

export const BannerImage = styled.div `
    h2 {
        margin: 0;
        text-align: center;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
    img {
        width: 100%;
        height: 50%;
        position: relative;
    }
    @media (min-width: 1000px){
        h2 {
            top: 50%;
        }
    }

    @media screen {
        h2 {
            font-size: 2rem;
            top: 20%;
        }
    }
`;

export const BodyText = styled.div `
    font-size: 1rem;
    line-height: 1.8em;
    @media screen and (min-width: 768px){
        font-size: 1.2rem;
        line-height: 2.1em;
        max-width: 800px;
        margin: 0 auto;
    }
`;

export const ContactForm = styled.div `
    margin-bottom: 5%;
    
    form {
        width: 85%; 
        border: 3px solid grey;
        border-radius: 5px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3%;

    }

    form input {
        width: 60%; 
    }

    textarea {
        resize: none;
        width: 100%;
        height: 100px;
    }

    input[type='submit'] {
        border: 1px solid black;
        width: 40%;
        margin-top: 2%;
        font: 400 13.3333px Arial;
        display: inline-block;
        height: 38px;
        padding: 0 30px;
        color: #555;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: .1rem;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #bbb;
        cursor: pointer;
        box-sizing: border-box;
    }

    input[type='submit']:hover {
        background-color: rgb(95, 97, 97);
        color: rgb(221, 223, 223);
    }

    input {
        margin-bottom: 1rem;
    }

    #tags {
        margin-bottom: 0;
    }

    h2 {
        text-align: center;
        font-size: 32px;
    }

    label {
        display: block;
        margin-bottom: .5rem;
        font-weight: 600;
    }

    input[type='text'], input[type='email'], #message {
        height: 38px;
        padding: 6px 10px;
        background-color: #fff;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box;
    }

    #message {
        resize: none;
        width: 70%;
        height: 100px;
    }

    @media (min-width: 1000px){
        form {
            // width: 900px;
        }
    }
`;
