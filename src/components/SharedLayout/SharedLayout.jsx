import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () =>{

    return(
      <>
        <header>  
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
          </nav>
        </header>
        <Suspense fallback={<div>Load page ...</div>}>
            <Outlet/>
        </Suspense>
      </>
    )
}

export default SharedLayout;