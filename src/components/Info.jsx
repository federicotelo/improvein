import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';

const Info = () => {

   const { data, id, albums } = useContext(GlobalContext)

   return (
      <div className="info ">
         <ul type="none">
            <li > {data[id].name} - [{data[id].genreCode}]  </li>
            <li > {data[id].year} - {data[id].country}</li>
            <li > --</li>
            <span>Members:</span>
            <ul>
               {
                  data[id].members.map(item => (
                     <li key={item.name}>{item.name}</li>
                  ))
               }
            </ul>
            <li > --</li>
            <span>Albums:</span>
            <ul>
               {
                  albums.filter(item => item.bandId === id + 1)
                     .map((item, i) =>
                        <li key={i} > {item.name} - {item.year}</li>
                     )
               }
            </ul>

         </ul>
      </div>
   )
}

export default Info
