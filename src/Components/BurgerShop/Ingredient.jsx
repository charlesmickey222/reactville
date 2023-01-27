
const Ingredient = (props) => {
	return (
		<li>
			{props.ingredient.name}
			<button onClick={props.handleAddIngredient}>+</button>
			<button>X</button>
		</li>
	)
}

export default Ingredient