import react from 'react';

export const Operations = () => {
	  return (
	<section className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-[32px] pt-[40px] pb-[64px] lg:py-[116.5px] lg:px-[80px] px-[16px]">
		<div className="w-full lg:max-w-[632px] lg:h-[340px] flex items-center justify-center">
			<h2 className="w-full max-w-[569px] text-[clamp(28px,2vw,34px)] text-neutral-1100 font-montserrat font-semibold leading-[27px] lg:leading-[32.5px]">
				Nuestras operaciones en Colombia
			</h2>
		</div>
		<div className="w-full lg:max-w-[1128px] lg:h-[340px] flex items-center lg:justify-start justify-center">
			<p className="max-w-[732px] w-full text-[clamp(14px,2vw,18px)] text-neutral-1100 font-montserrat font-regular leading-[20px] lg:leading-[23.6px]">
				Nuestras operaciones se concentran en 9 lugares distintos del país,
				donde están ubicadas las fincas, plantas y oficinas que trabajan día a
				día para hacer llegar nuestros productos y servicios a las diferentes
				latitudes del mundo.
			</p>
		</div>
	</section>);
}