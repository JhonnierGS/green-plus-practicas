import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Certifications = () => {
  return (
	<section className="flex flex-col">
		<div className="flex flex-col px-4 pt-[40px] pb-[64px] lg:py-[116.5px] lg:gap-[64px] gap-[32px] w-full mx-auto items-center">
			<h2 className="max-w-[600px] text-center text-[clamp(28px,2vw,34px)] text-neutral-1100 font-montserrat font-semibold leading-[29.33px]">
				Nos certifican los más altos estándares internacionales
			</h2>
			<p className="max-w-[600px] text-center text-[clamp(14px,2vw,18px)] text-neutral-1100 font-montserrat font-regular leading-[19.6px]">
				En GreenPlus contamos con certificaciones que respaldan la labor en cada
				una de nuestras empresas, reflejando nuestro compromiso con la calidad,
				sostenibilidad y responsabilidad para construir país.
			</p>
		</div>
		<div className="w-full lg:h-[480px] h-[378px] grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 border border-darken-black-29">
			<div className="border border-darken-black-29 flex items-center justify-center">
				<figure className='w-full flex justify-center '>
					<img src={pathRelative('/img/globalgap.svg')} alt="" className="" />
				</figure>
			</div>
			<div className="border border-darken-black-29 flex items-center justify-center">
				<figure className='w-full flex justify-center  '> 
					<img src={pathRelative('/img/codigopbip.svg')} alt="" />
				</figure>
			</div>
			<div className="border border-darken-black-29 flex items-center justify-center">
				<figure className='w-full flex justify-center '>
					<img src={pathRelative('/img/basc.svg')} alt="" />
				</figure>
			</div>
			<div className="border border-darken-black-29 flex items-center justify-center">
				<figure className='w-full flex justify-center'>
					<img src={pathRelative('/img/rainforest.svg')} alt="" />
				</figure>
			</div>
		</div>
	</section>
  );
};