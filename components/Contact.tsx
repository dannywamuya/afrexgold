'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FocusedInputs {
	name: boolean;
	email: boolean;
	subject: boolean;
	message: boolean;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [focusedInputs, setFocusedInputs] = useState<FocusedInputs>({
		name: false,
		email: false,
		subject: false,
		message: false,
	});

	const handleFocus = (field: keyof FocusedInputs) => {
		setFocusedInputs((prev) => ({ ...prev, [field]: true }));
	};

	const handleBlur = (field: keyof FocusedInputs) => {
		setFocusedInputs((prev) => ({ ...prev, [field]: false }));
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement your email sending logic here
		console.log('Form submitted:', formData);
	};

	return (
		<section
			className='bg-bg-primary px-8 md:px-16 m-0 min-h-screen overflow-hidden'
			id='contact'>
			<p className='float-right p-0 mt-2 font-karla font-extrabold text-4xl text-bg-primary-variant transition-all duration-1000'>
				Contact Us
			</p>

			<div className='py-8 relative w-[100%] overflow-hidden flex items-center justify-center transition-all duration-300'>
				<div className='bg-bg-primary shadow-lg w-full rounded-lg z-50 overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-300'>
					<div className='bg-bg-secondary p-8 text-bg-primary flex flex-col justify-between'>
						<div>
							<h5 className='w-full text-left mb-6 font-nunito text-base'>
								Get In Touch
							</h5>
							<p className='w-full mb-6 font-karla '>
								Let&apos;s work together. Reach out in case of any inquiries,
								messages or questions.
							</p>
						</div>
						<div className='flex flex-col'>
							{[
								{ icon: '/pin.png', text: 'Makongeni, Thika' },
								{ icon: '/phonecall.png', text: '+254-721-377997' },
								{ icon: '/email.png', text: 'shiro@afrexgold.co.ke' },
							].map((item, index) => (
								<div key={index} className='flex items-center my-3'>
									<Image
										src={item.icon}
										width={20}
										height={20}
										className='mr-3'
										alt=''
									/>
									<p className='font-karla '>{item.text}</p>
								</div>
							))}
						</div>
					</div>

					<div className='bg-bg-primary relative'>
						<form
							onSubmit={sendMail}
							className='px-8 py-6 z-10 overflow-hidden relative'>
							<p className='hidden success-text'>
								Your message is being delivered
							</p>
							<p className='hidden success-text2'>Please fill in all fields</p>

							{(['name', 'email', 'subject'] as const).map((field) => (
								<div key={field} className='relative my-4'>
									<input
										type={field === 'email' ? 'email' : 'text'}
										name={field}
										className={`w-full outline-none border-2 border-bg-primary-variant bg-transparent py-2 px-4 text-text-primary font-karla  rounded-lg transition-all duration-300 ${
											focusedInputs[field] ? 'placeholder-transparent' : ''
										}`}
										id={field}
										placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
										onFocus={() => handleFocus(field)}
										onBlur={() => handleBlur(field)}
										onChange={handleChange}
										value={formData[field]}
										required
									/>
									<span
										className={`absolute top-0 left-4 -translate-y-1/2  font-karla text-gray-500 px-2 pointer-events-none z-50 bg-bg-primary transition-all duration-500 delay-100 ${
											focusedInputs[field] ? 'block' : 'hidden'
										}`}>
										{field.charAt(0).toUpperCase() + field.slice(1)}
									</span>
								</div>
							))}

							<div className='relative my-4'>
								<textarea
									name='message'
									className={`w-full outline-none border-2 border-bg-primary-variant bg-transparent py-3 px-5 text-text-primary font-karla  rounded-lg min-h-[170px] resize-none transition-all duration-300 ${
										focusedInputs.message ? 'placeholder-transparent' : ''
									}`}
									id='message'
									placeholder='Message'
									onFocus={() => handleFocus('message')}
									onBlur={() => handleBlur('message')}
									onChange={handleChange}
									value={formData.message}
									required></textarea>
								<span
									className={`absolute top-0 left-4 -translate-y-1/2  font-karla text-gray-500 px-2 pointer-events-none z-50 bg-bg-primary transition-all duration-500 delay-100 ${
										focusedInputs.message ? 'block' : 'hidden'
									}`}>
									Message
								</span>
							</div>

							<input
								type='submit'
								className='bg-transparent font-karla font-semibold text-gray-500 py-2 px-3 border-2 border-bg-primary-variant rounded-full transition-all duration-600 hover:bg-bg-primary-variant hover:text-bg-primary cursor-pointer'
								value='Submit'
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
