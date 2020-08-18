import React from 'react';

function SurvivalZ(props)
{
	return (
		<div className="color-primary text-white text-center">
			<h1
				className="text-2xl font-bold color-secondary"
			>
				Survival Z
			</h1>
			<p className="pt-5">
				SurvivalZ est un top-down shooter, où on doit éliminer des zombies qui nous arrivent dessus, et deviennent
				de plus en plus rapide au fur et à mesure qu'on les tue. Le jeu n'a pas de fin, il s'agit simplement de tenir
				le plus longtemps possible. C'est un jeu que j'ai créer dans le cadre de mon cursus à Ludus Académie, afin
				de consolider mes acquis sur Unity.
			</p>
			<iframe
				src="https://i.simmer.io/@MAKYOON/survivalz"
				className="w-full h-screen"
			>
			</iframe>
		</div>
	);
}

export default SurvivalZ;