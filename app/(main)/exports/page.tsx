import Exports from '@/components/Exports';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Exports | Afrex Gold Limited',
	description:
		'We process and export a wide variety of produce, all of which are displayed below alongside their respective varieties and availabilities. Reach us in case of any inquiries or questions regarding our produce.',
};

export default function Page() {
	return (
		<main>
			<Exports />
		</main>
	);
}
