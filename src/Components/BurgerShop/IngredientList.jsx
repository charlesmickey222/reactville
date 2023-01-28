import Ingredient from './Ingredient'

const IngredientList = (props) => {

	return (
		<ul>
			{props.ingredients.map((ingredient, idx)=>
				<Ingredient key={idx} isList={props.isList}  addToBurger={props.addToBurger} ingredient={ingredient}/>
			)}
		</ul>
	)
}

export default IngredientList