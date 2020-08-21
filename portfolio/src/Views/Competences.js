import React from 'react';
import SkillComponent from "../Components/SkillComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToolbox} from "@fortawesome/free-solid-svg-icons";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";
import {faBook} from "@fortawesome/free-solid-svg-icons";

function Competences()
{
	return (

		<section
			id="competences"
			className="pt-24 w-full min-h-screen bg-color-secondary text-lg
			md:pt-40
			xl:pt-32"
		>
			<Fade cascade triggerOnce>
				<h1
					className="text-3xl text-center text-black p-3 section-title
					md:text-5xl md:p-5
					lg:text-6xl lg:p-8
					xl:text-4xl xl:p-3"
				>
					<FontAwesomeIcon
						icon={faBook}
						className="mr-3"
					/>
					COMPÉTENCES
				</h1>
				<div
					className="grid grid-rows-1 grid-cols-2"
				>
					<div
						className="grid grid-cols-2 grid-rows-2 gap-2 w-2/5 m-auto order-2 "
					>
						<img className="bg-white hover:flip-vertical-right"
							 src={require("../Assets/html_image.png")} alt="HTML"/>
						<img className="bg-white hover:spin-diagonal"
							 src={require("../Assets/css_image.png")} alt="CSS"/>
						<img className="bg-white"
							 src={require("../Assets/tailwind_image.png")} alt="Tailwind"/>
						<img className="bg-white"
							 src={require("../Assets/react_image.png")} alt="React"/>
					</div>
					<div>
						<div className="pt-20"
							 id="langages"
						>
							<h2 className="ml-5 color-primary-3 text-2xl mb-8
							md:text-5xl
							lg:text-6xl
							xl:text-4xl"
							>
								<FontAwesomeIcon
									icon={faFileCode}
									className="mr-3"
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
									name="JavaScript"
								/>
								<SkillComponent
									name="PHP"
								/>
								<SkillComponent
									name="MySQL"
								/>
								<SkillComponent
									name="C#"
								/>
								<SkillComponent
									name="C"
								/>
							</div>
						</div>
						<div className="pt-20"
							 id="outils"
						>
							<h2 className="ml-5 color-primary-3 text-2xl mb-8
							md:text-5xl
							lg:text-6xl
							xl:text-4xl"
							>
								<FontAwesomeIcon
									icon={faToolbox}
									className="mr-3"
								/>
								Outils et frameworks
							</h2>
							<div className="ml-5 flex flex-wrap mb-8">
								<SkillComponent
									name="React"
								/>
								<SkillComponent
									name="Tailwind CSS"
								/>
								<SkillComponent
									name="Bootstrap"
								/>
								<SkillComponent
									name="Github"
								/>
								<SkillComponent
									name="Unity"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-48">

				</div>
			</Fade>
		</section>
	);
}

export default Competences;