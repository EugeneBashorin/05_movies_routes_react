import styled from "styled-components";

export const StyledCastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(138px, 138px));
    grid-gap: 7px;
    justify-content: space-evenly;
    color: rgb(3, 37, 65);
`
export const StyledCastItem = styled.li`
    width: 100%;
    text-align: center;
    background-color: gold;
    box-shadow: 0px 0px 1px 1px rgba(255,214,0,1);
    padding-bottom: 4px;
`
export const StyledTitleCast = styled.h4`
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const StyledImageCastWrapper = styled.div`
    min-width: 120px;
    margin: 0 auto;
`
export const StyledCastImg = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`