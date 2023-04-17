export const CustomInput = props => {
	const handlerChange = (e) => {
		props.onChange(e.target.value)
	}
	
	return (
		<input
			value={props.value}
			placeholder={'Please fill in the phone'}
			onChange={e => handlerChange(e)}
			type='text'
		></input>
	)
}
