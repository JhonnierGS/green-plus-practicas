import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Nuestrosvalores = () => {
	  return (
	<section >
		<div className="w-full max-w-[1920px] flex justify-center mx-auto">
			<div className="flex flex-col w-full max-w-[960px] lg:items-center gap-[32px] lg:gap-[48px] mt-[40px] mb-[64px] lg:my-[191px] mx-4 lg:mx-8">			
				<h2 className="text-[clamp(28px,2vw,34px)] font-semibold leading-[24px]">
					Nuestros valores
				</h2>			
				<p className="w-full max-w-[960px] lg:text-center text-[clamp(16px,2vw,20px)] text-black font-normal leading-[23px] ">
					Fomentamos la inclusión de la mujer en roles que tradicionalmente son ocupados por hombres, abriendo las puertas de nuevas oportunidades.
				</p>
			</div>
		</div>

		<div className="flex flex-col justify-center lg:flex-row max-w-full bg-neutral-50">
			<div className="flex-1 flex-col lg:pl-[64px] lg:pt-[104px] pl-[16px] pt-[48px] gap-[40px] border-1 border-darken-black-29">
				<div className="flex flex-col gap-[32px] pb-[40px]">
					<h2 className="text-[clamp(28px,4vw,73px)] font-medium text-neutral-1200/30 leading-[clamp(20px,6vw,51px)] ">
						1.
					</h2>	
					<p className="max-w text-[clamp(24px,4vw,32px)] font-semibold text-left leading-[clamp(20px,2vw,24px)] ">
						Inclusión y Diversidad
					</p>
				</div>
					<img src={pathRelative('/img/ID1.svg')} alt="inclusion y diversidad"
					className="w-full h-auto"/>
			</div>
			<div className="flex-1 flex-col lg:pl-[64px] lg:pt-[104px] pl-[16px] pt-[48px] gap-[40px] border-1 border-darken-black-29">
				<div className="flex flex-col gap-[32px] pb-[40px] ">
					<h2 className="text-[clamp(28px,4vw,73px)] font-medium text-neutral-1200/30 leading-[clamp(20px,6vw,51px)] ">
						2.
					</h2>	
					<p className="max-w text-[clamp(24px,4vw,32px)] font-semibold text-left leading-[clamp(20px,2vw,24px)]">
						Inclusión y Diversidad
					</p>
				</div>
					<img src={pathRelative('/img/ID2.svg')} alt="inclusion y diversidad"
					className="w-full "/>
			</div>
		</div>

		<div  className="flex flex-col justify-center lg:flex-row max-w-full bg-neutral-50">
			<div className="flex-1 flex-col lg:pl-[64px] lg:pt-[104px] pl-[16px] pt-[48px] gap-[40px] border-1 border-darken-black-29">
				<div className="flex flex-col gap-[32px] pb-[40px]">
					<h2 className="text-[clamp(28px,4vw,73px)] font-medium text-neutral-1200/30 leading-[clamp(20px,6vw,51px)] ">
						3.
					</h2>	
					<p className="max-w text-[clamp(24px,4vw,32px)] font-semibold text-left leading-[clamp(20px,2vw,24px)] ">
						Inclusión y Diversidad
					</p>
				</div>
					<img src={pathRelative('/img/ID3.svg')} alt="inclusion y diversidad"
					className="w-full h-auto"/>
			</div>
			<div className="flex-1 flex-col lg:pl-[64px] lg:pt-[104px] pl-[16px] pt-[48px] border-1 border-darken-black-29">
				<div className="flex flex-col gap-[32px] pb-[40px] ">
					<h2 className="text-[clamp(28px,4vw,73px)] font-medium text-neutral-1200/30 leading-[clamp(20px,6vw,51px)] ">
						4.
					</h2>	
					<p className="max-w text-[clamp(24px,4vw,32px)] font-semibold text-left leading-[clamp(20px,2vw,24px)] ">
						Inclusión y Diversidad
					</p>
				</div>
					<img src={pathRelative('/img/ID4.svg')} alt="inclusion y diversidad"
					className="w-full h-auto"/>
			</div>
		</div>

		<div className="w-full flex justify-center mx-auto bg-neutral-50">
			<div className="flex mt-[95.5px] mb-[119.5px] lg:my-[156px] mx-4 lg:mx-8 ">
				<p className="w-full max-w-[1102px] text-center text-[clamp(28px,3.5vw,34px)] text-neutral-1100 font-semibold leading-[clamp(33px,4vw,37.6px)] ">
					La cultura de sostenibilidad, transparencia y construcción de una sociedad y un país no solo forman parte de nuestro ADN, también se respira en cada una de nuestras operaciones, gracias al compromiso de todos los colaboradores de GreenLand.
				</p>
			</div>
		</div>
	</section>
	  );
	}