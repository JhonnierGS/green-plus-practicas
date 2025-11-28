import React from 'react';
import { pathRelative } from '../../../utils/paths';
import { Ubicacion } from '../../../ui/icons';

export const Operations = () => {

	  return (
	<section className="">
		<div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-[32px] pt-[40px] pb-[64px] lg:py-[116.5px] lg:px-[80px] px-[16px]">
			<div className="w-full lg:max-w-[632px] lg:h-[340px] flex items-center justify-center">
				<h2 className="w-full max-w-[569px] text-[clamp(28px,2vw,34px)] text-neutral-1100 font-semibold leading-[27px] lg:leading-[32.5px]">
					Nuestras operaciones en Colombia
				</h2>
			</div>
			<div className="w-full lg:max-w-[1128px] lg:h-[340px] flex items-center lg:justify-start justify-center">
				<p className="max-w-[732px] w-full text-[clamp(14px,2vw,18px)] text-neutral-1100 font-regular leading-[20px] lg:leading-[23.6px]">
					Nuestras operaciones se concentran en 9 lugares distintos del país,
					donde están ubicadas las fincas, plantas y oficinas que trabajan día a
					día para hacer llegar nuestros productos y servicios a las diferentes
					latitudes del mundo.
				</p>
		</div>
	</div>

	<div className="w-full flex flex-row justify-center items-center mt-[65px] px-[16px] ">
		<div className="hidden lg:flex flex-col gap-[200px] mt-[246px] ">			
			<div className="empresa-container left w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 translate-x-[clamp(40px,8vw,80px)] z-40">
				<div className="w-full max-w-[256px] flex flex-col  gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/agriplastlogo.svg')} alt="Agriplast" className="w-full max-w-[178px]"/>
						<h3 className="w-full max-w-[256px] text-[18px] font-medium text-neutral-1100 leading-[17.5px]">
							Nueva Colonia, Corregimiento de Turbó
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								Urabá, Antioquia
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/agriplast.svg')} alt="" className='w-full h-auto' />
			</div>			
			
			<div className="empresa-container left w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 ">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/CFSlogo.svg')} alt="ACFS" className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[13px]">
							Turbo y Carepa
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								(Urabá, Antioquia)
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/CFS.svg')} alt="" className='w-full h-auto'/>
			</div>
			
			<div className="empresa-container left w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 translate-x-[clamp(40px,8vw,80px)] z-40">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/greenlandlogo.svg')} alt="GreenLand" className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[13px]">
							Envigado
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								(Antioquia)
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/greenland.svg')} alt="" className='w-full h-auto'/>
			</div>
			
			<div className="empresa-container left w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 ">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/wakatelogo.svg')} alt="Wakate" className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[13px]">
							Neira y Aranzazu
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								(Caldas)
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/wakate.svg')} alt="" className='w-full h-auto'/>
			</div>
			
		</div>

		<div id="map-pin" className="w-auto h-auto hidden lg:flex items-center sticky top-[100px] self-start">
			<img src={pathRelative('/img/map.svg')} alt="Mapa de Colombia" className="w-full h-full"/>
		</div>

		<div className="hidden lg:flex flex-col gap-[200px]">
				
			<div className="empresa-container right w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 -translate-x-[clamp(40px,8vw,80px)]">
				<div className="w-full max-w-[256px] flex flex-col  gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/banacollogo.svg')} alt="Banacol" className="w-full max-w-[178px]"/>
							<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[17.5px]">
								Apartadó, Chigorodó, Carepa y Turbo
							</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								Urabá, Antioquia
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/banacol.svg')} alt="" className='w-full h-auto'/>
			</div>		
			
			<div className="empresa-container right w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/cordarienlogo.svg')}alt="Cordarien"className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[13px]">
							Apartadó
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								Urabá, Antioquia
							</p>
						</div>
				</div>
					<img src={pathRelative('/img/cordarien.svg')} alt="" className='w-full h-auto'/>
			</div>			
			
			<div className="empresa-container right w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 -translate-x-[clamp(40px,8vw,80px)]">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/controlBlogo.svg')} alt="ControlB" className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[13px]">
							Apartadó
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								Urabá, Antioquia
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/controlB.svg')} alt="" className='w-full h-auto'/>
			</div>		
			
			<div className="empresa-container right w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/sostelilogo.svg')} alt="Sosteli" className="w-full max-w-[178px]"/>
						<h3 className="w-full text-[18px] font-medium text-neutral-1100 leading-[17.5px]">
							El Retiro, La Unión, Rionegro
						</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
								(Antioquia)
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/sosteli.svg')} alt="" className='w-full h-auto'/>
			</div>	
			
			<div className="empresa-container right w-full max-w-[clamp(280px,20vw,320px)] flex flex-col items-center bg-neutral-300 -translate-x-[clamp(40px,8vw,80px)]">
				<div className="w-full max-w-[256px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img src={pathRelative('/img/fundacion-greenlandlogo.svg')} alt="Fundacion GreenLand" className="w-full max-w-[178px]"/>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full max-w-[148px] text-neutral-1100 text-[16px] font-semibold leading-[15px]">
								Antioquia y Caldas
							</p>
						</div>
				</div>
				<img src={pathRelative('/img/fundacion-Greenland.svg')} alt="" className='w-full h-auto'/>
			</div>
		</div>

		{/* mobile view */}
		<div className="lg:hidden flex flex-col gap-[32px]">
			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/banacollogo.svg')}
						alt="Banacol"
						className="w-full max-w-[220px]"
					/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Apartadó, Chigorodó, Carepa y Turbó
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							Urabá, Antioquia
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/agriplastlogo.svg')}
						alt="Agriplast"
						className="w-full max-w-[220px]"
					/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Nueva Colonia, corregimiento de Turbo
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							Urabá, Antioquia
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/CFSlogo.svg')}
						alt="ACFS"
						className="w-full max-w-[220px]"
					/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Turbo y Carepa
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							(Urabá, Antioquia)
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/cordarienlogo.svg')}
						alt="Cordarien"
						className="w-full max-w-[220px]"
					/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Apartadó
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
						Urabá, Antioquia
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/controlBlogo.svg')}
						alt="Control B"
						className="w-full max-w-[220px]"
					/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Apartadó
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							Urabá, Antioquia
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/greenlandlogo.svg')}
						alt="GreenLand"
						className="w-full max-w-[220px]"/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						Envigado
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							(Antioquia)
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/sostelilogo.svg')}
						alt="Sosteli"
						className="w-full max-w-[220px]"/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
						El Retiro, La Unión, Rionegro
					</h3>
						<div className="flex flex-row gap-[16px] items-center">
							<figure> <Ubicacion className="w-[16px]"/> </figure>
							<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							(Antioquia)
							</p>
						</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/wakatelogo.svg')}
						alt="wakate"
						className="w-full max-w-[220px]"/>
					<h3 className="w-full text-[18px] font-normal text-neutral-1100 leading-[17.5px]">
							Neira y Aranzazu
					</h3>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-full text-neutral-1100 text-[16px] font-semibold leading-[11px]">
							(Caldas)
						</p>
					</div>
				</div>
			</div>

			<div className="w-[328px] flex flex-col items-center bg-neutral-300">
				<div className="w-full max-w-[264px] flex flex-col gap-[32px] mt-[32px] mb-[48px]">
					<img
						src={pathRelative('/img/fundacion-greenlandlogo.svg')}
						alt="Fundacion Greenland"
						className="w-full max-w-[220px]"/>
					<div className="flex flex-row gap-[16px] items-center">
						<figure> <Ubicacion className="w-[16px]"/> </figure>
						<p className="w-[148px] text-neutral-1100 text-[16px] font-semibold leading-[30px]">
							Antioquia y Caldas
						</p>
					</div>
				</div>
			</div>

		</div>
	</div>
	</section>
	);
}