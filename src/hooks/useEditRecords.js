import { useState } from 'react'
import axios from 'axios'
import { useFetchRecords } from './useFetchRecords'
export const useEditRecords = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error ] = useState(undefined)
 const { fetchData } = useFetchRecords()
 
	const editRecord = (id, res) => {
		setLoading(true)
		axios.put(`records/${id}`, res).then((resp) => {
			setData(resp)
			fetchData();
			console.log('put')
			setLoading(false)
		})
	}
	

	return { editRecord, data, loading, error }
}

