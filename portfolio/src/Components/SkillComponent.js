import React from 'react';

function SkillComponent(props)
{
	return (
		<div
			className="rounded-full py-2 px-4 bg-color-primary inline text-gray-800 m-1 font-sans
			md:py-4 md:px-8 md:text-3xl
			lg:text-4xl
			xl:text-2xl xl:hover:bg-color-primary-2 xl:hover:text-white"
		>
			{props.name}
		</div>
	);
}

export default SkillComponent;