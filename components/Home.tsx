import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<section className='relative h-screen grid place-items-center text-white'>
			<div className='absolute top-0 left-0 w-screen h-screen overflow-hidden'>
				<video
					className='min-h-full min-w-full object-cover'
					autoPlay
					loop
					muted>
					<source src='/loop.mp4' type='video/mp4' />
					<source src='/loop.webm' type='video/webm' />
				</video>
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-black/70 opacity-75 z-10'></div>
			<div className='relative z-20 flex flex-col items-center justify-center'>
				<div>
					<Image width={400} height={114} src='/squarelogo3.png' alt='' />
				</div>
				<p className='font-karla text-lg mt-4 px-8 text-center'>
					Proudly Kenyan exporters of fresh fruits and vegetables for more than
					20 years!
				</p>
			</div>
			<Link
				className='absolute z-20 mb-8 bottom-0 text-base items-center gap-2 flex flex-col cursor-pointer animate-bounce'
				href='#about'>
				Learn More
				<ArrowDown />
			</Link>
		</section>
	);
}
