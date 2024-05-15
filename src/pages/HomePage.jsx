import React from 'react'
import Banner from '../components/Banner'
import TopDestinations from '../components/TopDestinations'
import SimpleSlider from '../components/SimpleSlider'

const HomePage = () => {

	return (
		<React.Fragment>
			<Banner/>
	
			<section className='mx-auto max-w-6xl mt-20 mb-28'>
				<h1 className='destination-header'>Thailand's Popular Destinations</h1>

				<TopDestinations />
			</section>
		</React.Fragment>
	)
}

export default HomePage