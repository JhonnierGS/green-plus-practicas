import React from 'react'
import { Greenpluslogo, Fbicon, Twicon, Igicon, Yticon, Menuicon } from '../../../ui/icons';

export const Navbar = ({ activePage }) => {
	return (
	<header className="w-full flex justify-center py-4 px-4 fixed left-0 top-0 z-50 ">
		<div className="h-[64px] w-full bg-neutral-100 rounded-max flex items-center justify-between px-4 sm:px-8 lg:pl-[40px] lg:pr-[16px] ">
				<nav className="hidden lg:flex items-center w-full max-w-[609px] h-[64px]">
					<ul className="flex items-center text-[18px] font-montserrat font-semibold text-neutral-1100 gap-[16px]">
						<li className="flex items-center ">
							<a href="/" className={`whitespace-nowrap ${
								activePage === 'inicio'
								? 'text-secondary-900 font-semibold' : 'font-semibold'}`} >
								Inicio
							</a>
							
						</li>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-1100 rounded-full"></span>
						<li className="flex items-center ">
							<a href="/quienes-somos" className={`whitespace-nowrap ${
								activePage === 'quienes-somos' 
								? 'text-secondary-900 font-semibold' : 'font-semibold'}`}>
								Quiénes somos
							</a>
							
						</li>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-1100 rounded-full"></span>
						<li className="flex items-center ">
							<a href="#" className="font-medium whitespace-nowrap">
								Nuestros negocios
							</a>
							
						</li>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-1100 rounded-full"></span>
						<li>
							<a href="#" className="font-medium whitespace-nowrap">
								Sostenibilidad
							</a>
						</li>
					</ul>
				</nav>
		

			<div>
				<figure className="text-primary-700">
				<Greenpluslogo className="w-[147px] h-[38px]" />
				</figure>
			</div>

			<div className="flex items-center lg:hidden relative">
				<button
				type="button"
				aria-label="Menú"
				className="w-10 h-10 pt-[3px] pb-[3px] flex items-center justify-center"
				>
				<figure className='text-primary-700'>
					<Menuicon className="w-[40px]" />
				</figure>
				</button>
			</div>

			<div className="hidden lg:flex w-[602px] items-center justify-end gap-[16px] h-[40px]">
				<div className='flex gap-[8px]'>
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"aria-label="Facebook">
						<figure className='text-neutral-1100'>
							<Fbicon className="w-[32px]" />
						</figure>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
						<figure className='text-neutral-1100'>
							<Twicon className="w-[32px]" />
						</figure>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<figure className='text-neutral-1100'>
							<Igicon className="w-[32px]" />
						</figure>
					</a>
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
						<figure className='text-neutral-1100'>
							<Yticon className="w-[32px]" />
						</figure>
					</a>
				</div>

				<span className="inline-block w-[5px] h-[5px] bg-neutral-1100 rounded-full mx-[16px]"></span>
				<a
				href="#contacto"
				className="inline-flex items-center rounded-max bg-secondary-900 px-5 py-2.5 text-info-100 font-montserrat font-semibold hover:bg-secondary-100 transition"
				>
				Contáctanos
				</a>
			</div>
		</div>
    </header>
	)
}