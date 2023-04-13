import './App.css'

import { PhoneBookRecords } from './components/PhoneBookRecords'
import { Login } from './components/Login'
import { ProviderLogin } from './provider/prodiverForLogin'
import { DataStoreProvider } from './provider/providerDataStore'

function App() {
	return (
		<DataStoreProvider>
			<ProviderLogin>
				<PhoneBookRecords />
				<Login></Login>
			</ProviderLogin>
		</DataStoreProvider>
	)
}

export default App
