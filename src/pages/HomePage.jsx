import React from 'react'
import Banner from '../components/Banner'
import TopDestinations from '../components/TopDestinations'

const HomePage = () => {

	const test = 'Bewa';

	return (
		<React.Fragment>
			<Banner/>
			<h1>Test Only {test}</h1>
			<section className='mx-auto max-w-7xl mt-20'>
				<TopDestinations />
			</section>
		</React.Fragment>
	)
}

export default HomePage