import React, { useState } from 'react'

export const DataStoreContext = React.createContext({
	setDataStorages: () => {},
	dataStore: [],
})

export const DataStoreProvider = props => {
	const [dataStore, setDataStore] = useState([])

	const setDataStorages = newData => {
		setDataStore(newData)
	}

	const getData = () => {
		return {
			setDataStorages,
			dataStore,
		}
	}

	return (
		<DataStoreContext.Provider value={getData()}>
			{props.children}
		</DataStoreContext.Provider>
	)
}
