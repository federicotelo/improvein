import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

const Select = () => {

   const { setGender, setId, id } = useContext(GlobalContext)

   const handleClick = (e) => {
      setGender(e.target.value)
      setId(id)
   }

   return (


      <select name="genero" id="genero" className="form-select form-select-sm" aria-label=".form-select-sm example"
         onChange={handleClick}
      >
         <option value="all">All</option>
         <option value="hard-rock">Hard-Rock</option>
         <option value="rock-roll">Rock & Roll</option>
         <option value="power-metal">Power-Metal</option>
         <option value="heavy-metal">Heavy-Metal</option>
         <option value="black-metal">Black-Metal</option>
         <option value="goth-metal">Goth-Metal</option>
         <option value="rock">Rock</option>
         <option value="grunge">Grunge</option>
         <option value="progressive-metal">Progressive-Metal</option>
      </select>


   )
}

export default Select
