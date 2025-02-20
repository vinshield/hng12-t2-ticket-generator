"use client";

import { TicketSelect } from "@/components/shared/TicketType";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { useState, useEffect } from "react";

export default function TicketSelection() {
	const [selected, setSelected] = useState("free");

	const [formData, setFormData] = useState({
		ticketType: "",
		numOfTickets: "",
	});

	// Load saved data when component mounts
	useEffect(() => {
		const savedData = localStorage.getItem("formData");
		if (savedData) {
			setFormData(JSON.parse(savedData));
			setSelected(JSON.parse(savedData).ticketType);
		}
	}, []);

	// Update state when inputs change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("formData", JSON.stringify(formData));
		alert("Form data saved!");
		console.log(localStorage.getItem("formData"));
	};

	return (
		<div className='flex flex-col mx-auto relative bg-[#08252B] rounded-[32px] p-8 w-[90%] gap-7'>
			<div className='grid gap-2'>
				<h1 className='text-white'>Ticket Selection</h1>
				<p className=''> Step 1/3</p>
				<Divider stage={1} />
			</div>
			<div className='info-card p-3 text-center'>
				<div className='mb-8'>
					<h2 className='title text-[45px]'>Techember Fest &apos;25</h2>
					<p className='font-roboto text-sm'>
						Join us for an unforgettable experience at [Event Name]! Secure your
						spot now.
					</p>
				</div>
				<div className='font-roboto text-sm'>
					<p>📍 [Event Location]</p>
					<p>March 15, 2025 | 7:00 PM</p>
				</div>
			</div>
			<Divider stage={0} />
			<form onSubmit={handleSubmit}>
				<div className='flex flex-col gap-7'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='ticket-type'>Ticket Type</label>

						<div className='flex flex-col gap-5 bg-[#052228] p-3 rounded-[24px] border border-[#07373F]'>
							{["free", "vip", "vvip"].map((type) => (
								<label key={type}>
									<input
										type='radio'
										name='ticketType'
										value={type}
										className='hidden'
										checked={selected === type}
										onChange={(e) => {
											setSelected(type);
											handleChange(e);
										}}
									/>
									<TicketSelect
										onClick={() => setSelected(type)}
										className={`${
											selected === type ? "bg-[#12464E] hover:bg-[#12464E]" : ""
										} `}
										type={type}
									/>
								</label>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='quantity'>Number of Tickets</label>
						<input
							type='number'
							name='numOfTickets'
							id='quantity'
							value={formData.numOfTickets}
							className='w-full bg-[#0E464F] border border-[#00A3A1] text-white p-2 rounded-lg'
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col gap-3'>
						<Button type='submit'>Next</Button>
						<Button type='button' variant='outline'>
							Cancel
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
