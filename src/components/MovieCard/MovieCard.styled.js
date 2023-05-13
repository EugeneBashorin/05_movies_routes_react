import styled from "styled-components";
import {device} from '../device';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    
    @media ${device.mobileL}{
        flex-direction: row;
    }
    @media ${device.tablet}{
        flex-direction: row;
    }
    @media ${device.laptop}{
        flex-direction: row;
    }
    
`
export const ImageWrapper = styled.div`
    min-width: 200px;
    // width: 300px;
    margin: 0 auto;
    // background-color: red;
    box-shadow: 0px 0px 1px 1px rgba(255,214,0,1);

    @media ${device.mobileL}{//425
        width: 210px;
    }
    @media ${device.tablet}{//768
        width: 350px;
    }
    @media ${device.laptop}{//1024
        // width: 400px;
    }
`
export const PosterImg = styled.img`
    display: block;
    max-width: 100%;
    height: 100%;
    border-width: 0px;
    outline: none;
`
export const DescriptionWrapper = styled.div`
    display: inline-block;
    box-shadow: 0px 0px 1px 1px rgba(255,214,0,1);
    padding: 5px;
`

/*
mobileS: "320px",//<=//padding 10/15
mobileL: "425px"
tablet: "768px",//<=//padding 10/15
laptopL: "1024px",//<=//padding 30/40
*/