import '../../styles/burger.css'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])
const handleAddIngredient = (evt) =>{
  evt.preventDefault()
  setStack(...stack, evt.target.value)
}

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList buttons={true} handleAddIngredient={handleAddIngredient} ingredients={ingredients}/>
        <BurgerStack name="order"  ingredients={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop