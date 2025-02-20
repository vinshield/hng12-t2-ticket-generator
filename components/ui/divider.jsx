import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Divider = React.forwardRef(({ className, ...props }, ref) => {
	const stage = props.stage;
	return (
		<div className='h-1 bg-[#07373F] rounded-full w-full'>
			<div
				className='bg-[#24A0B5] rounded-full h-full'
				style={{ width: `${(stage / 3) * 100}%` }}
			></div>
		</div>
	);
});

export { Divider };
