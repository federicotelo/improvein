import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';

import Select from './Select.jsx';

const Header = () => {

   const { isLoged, setIsLoged } = useContext(GlobalContext)

   return (

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
         <div className="container-fluid">
            <h2 className="navbar-brand"><i>Rock & Roll </i></h2>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
               <div className="navbar-nav d-flex justify-content-center">

                  {
                     isLoged && <Select />

                  }
                  {
                     isLoged && <span className="nav-item nav-link logout" onClick={() => setIsLoged(false)}>LogOut</span>

                  }


               </div>
            </div>
         </div>
      </nav>








   )
}

export default Header
