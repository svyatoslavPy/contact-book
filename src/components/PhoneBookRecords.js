import { useFetchRecords } from '../hooks/useFetchRecords'
import { RecordList } from './RecordList'
import { AddRecordForm } from './AddRecordForm'
import { LoginOut } from './Logout'

export const PhoneBookRecords = () => {
	const { data, loading, error } = useFetchRecords()

	if (error) {
		return <h1 style={{ color: 'red' }}>We have a problem</h1>
	}

	return (
		<div className='phone-wrapper'>
			<div className='phone'>
				<AddRecordForm />
				<>{loading ? <p>loading...</p> : <RecordList recordList={data} />}</>
			</div>
			{!loading && <LoginOut />}
		</div>
	)
}
