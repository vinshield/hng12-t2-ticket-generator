import Header from "@/components/shared/Header";
import { Divider } from "@/components/ui/divider";

export default function Home() {
	return (
		<div className='flex mx-auto relative bg-[#0E464F] rounded-[32px] flex-col p-8 w-[90%]'>
			<div className='grid gap-2'>
				<h1 className='text-white'>Ticket Selection</h1>
				<p className=''> Step 1/3</p>
				<Divider stage={1} />
			</div>
			<div className='info-card text-center'>
				<div>
					<h2 className='title text-[45px]'>Techember Fest &apos;25</h2>
					<p>
						Join us for an unforgettable experience at [Event Name]! Secure your
						spot now.
					</p>
				</div>
				<div>
					<p>📍 [Event Location]</p>
					<p>March 15, 2025 | 7:00 PM</p>
				</div>
			</div>
			<Divider stage={0} />
		</div>
	);
}
