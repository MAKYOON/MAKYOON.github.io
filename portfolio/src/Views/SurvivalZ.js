import React from 'react';

function SurvivalZ()
{
	return (
		<div
			className="bg-color-primary text-black text-center
			md:text-xl
			lg:text-3xl
			xl:text-base"
		>
			<h1
				className="text-3xl font-bold color-primary-3 section-title
				md:text-4xl
				lg:text-5xl
				xl:text-3xl"
			>
				SurvivalZ
			</h1>
			<p
				className="pt-5 px-5
				xl:px-20"
			>
				SurvivalZ est un top-down shooter, où on doit éliminer des zombies qui nous arrivent dessus, et deviennent
				de plus en plus rapide au fur et à mesure qu'on les tue. Le jeu n'a pas de fin, il s'agit simplement de tenir
				le plus longtemps possible. C'est un jeu que j'ai créer dans le cadre de mon cursus à Ludus Académie, afin
				de consolider mes acquis sur Unity.
			</p>
			<br/>
			<h1 className="text-3xl font-bold color-primary-3 section-title
				md:text-4xl
				lg:text-5xl
				xl:text-3xl"
			>
				Contrôles
			</h1>
			<br/>
			<p>
				Déplacements : Z,Q,S,D <br/>
				Tir : Clic Gauche <br/>
				Recharger : R
			</p>
			<br/>
			<iframe
				title="SurvivalZ"
				src="https://i.simmer.io/@MAKYOON/survivalz"
				className="w-full h-screen"
			>
			</iframe>
		</div>
	);
}

export default SurvivalZ;