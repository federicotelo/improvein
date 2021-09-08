import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router';
import { GlobalContext } from '../context/Context';


const Inicio = () => {

   const { isLoged, setIsLoged } = useContext(GlobalContext)

   const [user, setUser] = useState("")
   const [pass, setPass] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
      console.log(pass)
      if (user === "root" && pass === "root") {
         setIsLoged(true)
         console.log("pass ok !!!")
      } else {
         alert("Login Incorrecto, prueba con -- [ User: root ] -- [ Pass: root ] --")
      }
      e.target.reset()
   }

   return (

      <div className="bg-primary" id="inicio">
         <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className="user-box">
                  <input type="text" name="" required="" onChange={(e) => setUser(e.target.value)} />
                  <label>Username</label>
               </div>
               <div className="user-box">
                  <input type="password" name="" required="" onChange={(e) => setPass(e.target.value)} />
                  <label>Password</label>
               </div>
               <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
               </button>
            </form>
         </div>
         {isLoged && <Redirect to="/list" />}
      </div>

   )
}

export default Inicio
