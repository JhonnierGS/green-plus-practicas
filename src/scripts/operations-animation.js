import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let animationsInitialized = false;

// Función para inicializar las animaciones
function initAnimations() {
	// Evitar inicializar múltiples veces
	if (animationsInitialized) return;
	
	if (typeof window === 'undefined' || !window.matchMedia("(min-width: 1024px)").matches) {
		return;
	}

	const empresaContainers = gsap.utils.toArray(".empresa-container");
	const mapPin = document.getElementById("map-pin");

	if (empresaContainers.length === 0 || !mapPin) {
		return;
	}

	animationsInitialized = true;

	// Animar cada empresa container
	empresaContainers.forEach((container) => {
		// Establecer estado inicial oculto desde abajo
		gsap.set(container, { opacity: 0, y: 50 });
		
		ScrollTrigger.create({
			trigger: container,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => gsap.to(container, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }),
			onLeave: () => gsap.to(container, { y: -50, opacity: 0, duration: 0.5, ease: "power3.in" }),
			onEnterBack: () => gsap.to(container, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }),
			onLeaveBack: () => gsap.to(container, { y: 50, opacity: 0, duration: 0.5, ease: "power3.in" }),
		});
	});
}

// Esperar a que todo esté listo
window.addEventListener('load', () => {
	setTimeout(initAnimations, 300);
});
