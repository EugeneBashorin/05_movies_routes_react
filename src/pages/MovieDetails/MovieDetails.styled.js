import styled from "styled-components";
import { NavLink  } from "react-router-dom";

export const MovieDetailsWrapper = styled.div`
    background-color: rgb(3,37,65);
    color: white;
    padding: 15px;
    line-height: 1.4;
`
export const StyledLink = styled(NavLink)`
    display: inline-flex;
    gap: 5px;
    align-items: center;
    padding:0px 12px;
    margin-bottom: 15px;

    font-size: 18px;
    font-weight: 600; 
    color: rgb(3,37,65);
    background-color: gold;
    border-radius: 15px;
    box-shadow: rgb(255 214 0) 0px 0px 2px 2px;
`
export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;   
    gap: 20px;
`
export const StyledAddInfoWrapper = styled.div`
    margin-top: 5px;
    margin-bottom:20px;
`
export const InfoStyledLink = styled(NavLink)`
    display: inline-block;
    padding:0px 12px;
    margin-top: 10px;
    margin-right: 15px;

    font-size: 18px;
    font-weight: 600; 
    color: rgb(3,37,65);
    background-color: gold;
    border-radius: 10px;
    box-shadow: rgb(255 214 0) 0px 0px 2px 2px;
`
/*
 mobileS: "320px",//<=//padding 10/15
  mobileL: "425px"
 tablet: "768px",//<=//padding 10/15
 laptopL: "1024px",//<=//padding 30/40
*/