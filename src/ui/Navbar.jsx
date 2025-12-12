import React, { useState } from 'react'
import { Greenpluslogo, Fbicon, Twicon, Igicon, Yticon, Menuicon } from './icons';

export const Navbar = ({ activePage }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
	<header className="w-full flex flex-col items-center my-4 px-4 fixed z-50">
		<div className="h-[64px] w-full bg-neutral-100 shadow-lg rounded-max flex items-center justify-between px-4 sm:px-8 lg:pl-[40px] lg:pr-[16px] ">
				<nav className="hidden lg:flex items-center w-full max-w-[609px] h-[64px]">
					<ul className="flex items-center text-[18px] font-semibold text-neutral-1100 gap-[16px]">
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
							<a href="#" className={`whitespace-nowrap ${
								activePage === 'nuestros-negocios'
								? 'text-secondary-900 font-semibold' : 'font-semibold'}`} >
								Nuestros negocios
							</a>
							
						</li>
							<span className="inline-block w-[5px] h-[5px] bg-neutral-1100 rounded-full"></span>
						<li>
							<a href="#" className="font-semibold whitespace-nowrap">
								Sostenibilidad
							</a>
						</li>
					</ul>
				</nav>
		

			<div>
				<figure href="" className="text-primary-700 max-lg:flex _1400:flex hidden">
					<Greenpluslogo className="w-[147px] h-[38px]" />
				</figure>
			</div>

			<div className="flex items-center lg:hidden relative">
				<button
				type="button"
				aria-label="Menú"
				className="w-10 h-10 pt-[3px] pb-[3px] flex items-center justify-center"
				onClick={toggleMenu}
				>
				<figure className='text-primary-700'>
					<Menuicon className="w-[40px]" />
				</figure>
				</button>
		</div>

		<div className="hidden lg:flex items-center gap-[16px]">
			<div className="flex items-center gap-[16px]">
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
			<a href="/contacto" className="inline-flex items-center rounded-max bg-secondary-900 px-5 py-2.5 text-info-100 font-semibold hover:bg-secondary-100 transition">
				Contáctanos
			</a>
		</div>
	</div>
	
	
	<div className={`w-full lg:hidden bg-neutral-100 rounded-32 shadow-lg mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
		isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
	}`}>
		<nav className="flex flex-col px-6 py-4 gap-4 text-neutral-1100 text-sm font-semibold">
				<a href="/" className={`whitespace-nowrap border-b-1 ${ activePage === 'inicio'? 'text-secondary-900 border-secondary-900 font-semibold' : 'border-darken-black-29 font-semibold'}`} >Inicio</a>
				<a href="/quienes-somos" className={`whitespace-nowrap border-b-1 ${ activePage === 'quienes-somos'? 'text-secondary-900 border-secondary-900 font-semibold' : 'border-darken-black-29 font-semibold'}`} >Quiénes somos</a>
				<a href="#" className={`whitespace-nowrap border-b-1 ${ activePage === 'nuestros-negocios'? 'text-secondary-900 border-secondary-900 font-semibold' : 'border-darken-black-29 font-semibold'}`} >Nuestos negocios</a>
				<a href="#" className={`whitespace-nowrap border-b-1 ${ activePage === 'sostenibilidad'? 'text-secondary-900 border-secondary-900 font-semibold' : 'border-darken-black-29 font-semibold'}`} >Sostenibilidad</a>

				<div className="flex items-center gap-4 mt-4">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
				<a
					href="/contacto"
					className="inline-flex items-center justify-center rounded-max bg-secondary-900 px-5 py-2.5 text-neutral-100 text-sm font-semibold shadow hover:bg-secondary-700 transition"
				>
					Contáctanos
				</a>	
			</nav>
		</div>
	
</header>
	)
}