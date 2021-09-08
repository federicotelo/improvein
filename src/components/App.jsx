import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { GlobalContext } from '../context/Context';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import List from './List';
import Header from './Header';
import Inicio from './Inicio';



function App() {

   const [isLoged, setIsLoged] = useState(false)
   const [data, setData] = useState([])
   const [albums, setAlbums] = useState([])
   const [id, setId] = useState(0)
   const [gender, setGender] = useState("all")

   useEffect(() => {
      getData()
      // eslint-disable-next-line
   }, [])

   const getData = async () => {
      const datos = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
      const datos2 = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/albums')
      setData(datos.data)
      setAlbums(datos2.data)

   }
   console.log(data)
   console.log(albums)

   return (
      <GlobalContext.Provider value={{ isLoged, setIsLoged, data, setData, id, setId, gender, setGender, albums }}>
         <Router>
            <Header />
            {
               isLoged ?
                  <Switch>
                     <Route exact path="/" component={Inicio} />
                     <Route exact path="/list" component={List} />
                     <Redirect to="/" />
                  </Switch>
                  :
                  <Inicio />
            }
         </Router>
      </GlobalContext.Provider>
   )
}

export default App;
