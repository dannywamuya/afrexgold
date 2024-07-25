'use client';

import InfogramEmbed from '@/components/Infogram';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

export default function Page() {
	return (
		<main className='max-w-screen'>
			{/* Section 1 */}
			<div
				className='bg-cover bg-center mt-[10rem] h-[50vh] flex items-center justify-center'
				style={{
					backgroundImage: 'url("/images/Section_1.jpg")',
					filter: 'grayscale(.6)',
				}}>
				<div className='text-center flex flex-col gap-8 text-text-primary'>
					<h1 className={`font-nunito font-bold text-5xl`}>
						KANGUNDO RESTORATION JOURNEY
					</h1>
					<p className={` text-2xl px-4 lg:px-0`}>
						From a semi-arid area to a regional food basket one fruit tree at a
						time
					</p>
				</div>
			</div>

			{/* Section 2 */}
			<div className='h-fit p-8 lg:p-16 flex lg:flex-row flex-col-reverse items-center justify-between gap-16'>
				<div className='rounded-md'>
					<Image
						src={'/images/Section_2.jpg'}
						alt='Bare farm cleared for firewood used domestically mainly for cooking'
						width={1288}
						height={966}
						className='rounded-md'
					/>
					<p className='italic text-sm py-2 text-center'>
						Bare farm cleared for firewood used domestically mainly for cooking
					</p>
				</div>
				<div className='text-text-primary items-center bg-bg-primary-variant lg:my-0 p-4 lg:p-8 gap-8 justify-center flex flex-col rounded-md max-w-full lg:max-w-[50%]'>
					<h3 className={``}>Current Challenge</h3>
					<p>
						According to a recent study on the Economics of Land Degradation and
						Improvement in Kenya, 12.3% of the country’s land suffers from
						severe degradation, 52% from moderate degradation and 33% is
						vulnerable to land degradation
					</p>
					<p>
						Charcoal production, the excessive use of fertiliser, gully erosion,
						mining, and land degradation all present a serious threat to Kenya’s
						economy and environment. As a result of these challenges, the
						country has seen agricultural output reduce, droughts increase and
						greater levels of climate vulnerability.
					</p>
				</div>
			</div>

			<div className='h-fit flex items-center justify-center px-8 lg:px-16'>
				<div className='grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-16 gap-8 my-8 lg:my-0 text-text-primary'>
					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<h3 className={``}>Deforestation</h3>
						<p className={` text-sm`}>
							Many people in Kangundo depend on firewood and charcoal as a
							source of fuel, leading to an increase in deforestation. This area
							has been experiencing long spells of drought, increased cases of
							landslides and flooding when heavy rains are experienced.{' '}
						</p>
					</div>

					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<h3 className={``}>Soil Contamination</h3>
						<p className={` text-sm`}>
							Excessive use of pesticides and fertilizer has resulted in soil
							pollution. Horticultural farmers in this region have overused
							pesticides and fertilizer during production of the crops. This has
							gradually created an imbalance in soil fertility leading to
							reduced land productivity.
						</p>
					</div>

					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<h3 className={``}>Quarrying and Mining</h3>

						<p className={` text-sm`}>
							Large portions of land have been cleared and vegetative cover
							destroyed because of increased mining activities. The greatest
							effect is the disused quarry pits that pose a danger both to human
							beings and the animals and a breeding ground for water-borne
							diseases e.g., malaria during the rainy season.
						</p>
					</div>

					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<h3 className={``}>Soil Errosion</h3>

						<p className={` text-sm`}>
							Improper farming practices, e.g., clearing vegetative cover,
							burning grasslands and shrubs during land preparation, have led to
							increased erosion of soil during the rainy season. Land has
							eventually been rendered unproductive by the gullies and rills
							formed after soil erosion. Rivers have become polluted from soil
							sedimentation while some have dried up completely.
						</p>
					</div>
				</div>
			</div>

			{/* Section 3 */}
			<div className='h-fit p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-16'>
				<div className='w-full lg:w-1/2 flex flex-col gap-8'>
					<h3 className={` text-lg text-center`}>Environmental Goals</h3>

					<div>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-1'>
								<AccordionTrigger className='text-start'>
									Restore degraded areas because of mining and overuse of
									chemicals
								</AccordionTrigger>
								<AccordionContent>
									The project will prioritise these areas and help them grow
									Avocado trees and exotic trees especially in mining areas.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-2'>
								<AccordionTrigger>Improving biodiversity</AccordionTrigger>
								<AccordionContent>
									Afforestation increases the presence of pollinators and
									predatory insects e.g. bees, birds, wasps. An increased annual
									crop cover also acts as means of diversifying the ecosystem by
									adding/ increasing a crop species.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-3'>
								<AccordionTrigger>To curb soil erosion</AccordionTrigger>
								<AccordionContent>
									Avocado’s shallow taproot system with fibrous roots extending
									towards the tree canopy will help hold soil particles in place
									hence reducing soil erosion substantially. Leaves and branches
									that fall off increase organic matter in the soil hence
									improving soil fertility.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-2'>
								<AccordionTrigger>Increasing vegetation</AccordionTrigger>
								<AccordionContent>
									This covers new trees planted on the farms and borders as well
									as cover-crops used for intercropping e.g. beans & desmodium.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<div className='max-w-1/2 flex flex-col gap-4'>
					<div>
						<Image
							width={600}
							height={270}
							src='/images/Section_3.1.jpg'
							alt='A view of Kangundo’s landscape in a high-altitude area'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							A view of Kangundo’s landscape in a high-altitude area
						</p>
					</div>
					<div>
						<Image
							width={600}
							height={270}
							src='/images/Section_3.2.jpg'
							alt='A farm in Kangundo with a growing avocado orchard'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							A farm in Kangundo with a growing avocado orchard
						</p>
					</div>
				</div>
			</div>

			{/* Section 4 */}
			<div className='h-fit p-8 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-8 lg:py-0'>
				<div className='max-w-1/2 flex flex-col gap-4 items-center'>
					<div>
						<Image
							width={500}
							height={282}
							src='/images/Section_4.1.jpeg'
							alt='Some of our staff working on the nursery in the bagging stage'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							Some of our staff working on the nursery in the bagging stage
						</p>
					</div>
					<div className='max-w-[289px]'>
						<Image
							width={289}
							height={217}
							src='/images/Section_4.2.jpg'
							alt='Some of our staff working on the nursery in the bagging stage'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							Some of our staff working on the nursery in the bagging stage
						</p>
					</div>
				</div>
				<div className='w-full lg:w-1/2 flex flex-col gap-8'>
					<h3 className={` text-lg text-center`}>Socio Economic goals</h3>

					<div>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-1'>
								<AccordionTrigger>Poverty alleviation</AccordionTrigger>
								<AccordionContent>
									Smallholder farmers will be provided with a direct market for
									their produce by eliminating the middle man therefore
									increasing income generated by farmers from their produce.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-2'>
								<AccordionTrigger>Gender equality</AccordionTrigger>
								<AccordionContent>
									Through our project, women and youth will be encouraged to
									participate in farming activities and empower them to build an
									income source for themselves
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-3'>
								<AccordionTrigger>Job creation</AccordionTrigger>
								<AccordionContent>
									Human resource will be required from the local communities
									where the nurseries are established and in the farms where the
									trees are planted
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-2'>
								<AccordionTrigger>Increase land productivity</AccordionTrigger>
								<AccordionContent>
									We aim to increase areas of land under production by adding
									new small scale farmers and increasing acreage of existing
									farmers through agronomic support. Also ensure land tenure
									security through a sustainable land management system
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>

			{/* Section 5 */}
			<div className='h-fit p-8 lg:p-16 flex flex-col items-center justify-center gap-16'>
				<Image
					src={'/images/sdgs.png'}
					width={600}
					height={110}
					alt='SDGs logo'
				/>
				<div className='flex flex-wrap gap-8 lg:gap-16 justify-center text-text-primary'>
					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<Image
							src={'/images/SDG1.jpg'}
							width={100}
							height={100}
							alt='Gender Equality SDG Logo'
						/>
					</div>
					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<Image
							src={'/images/SDG5.jpg'}
							width={100}
							height={100}
							alt='Climate Action SDG Logo'
						/>
					</div>
					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<Image
							src={'/images/SDG13.jpg'}
							width={100}
							height={100}
							alt='Life on Land SDG Logo'
						/>
					</div>
					<div className='bg-bg-primary-variant rounded-md p-4 flex flex-col gap-4'>
						<Image
							src={'/images/SDG15.jpg'}
							width={100}
							height={100}
							alt='Soil Erosion SDG Logo'
						/>
					</div>
				</div>
			</div>

			{/* Section 6 */}
			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<h3 className={` text-lg text-center`}>Action</h3>
				<p className={``}>
					As Afrex Gold, we put community development and nature at the heart of
					its work. We company works with over 1,200 farmers country wide, local
					exporters, direct buyers and wholesalers all over the world. Our
					overarching mission of Afrex Gold is to give back to society and
					empower the community to care about the environment, as well as
					empower farmers to earn a decent income from their harvest. Through
					our seedlings nursery, we are looking at propagating and planting over
					80,000 trees in Kangundo area, working with over 400 farmers and
					restoring more than 200 Ha and impacting over 1500 people. (We have so
					far provided over 11,000 trees to farmers in the area).
				</p>
				<div className='flex lg:flex-row flex-col w-full justify-between overflow-x-hidden gap-8'>
					<div className='w-full lg:w-[50%]'>
						<Image
							className='rounded-md'
							src={'/images/Section_6.1.jpg'}
							width={800}
							height={360}
							alt={
								'Our Nursery with a holding capacity of approx. 50,000 Avocado seedlings'
							}
						/>
						<p className='italic text-sm py-2 text-center'>
							Our Nursery with a holding capacity of approx. 50,000 Avocado
							seedlings
						</p>
					</div>
					<div className='w-full lg:w-[50%] rounded-md'>
						<Image
							className='rounded-md'
							src={'/images/Section_6.2.jpg'}
							width={800}
							height={360}
							alt={
								'Our Nursery with a holding capacity of approx. 50,000 Avocado seedlings'
							}
						/>
						<p className='italic text-sm py-2 text-center'>
							Our Nursery with a holding capacity of approx. 50,000 Avocado
							seedlings
						</p>
					</div>
				</div>
			</div>

			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<p className={``}>
					Farmers are the main partners in our restoration efforts. We train
					farmers and provide the resources they need to produce high-quality
					avocado tree seeds and achieve higher yields. The production process
					begins on the farms. We provide avocado seedlings to farmers and
					organise them in groups to support planting throughout the growing
					season. In line with our goal of empowering women, male farmers are
					incentivized to encourage and involve women in their groups rather
					than leaving them behind to do household chores. As a result, 70% of
					the company’s partner farmers are now women. We are also able to offer
					direct employment to women in our processing facility where the mature
					avocado is processed and ready for export.
				</p>
				<div className='flex flex-col lg:flex-row w-full justify-between overflow-x-hidden gap-8 items-center'>
					<div className='flex flex-col items-center max-w-[360px]'>
						<Image
							className='rounded-md'
							src={'/images/Section_6.3.jpg'}
							width={360}
							height={360}
							alt={
								'Farm Visit to checking progress of a farm and offering agronomical support'
							}
						/>
						<p className='italic text-sm py-2 text-center'>
							Farm Visit to checking progress of a farm and offering agronomical
							support
						</p>
					</div>
					<div>
						<Image
							className='rounded-md'
							src={'/images/Section_6.4.jpeg'}
							width={800}
							height={360}
							alt={
								'Our facility where we processing Avocado for export and offer jobs to over 70 people'
							}
						/>
						<p className='italic text-sm py-2 text-center'>
							Our facility where we processing Avocado for export and offer jobs
							to over 70 people
						</p>
					</div>
				</div>
			</div>

			{/* Section 7 */}
			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center'>
				<h3 className={` text-lg text-center mb-4 lg:mb-16`}>
					Community Follow-Up and Training
				</h3>
				<div className='justify-between flex flex-col lg:flex-row items-center'>
					<div className='lg:w-1/2 flex justify-center items-center bg-bg-primary-variant rounded-md p-4 h-fit'>
						<p className={`text-text-primary`}>
							Farmers get training before and after planting avocados, Good
							Agricultural Practices and Integrated Pest Management Mechanisms.
							They also get guidance on short term crops that can be
							intercropped with the trees to provide alternative income streams
							and help improve soil fertility. The community is guided on how to
							establish an apiary to aid in pollination of trees & income
							generation from honey.
						</p>
					</div>
					<div className='w-fit'>
						<Image
							className='rounded-md'
							src={'/images/Section_7.1.jpg'}
							width={551}
							height={414}
							alt='Farmer Training on Good Agricultural Practices and Pest Management'
						/>
						<p className='italic text-sm py-2 text-center'>
							Farmer Training on Good Agricultural Practices and Pest Management
						</p>
					</div>
				</div>
			</div>
			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center'>
				<div className='justify-between flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0'>
					<div className='w-fit'>
						<Image
							className='rounded-md'
							src={'/images/Section_7.2.jpg'}
							width={551}
							height={414}
							alt='Farmer Training demonstrating seedling care'
						/>
						<p className='italic text-sm py-2 text-center'>
							Farmer Training demonstrating seedling care
						</p>
					</div>
					<div className='w-full lg:w-1/2 flex justify-center items-center bg-bg-primary-variant rounded-md p-4 h-fit'>
						<p className={`text-text-primary`}>
							Regular farm visits to check on the progress of different farms
							and offer agronomic advice. A company agronomist is available to
							help farmers deal with emerging issues in their orchards and to
							offer guidance to the farmers on maintaining a healthy tree.
							Occasionally, training in the factory occurs to demonstrate to the
							farmers what happens once their fruits are received at the
							factory. These sessions are designed to enlighten the farmer on
							handling techniques after harvest, post-harvest treatment,
							traceability, and pre-cooling of the fruits to ensure that only
							the best quality fruits are packed for sale in various markets.
						</p>
					</div>
				</div>
			</div>

			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<div className='justify-between flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
					<div className='w-full lg:w-1/2 flex flex-col justify-center bg-bg-primary-variant rounded-md p-4 h-fit text-text-primary'>
						<p className={` mb-4`}>
							Training on Tree Maintenance and After Care majorly involves
						</p>
						<ul className={` list-disc ml-6`}>
							<li>Continuous tree care education.</li>
							<li>Education on adopting better irrigation systems.</li>
							<li>Planting exotic trees at the borders of the orchards.</li>
							<li>
								Education on beekeeping provides pollinators for better yields.
							</li>
							<li>Advice on the benefits of intercropping.</li>
							<li>Manure application during planting.</li>
							<li>Mulching - helps conserve water.</li>
							<li>Pruning of trees annually.</li>
							<li>
								Regular scouting for pests and diseases & implementing
								Integrated Pest Management.
							</li>
							<li>Weeding and field sanitation.</li>
						</ul>
					</div>
					<div className='flex justify-between gap-4 lg:gap-16'>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_7.5.jpg'}
								width={225}
								height={500}
								alt='Fruit affected by False Codling Moth (FCM)'
							/>
							<p className='italic text-sm py-2 text-center'>
								Fruit affected by False Codling Moth (FCM)
							</p>
						</div>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_7.6.jpg'}
								width={225}
								height={500}
								alt='FCM Pheromone Trap'
							/>
							<p className='italic text-sm py-2 text-center'>
								FCM Pheromone Trap
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-evenly w-full lg:flex-row gap-4 items-center'>
					<div>
						<Image
							width={578}
							height={434}
							src='/images/Section_7.3.jpg'
							alt='Some of our staff working on the nursery in the bagging stage'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							Some of our staff working on the nursery in the bagging stage
						</p>
					</div>
					<div className='w-[325px]'>
						<Image
							width={325}
							height={434}
							src='/images/Section_7.4.jpg'
							alt='Some of our staff working on the nursery in the bagging stage'
							className='rounded-md'
						/>
						<p className='italic text-sm py-2 text-center'>
							Some of our staff working on the nursery in the bagging stage
						</p>
					</div>
				</div>
			</div>

			{/* Section 8 */}
			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<div className='justify-between flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center'>
					<div className='flex justify-between gap-4 lg:gap-16'>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_8.1.jpg'}
								width={225}
								height={500}
								alt='Hand-dug Well as a source of water for farming'
							/>
							<p className='italic text-sm py-2 text-center'>
								Hand-dug Well as a source of water for farming
							</p>
						</div>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_8.2.jpg'}
								width={225}
								height={500}
								alt='A farmer demonstrating how they fetch water for their orchard'
							/>
							<p className='italic text-sm py-2 text-center'>
								A farmer demonstrating how they fetch water for their orchard
							</p>
						</div>
					</div>
					<div className='w-full lg:w-1/2 flex flex-col justify-center bg-bg-primary-variant rounded-md p-4 h-fit text-text-primary'>
						<h3 className={` text-lg text-center mb-8`}>
							Water Scarcity: A Perennial Challenge
						</h3>
						<p className={``}>
							Most farmers in Kenya rely on rainwater for their agricultural
							activities. While Kenya’s weather patterns are changing, the
							change in rainfall patterns has had a huge impact on Kenya because
							98% of the country’s agriculture is rain-fed. With most parts of
							the country having two main rainy seasons, from March to May’s
							(long rains) and October to December’s (short rains), most farmers
							are always racing against time and forced to plant during the
							rainy season which also dictated harvesting and normal plant care.
							Kangundo area is also not spared being in a hot climatic zone,
							with no permanent river in proximity. As most farmers fall in the
							low-income bracket, they are heavily dependent on rainwater since
							they lack the resources and skill to sink a borehole, buy water
							storage tanks or even dig a well.
						</p>
					</div>
				</div>
			</div>

			<div className='h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<div className='justify-between flex flex-col lg:flex-row gap-8 lg:gap-0 items-center'>
					<div className='w-full lg:w-1/2 flex flex-col justify-center gap-8 bg-bg-primary-variant rounded-md p-4 h-fit text-text-primary'>
						<p className={``}>
							Digging trenches to hold rainwater acts as a temporary remedy,
							however it is not reliable due to evaporation and ground seepage.
							Currently, seedling survival rate is at about 60% mainly due to
							dehydration. In some cases, farmers have taken it upon themselves
							to regraft/replant a new seedling, in anticipation of one drying
							out.
						</p>
						<p className={``}>
							We need to find alternative water solutions to ensure survival and
							eventual growth of seedlings for farmers to enjoy the bounty from
							their harvest in a few years to come. An immediate solution is
							having water storage solutions that can take advantage of seasonal
							rains, and hold water for months, which will also be complimentary
							for their domestic water needs.
						</p>
					</div>
					<div className='flex justify-between gap-4 lg:gap-16'>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_8.3.jpg'}
								width={225}
								height={500}
								alt='Dried-out seedling due to lack of water and hot temperatures'
							/>
							<p className='italic text-sm py-2 text-center'>
								Dried-out seedling due to lack of water and hot temperatures
							</p>
						</div>
						<div className='flex flex-col items-center max-w-[225px]'>
							<Image
								className='rounded-md'
								src={'/images/Section_8.4.jpeg'}
								width={225}
								height={500}
								alt='A farmer’s regrafted seedling to salvage dried-out seedling'
							/>
							<p className='italic text-sm py-2 text-center'>
								A farmer’s regrafted seedling to salvage dried-out seedling
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Section 9 */}
			<InfogramEmbed />

			{/* Section 10*/}
			<div className='text-text-primary h-fit p-8 lg:p-16 justify-center flex flex-col items-center gap-8'>
				<h3 className={` text-lg text-center`}>Our Partners</h3>
				<p className={``}>
					Through the partnership with Land Accelerator - - Africa and TerraFund
					for AFR100 (an initiative of World Resources Institute, One Tree
					Planted, and Realise Impact that finances Africa&apos;s top
					restoration enterprises and projects) we aim to onboard an extra 250
					farmers. The partnerships support us in providing technical support to
					our farmers/communities, to increase avocado production and grow
					additional trees. The impact of the to date demonstrates the power of
					community engagement in successful restoration efforts and the
					importance of not only planting trees, but growing and maintaining
					them as well and improving people’s livelihoods.
				</p>
				<div className='flex gap-8 lg:gap-16 flex-wrap justify-center'>
					<Image
						alt=''
						src={'/images/afr100-terramatch-logo.png'}
						height={66}
						width={375}
					/>
					<Image alt='' src={'/images/OTP.png'} height={66} width={66} />
					<Image
						alt=''
						src={'/images/Realize_Impact.png'}
						height={66}
						width={139}
					/>
					<Image
						alt=''
						src={'/images/the-land-accelerator-program-2020.jpg'}
						height={66}
						width={137}
					/>
					<Image alt='' src={'/images/WRI-logo.png'} height={66} width={198} />
				</div>
			</div>
		</main>
	);
}
