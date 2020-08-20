import React from 'react';
import SkillComponent from "../Components/SkillComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToolbox} from "@fortawesome/free-solid-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";


function Competences()
{
	return (

		<section
			id="competences"
			className="pt-24 md:pt-40 w-full min-h-screen bg-color-secondary text-lg"
		>
			<Fade cascade triggerOnce>
				<h1
					className="font-bold text-3xl md:text-5xl text-center w-full bg-color-primary-2 text-white p-3 md:p-5"
				>
					COMPÉTENCES
				</h1>
				<div className="pt-20"
					 id="langages"
				>
					<h2 className="ml-5 color-primary-3 text-2xl md:text-5xl mb-8 "
					>
						<FontAwesomeIcon
							icon={faCode}
							className="mr-2"
						/>
							Langages
					</h2>
					<div className="ml-5 flex flex-wrap mb-8">
						<SkillComponent
							name="HTML"
						/>
						<SkillComponent
							name="CSS/SASS"
						/>
						<SkillComponent
							name="C"
						/>
						<SkillComponent
							name="C#"
						/>
						<SkillComponent
							name="JavaScript"
						/>
						<SkillComponent
							name="PHP"
						/>
						<SkillComponent
							name="MySQL"
						/>
					</div>
				</div>
				<div className="pt-20"
					 id="outils"
				>
					<h2 className="ml-5 color-primary-3 text-2xl md:text-5xl mb-8 ">
						<FontAwesomeIcon
							icon={faToolbox}
							className="mr-2"
						/>
						Outils et frameworks
					</h2>
					<div className="ml-5 flex flex-wrap mb-8">
						<SkillComponent
							name="ReactJS"
						/>
						<SkillComponent
							name="Bootstrap"
						/>
						<SkillComponent
							name="Tailwind CSS"
						/>
						<SkillComponent
							name="Github"
						/>
						<SkillComponent
							name="Unity"
						/>
					</div>
				</div>
				<div className="h-48">

				</div>
			</Fade>
		</section>
	);
}

export default Competences;