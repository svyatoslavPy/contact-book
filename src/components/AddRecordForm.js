import { useAddRecords } from '../hooks/useAddRecords'


export const AddRecordForm = () => {
	const { addRecord, data, loading, error } = useAddRecords()

	const addRecordHandler = () => {
		addRecord({
			name: 'svyatoslav',
			surname: 'georgiyev',
			phone: '+380730000000',
		})
	}

	return (
		<>
			<button onClick={addRecordHandler}>Add record</button>
		</>
	)
}
