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
				"border-[#197686] border-2 rounded-[12px] p-5 hover:bg-[#2C545B] hover:text-white cursor-pointer transition-colors ",
				className
			)}
		>
			<p className='text-[24px] mb-3 font-semibold capitalize'>
				{ticketTypes[type].price}
			</p>
			<p className='uppercase'> {ticketTypes[type].access}</p>
			<p className='text-sm'>{ticketTypes[type].qty}</p>
		</div>
	);
});

export { TicketSelect };
