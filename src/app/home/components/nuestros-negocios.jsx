import React from 'react'
import { pathRelative } from '../../../utils/paths';
import { Arrow, } from '../../../ui/icons';


export const NuestrosNegocios = () => {
  return (
    <section className='min-h-[809px] flex justify-between flex-col _900:flex-row bg-error-500'>
			<figure className='w-full _900:max-w-[736px] h-full'>
				<img className='w-full min-h-[809px] object-cover' src={pathRelative('/img/ng.svg')} alt="" />
			</figure>
		<div className="w-full min-h-[466px] _900:min-h-[466px] flex items-center bg-bgng bg-center bg-cover bg-no-repeat px-[16px]">
			<div className="w-full flex flex-col gap-[32px] lg:gap-[64px] items-center">
				<div className="w-full max-w-[600px]">
					<p className="text-[14px] font-poppins tracking-40 font-semibold text-neutral-100 leading-[10px]">
						NUESTROS NEGOCIOS
					</p>
				</div>
				<div className="w-full max-w-[600px]">
					<h2 className="text-[clamp(28px,2vw,34px)] text-neutral-100 font-montserrat font-semibold lg:leading-[37.8px] leading-[32px]">
						En Greenplus, impulsamos un desarrollo sostenible que equilibra el
						cuidado ambiental, el bienestar social y el crecimiento económico.
					</h2>
				</div>
				<div className="w-full max-w-[600px] h-[64px] flex flex-row items-center border-b-1 border-whiten-white-29 pb-[8px]">
					<a href="#nuestros negocios"
						className="w-full text-neutral-100 text-[18px] font-semibold leading-[13px]">
						Nuestros negocios
					</a>
					<button className="w-[48px] h-[48px] mt-[8px] flex items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-100 transition">
						<figure>
							<Arrow className="w-[20px]" />
						</figure>
					</button>
				</div>
			</div>
		</div>
    </section>
  )
}
