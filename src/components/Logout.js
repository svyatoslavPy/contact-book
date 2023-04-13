import { LoginContext } from '../provider/prodiverForLogin'
import { useContext } from 'react'

export const LoginOut = () => {
	const ctx = useContext(LoginContext)

	const logOut = () => {
		ctx.fetchToLoginOut()
	}

	return <button className='btn-logout' onClick={() => logOut()}>Log out</button>
}
