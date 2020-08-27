import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";
import {faBreadSlice} from "@fortawesome/free-solid-svg-icons";

function Formation()
{
	return (
		<section
			id="formation"
			className="pt-24 w-full min-h-screen bg-color-primary text-lg
			md:pt-40
			xl:pt-32"
		>
			<h1
				className="text-3xl text-center text-black p-3 section-title mb-5
					md:text-5xl md:p-5
					lg:text-6xl lg:p-8
					xl:text-4xl xl:p-3 "
			>
				<FontAwesomeIcon
					icon={faBook}
					className="mr-3"
				/>
				FORMATION ET EXPERIENCES
			</h1>
			<VerticalTimeline>
				<VerticalTimelineElement
					contentStyle={{ borderTop: '3px solid #5D001E'}}
					contentArrowStyle={{ borderRight: '7px solid  #5D001E' }}
					iconStyle={{ background: '#5D001E', color: '#fff' }}
					icon={<FontAwesomeIcon
						icon={faBriefcase}
						className="text-2xl"
					/>}
					position="left"
					date="Sept 2020"
				>
					<div
						className="m-auto flex justify-center h-8 mb-5
						md:h-20
						lg:h-24
						xl:h-12"
					>
						<img src={require("../Assets/aircampus.png")}
							 alt="AirCampus"
							 className="w-2/5 mr-5"
						/>
						<img src={require("../Assets/unistra.png")}
							 alt="Université de Strasbourg"
							 className="w-2/5"
						/>
					</div>
					<h3
						className="text-xl font-bold
						md:text-2xl
						lg:text-3xl"
					>
						Licence Pro
					</h3>
					<h4
						className="text-base italic mb-5
						md:text-lg
						lg:text-xl"
					>
						Développement Web, Communication et Apprentissages
					</h4>
					<p>
						Alternance au sein de l'entreprise AirCampus
						Développeur Fullstack JavaScript : React, React Native & NodeJS
					</p>

				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ borderTop: '3px solid #420044'}}
					contentArrowStyle={{ borderRight: '7px solid #420044' }}
					iconStyle={{ background: '#420044', color: '#fff' }}
					icon={<FontAwesomeIcon
						icon={faChalkboardTeacher}
						className="text-xl"
					/>}
					position="right"
					date="2018-2020"
				>
					<div>
						<img src={require("../Assets/ludus.png")}
							 alt="Ludus Académie"
							 className="w-2/5 m-auto mb-5 "
						/>
					</div>
					<h3
						className="text-xl font-bold
						md:text-2xl
						lg:text-3xl"
					>
						Foundation Degree
					</h3>
					<h4
						className="text-base italic mb-5
						md:text-lg
						lg:text-xl"
					>
						Jeux vidéos et Serious Games
					</h4>
					<p>
						Préparation d'un Foundation Degree (Bac +2) au sein de l'école Ludus Académie ( Programmation et Game Design )
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ borderTop: '3px solid #004827'}}
					contentArrowStyle={{ borderRight: '7px solid #004827' }}
					iconStyle={{ background: '#004827', color: '#fff' }}
					icon={<FontAwesomeIcon
						icon={faBreadSlice}
						className="text-xl"
					/>}
					position="left"
					date="2016-2018"
				>
					<div
						className="m-auto flex justify-center h-24 mb-5
						md:h-40
						lg:h-64
						xl:h-32"
					>
						<img src={require("../Assets/amandecannelle.jpg")}
							 alt="Amande & Cannelle"
							 className="w-2/5 mr-5"
						/>
						<img src={require("../Assets/cfaeschau.png")}
							 alt="CFA Eschau"
							 className="w-2/5 "
						/>
					</div>
					<h3
						className="text-xl font-bold
						md:text-2xl
						lg:text-3xl"
					>
						CAP
					</h3>
					<h4
						className="text-base italic mb-5
						md:text-lg
						lg:text-xl"
					>
						Pâtissier
					</h4>
					<p>
						Alternance au sein de la pâtisserie Amande & Cannelle pendant 2 ans
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</section>
	);
}

export default Formation;