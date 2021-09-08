import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';

import Info from './Info';

const List = () => {

   const { data, gender, setId } = useContext(GlobalContext)

   return (
      <div className="row">
         <div className="col-4">
            < ul className="m-4" >
               {
                  gender === "all" ?
                     data.map(item => (
                        <li key={item.id}
                           onClick={() => setId(item.id - 1)}
                           className="lista"
                        >{item.name}</li>
                     ))
                     :
                     data.filter(item => item.genreCode === gender)
                        .map(item =>
                           <li key={item.id}
                              onClick={() => setId(item.id - 1)}
                              className="lista"
                           >
                              {item.name}
                           </li>

                        )



               }
            </ul >

         </div>
         <div className="col-8">
            <Info />
         </div>

      </div>



   )
}

export default List
