
import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Fondo = () => {
  return (
		<figure>
			<img 
						src={pathRelative('/img/bgf.svg')} 
						alt="Equipo Greenplus"
						className="h-full w-full"/>
		</figure>
  );
}