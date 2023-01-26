// Import images
import Image1 from '../images/inicial.png';
import Image2 from '../images/whats.png';
import Image3 from '../images/ligacao.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Xcontact Omni  1.0',
		publishDate: 'Jul 01, 2019',
		tags: 'UI / Frontend / Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'First screen',
			img: Image1,
		},
		{
			id: 2,
			title: 'Whatsapp messages',
			img: Image2,
		},
		{
			id: 3,
			title: 'New call',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'X5 Solucoes',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design, Frontend Development & Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://x5s.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '+55 51 3030-5500',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A system who can manage all the received whatsapp messages for multiple agents',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Made a usable and confident tool to attend costumers and show statistics data about the timing to answers messages and related datas',
			},
			
			{
				id: 2,
				details:
					'This application was made with angular 2+ and nodejs on backend, also we use websocket to comunnicate with events',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			// {
			// 	id: 1,
			// 	title: 'Mobile UI',
			// 	img: Image4,
			// },
			// {
			// 	id: 2,
			// 	title: 'Web Application',
			// 	img: Image5,
			// },
			// {
			// 	id: 3,
			// 	title: 'UI Design',
			// 	img: Image6,
			// },
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
