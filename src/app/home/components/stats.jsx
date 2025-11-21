import React from "react";

export const Stats = () => {
  return (
	<section className="flex lg:flex-row flex-col justify-center items-center font-montserrat lg:gap-[104px] gap-[48px] px-[80px] pt-[40px] pb-[64px] lg:py-[96.5px]">
			<div className="w-full lg:max-w-[284px] h-full flex flex-col items-center lg:items-start gap-[24px]">
				<h3 className="text-[34px] font-semibold text-neutral-1100 leading-[24px]">+5000</h3>
				<p className="text-[18px] font-semibold text-neutral-1100 leading-[13px]">Empleados</p>
			</div>
				<span className="hidden lg:block w-px h-[94px] bg-darken-black-29"></span>
			<div className="w-full lg:max-w-[284px] h-full flex flex-col items-center lg:items-start gap-[24px]">
				<h3 className="text-[34px] font-semibold text-neutral-1100 leading-[24px]">+40</h3>
				<p className="text-[18px] font-semibold text-neutral-1100 leading-[13px]"> Años de experiencia</p>
			</div>
				<span className="hidden lg:block w-px h-[94px] bg-darken-black-29"></span>
			<div className="w-full lg:max-w-[284px] h-full flex flex-col items-center lg:items-start gap-[24px]">
				<h3 className="text-[34px] font-semibold text-neutral-1100 leading-[24px]">+10</h3>
				<p className="text-[18px] font-semibold text-neutral-1100 leading-[13px]">Empresas</p>
			</div>
				<span className="hidden lg:block w-px h-[94px] bg-darken-black-29"></span>
			<div className="w-full lg:max-w-[284px] h-full flex flex-col items-center lg:items-start gap-[24px]">
				<h3 className="text-[34px] font-semibold text-neutral-1100 leading-[24px]">+200</h3>
				<p className="text-[18px] font-semibold text-neutral-1100 leading-[13px]">Productos</p>
			</div>
	</section>
  )
}