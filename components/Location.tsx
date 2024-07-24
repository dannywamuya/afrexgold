import Image from 'next/image';

interface ComplianceItem {
	imgSrc: string;
	url: string;
	text: string;
}

const Location: React.FC = () => {
	const complianceItems: ComplianceItem[] = [
		{
			imgSrc: '/gobalgap.png',
			url: 'https://www.globalgap.org/uk_en/',
			text: 'Global Good Agricultural Practices',
		},
		{
			imgSrc: '/fpc.png',
			url: 'https://fpckenya.co.ke/',
			text: 'Fresh Produce Consortium of Kenya',
		},
		{
			imgSrc: '/kephislogo.png',
			url: 'https://www.kephis.org/',
			text: 'Kenya Plant Health Inspectorate Service',
		},
		{
			imgSrc: '/nema.png',
			url: 'http://www.nema.go.ke/',
			text: 'National Environment Management Authority',
		},
		{
			imgSrc: '/brandkelogo.png',
			url: 'https://brand.ke/',
			text: 'Kenya Export Promotion and Branding Agency',
		},
	];

	return (
		<div className='w-full lg:my-0 py-8'>
			<div className='grid grid-cols-1 lg:grid-cols-2 bg-bg-primary'>
				<div className='p-8 z-50 flex flex-col justify-center'>
					<p className='font-nunito font-semibold text-lg mb-4'>Our Location</p>
					<div className='font-karla  mb-4'>
						<p>
							Our facility is strategically located in Thika which allows access
							to Kenya&apos;s main Avocado production region. Majority of our
							farms are within a three hour drive to our processing facility.
							This ensures a quick turn around between fruit harvesting and
							dispatch to our valued clients.
						</p>
					</div>
					<p className='font-nunito font-semibold text-lg mb-4'>
						Certification and Compliance
					</p>
					<div className='flex flex-wrap'>
						{complianceItems.map((item, index) => (
							<div key={index} className='p-4 pl-0 w-full sm:w-1/2'>
								<div className='w-auto h-[60px] relative'>
									<Image
										src={item.imgSrc}
										alt={item.text}
										fill
										className='object-contain'
									/>
								</div>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
									className='no-underline text-text-secondary-variant'>
									<p className='font-karla  mt-2'>{item.text}</p>
								</a>
							</div>
						))}
					</div>
				</div>
				<div className='bg-bg-primary p-8 mt-8 lg:mt-0 flex justify-center'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1365036960515!2d37.09660521445856!3d-1.0592562992273171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f27cf825d57%3A0xca23ce45f6566837!2sAfrex%20Gold!5e0!3m2!1sen!2ske!4v1612335172074!5m2!1sen!2ske'
						className='float-right rounded-xl h-full w-full lg:w-4/5 border-0 shadow-2xl min-h-[500px]'
						allowFullScreen={true}
						aria-hidden='false'
						tabIndex={0}
					/>
				</div>
			</div>
		</div>
	);
};

export default Location;
