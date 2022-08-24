import BeatLoader from 'react-spinners/BeatLoader'

const LoadingSpinner = () => {
	return (
		<div className='d-flex justify-content-center py-5'>
			<BeatLoader size={20} color='#925005' />
		</div>
	)
}

export default LoadingSpinner
