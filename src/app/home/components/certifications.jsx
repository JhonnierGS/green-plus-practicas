import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Certifications = () => {
  return (
	<section className="flex flex-col">
		<div className="flex flex-col px-4 pt-[40px] pb-[64px] lg:py-[116.5px] lg:gap-[64px] gap-[32px] w-full mx-auto items-center">
			<h2 className="max-w-[600px] text-center text-[clamp(28px,2vw,34px)] text-neutral-1100 font-semibold leading-[29.33px]">
				Nos certifican los más altos estándares internacionales
			</h2>
			<p className="max-w-[600px] text-center text-[clamp(14px,2vw,18px)] text-neutral-1100 font-regular leading-[19.6px]">
				En GreenPlus contamos con certificaciones que respaldan la labor en cada
				una de nuestras empresas, reflejando nuestro compromiso con la calidad,
				sostenibilidad y responsabilidad para construir país.
			</p>
		</div>
		<div className="w-full max-w-[1920px]  mx-auto flex flex-col lg:flex-row ">
			<div className="w-full flex flex-row ">
				<div className="w-full w-max-[480px] h-[189px] lg:h-[480px] border-1 border-darken-black-29 flex items-center justify-center">
					<figure className='w-full flex justify-center '>
						<img src={pathRelative('/img/globalgap.svg')} alt="" className="max-w-[clamp(136px,20vw,316px)] h-auto" />
					</figure>
				</div>
				<div className="w-full w-max-[480px] h-[189px] lg:h-[480px] border-1 border-darken-black-29 flex items-center justify-center">
					<figure className='w-full flex justify-center  '> 
						<img src={pathRelative('/img/codigopbip.svg')} alt="" className="max-w-[clamp(104px,16vw,256px)] h-auto" />
					</figure>
				</div>
			</div>
			<div className="w-full flex flex-row border border-darken-black-29">
				<div className="w-full w-max-[480px] h-[189px] lg:h-[480px] border-1 border-darken-black-29 flex items-center justify-center">
					<figure className='w-full flex justify-center '>
						<img src={pathRelative('/img/basc.svg')} alt="" className="max-w-[clamp(100px,15vw,252px)] h-auto" />
					</figure>
				</div>
				<div className="w-full w-max-[480px] h-[189px] lg:h-[480px] border-1 border-darken-black-29 flex items-center justify-center">
					<figure className='w-full flex justify-center  '> 
						<img src={pathRelative('/img/rainforest.svg')} alt="" className="max-w-[clamp(92px,14vw,236px)] h-auto" />
					</figure>
				</div>
			</div>
		</div>
	</section>
  );
};