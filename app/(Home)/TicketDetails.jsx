import { Divider } from "@/components/ui/divider";
import React, { useEffect, useState } from "react";
import TicketFrame from "@/public/ticketFrame.svg";
import Barcode from "@/public/barcode.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TicketDetails = ({ newTicket }) => {
  const [ticketInfo, setTicketInfo] = useState();
  useEffect(() => {
    let ticketData = JSON.parse(localStorage.getItem("ticketData"));
    let formData = JSON.parse(localStorage.getItem("formData"));
    setTicketInfo({ ...ticketData, ...formData });
  }, []);

  useEffect(() => {
    console.log(ticketInfo);
  }, [ticketInfo]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-white">Ready</h1>
          <p className="font-serif"> Step 3/3</p>
        </div>
        <Divider stage={3} />
      </div>
      <h2 className="text-center text-2xl font-bold">Your Ticket is Booked!</h2>

      <p className="text-center">
        You can download or check your email for a copy
      </p>

      <div className="relative m-auto w-full md:w-[50%]">
        <TicketFrame className="relative z-0" />

        <div className="absolute inset-0 m-5">
          <div className="flex flex-col items-center justify-center gap-5 rounded-[16px] border border-[#24A0B5] p-3">
            <h2 className="title text-center text-[34px] leading-none">
              Techember Fest &apos;25
            </h2>
            <div className="text-center text-xs">
              <p className="mb-2">📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>

            <div className="m-auto flex aspect-square w-[60%] items-center justify-center overflow-hidden rounded-[12px] border-4 border-[#24A0B5] bg-[#24A0B5] bg-opacity-50">
              {ticketInfo?.imageUrl && (
                <Image
                  src={ticketInfo.imageUrl}
                  alt="image"
                  width={250}
                  height={250}
                  className="w-full object-contain object-center"
                />
              )}
            </div>
            <div className="w-full rounded-[8px] border-[#133D44] bg-[#08343c] p-1">
              <div className="ticket-info grid w-full overflow-hidden bg-[#133D44]">
                <div>
                  <p>Enter your name</p>
                  <p>{ticketInfo?.name}</p>
                </div>
                <div>
                  <p>Enter your email</p>
                  <p>{ticketInfo?.email}</p>
                </div>
                <div>
                  <p>Ticket Type</p>
                  <p>{ticketInfo?.ticketType}</p>
                </div>
                <div>
                  <p>Ticket for:</p>
                  <p>{ticketInfo?.numOfTickets}</p>
                </div>
                <div>
                  <p>Special Request?</p>
                  <p>{ticketInfo?.about}</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <Barcode className="mx-auto mt-4 w-[90%]" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:flex-row-reverse">
        <Button className="w-full">Download Ticket</Button>
        <Button
          onClick={() => {
            localStorage.clear();
            newTicket();
          }}
          className="w-full"
          type="button"
          variant="outline"
        >
          Book Another Ticket
        </Button>
      </div>
    </>
  );
};

export default TicketDetails;
