import {device} from '../device'
import styled from 'styled-components'

// export const ContainerWrapper = styled.div`
//     max-width: 1280px;
//     padding: 5px;
//     margin-left: auto;
//     margin-right:auto;
// `
export const Title = styled.h3`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    color: black;
`
export const MoviesListUl = styled.ul`
    max-width: 1280px;
    display: grid;
    @media ${device.mobileS}{
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.tablet}{
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${device.laptop}{
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(5, 1fr);
    }
    grid-gap: 1vw;
`
export const MovieItemLi = styled.li`
    width: 100%;
    text-align: center;
    background-color: gold;
    border-radius: 20px;
`
export const Image = styled.img `
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
`