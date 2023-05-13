import {device} from '../device'
import styled from 'styled-components'

export const Title = styled.h3`   
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    color: black;
`
export const MoviesListUl = styled.ul`
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5vw;

    @media ${device.mobileL}{
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.5vw;
    }
    @media ${device.tablet}{
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5vw;
    }
    @media ${device.laptop}{
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1.2vw;
    }
`
/*
 mobileS: "320px",//<=//padding 10/15
  mobileL: "425px"
 tablet: "768px",//<=//padding 10/15
 laptopL: "1024px",//<=//padding 30/40
*/