import { useState } from 'react'
import { useDeleteRecords } from '../hooks/useDeleteRecords'
import { useEditRecords } from '../hooks/useEditRecords'
import { PhoneCard } from './PhoneCard'

export const Record = props => {
	const { delRecord  } = useDeleteRecords()
	const [change, setChange] = useState(true)
	const [value, setValue] = useState('')
	const { editRecord } = useEditRecords()

	const deleteHandler = index => {
		delRecord(index)
	}
	

	// *******
	const editRecordHandler = index => {
		if (change) {
			setChange(false)
		} else {
			setChange(true)
			editRecord(index, {
				name: value,
			})
		}
	}

	// *******

	const setValueHandler = e => {
		setValue(e.target.value)
	}

	return (
		<div className='record-items'>
			{change ? (
				<PhoneCard
					change={change}
					key={props.index}
					name={props.name}
					phone={props.phone}
					surname={props.surname}
				></PhoneCard>
			) : (
				<input onChange={e => setValueHandler(e)}></input>
			)}
			<div className='btns'>
				<button onClick={() => deleteHandler(props.index)}>Delete</button>
				<button onClick={() => editRecordHandler(props.index)}>
					{change ? 'Edit' : 'Save'}
				</button>
			</div>
		</div>
	)
}
