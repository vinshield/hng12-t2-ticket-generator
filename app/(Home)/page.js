"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";

const Home = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [step, setStep] = useState(searchParams.get("step") || "second");
	const [username, setUsername] = useState(searchParams.get("username") || "");

	useEffect(() => {
		const urlStep = searchParams.get("step");
		const urlUsername = searchParams.get("username");

		if (urlStep) {
			setStep(urlStep);
		}
		if (urlUsername) {
			setUsername(urlUsername);
			// Clear the stored username from localStorage
			localStorage.removeItem("pendingUsername");
		}
	}, [searchParams]);

	const handleTicketSelectionSubmit = () => {
		setStep("second");
	};

	const changeTicketType = () => {
		setStep("first");
	};

	const handleInfoSubmit = () => {
		setStep("done");
	};

	return (
		<div className='flex flex-col mx-auto relative bg-[#08252B] border border-[#0E464F] rounded-[32px] p-8 w-[90%] gap-7'>
			{step === "first" && (
				<TicketSelection onSubmit={handleTicketSelectionSubmit} />
			)}
			{step === "second" && (
				<AttendeeDetails
					infoCollected={handleInfoSubmit}
					goBack={changeTicketType}
				/>
			)}
		</div>
	);
};

export default Home;
