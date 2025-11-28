import React from "react";

export const About = () => {
	  return (
		<section className="w-full h-[596px] flex flex-col bg-1 bg-no-repeat bg-cover">
			<div className="flex w-full h-[96px]">
			</div>
			<div className="w-full max-w-[1920px] h-full max-h-[500px] flex justify-center mx-auto">
				<div className="flex w-full max-w-[1712px] flex-col lg:flex-row py-[88.5px] lg:pt-[96px] lg:pb-[222px] lg:gap-0 gap-[45px] px-4 lg:px-0">
					<div className="flex w-full max-w-[632px] ">
						<h1 className="w-full max-w-[363px] text-[clamp(32px,6vw,48px)] text-neutral-100 font-semibold leading-[clamp(22px,6vw,46px)] ">
							Quienes somos
						</h1>
					</div>
					<div className="flex w-full max-w-[1080px] h-full max-h-[219px] lg:max-h-[174px]">
						<p className="w-full max-w-[670px] text-[clamp(16px,2vw,20px)] text-neutral-100 font-regular leading-[clamp(24.3px,6vw,29px)]">
							En Greenplus contamos con el respaldo de cerca de 5,000 colaboradores; con ellos y para ellos trabajamos. A lo largo de los años, hemos creado planes y estrategias que generan bienestar para ellos, sus familias y comunidades, promoviendo oportunidades de primer empleo a cientos de jóvenes, permitiéndoles desarrollar su potencial.
						</p>
					</div>
				</div>
			</div>
		</section>
		);
	};
