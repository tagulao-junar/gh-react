import React from 'react'
import Banner from '../components/Banner'
import TopDestinations from '../components/TopDestinations'
import SimpleSlider from '../components/SimpleSlider'
import Contact from '../components/Contact'

const HomePage = () => {

	return (
		<React.Fragment>

			<Banner/>

			<div className="mx-auto max-w-6xl">
				<section className=' mt-20 mb-28'>
					<TopDestinations />
				</section>

				<Contact />
			</div>
			

		</React.Fragment>
	)
}

export default HomePage