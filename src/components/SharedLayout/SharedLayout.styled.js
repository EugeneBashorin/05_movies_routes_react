import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import {device} from '../device'

export const NavMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5em;

    height: 60px;
    padding: 0 40px;
    background-color: rgb(3,37,65);
    font-size: 25px;

    @media ${device.mobileL}{
        justify-content: flex-start;
    }
    @media ${device.tablet}{
        justify-content: flex-start;
    }
    @media ${device.laptop}{
        justify-content: flex-start;
    }
`
export const StyledLink  = styled(NavLink)`
    color: white;
    padding:5px;
    box-shadow: rgb(255 214 0) 0px 0px 2px 2px;
`

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 15px;
    min-height: 100px;
    max-height: 200px;
    font-size: 1.15em;
    font-weight: 300;  

    background-color: gold;
    background-size: cover;
    background-repeat: no-repeat;
    color: rgb(3, 37, 65);
    line-height: 1;

    @media ${device.mobileL}{
        font-size: 1.3em;
    }
    @media ${device.tablet}{
        padding: 20px 40px;
        min-height: 130px;
        max-height: 300px;
        font-size: 1.75em;
        font-weight: 600;
    }
    @media ${device.laptop}{
        padding: 30px 40px;
        min-height: 150px;
        max-height: 300px;
        font-size: 2em;
        font-weight: 800;
    }
`
/*
 mobileS: "320px",//<=//padding 10/15
  mobileL: "425px"
 tablet: "768px",//<=//padding 10/15
 laptopL: "1024px",//<=//padding 30/40
*/