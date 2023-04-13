import { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { DataStoreContext } from '../provider/providerDataStore'

export const useFetchRecords = (isManual = false) => {
	const ctx = useContext(DataStoreContext)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
    if (!isManual) {
      fetchData()
    }
	}, []);

	const fetchData = () => {
    setLoading(true)
    setTimeout(() => { // loading time
      setLoading(false);
    }, 2000)
		axios.get('records/').then(resp => {
			ctx.setDataStorages(resp)
			console.log(resp)
			// setLoading(false)
		})
	}

	return { data: ctx.dataStore, loading, fetchData }
}
