import { useState } from 'react'
import axios from 'axios'

export const useEditRecords = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(undefined)

	const editRecord = (id, res) => {
		setLoading(true)
		axios.put(`records/${id}`, res).then((resp) => {
			setData(resp)
			console.log('put')
			setLoading(false)
		})
	}
	

	return { editRecord, data, loading, error }
}

