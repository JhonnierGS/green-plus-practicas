import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Nuestragente = () => 
{
	  return (
		<figure className="relative">
			<div className="flex flex-col lg:hidden px-4 py-10 text-left">
				<h2 className="text-[clamp(28px,2vw,34px)] text-black font-semibold mb-4">
					Nuestra gente
					</h2>
				<p className="w-full text-[clamp(16px,2vw,20px)] text-black font-normal leading-relaxed">
					En Greenplus, con el apoyo de casi 5,000 colaboradores, trabajamos para su bienestar y el de sus familias, creando oportunidades de primer empleo para jóvenes y ayudándoles a desarrollar su potencial.
					</p>
			</div>
			<img 
			src={pathRelative('/img/img2.svg')} 
			alt="Equipo Greenplus"
			className="h-full w-full"/>
		
			<div className="lg:flex lg:flex-col items-center w-full max-w-[753px] text-left absolute right-0 bottom-0 hidden gap-[48px] my-[64px]">
				<h2 className="w-full max-w-[625px]  text-[34px] text-neutral-100 font-semibold leading-[24px] ">
					Nuestra gente
				</h2>
				<p className="w-full max-w-[625px] text-[18px] text-neutral-100 font-normal leading-[23.6px]">
					En Greenplus, con el apoyo de casi 5,000 colaboradores, trabajamos para su bienestar y el de sus familias, creando oportunidades de primer empleo para jóvenes y ayudándoles a desarrollar su potencial.
				</p>
			</div>
		</figure>
	);
	};