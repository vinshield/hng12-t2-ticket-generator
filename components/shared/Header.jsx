import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const headerLinks = [
	{ name: "Events", url: "/" },
	{ name: "My Tickets", url: "/events" },
	{ name: "About", url: "/events" },
];

const Header = () => {
	return (
		<div className='flex justify-center'>
			<div id='header'>
				<Logo className='w-24 h-auto' />
				<nav>
					<ul className='text-white justify-between hidden md:flex gap-5 '>
						{headerLinks.map((item) => (
							<li key={item.name}>
								<Link href={item.url} className='whitespace-nowrap'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div>
					<Button variant='secondary' size='lg'>
						My Tickets <MoveRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
