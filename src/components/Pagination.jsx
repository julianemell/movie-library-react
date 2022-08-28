import Button from 'react-bootstrap/Button'


const Pagination = ({ page, totPages, previousData, setSearchParams }) => {

	let next = Number(page) + 1
	let prev = Number(page) - 1

	
	return (
		<div className='d-flex justify-content-between mt-4 mb-4'>
			<Button 
				variant='warning' 
				onClick={() => (window.scrollTo(0,0), setSearchParams({ page: prev }))} 
				disabled={previousData || page === 1}
			>previous</Button>

			<p>{page}/{totPages}</p>
			
			<Button 
				variant='warning' 
				onClick={() => (window.scrollTo(0,0), setSearchParams({ page: next }))} 
				disabled={previousData || page === totPages}
			>next</Button>
		</div>
	)
}

export default Pagination
