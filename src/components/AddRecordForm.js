import { useAddRecords } from '../hooks/useAddRecords'
import React, { useState } from'react'
import { CustomInput } from './customInput'


export const AddRecordForm = () => {
	const { addRecord } = useAddRecords()
	const [phone, setPhone] = useState('');

	const addRecordHandler = () => {
		addRecord({
			name: 'svyatoslav',
			surname: 'georgiyev',
			phone: phone, 
		})
	}

	const handleChange = (targetValue) => {
		setPhone(targetValue);
	}

	return (
		<>
			<div className='btns-add'>
				<p>Demo</p>
				<button className='btns-add__item' onClick={addRecordHandler}>
					Add record
				</button>
			</div>
			<div className='inputs'>
				<CustomInput
					value={phone}
					onChange={handleChange}
				></CustomInput>
			</div>
		</>
	)
}


