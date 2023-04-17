import { useState } from 'react'
import axios from 'axios'
import { useFetchRecords } from './useFetchRecords'
export const useDeleteRecords = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	// const [error, setError] = useState(undefined)
  const { fetchData } = useFetchRecords()
	
	const delRecord = id => {
		setLoading(true)
		axios.delete(`records/${id}`).then(resp => {
			setData(resp)
      fetchData()
			console.log('del')
			setLoading(false)
		})
	}

	return { delRecord, data, loading }
}
