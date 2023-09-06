import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    margin-bottom: 8px;
    border-radius: 10px;

    > h2 {
        font-size: 15px;
        margin-left: 10px;
        color: red;
    }


    > input {
        height: 56px;
        width: 100%;
        padding: 15px;
        color: ${({theme}) => theme.COLORS.TEXT};
        

        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }


    svg {
        margin-left: 16px;
    }

`;