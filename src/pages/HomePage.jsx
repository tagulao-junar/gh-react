import React from 'react'
import Banner from '../components/Banner'
import TopDestinations from '../components/TopDestinations'
import SimpleSlider from '../components/SimpleSlider'

const HomePage = () => {

	return (
		<React.Fragment>
			<Banner/>
	
			<section className='mx-auto max-w-6xl mt-20'>
				<h1 className='destination-header'>Visit Popular Destinations in Thailand</h1>

				<TopDestinations />
				{/* <SimpleSlider /> */}
			</section>
		</React.Fragment>
	)
}

export default HomePage