import { useState } from 'react';
import { Arrow } from '../../../ui/icons';

export const Formulario = () => {
const [formData, setFormData] = useState({
	nombre: '',
	correo: '',
	mensaje: ''
});

const [errors, setErrors] = useState({
	nombre: '',
	correo: '',
	mensaje: ''
});

const [isChecked, setIsChecked] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);

const handleChange = (e) => {
	const { name, value } = e.target;
	
	if (name === 'nombre') {
		const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
		setFormData(prev => ({
		...prev,
		[name]: onlyLetters
	}));
	} else {
		setFormData(prev => ({
		...prev,
		[name]: value
	}));
	}
	
	
	if (errors[name]) {
		setErrors(prev => ({
		...prev,
		[name]: ''
	}));
	}
};

const validateForm = () => {
	const newErrors = {};
	
	if (!formData.nombre.trim()) {
		newErrors.nombre = 'Este campo es obligatorio.';
	}
	
	if (!formData.correo.trim()) {
		newErrors.correo = 'Este campo es obligatorio.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
		newErrors.correo = 'Introduzca una dirección de correo electrónico válida.';
	}
	
	if (!formData.mensaje.trim()) {
		newErrors.mensaje = 'Este campo es obligatorio.';
	}

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
	e.preventDefault();
	
	if (validateForm()) {
		console.log('Formulario enviado:', formData);
	setShowSuccessModal(true);
	
	}
};

const closeModal = () => {
	setShowSuccessModal(false);
	setFormData({ nombre: '', correo: '', mensaje: '' });
	setIsChecked(false);
};

return (
	<>
		<section className='flex justify-center py-[82px] lg:hidden'>
			<div className="w-full max-w-[473px] bg-neutral-100 rounded-[16px] gap-[28px] flex flex-col justify-center px-4 mx-auto">
				<h3 className="w-full max-w-[276px] text-neutral-1100 font-semibold text-[34px] lg:text-[24px] leading-[28px]">
					Pongámonos en contacto
				</h3>
				
				<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 my-[24px]">
					<div className="w-full max-w-[441px] flex flex-col gap-[23px]">
						<label htmlFor="nombre" className="text-neutral-1100 font-semibold text-[21px] leading-[18px]">
							Nombre
						</label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
							placeholder="Escribe tu nombre"
							className={`w-full px-4 py-4 border-1 ${errors.nombre ? 'border-error-red' : 'border-neutral-400'} bg-neutral-300 rounded-[8px] text-neutral-1100 focus:outline-none focus:border-secondary-900 leading-[4px]`}
						/>
						{errors.nombre && (
							<p className="text-error-red text-[14px] flex items-center gap-1">
								<span>⚠</span> {errors.nombre}
							</p>
						)}
					</div>

					<div className="w-full max-w-[441px] flex flex-col gap-[23px]">
						<label htmlFor="correo" className="text-neutral-1100 font-semibold text-[21px] leading-[18px]">
							Correo
						</label>
						<input
							type="email"
							id="correo"
							name="correo"
							value={formData.correo}
							onChange={handleChange}
							placeholder="Escribe tu correo electrónico"
							className={`w-full px-4 py-4 border-1 ${errors.correo ? 'border-error-red' : 'border-neutral-400'} bg-neutral-300 rounded-[8px] text-neutral-1100 focus:outline-none focus:border-secondary-900 leading-[4px]`}
						/>
						{errors.correo && (
							<p className="text-error-red text-[14px] flex items-center gap-1">
								<span>⚠</span> {errors.correo}
							</p>
						)}
					</div>

					<div className="w-full max-w-[441px] flex flex-col gap-[23px]">
						<label htmlFor="mensaje" className="text-neutral-1100 font-semibold text-[21px] leading-[18px]">
							Mensaje
						</label>
						<textarea
							id="mensaje"
							name="mensaje"
							value={formData.mensaje}
							onChange={handleChange}
							placeholder="Escribe aquí tu mensaje"
							rows="4"
							className={`w-full px-4 py-4 border-1 ${errors.mensaje ? 'border-error-red' : 'border-neutral-400'} bg-neutral-300 rounded-[8px] text-neutral-1100 focus:outline-none focus:border-secondary-900 resize-none`}
						/>
						{errors.mensaje && (
							<p className="text-error-red text-[14px] flex items-center gap-1">
								<span>⚠</span> {errors.mensaje}
							</p>
						)}
					</div>

					<div className="w-full max-w-[441px] flex gap-2 ">
						<div className="relative flex-shrink-0">
							<input
								type="checkbox"
								id="privacidad"
								checked={isChecked}
								onChange={(e) => setIsChecked(e.target.checked)}
								className="appearance-none min-w-[24px] min-h-[24px] w-[24px] h-[24px] border-1 border-neutral-400 rounded bg-neutral-300 cursor-pointer checked:bg-secondary-900 checked:border-secondary-900"
							/>
							{isChecked && (
								<svg 
									className="absolute top-0 left-0 w-[24px] h-[24px] pointer-events-none text-neutral-100"
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									strokeWidth="3"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							)}
						</div>
						<label htmlFor="privacidad" className="text-neutral-1100 text-[16px] leading-[22px] cursor-pointer">
							Acepto los términos de uso de este sitio web y que mis datos personales serán tratados de acuerdo al aviso de privacidad de Greenplus.
						</label>
					</div>
					{!isChecked && errors.mensaje && (
						<p className="text-error-red text-[14px] flex items-center gap-1">
							<span>⚠</span> Este campo es obligatorio.
						</p>
					)}

					<div className="w-full max-w-[441px] flex items-center  gap-3">
						<button
							type="submit"
							className="flex justify-center w-full max-w-[380px] bg-secondary-900 hover:bg-secondary-700 text-neutral-100 font-semibold py-3 px-6 rounded-max transition">
							Enviar
						</button>
						<button
							type="button"
							className="min-w-[48px] h-[48px] bg-secondary-900 hover:bg-secondary-700 text-neutral-100 rounded-full flex items-center justify-center transition">
							<figure>
								<Arrow className="w-[20px] " />
							</figure>
						</button>
					</div>
				</form>
			</div>
	</section>
	{/* Modal de éxito */}
	{showSuccessModal && (
		<>
		{/* Overlay con desenfoque */}
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
		
		<div className="fixed inset-0 flex items-center justify-center z-50 px-4">
			<div className="bg-neutral-100 rounded-[16px] p-8 max-w-[500px] w-full shadow-2xl relative">
				<button 
					onClick={closeModal}
					className="absolute top-4 right-4 text-neutral-1100 hover:text-secondary-900 text-2xl font-bold"
				>
					X
				</button>
				<div className="flex flex-col items-center gap-6 text-center">
					<div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center">
						<svg className="w-8 h-8 text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 className="text-neutral-1100 font-semibold text-[28px]">
						¡Formulario enviado!
					</h3>
					<p className="text-neutral-1100 text-[16px] leading-[24px]">
						Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
					</p>
					<button
						onClick={closeModal}
						className="w-full bg-secondary-900 hover:bg-secondary-700 text-neutral-100 font-semibold py-3 px-6 rounded-max transition"
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
		</>
	)}
	</>
	);
};