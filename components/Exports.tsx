'use client';

import Image from 'next/image';
import React, { act, useEffect, useState } from 'react';

const productsData = [
	{
		title: 'Fruits',
		items: [
			{
				name: 'Avocados',
				varieties: 'Hass, Fuerte, Jumbo',
				availability: [
					'Hass : February - July & October - December',
					'Fuerte : January - September',
					'Jumbo : October - March',
				],
				image: '/avocadoes.jpg',
				icon: '/avocado.png',
				description:
					'An avocado is a bright green fruit with a large pit and dark leathery skin. They’re also known as alligator pears or butter fruit. Avocados are a favorite of the produce section.',
			},
			{
				name: 'Mangoes',
				varieties: 'Apple, Ngowe, Kent, Van Dyke',
				availability: ['September - January'],
				image: '/mangoes.jpg',
				icon: '/mango.png',
				description:
					'A popular tropical fruit that is mainly yellow but can be green, orange, red or a combination of these colors, and has yellow or orange flesh surrounding a flat, hard pit.',
			},
			{
				name: 'Pineapples',
				varieties: '',
				availability: ['All year round'],
				image: '/pineapples.jpg',
				icon: '/pineapple.png',
				description:
					"A large tropical fruit with a spiky, tough skin and sweet insides. It's main stem runs completely through the fruit.",
			},
			{
				name: 'Bananas',
				varieties: 'Cavendish, Gros Michel',
				availability: ['All year round'],
				image: '/bananas.jpg',
				icon: '/banana.png',
				description:
					'An elongated, edible fruit with soft flesh rich in starch and covered with a rind.',
			},
		],
	},
	{
		title: 'Vegetables',
		items: [
			{
				name: 'French Beans',
				varieties: '',
				availability: ['All year round'],
				image: '/frenchbeans.jpg',
				icon: '/greenbeans.png',
				description:
					'They are smaller than common green beans and have a soft, velvety pod. They are fleshy, sweet, tender and wonderfully crispy.',
			},
			{
				name: 'Capsicum',
				varieties: 'Red, Yellow, Green',
				availability: ['All year round'],
				image: '/capsicum.jpg',
				icon: '/capsicum.png',
				description:
					'Capsicum, also known as red pepper or chili pepper is normally used as a flavoring, rather than as the primary ingredient.',
			},
			{
				name: 'Chillies',
				varieties: 'Bird Eye, Bullet',
				availability: ['All year round'],
				image: '/chilli.jpg',
				icon: '/chilli.png',
				description:
					'They are a part of the Capsicum family, which includes both the sweet peppers as well as the hot and spicy ones, often referred to as chili peppers.',
			},
			{
				name: 'Courgettes',
				varieties: '',
				availability: ['All year round'],
				image: '/courgette.jpg',
				icon: '/courgette.png',
				description:
					"Also known as zucchini, it is a variety of cucumber, which is the same family as cucumber, squash and melon. It's one of the most popular vegetables in the squash family, being extremely versatile, tender and easy to cook.",
			},
		],
	},
	{
		title: 'Herbs',
		items: [
			{
				name: 'Basil',
				varieties: '',
				availability: ['All year round'],
				image: '/basil.jpg',
				icon: '/basil.png',
				description:
					'Basil, member of the mint family, is a flavorful and leafy green herb that originated in Africa.',
			},
			{
				name: 'Thyme',
				varieties: '',
				availability: ['All year round'],
				image: '/thyme.jpg',
				icon: '/thyme.png',
				description:
					'Thyme is an herb whose small leaves grow on clusters of thin stems. It is used to season all kinds of dishes.',
			},
			{
				name: 'Rosemary',
				varieties: '',
				availability: ['All year round'],
				image: '/rosemary.jpg',
				icon: '/rosemary.png',
				description:
					'Rosemary is a fragrant evergreen herb widely used as a culinary spice.',
			},
			{
				name: 'Oregano',
				varieties: '',
				availability: ['All year round'],
				image: '/oregano.jpg',
				icon: '/oregano.png',
				description:
					'Oregano is an herb composed of the fresh or dried leaves of the oregano plant. The plant has tiny leaves that lend a pungent aroma and strong flavor to a variety of savory foods.',
			},
			{
				name: 'Leeks',
				varieties: '',
				availability: ['All year round'],
				image: '/leeks.jpg',
				icon: '/leek.png',
				description:
					'Leeks look like overgrown green onions, but have a milder, more delicate flavor than onions. The white base and green stalk are used for cooking in creamy soups, fresh, stocks and more.',
			},
			{
				name: 'Chives',
				varieties: '',
				availability: ['All year round'],
				image: '/chives.jpg',
				icon: '/chive.png',
				description:
					'Chives are a green vegetable with a mild onion-like flavor.',
			},
		],
	},
];

