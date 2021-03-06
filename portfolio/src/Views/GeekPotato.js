import React from 'react';

function GeekPotato()
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
				Geek Potato
			</h1>
			<p
				className="pt-5 px-5
				xl:px-20"
			>
				GeekPotato est un prototype de jeu qui a été réalisé sous Unity au cours de la Global Game Jam 2020. Le thème était "Réparer" : ainsi,
				dans ce jeu, nous proposons au joueur d'incarner un robot surpuissant qui s'est malheureusement détruit, et cherche
				à se réparer au fil du jeu. Nous avons décidé de le réaliser sous un jeu de plateforme classique.
				<br/> <br/>
				L'équipe est constituée de : FRANCOIS Olivier, ZELLER Valentin, LI Kevin.
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
				Saut : ESPACE <br/>
				Tir : Clic Gauche <br/>
				Regarder ses améliorations actuelles : TAB
			</p>
			<br/>

			<iframe
				title="GeekPotato"
				src="https://i.simmer.io/@MAKYOON/geekpotato"
				className="w-full h-screen"
			>
			</iframe>
		</div>
	);
}

export default GeekPotato;