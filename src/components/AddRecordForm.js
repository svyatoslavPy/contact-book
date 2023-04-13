import { useAddRecords } from '../hooks/useAddRecords'


export const AddRecordForm = () => {
	const { addRecord  } = useAddRecords()

	const addRecordHandler = () => {
		addRecord({
			name: 'svyatoslav',
			surname: 'georgiyev',
			phone: '+380730000000',
		})
	}

	return (
		<div className='btns-add'>
			<p>Demo</p>
			<button className='btns-add__item' onClick={addRecordHandler}>Add record</button>
		</div>
	)
}