const ProductToggle = ({
	setGroup,
}: {
	setGroup: (arg: (typeof productsData)[0]) => void;
}) => {
	const [activeToggle, setActiveToggle] = useState(0);

	const handleToggle = (index: number) => {
		setActiveToggle(index);
		setGroup(productsData[index]);
	};

	return (
		<div className='flex items-center border border-gray-300 w-fit rounded-full'>
			{[
				{ id: 'fruits', src: '/fruits.png', alt: 'Fruits' },
				{ id: 'vegetables', src: '/broccoli.png', alt: 'Vegetables' },
				{ id: 'herbs', src: '/mortar.png', alt: 'Herbs' },
			].map((item, index) => (
				<span
					key={item.id}
					className={`cursor-pointer p-2 ${
						activeToggle === index ? 'bg-gray-300 rounded-full' : ''
					}`}
					onClick={() => handleToggle(index)}>
					<input
						id={item.id}
						name='state-d'
						type='radio'
						checked={activeToggle === index}
						onChange={() => handleToggle(index)}
						className='hidden'
					/>
					<label htmlFor={item.id}>
						<Image
							height={24}
							width={24}
							className={`cursor-pointer transition-transform ${
								activeToggle === index ? 'scale-110' : ''
							}`}
							src={item.src}
							alt={item.alt}
						/>
					</label>
				</span>
			))}
		</div>
	);
};

function Accordion({ group }: { group: (typeof productsData)[0] }) {
	const [active, setActive] = useState(group.items[0]);

	useEffect(() => {
		setActive(group.items[0]);
	}, [group]);

	return (
		<>
			<div className='w-full flex bg-bg-secondary h-[100px] mb-1'>
				{group.items.map((item, idx) => (
					<div
						onClick={() => setActive(item)}
						className={`h-full w-fit border-r border-bg-secondary flex`}
						key={item.name}>
						<div
							className={`${
								active.name === item.name ? 'bg-bg-primary-variant-transP' : ''
							} h-full flex justify-center items-center w-[60px] bg-bg-primary-variant hover:bg-bg-primary-variant-transP transition-all duration-300`}>
							<Image
								width={24}
								height={24}
								src={item.icon}
								alt={`${item.name} icon`}
								className='h-fit'
							/>
						</div>
						<div
							className={`${
								active.name === item.name
									? 'hidden md:flex md:slide-in'
									: 'hidden'
							} fade-in flex-col justify-center px-2 bg-bg-primary-variant  overflow-hidden`}>
							<p className='font-bold'>{item.name}</p>
							<p>{item.varieties}</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full  flex flex-col-reverse md:flex-row justify-between min-h-[200px] md:min-h-[500px]'>
				<div className='w-full md:w-1/2 space-y-4 p-4 text-bg-primary-variant h-auto bg-bg-secondary'>
					<p>{active.description}</p>
					<p>Varieties:</p>
					<p className='text-bg-primary pl-4'>{active.varieties}</p>
					<p>Availability:</p>
					{active.availability.map((value) => (
						<p key={value} className='text-bg-primary pl-4'>
							{value}
						</p>
					))}
				</div>
				<div className='w-full md:w-1/2 h-[200px] md:h-auto relative'>
					<Image
						fill
						src={active.image}
						alt={`${active.name} image`}
						className='object-cover'
					/>
				</div>
			</div>
		</>
	);
}

const Exports = () => {
	const [group, setGroup] = useState(productsData[0]);

	return (
		<section className='p-8 md:p-16 m-0 min-h-screen'>
			<p>
				We process and export a wide variety of produce, all of which are
				displayed below alongside their respective varieties and availabilities.
				Reach us in case of any inquiries or questions regarding our produce.
			</p>
			<div className='my-8'>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='font-bold text-xl font-nunito'>{group.title}</h2>
					<ProductToggle setGroup={setGroup} />
				</div>
				<Accordion group={group} />
			</div>
		</section>
	);
};

export default Exports;
