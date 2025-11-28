import React from "react";
import { Arrow, Greenpluslogo, Fbicon, Twicon, Igicon, Yticon, Map, Clock, Phone, Email } from "../../../ui/icons";
import { pathRelative } from "../../../utils/paths";

export const Footer = () => {
  return (
<footer className="h-full w-full bg-primary-1200">
	<div className="flex flex-col gap-[104px] pb-[64px] lg:pb-[208px]">
		<div className="flex justify-center w-full h-full mx-auto ">
				<div className="flex justify-center w-full max-w-[1760px] bg-footer bg-cover h-full lg:mt-[80px] lg:mx-8 ">
						
					<div className=" w-full max-w-[1200px] flex flex-col items-center px-[16px] pt-[40px] pb-[64px] lg:py-[73px] gap-[64px] ">	
						<div className="w-full max-w-[600px] flex flex-col items-center text-center">
							<h2 className="text-[clamp(28px,2vw,34px)] text-neutral-100 font-semibold text-center leading-[clamp(32.25px,2vw,37.6px)]">
							En Greenplus, impulsamos un desarrollo sostenible que equilibra 
							el cuidado ambiental, el bienestar social y el crecimiento económico.
							</h2>
						</div>
						<div className="w-full max-w-[600px] h-[64px] flex flex-row items-center border-b-1 border-whiten-white-29 pb-[8px] gap-[8px]">
							<a href="#contactanos"
								className="w-full max-w-[544px] text-neutral-100 text-[18px] font-semibold leading-[13px]">
								Contáctanos
							</a>
							<button className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-100 transition">
								<figure>
									<Arrow className="w-[20px]" />
								</figure>
							</button>
						</div>
					</div>	
				</div>
				
		</div>

		<div className="flex lg:flex-row flex-col mx-auto px-4 lg:px-8 w-full max-w-[1760px] gap-[38px] lg:gap-[84px]">
			<div className="w-full max-w-[530.67px] flex flex-col gap-[48px]  ">
				<div className="flex w-full max-w-[223px] lg:max-w-[404px]">
					<a href="#" aria-label="Ir al inicio" className="w-full">
						<figure className="text-neutral-100 w-full">
							<Greenpluslogo className="w-full h-auto" />
						</figure>
					</a>
				</div>
					<div className="flex items-center gap-[16px] ">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<figure className='text-neutral-100'>
								<Fbicon className="w-[32px]" />
							</figure>
						</a>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-100 rounded-full"></span>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<figure className='text-neutral-100'>
								<Twicon className="w-[32px]" />
							</figure>
						</a>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-100 rounded-full"></span>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
							<figure className='text-neutral-100'>
								<Igicon className="w-[32px]" />
							</figure>
						</a>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-100 rounded-full"></span>
						<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
							<figure className='text-neutral-100'>
								<Yticon className="w-[32px]" />
							</figure>
						</a>
					</div>
			</div>

			<div className="w-full max-w-[530.67px] flex flex-col  gap-[32px] font-regular">
				<div className="flex items-start lg:pt-[32px] gap-[16px]">
					<figure className='text-neutral-100'>
						<Map className="w-[20px]" />
					</figure>
						<p className="w-full max-w-[176px] text-neutral-100 text-[16px] leading-[15px] ">
							Calle Alfonso XII, 7, 5to Izquierda, Madrid.
						</p>
				</div>
				<div className="flex items-start gap-[16px]">
					<figure className='text-neutral-100'>
						<Clock className="w-[20px]" />
					</figure>
						<p className="w-full max-w-[176px] text-neutral-100 text-[16px] leading-[20px]">
							Lun - Vie 8:00 / 17:00
						</p>
				</div>
				<div className="flex items-start gap-[16px]">
					<figure className='text-neutral-100'>
						<Phone className="w-[20px]" />
					</figure>
						<p className="w-full max-w-[176px] text-neutral-100 text-[16px] leading-[20px] ">
							+57 3212369871
						</p>
				</div>
				<div className="flex items-start gap-[16px]">
					<figure className='text-neutral-100'>
						<Email className="w-[20px]" />
					</figure>
						<p className="w-full max-w-[176px] text-neutral-100 text-[16px] leading-[20px] ">
							ejemplo@correo.com
						</p>
				</div>
			</div>

			<div className="w-full max-w-[530.67px] h-full flex flex-col gap-[16px] pt-[20px] font-semibold ">
				<div className="flex w-full h-[40px] items-center ">
					<a href="/#inicio" className="w-full text-neutral-100 text-[16px] leading-[11px]" aria-label="Ir al inicio">
							Inicio
					</a>
				</div>
				<div className="flex w-full h-[40px] items-center">
					<a href="/quienes-somos" className="w-full text-neutral-100 text-[16px]" aria-label="Ir a quienes somos">
						¿ Quiénes somos ?
					</a>
				</div>
				<div className="flex w-full h-[40px] items-center">
					<p className="w-full text-neutral-100 text-[16px] ">
						Nuestros negocios
					</p>
				</div>
				<div className="flex w-full h-[40px] items-center">
					<p className="w-full text-neutral-100 text-[16px] ">
						Sostenibilidad
					</p>
				</div>
				<div className="flex w-full h-[40px] items-center">
					<p className="w-full text-neutral-100 text-[16px] ">
						Sostenibilidad
					</p>
				</div>
			</div>
		</div>
	</div>	
	<div className="flex w-full items-center h-auto mx-auto px-4 lg:px-8 border-t-1 border-whiten-white-14 ">
		<div className="flex lg:flex-row flex-col w-full max-w-[1200px] h-full mx-auto lg:items-center py-[36px] gap-[40px] text-center">
			<div className="w-full max-w-[750.97px] h-full flex ">
				<p className=" text-neutral-100 text-[14px] font-regular text-start leading-[13.5px] lg:leading-[10px] ">
					Logoipsum - Todos los Derechos Reservados 2023
				</p>
			</div>
			<div className="w-full max-w-[192.58px] h-[32px] flex items-center justify-center">
				<p className=" text-neutral-100 text-[14px] font-semibold ">
					Términos y condiciones
				</p>
			</div>
			<div className="w-full max-w-[179.03px] h-[32px] flex items-center justify-center">
				<p className=" text-neutral-100 text-[14px] font-semibold ">
					Política de privacidad
				</p>
			</div>
		</div>
	</div>
</footer>
  );
}