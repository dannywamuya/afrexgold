'use client';

import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const usefulLinks = [
	{ text: 'Impact', href: '/impact' },
	{ text: 'Products', href: '/exports' },
	{ text: 'Careers', href: '/careers' },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => setOpen(!open);

	return (
		<>
			<header className='flex top-0 z-50 absolute items-center h-20 px-20 w-full bg-bg-secondary justify-between'>
				<Link href={'/'}>
					<Image
						src='/squarelogo3.png'
						alt='Afrex Gold Logo'
						width={160}
						height={160}
						className='max-w-[10rem]'
					/>
				</Link>
				<div className='hidden md:flex items-center gap-6'>
					{usefulLinks.map(({ href, text }) => (
						<Link
							key={href}
							href={href}
							className='text-bg-primary-variant hover:scale-105 transition-all duration-200 ease-linear hover:text-bg-primary-variant-transP'>
							{text}
						</Link>
					))}
				</div>
				<Link
					href={'/#contact'}
					className='px-4 py-1.5 hidden md:flex items-center gap-2 text-bg-primary-variant border border-border rounded-xl hover:bg-bg-primary-variant-transP hover:text-bg-secondary'>
					Contact Us
					<Phone className='h-5 w-5' />
				</Link>
				<button
					onClick={toggleOpen}
					className='p-2 md:hidden flex items-center gap-2 text-bg-primary-variant rounded-xl hover:bg-bg-primary-variant-transP hover:text-bg-secondary'>
					{!open ? <Menu className='h-5 w-5' /> : <X className='h-5 w-5' />}
				</button>
			</header>
			<div
				className={`h-[calc(100vh-5rem)] slide-down w-full z-30 absolute bg-bg-secondary ${
					open ? 'md:hidden flex' : 'hidden'
				} items-start justify-center`}>
				<div className='flex flex-col items-center gap-6 mt-10'>
					{usefulLinks.map(({ href, text }) => (
						<Link
							key={href}
							href={href}
							className='text-bg-primary-variant hover:scale-105 transition-all duration-200 ease-linear hover:text-bg-primary-variant-transP'>
							{text}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
