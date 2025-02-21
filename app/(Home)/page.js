"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import TicketDetails from "./TicketDetails";

const Home = () => {
  const router = useRouter();

  const [step, setStep] = useState("first");

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
