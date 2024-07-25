import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Afrex Gold',
	description:
		'Proudly Kenyan exporters of fresh fruits and vegetables for more than 20 years!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`fade-in`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
