import React from 'react'
import { pathRelative } from '../../../utils/paths';
import { Arrow, } from '../../../ui/icons';


export const NuestrosNegocios = () => {
  return (
    <section className='flex justify-center '>
		<div className='w-full max-w-[1920px] bg-bgng flex flex-row items-center lg:px-[80px] px-[16px]'>
			<div className='flex'>
				<figure className='w-full'>
					<img src={pathRelative('/img/ng.svg')} alt="" />
				</figure>
			</div>
			<div className="w-full max-w-[600px] flex flex-col gap-[32px] lg:gap-[64px] items-center mt-[40px] mb-[64px] lg:my-[209px]">
				<div className="w-full max-w-[600px] ">
					<p className="text-[14px] font-poppins font-semibold text-neutral-100 leading-[10px]">
						QUIÉNES SOMOS
					</p>
				</div>
				<div className="w-full max-w-[600px]">
					<h2 className="text-[clamp(28px,2vw,34px)] text-neutral-100 font-montserrat font-semibold lg:leading-[37.8px]">
						En Greenplus, impulsamos un desarrollo sostenible que equilibra el
						cuidado ambiental, el bienestar social y el crecimiento económico.
					</h2>
				</div>
				<div className="w-full max-w-[600px] h-[64px] flex lg:flex-row items-center border-b-1 border-whiten-white-29 ">
					<a href="#contacto" className="flex-1 text-neutral-100 text-[18px] font-medium leading-[13px]">
						Nuestros negocios
					</a>
					<button className="w-[48px] h-[48px] mt-[8px] flex items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-100 transition">
						<Arrow className="w-[24px] text-neutral-100" />
					</button>
				</div>
			</div>
		</div>
    </section>
  )
}
