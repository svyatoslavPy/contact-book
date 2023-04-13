import { useState } from 'react'
import axios from 'axios'
import { useFetchRecords } from './useFetchRecords'

export const useAddRecords = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(undefined)

	const { fetchData } = useFetchRecords()

	const addRecord = newUser => {
		setLoading(true)
		axios.post('records/', newUser).then(resp => {
			setData(resp)
			fetchData()
			setLoading(false)
			setError(undefined)
		})
	}

	return { addRecord, data, loading, error }
}
