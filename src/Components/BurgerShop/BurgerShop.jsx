import '../../styles/burger.css'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])
const addToBurger = (ingredient) =>{
  setStack([...stack, ingredient])
}
const removeFromBurger = (target) => {
  let newStack= stack.filter(ingredient => ingredient.name !== target.name)
  setStack(newStack)
}
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList buttons={true} isList={true} addToBurger={addToBurger} ingredients={ingredients}/>
        <BurgerStack name="order" removeFromBurger={removeFromBurger} ingredients={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop