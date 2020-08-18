import React from 'react';

function Serenity()
{
	return (
		<div className="color-primary text-white text-center">
			<h1
				className="text-2xl font-bold color-secondary"
			>
				Serenity
			</h1>
			<p className="pt-5">
				Serenity est un prototype de jeu anti-stress réalisé dans le cadre d'un examen au cours de mon cursus à Ludus
				Académie. Le but était de réaliser un prototype de jeu permettant d'évaluer la réduction du stress au sein
				d'une entreprise. <br/>
				Serenity plonge le joueur dans un monde virtuel paisible et calme, où il est amené à se concentrer sur des
				choses positives, en l'emmenant photographier la faune et la flore.
				L'export web ne le permet pas, mais en temps normal le joueur peut accéder aux photos prises dans le jeu
				dans un dossier sur son ordinateur, lui permettant de se rappeler les bons souvenirs.
			</p>
			<br/>
			<h1 className="text-xl font-bold">Contrôles</h1>
			<br/>
			<p>
				Déplacements : Z,Q,S,D <br/>
				Mode Photo :  F <br/>
				Prendre Photo : Clic Gauche <br/>
				Zoom : Molette (en mode photo uniquement)
			</p>
			<br/>
			<iframe
				src="https://i.simmer.io/@MAKYOON/serenity"
				className="w-full h-screen"
			>
			</iframe>
		</div>
	);
}

export default Serenity;