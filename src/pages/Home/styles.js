import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    
    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > div {
        display: flex;
        flex-direction: column;
    }

    > h1 {
        margin-bottom: 40px;
    }
`;

export const Form = styled.form`
    
`;