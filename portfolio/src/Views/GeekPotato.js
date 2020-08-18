import React from 'react';

function GeekPotato()
{
	return (
		<div className="bg-color-primary text-black text-center">
			<h1
				className="text-3xl font-bold color-primary-3"
			>
				Geek Potato
			</h1>
			<p className="pt-5">
				GeekPotato est un prototype de jeu qui a été réalisé au cours de la Global Game Jam 2020. Le thème était "Réparer" : ainsi,
				dans ce jeu, nous proposons au joueur d'incarner un robot surpuissant qui s'est malheureusement détruit, et cherche
				à se réparer au fil du jeu. Nous avons décidé de le réaliser sous un jeu de plateforme classique.
				<br/>
				L'équipe est constituée de : FRANCOIS Olivier, ZELLER Valentin, LI Kevin.
			</p>
			<br/>
			<h1 className="text-xl font-bold color-primary-3">Contrôles</h1>
			<br/>
			<p>
				Déplacements : Z,Q,S,D <br/>
				Saut : ESPACE <br/>
				Tir : Clic Gauche <br/>
				Regarder ses améliorations actuelles : TAB
			</p>
			<br/>

			<iframe
				src="https://i.simmer.io/@MAKYOON/geekpotato"
				className="w-full h-screen"
			>
			</iframe>
		</div>
	);
}

export default GeekPotato;