"use client";

import { TicketSelect } from "@/components/shared/TicketType";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { useState, useEffect } from "react";

export default function TicketSelection({ onSubmit }) {
  const [selected, setSelected] = useState("free");

  const [ticketData, setTicketData] = useState({
    ticketType: "free",
    numOfTickets: "1",
  });

  // Load saved data when component mounts
  useEffect(() => {
    const savedTicketData = localStorage.getItem("ticketData");
    if (savedTicketData) {
      setTicketData(JSON.parse(savedTicketData));
      setSelected(JSON.parse(savedTicketData).ticketType);
    }
  }, []);

  // Update state when inputs change
  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    // alert("Form data saved!");
    // console.log(localStorage.getItem("formData"));
    onSubmit();
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-white">Ticket Selection</h1>
        <p className=""> Step 1/3</p>
        <Divider stage={1} />
      </div>
      <div className="info-card p-3 text-center md:px-28 md:py-5">
        <div className="mb-8">
          <h2 className="title text-[45px] leading-none md:text-[62px]">
            Techember Fest &apos;25
          </h2>
          <p className="font-roboto text-sm">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
        </div>
        <div className="font-roboto text-sm">
          <p>📍 [Event Location]</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>
      <Divider stage={0} />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="ticket-type">Ticket Type</label>

            <div className="flex flex-col gap-5 rounded-[24px] border border-[#07373F] bg-[#052228] p-3 md:flex-row">
              {["free", "vip", "vvip"].map((type) => (
                <label key={type} className="w-full">
                  <input
                    type="radio"
                    name="ticketType"
                    value={type}
                    className="hidden"
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
          <div className="flex flex-col gap-2">
            <label htmlFor="quantity">Number of Tickets</label>
            <input
              type="number"
              name="numOfTickets"
              id="quantity"
              value={ticketData.numOfTickets}
              className="w-full rounded-lg border border-[#00A3A1] bg-[#0E464F] p-2 text-white"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col gap-3 md:flex-row-reverse">
            <Button className="w-full" type="submit">
              Next
            </Button>
            <Button className="w-full" type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
