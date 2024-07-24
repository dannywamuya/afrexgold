import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
	text: string;
	href: string;
}

const Footer: React.FC = () => {
	const usefulLinks: FooterLink[] = [
		{ text: 'Facility', href: '/facility' },
		{ text: 'Community', href: 'https://impact.afrexgold.co.ke' },
		{ text: 'Products', href: '/exports' },
		{ text: 'Careers', href: '/careers' },
	];

	// const informationLinks: string[] = ['FAQs', 'Blog'];
	const addressLines: string[] = ['P.O BOX 5157-00506', 'Nairobi, Kenya'];

	return (
		<footer
			className='w-screen h-max py-8 px-20 mt-8 bg-bg-secondary'
			id='footer'>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col items-center lg:items-start'>
					<Link href={'/'}>
						<Image
							src='/squarelogo3.png'
							alt='Afrex Gold Logo'
							width={160}
							height={160}
							className='max-w-[10rem]'
						/>
					</Link>
					<p className='font-karla  text-bg-primary w-full lg:w-[85%] leading-5 mt-2'>
						Proudly Kenyan exporters of fresh fruits and vegetables for more
						than 20 years!
					</p>
				</div>
				<div className='flex flex-col lg:flex-row mt-12 lg:mt-0'>
					<div className='mx-0 lg:mx-12 mb-4 lg:mb-0 text-center lg:text-left'>
						<p className='font-nunito  text-bg-primary'>Useful Links</p>
						<ul className='mt-4 list-none font-karla'>
							{usefulLinks.map((link, index) => (
								<li key={index} className='leading-5 text-bg-primary-variant'>
									<Link
										href={link.href}
										target={`${link.text === 'Community' ? '_blank' : '_self'}`}
										className='no-underline text-bg-primary-variant cursor-pointer'>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='mx-0 lg:mx-20 text-center lg:text-left'>
						<p className='font-nunito  text-bg-primary'>Address</p>
						<ul className='mt-4 list-none font-karla '>
							{addressLines.map((line, index) => (
								<li key={index} className='leading-5 text-bg-primary-variant'>
									{line}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className='mt-12 w-full text-center font-karla  text-bg-primary'>
				<p>
					All Rights Reserved by{' '}
					<span className='text-bg-primary-variant'>
						{' '}
						Afrex Gold Limited&trade;
					</span>{' '}
					{new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
