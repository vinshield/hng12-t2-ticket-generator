import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const TicketSelect = React.forwardRef(({ className, ...props }, ref) => {
  const type = props.type;
  const ticketTypes = {
    free: {
      price: "free",
      access: "regular access",
      qty: "20/52",
    },
    vip: {
      price: "$150",
      access: "vip access",
      qty: "20/52",
    },
    vvip: {
      price: "$150",
      access: "vvip access",
      qty: "20/52",
    },
  };

  return (
    <div
      className={cn(
        "cursor-pointer rounded-[12px] border-2 border-[#197686] p-3 transition-colors hover:bg-[#2C545B] hover:text-white",
        className,
      )}
    >
      <p className="mb-3 text-[24px] font-semibold capitalize">
        {ticketTypes[type].price}
      </p>
      <p className="uppercase"> {ticketTypes[type].access}</p>
      <p className="text-sm">{ticketTypes[type].qty}</p>
    </div>
  );
});

export { TicketSelect };
