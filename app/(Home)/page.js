"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import TicketDetails from "./TicketDetails";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(searchParams.get("step") || "first");
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
    <div className="relative mx-auto flex w-[90%] max-w-[700px] flex-col gap-7 rounded-[32px] border border-[#0E464F] bg-[#08252B] p-8 md:w-[50vw]">
      {step === "first" && (
        <TicketSelection onSubmit={handleTicketSelectionSubmit} />
      )}
      {step === "second" && (
        <AttendeeDetails
          infoCollected={handleInfoSubmit}
          goBack={changeTicketType}
        />
      )}
      {step === "done" && <TicketDetails />}
    </div>
  );
};

export default Home;
