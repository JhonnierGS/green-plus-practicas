import React from "react";
import { pathRelative } from "../../../utils/paths";

export const Fondo = () => {
  return (
	<section className="w-full ">
		<figure className='w-full h-auto object-cover flex justify-center '>
			<img src={pathRelative('/img/bgf.svg')} alt="" />
		</figure>
	</section>
  );
}