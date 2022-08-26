import Button from 'react-bootstrap/Button'


const Pagination = ({ page, totPages, previousData, prevPage, nextPage }) => {
	return (
		<div className='d-flex justify-content-between mt-4 mb-4'>
			<Button variant='warning' onClick={prevPage} disabled={previousData || page === 1}>previous</Button>
			<p>{page}/{totPages}</p>
			<Button variant='warning' onClick={nextPage} disabled={previousData || page === totPages}>next</Button>
		</div>
	)
}

export default Pagination
