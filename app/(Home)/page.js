"use client";

import React, { useState } from "react";
import TicketSelection from "./TicketSelection";

const Home = () => {
	const [step, setStep] = useState("first");
	return <TicketSelection />;
};

export default Home;
