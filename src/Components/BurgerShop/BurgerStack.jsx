import Ingredient from "./Ingredient"


const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.ingredients.length ?
          props.ingredients.map(ingredient => 
          <>
            <li>
              <Ingredient key={ingredient.id} ingredient={ingredient}/>
            </li>
          </>
        )
        :'add an ingredient'}

    </ul>
  )
}

export default BurgerStack