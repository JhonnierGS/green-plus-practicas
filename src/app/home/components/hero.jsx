
import React from 'react'

import { Arrow } from '../../../ui/icons';

export const Hero = () => {
  return (
    <>
    <section className='h-full w-full bg-hero bg-cover bg-center flex'>
		
    <div className="lg:justify-center flex flex-col items-center gap-[64px] my-[214px] mx-auto font-montserrat">
		
			<div className=" w-full max-w-[328px] lg:max-w-[1016px] flex justify-center items-center ">
				<h1 className="text-[clamp(40px,6vw,68px)] font-semibold text-neutral-100 text-center ">
					Una apuesta por Colombia, para el mundo
				</h1>
			</div>
			<div className="paragraph-container w-[328px] lg:w-[537px] flex justify-center items-center">
				<p className="text-[clamp(16px,4vw,20px)] font-normal text-neutral-100 text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		
			<div className="button-container w-[328px] lg:w-[491px] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 mt-6">
				<a href="#comienza-ahora"
					className="w-full lg:w-[247px] h-[64px] gap-[8px] inline-flex justify-center items-center rounded-max bg-secondary-900 px-5 py-2.5 text-neutral-100 text-[18px] font-semibold shadow hover:bg-secondary-100 transition">
					Comienza ahora 
					<figure>
						<Arrow className="w-[24px]"/>
					</figure>
				</a>
				
				<a href="#mas-informacion"
					className="w-full lg:w-[220px] h-[64px] inline-flex justify-center items-center rounded-max bg-neutral-100 px-5 py-2.5 text-neutral-1000 text-[18px] font-semibold shadow">
					Más informacion
				</a>
			</div>
		</div>
    </section>
    </>
  )
}
