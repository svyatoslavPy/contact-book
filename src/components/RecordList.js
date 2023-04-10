import { Record } from './Record'
export const RecordList = props => {
	return (
		<div>
			{props.recordList?.data &&
				props.recordList.data.map((record, index) => (
					<Record
						name={record.name}
						phone={record.phone}
						surname={record.surname}
						index={index}
					></Record>
				))}
		</div>
	)
}
