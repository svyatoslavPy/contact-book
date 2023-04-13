import React, { useContext } from'react'
import { useState } from 'react'
import { LoginContext } from '../provider/prodiverForLogin'

export const Login = () => {
	const ctx = useContext(LoginContext);

	const [user, setUser] = useState('')

	const setUserHandler = e => {
		setUser(e.target.value)
	}
	const toLogin = e => {
		e.preventDefault()
		ctx.fetchToLogin(user)
	}

	return (
		<form className='login'>
			<input
				onChange={e => setUserHandler(e)}
				type='text'
				placeholder='Username'
			/>
			<button onClick={e => toLogin(e)}>Login</button>
		</form>
	)
}
