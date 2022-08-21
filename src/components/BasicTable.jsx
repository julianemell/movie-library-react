import { useTable } from 'react-table'
import Table from 'react-bootstrap/Table'

const BasicTable = ({ columns, data }) => {
	const {
		getTableProps, //används på vårt tabell-element. vi gör en spread på alla attribut som kommer tillbaka. t ex onClick={}
		getTableBodyProps, //
		headerGroups, //en array av tableheadergroups. map. tar ut en tableheader och för varje tableheader så vill vi göra en tablerow
		rows, //mapa över alla rader
		prepareRow, //förbereder raden
	} = useTable({ columns, data })

	return (
		<Table striped hover {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map(cell => (
								<td {...cell.getCellProps()}>
									{cell.render('Cell')}
								</td>
							))}
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}

export default BasicTable
