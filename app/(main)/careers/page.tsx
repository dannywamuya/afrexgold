import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Careers | Afrex Gold Limited',
	description: 'Join our team at Afrex Gold Limited.',
};

export default function Page() {
	return (
		<main className='min-h-screen'>
			<div className='w-full text-center py-8'>
				<h3 className='font-bold text-2xl font-nunito'>
					Join our team at Afrex Gold Limited
				</h3>
			</div>
			<div className='w-full md:px-24 text-center py-4'>
				<p>
					{`Afrex Gold is one of the leading exporters of horticultural products
					in Kenya. Since it's inception more than 20 years ago, we have managed
					to immerse ourselves in the food produce market in the Middle East,
					Europe, Asia and Africa.`}
				</p>
			</div>
			<div className='w-screen relative h-[250px]'>
				<Image
					fill
					src={'/packhouse.jpg'}
					alt='Careers page cover'
					className='object-cover blur-[1px]'
				/>
			</div>
			<div className='w-full flex py-8 justify-center'>
				<div className='w-fit p-8 rounded-md bg-bg-secondary text-bg-primary-variant cursor-pointer flex justify-center items-center'>
					No open positions at the moment
				</div>
			</div>
		</main>
	);
}
