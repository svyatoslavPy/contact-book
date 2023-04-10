export const PhoneCard = props => {
	return (
		<div className="phone-card">
			<p>{props.phone}</p>
			<p>{props.name}</p>
			<p>{props.surname}</p>
		</div>
	)
}
