import React from "react";
import { Arrow, Greenpluslogo, Fbicon, Twicon, Igicon, Yticon, Menuicon } from "../../../ui/icons";

export const Footer = () => {
  return (
	<footer className="h-full w-full "
		style="background-image: url('/assets/img/footer1.svg');">
	<section className="flex justify-center w-full h-full mx-auto">
			<div className="relative grid place-items-center w-full max-w-[1760px] h-full lg:mt-[80px] mx-auto ">
				<img src="/assets/img/footer2.svg"
					alt=""
					className="w-full h-full object-cover col-start-1 row-start-1"/>
					
				<div className="col-start-1 row-start-1 w-full pt-10 pb-16 px-4 sm:px-6">	
					<div className="w-full max-w-[600px] px-4 sm:px-6 mx-auto flex flex-col items-center text-center">
						<h2 className="text-[clamp(28px,2vw,34px)] text-white font-montserrat font-semibold text-center">
						En Greenplus, impulsamos un desarrollo sostenible que equilibra 
						el cuidado ambiental, el bienestar social y el crecimiento económico.
						</h2>
					</div>
					<div className="w-full max-w-[600px] px-4 sm:px-6 mx-auto flex flex-row items-center border-b border-white16 mt-8 pb-3">
						<a href="#contacto" 
						className="flex-1 text-white text-[18px] font-medium ">
						Contáctanos
						</a>
						<button 
						className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-100 transition">	
						<figure>
							<Arrow classNameName="w-[20px]" />
						</figure>
						</button>
					</div>
				</div>	
			</div>
	</section>

	<section className="flex lg:flex-row flex-col  justify-between w-full max-w-[1760px] mx-auto lg:mt-[104px] mt-[40px] px-4 sm:px-6">
		<div className="w-full lg:max-w-[530.67px] max-w-[328px] h-full">
			<div>
				<a href="#" aria-label="Ir al inicio">
				</a>
			</div>
				<div className="flex items-center gap-[16px] lg:mt-[48px] mt-[16px]">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
						
					</a>
						<span className="inline-block w-[5px] h-[5px] bg-white rounded-full"></span>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
						
					</a>
						<span className="inline-block w-[5px] h-[5px] bg-white rounded-full"></span>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						
					</a>
						<span className="inline-block w-[5px] h-[5px] bg-white rounded-full"></span>
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
						
					</a>
				</div>
		</div>

		<div className="w-full lg:max-w-[530.67px] max-w-[328px] h-full flex flex-col gap-[32px] mt-[38px] lg:mt-0 font-montserrat">
			<div className="flex items-start lg:mt-[32px]">
				<img src="/assets/icon/map.svg" alt="map-direction" className="mr-[16px] max-w-[20px]" />
					<p className="w-full max-w-[176px] text-white text-[16px] font-normal leading-[15px] ">
						Calle Alfonso XII, 7, 5to Izquierda, Madrid.
					</p>
			</div>
			<div className="flex items-start">
				<img src="/assets/icon/clock.svg" alt="map-direction" className="mr-[16px] max-w-[20px]" />
					<p className="w-full max-w-[176px] text-white text-[16px] font-normal leading-[20px]">
						Lun - Vie 8:00 / 17:00
					</p>
			</div>
			<div className="flex items-start">
				<img src="/assets/icon/phone.svg" alt="map-direction" className="mr-[16px] max-w-[20px]" />
					<p className="w-full max-w-[176px] text-white text-[16px] font-normal leading-[20px] ">
						+57 3212369871
					</p>
			</div>
			<div className="flex items-start">
				<img src="/assets/icon/email.svg" alt="map-direction" className="mr-[16px] max-w-[20px]" />
					<p className="w-full max-w-[176px] text-white text-[16px] font-normal leading-[20px] ">
						ejemplo@correo.com
					</p>
			</div>
		</div>

		<div className="w-full lg:max-w-[530.67px] max-w-[328px] h-full flex flex-col gap-[16px] mt-[38px] lg:mt-0 mb-[64px] ">
			<div className="flex w-full h-[40px] items-center lg:mt-[20px]">
				<a href="/#inicio" className="w-full text-white text-[16px] font-normal leading-[11px]" aria-label="Ir al inicio">
						Inicio
				</a>
			</div>
			<div className="flex w-full h-[40px] items-center">
				<a href="/quienes-somos" className="w-full text-white text-[16px] font-normal" aria-label="Ir a quienes somos">
					¿ Quiénes somos ?
				</a>
			</div>
			<div className="flex w-full h-[40px] items-center">
				<p className="w-full text-white text-[16px] font-normal ">
					Nuestros negocios
				</p>
			</div>
			<div className="flex w-full h-[40px] items-center">
				<p className="w-full text-white text-[16px] font-normal ">
					Sostenibilidad
				</p>
			</div>
		</div>
	</section>

	<section className="flex w-full items-center h-auto mx-auto font-montserrat border-t border-white08 lg:mt-[208px]">
		<div className="flex lg:flex-row flex-col w-full lg:max-w-[1200px] h-full mx-auto items-center my-[36px] gap-[40px] text-center">
			<div className="w-full h-full">
				<p className=" lg:w-[750.97px] w-[328px] text-white text-[14px] font-normal mx-auto text-start">
					Logoipsum - Todos los Derechos Reservados 2023
				</p>
			</div>
			
				<p className="w-full max-w-[192.58px] h-[32px] flex items-center mx-auto text-start text-white text-[14px] font-semibold ">
					Términos y condiciones
				</p>
			
			<div className="w-full h-[32px] flex items-center">
				<p className="w-full text-white text-[14px] font-semibold ">
					Política de privacidad
				</p>
			</div>
		</div>
	</section>
</footer>
  );
}