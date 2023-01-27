import Ingredient from './Ingredient'

const IngredientList = (props) => {

	return (
		<ul>
			{props.ingredients.map((ingredient, idx)=>
				<Ingredient key={idx} handleAddIngredient={props.handleAddIngredient} ingredient={ingredient}/>
			)}
		</ul>
	)
}

export default IngredientList