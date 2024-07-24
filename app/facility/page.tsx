import Location from '@/components/Location';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Our Packouse | Afrex Gold Limited',
	description:
		"Our facility is strategically located in Thika which allows access to Kenya's main Avocado production region. Majority of our farms are within a three hour drive to our processing facility. This ensures a quick turn around between fruit harvesting and dispatch to our valued clients.",
};

export default function Page() {
	return (
		<main>
			<Location />
		</main>
	);
}
