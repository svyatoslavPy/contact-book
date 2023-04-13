import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
// provider for token

export const LoginContext = React.createContext({
	fetchToLogin: () => {},
	fetchToLoginOut: () => {},
	token: undefined,
})

export const ProviderLogin = props => {
	const [token, setToken] = useState(undefined)
	useEffect(() => {
		if (localStorage.getItem('token')) { 
			setToken(localStorage.getItem('token'))
		}
		axios.defaults.headers.common[
			'Authorization'
		] = `Bearer ${localStorage.getItem('token')}`
	}, [token])

	const fetchToLogin = async user => {
		try {
			const resp = await axios.post('login', { user })
			localStorage.setItem('token', resp.data.token)
			setToken(resp.data.token)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchToLoginOut = () => {
		const remove = localStorage.removeItem('token')
    setToken(remove);
	}

	const getValueLogin = () => {
		return {
			fetchToLogin,
			fetchToLoginOut,
			token: token,
		}
	}

	return (
		<LoginContext.Provider value={getValueLogin()}>
			{token ? props.children[0] : props.children[1]}
		</LoginContext.Provider>
	)
}
