import { Outlet } from "react-router-dom";//, NavLink
import { Suspense } from "react";
import Loader from "components/Loader";
import {NavMenu, StyledLink, Banner } from "./SharedLayout.styled";

const SharedLayout = () =>{

    return(
      <>
        <header>  
            <NavMenu>
                <StyledLink  to="/">Home</StyledLink >
                <StyledLink  to="/movies">Movies</StyledLink >
            </NavMenu>          
        </header>
        <Banner>
              <h2>Welcome!</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </Banner>
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
      </>
    )
}

export default SharedLayout;