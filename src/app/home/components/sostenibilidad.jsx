import React from "react";
import { Arrow } from "../../../ui/icons";

export const Sostenibilidad = () => {
	  return (
		<section className="flex flex-col lg:gap-[80px] gap-[48px] py-[80px] mx-auto bg-neutral-50">
			<div className="flex lg:flex-row flex-col w-full lg:px-[80px] px-[16px] lg:gap-[104px] gap-[48px]">
				<div className="flex flex-col gap-[64px] lg:gap-[301px] items-center">
					<div className="w-full h-full flex flex-col font-semibold lg:gap-[52px] gap-[32px]">
						<p className="text-[14px] font-poppins text-neutral-1100 leading-[10px] tracking-40">
							SOSTENIBILIDAD
						</p>
						<h2
							className="lg:w-[419px] text-[clamp(28px,2vw,34px)] font-montserrat text-neutral-1100 lg:leading-[35.3px] leading-[29.3px]">
							Apostamos al desarrollo sostenible desde diversos frentes
						</h2>
					</div>
					<div className="w-full h-[40px] flex flex-row gap-[8px] items-center">
						<a href="#contacto"
							className="w-[635.33px] text-[18px] font-montserrat font-semibold text-neutral-1100 leading-[13px] hover:text-secondary-100 transition">
							Más sobre nosotros
						</a>
						<button className="w-full max-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-100 transition">
							<figure>
								<Arrow className="w-[20px]" />
							</figure>
						</button>
					</div>
				</div>
				<div className="w-full lg:flex-1 aspect-video">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/XXXXXXXX"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						referrerPolicy="no-referrer"
					></iframe>

				</div>
			</div>
			<div className="w-full flex flex-col lg:px-[80px] px-[16px] gap-[64px] mx-auto font-montserrat">
				<div className="w-full h-full flex lg:flex-row flex-col lg:gap-[96px] gap-[32px] lg:pt-[45px] pt-[24px] lg:pb-[61px] pb-[40px] lg:items-center border-b-1 border-darken-black-29"> 
					<h2 className="w-[190px] text-[48px] font-semibold text-neutral-1100 leading-[34px]">
						390.520
					</h2>
					<a className="w-full text-[24px] font-semibold text-neutral-1100 lg:text-right text-left leading-[23px]"> 
						Hectareas tratadas con control fitosanitario
					</a>
				</div>
				<div className="w-full h-full flex lg:flex-row flex-col lg:gap-[96px] gap-[32px] lg:pt-[45px] pt-[24px] lg:pb-[61px] pb-[40px] lg:items-center border-b-1 border-darken-black-29">
					<h2 className="w-[190px] text-[48px] font-semibold text-neutral-1100 leading-[34px]">
						15.000
					</h2>
					<a className="w-full text-[24px] font-semibold text-neutral-1100 lg:text-right text-left leading-[23px]">
						Empleos directos generados
					</a>
				</div>
				<div className="w-full h-full flex lg:flex-row flex-col lg:gap-[96px] gap-[32px] lg:pt-[45px] pt-[24px] lg:pb-[61px] pb-[40px] lg:items-center border-b-1 border-darken-black-29">
					<h2	className="w-[190px] text-[48px] font-semibold text-neutral-1100 leading-[34px]">
						16.218
					</h2>
					<a className="w-full text-[24px] font-semibold text-neutral-1100 lg:text-right text-left leading-[23px]">
						Millones de pesos en inversión social
					</a>
				</div>
			</div>
		</section>
		);
	};