import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
	return (
		<section
			className='bg-bg-primary px-8 md:px-16 m-0 w-full overflow-hidden'
			id='about'>
			<p className='float-right my-8 font-karla font-extrabold text-4xl text-bg-primary-variant transition-all duration-1000'>
				About
			</p>

			<section className='my-8'>
				<div className='w-full block mt-28'>
					<div className='my-2'>
						<p className='font-nunito text-xl font-semibold mb-4'>
							Company Profile
						</p>
						<p className='bg-gradient-to-r from-[#5dc293] to-[#52b788b2] rounded-md p-6 text-text-primary  font-karla leading-6 transition-all duration-2000 ease-in-out'>
							<strong>Afrex Gold Limited</strong> was founded in the year 2000
							inspired by the growth in demand for premium fruits and vegetables
							from East Africa.
							<br />
							Since inception, we have secured long-term supply agreements with
							customers in Europe and the Gulf Region supplying tons of premium
							fresh produce every year.
							<br />
							Our principal product is avocado amid a myriad of other fruits and
							vegetables all sustainably sourced and processed at our production
							facility.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 my-16'>
					<div className='relative h-[360px] md:w-[120%] cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-in-out'>
						<Image
							className='float-right transition-all duration-1000 rounded-lg hover:scale-110 object-cover'
							src='/packhouse.jpg'
							alt='Packhouse'
							fill
						/>
					</div>
					<div className='-mt-8 flex flex-col justify-center text-right'>
						<p className='font-nunito text-xl font-semibold text-right mb-4'>
							Our Facility
						</p>
						<p className='relative md:-ml-48 z-10 p-6 rounded-md bg-gradient-to-l from-[#52b788b2] to-[#5dc293] text-text-primary  font-karla leading-6 transition-all duration-2000 ease-in-out'>
							We are located in a Thika, Kenya where we house our state of the
							art avocado processing line capable of processing 3 tonnes of
							avocado every hour all sourced sustainably while undergoing
							rigorous quality checks. All of our staff are highly trained,
							qualified and compliant in food safety certification.
							<br />
							<Link href='/facility' className='text-blue-600'>
								Learn More
							</Link>
						</p>
					</div>
				</div>

				<div className='mt-12'>
					<div className='my-2'>
						<p className='font-nunito text-xl font-semibold text-right mb-4'>
							Social Impact
						</p>
						<p className='bg-gradient-to-r from-[#5dc293] to-[#52b788b2] rounded-md p-6 text-text-primary  font-karla leading-6 transition-all duration-2000 ease-in-out'>
							Afrex Gold Limited is committed to working with all stakeholders
							in agribusiness.
							<br />
							We are apt to work with farmers and suppliers in order to
							facilitate a great return for their hard work and commitment.
							<br />
							<Link href='/community' className='text-blue-600'>
								Learn More
							</Link>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
