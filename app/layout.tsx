import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Afrex Gold Limited',
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
			<body className={`${inter.className} fade-in`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
