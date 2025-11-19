import React from "react";
import { pathRelative } from "../../../utils/paths";
import { Arrow, Fi_1, Fi_2, Fi_3, Fi_4} from "../../../ui/icons";

export const QuienesSomos = () => {
  return (
	<section className='flex justify-center '>
		<div className='w-full max-w-[1920px] flex flex-col-reverse lg:flex-row items-center '>
			<div className="w-full max-w-[1184px] flex flex-col lg:gap-[48px] gap-[32px] items-center mt-[40px] mb-[64px] lg:my-[80px] lg:px-[80px] px-[16px]">
				<div className="w-full max-w-[1024px] ">
					<p className="text-[14px] font-poppins tracking-40 font-semibold text-neutral-1100 leading-[10px]">
						QUIÉNES SOMOS
					</p>
				</div>
				<div className="w-full max-w-[1024px]">
					<h2 className="lg:max-w-[641px] text-[clamp(28px,2vw,34px)] font-montserrat font-semibold text-neutral-1100 lg:leading-[32.5px] leading-[29.3px]">
						Nos dedicamos a invertir y gestionar de una manera eficiente
					</h2>
				</div>
				<div className="w-full max-w-[1024px] h-[72px] flex lg:flex-row gap-[8px] items-center border-b-1 border-darken-black-29 hover:border-secondary-100 transition-colors group">
					<a href="#contacto"
						className="w-full text-[18px] font-montserrat font-semibold text-neutral-1100 leading-[13px] transition group-hover:text-secondary-100">
						Más sobre nosotros
					</a>
					<button className="w-full max-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-secondary-700 transition group-hover:bg-secondary-100">
						<figure>
							<Arrow className="w-[20px]" />
						</figure>
					</button>
				</div>
				<div className="lg:w-full lg:max-w-[1024px] w-[328px] flex flex-col lg:flex-row gap-[48px] font-montserrat text-center lg:text-start">
					<div className="w-full max-w-[488px] flex flex-col gap-[32px] items-center lg:items-start">
						<figure className="text-secondary-700">
							<Fi_1 className="w-[52px]"/>
						</figure>
						<p className="w-full max-w-[288px] text-neutral-1100 text-[clamp(14px,2vw,18px)] font-regular leading-[16px] lg:leading-[23.6px]">
							Tenemos mas de 35 años de experiencia gestionando inversiones
							eficientes.
						</p>
					</div>
					<div className="w-full max-w-[488px] flex flex-col gap-[32px] items-center lg:items-start">
						<figure className="text-secondary-700">
							<Fi_2 className="w-[52px]"/>
						</figure>
						<p className="w-full max-w-[288px] text-neutral-1100 text-[clamp(14px,2vw,18px)] font-regular leading-[16px] lg:leading-[23.6px]">
							Gestionamos e invertimos con un enfoque claro en la
							sostenibilidad.
						</p>
					</div>
				</div>
				<div className="lg:w-full lg:max-w-[1024px] w-[328px] flex flex-col lg:flex-row gap-[48px] font-montserrat text-center lg:text-start">
					<div className="w-full max-w-[488px] flex flex-col gap-[32px] items-center lg:items-start">
						<figure className="text-secondary-700">
							<Fi_3 className="w-[52px]"/>
						</figure>
						<p className="w-full max-w-[288px] text-neutral-1100 text-[clamp(14px,2vw,18px)] font-regular leading-[16px] lg:leading-[23.6px]">
							Nuestro trabajo opera a través de prácticas éticas y
							transparentes.
						</p>
					</div>
					<div className="w-full max-w-[488px] flex flex-col gap-[32px] items-center lg:items-start">
						<figure className="text-secondary-700">
							<Fi_4 className="w-[52px]"/>
						</figure>
						<p className="w-full max-w-[288px] text-neutral-1100 text-[clamp(14px,2vw,18px)] font-regular leading-[16px] lg:leading-[23.6px]">
							Tenemos mas de 35 años de experiencia gestionando inversiones
							eficientes.
						</p>
					</div>
				</div>
			</div>
			<div className="flex ">
				<figure className='w-full'>
				<img src={pathRelative('/img/fi.svg')} alt="" />
				</figure>
			</div>
		</div>
	</section>
  )
}