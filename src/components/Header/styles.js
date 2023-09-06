import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;

    display: flex;
    justify-content: space-between;

    padding: 0 123px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > a {
        display: flex;
        align-items: center;
        font-size: 25px;
        color: ${({theme}) => theme.COLORS.TEXT};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;

        h3 {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.TEXT};
            display: flex;
            justify-content: flex-end;
        }

        strong {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.TEXT};
        }

        span {
            font-size: 14px;
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
        }
    }

`;