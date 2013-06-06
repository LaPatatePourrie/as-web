var storage = {

	// Menus du site
	menus: {
		order: ['accueil', 'cv', 'references', 'competences', 'contact'],
		all: {
			accueil: {
				title: 'Accueil',
				meta: {
					title: 'Développeur PHP'
				}
			},
			cv: {
				title: 'CV',
				meta: {
					title: 'CV'
				}
			},
			competences: {
				title: 'Compétences',
				meta: {
					title: 'Compétences'
				}
			},
			references: {
				title: 'Références',
				meta: {
					title: 'Références'
				}
			},
			contact: {
				title: 'Contact',
				meta: {
					title: 'Contact'
				}
			}
		}
	},

	// Détails contact
	contact: {
		name: 'Serres',
		firstname: 'Alexis',
		birth: '21/02/1988',
		situation: 'Célibataire',
		email: 'serres.alexis@gmail.com',
		tel: '07.86.39.02.19',
		address: '26 avenue de fouilleuse', 
		city: '92500 Rueil-Malmaison'
	},



	// Pages du site
	pages: {

		// Accueil
		accueil: {
			
		},

		// Contact
		contact: {
			fields: {
				order: ['name', 'email', 'subject', 'message'],
				all: {
					name: {
						label: 'Nom',
						type: 'input',
						detail: 'text',
						valid: ['notEmpty']
					},
					email: {
						label: 'Email',
						type: 'input',
						detail: 'mail',
						valid: ['notEmpty', 'email']
					},
					subject: {
						label: 'Objet du message',
						type: 'input',
						datalist: [{label: 'Demande de devis'}, {label: 'Renseignements'}]
					},
					message: {
						label: 'Message',
						type: 'textarea',
						valid: ['notEmpty']
					}
				}
			}
		},

		// Compétences
		competences: {
			bareme: [
				'Aucunes connaissances',
				'Quelques connaissances',
				'De bonnes bases',
				'Très bonne connaissance',
				'Excellente connaissance'
			],
			order: ['web', 'prog', 'bdd', 'fwk', 'serveurs', 'logiciels'],
			all: {
				web: {
					title: 'Développement web',
					data: {
						'Javacript': 5,
						'PHP5': 5,
						'HTML5': 4,
						'CSS3': 4
					},
					infos: {
						'Javacript': 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives',
						'PHP5': 'PHP est un langage de programmation principalement utilisé pour générer des pages web',
						'HTML5': 'HTML5 est la dernière révision majeur du HTML, fameux langage de formatage des pages web',
						'CSS3': 'CSS3 est la dernière révision majeures du CSS qui permet de donner du style aux pages web'
					}
				},
				prog: {
					title: 'Langages de programmation',
					data: {
						'JAVA': 3,
						'C': 2,
						'C#': 2,
						'Shell': 3
					},
					infos: {
						'JAVA': 'Java est un langage de programmation informatique orienté objet',
						'C': 'Le C est un langage de programmation impératif, généraliste, issu de la programmation système.',
						'C#': 'Le C "sharp" est un langage de programmation orienté objet créé par la société Microsoft',
						'Shell': 'Le Shell est un langage bas-niveau permettant de manipuler des fonctionnalité du système'
					}
				},
				bdd: {
					title: 'Bases de données',
					data: {
						'MySQL': 4,
						'PostgreSQL': 3,
						'MongoDB': 3,
						'Doctrine': 3,
						'XML': 4
					},
					infos: {
						'MySQL': 'Langage souvent couplé à PHP et permettant d\'effectuer des requêtes SQL',
						'PostgreSQL': 'Langage permettant d\'effectuer des requêtes SQL',
						'MongoDB': 'SGBD orienté objet issue de la mouvance NOSQL',
						'Doctrine': 'Couche d\'abstraction permettant d\'accéder aux SGBD de manière optimisée',
						'XML/JSON': 'Langages de formatage pouvant servir de base de données ou dans des API'
					}
				},
				fwk: {
					title: 'Framework',
					data: {
						'Symfony': 3,
						'jQuery': 5,
						'Angularjs': 3,
						// 'Backbone': 2,
						'LESS': 4,
						'Twig': 3,
						// 'Jade': 3
					},
					infos: {
						'Symfony': 'Framework PHP extrêmement complet et puissant',
						'jQuery': 'Librairie Javascript pour la manipulation du DOM, des animations ou encore pour l\'AJAX',
						'Angularjs': 'Framework Javascript permettant de crééer des applications web complexes, maintenables et performantes',
						// 'Backbone': 2,
						'LESS': 'Framework CSS qui prône un approche du CSS plus proche de la programmation',
						'Twig': 'Moteur de template, intégré par défaut à Symfony',
						// 'Jade': 3
					}
				},
				serveurs: {
					title: 'Serveurs',
					data: {
						'Apache': 4,
						'NodeJS': 3,
						'Linux (Debian/RedHat)': 4,
						'JBoss': 2
					},
					infos: {
						'Apache': 'Serveur HTTP le plus célèbre',
						'NodeJS': 'Programme permettant l\'exécution du Javascript côté serveur et la création de serveur HTTP entre autre',
						'Linux (Debian/RedHat)': 'Distributions Linux issue du monde UNIX',
						'JBoss': 'Serveur d\'application sous JAVA'
					}
				},
				logiciels: {
					title: 'Logiciels',
					data: {
						'Eclipse': 3,
						'SublimeText': 3,
						'Git/svn': 3,
						'Photoshop': 2,
						'WAMP/LAMP': 3
					},
					infos: {
						'Eclipse': 'IDE pour JAVA mais supporte également PHP',
						'SublimeText': 'Editeur de texte',
						'Git/svn': 'Gestionnaires de version',
						'Photoshop': 'Logiciel de retouche d\'image',
						'WAMP/LAMP': 'Logiciels contenant le package Apache, PHP et MySQL pour développer des sites web'
					}
				}
			}
		},

		// Références
		references: {
			order: ['annuaire', 'asweb', 'figeac', 'yvesrousseau', 'aglae', 'delirocode'],
			all: {
				'figeac': {
					title: 'Site intranet de la ville de Figeac (46)',
					context: '[2012] CDD de 2 mois',
					description: 'Création de A à Z du site intranet/extranet de la ville. Le site permet aux chefs de service et aux agents de la municipalité de communiquer des informations et échanger des documents via une plateforme web optimisée.',
					competences: {
						technologies: [
							'Développement PHP/MySQL',
							'Intégration HTML5/CSS3',
							'Graphisme'
						],
						problematiques: [
							'Back-office complexe: gestion des utilisateurs et droits d\'accès',
							'Back-office utilisateur: gestion des uploads, préférences...',
							'Module d\'identification des agents et attribution de droits',
							'Installation du site sur le serveur local (Windows Server)'
						]
					},
					img: 'figeac.png'
				},
				'yvesrousseau': {
					title: 'Yves Rousseau',
					context: '[2011] Auto-entrepreneur',
					description: 'Création de A à Z du site personnel de l\'artiste Yves Rousseau.',
					lien: 'www.yvesrousseau.fr',
					competences: {
						technologies: [
							'Développement PHP/MySQL',
							'Intégration HTML5/CSS3',
							'Graphisme'
						],
						problematiques: [
							'Back-office complet',
							'Optimisation du référencement du site sur Google',
							'Différents médias disponibles: Sons, images, vidéos',
							'Hébergement du site chez OVH'
						]
					},
					img: 'yvesrousseau.png'
				},
				'aglae': {
					title: 'Association Aglaé',
					context: '[2011] Auto-entrepreneur',
					description: 'Création de A à Z du site de l\'association Aglaé (Garches 92).',
					lien: 'www.aglae92.fr',
					competences: {
						technologies: [
							'Développement PHP/MySQL',
							'Intégration HTML5/CSS3',
							'Graphisme'
						],
						problematiques: [
							'Hébergement du site chez OVH'
						]
					},
					img: 'aglae.png'
				},
				'annuaire': {
					title: 'Version mobile d\'annuaire.com',
					context: '[2012-2013] Alternance (Licence professionnelle)',
					description: 'Intégration, développement Javascript/AJAX et étude ergonomique de la version mobile du site annuaire.com.',
					lien: 'm.annuaire.com',
					competences: {
						technologies: [
							'Intégration HTML5/CSS3',
							'Développement PHP spécifique',
							'AJAX'
						],
						problematiques: [
							'Optimisation du site pour les mobiles',
							'Utilisation de frameworks Javascript (jQuery, jQueryMobile) et CSS (LESS)',
							'Géolocation et utilisation de l\'API Google Maps'
						]
					},
					img: 'annuaire.png'
				},
				'delirocode': {
					title: 'Delirocode: site sur le code de la route',
					context: '[2009] Site personnel',
					description: 'Site personnel dont j\'ai beaucoup optimisé le référencement, ce qui a conduit à un trafic de pus de 1500 visiteurs par jour durant plus d\'un an (2011).',
					lien: 'www.delirocode.fr',
					competences: {
						technologies: [
							'PHP/MySQL',
							'Javascript',
							'HTML/CSS'
						],
						problematiques: [
							'Optimisation du référencement',
							'Intégration d\'outils Google pour les statistiques et les publicités textuelles',
							'Test intéractifs en javascript'
						]
					},
					img: 'delirocode.png'
				},
				'asweb': {
					title: 'AS {web}',
					context: '[2013] Site personnel',
					description: 'Site personnel/CV en ligne afin de proposer mes services de développeur en temps que freelance.',
					lien: 'www.as-web.pro',
					competences: {
						technologies: [
							'AngularJS',
							'Symfony'
						],
						problematiques: [
							'Application web',
							'Utilisation du framework AngularJS: routage, controlleurs, modèles...',
							'Propulsé par Symfony'
						]
					},
					img: 'asweb.png'
				}
			}
		},

		// C.V.
		cv: {
			lien: {
				url: '/data/CV_Alexis_SERRES.pdf',
				label: 'Télécharger le CV au format pdf'
			},
			
			order: ['formations', 'experience_pro', 'experience_perso', 'autres'],
			all: {
				formations: {
					title: 'Formation',
					order: ['licence', 'bts', 'bac'],
					all: {
						licence: {
							date: '2013-2012',
							titre: 'Licence Professionnel à l\'IUT de Velizy-Villacoublay',
							description: 'Licence Système Informatique et Logiciel option Service Web en alternance avec l\'entreprise Annuaire.com',
							contenu: [
								'Service Web (API REST et SOAP',
								'JAVA: persistence, serveur jBoss...',
								'XML: XPATH, XQuery, XSLT...',
								'Serveurs Apache, Linux...'  
							]
						},
						bts: {
							date: '2012-2010',
							titre: 'BTS Informatique de Gestion',
							description: 'BTS préparé par correspondance (16.7 de moyenne à l\'examen)',
							contenu: [
								'Diagramme de Classe, modélisation UML',
								'SQL, Modèle de Conception de Donnée (MCD)',
								'JAVA',
								'Programmation objet'
							]
						},
						bac: {
							date: '2006',
							titre: 'Bac S (mention Bien)',
							description: 'Au Lycée Richelieu de Rueil-Malmaison (92)'
						}
					}
				},
				experience_pro: {
					title: 'Expériences professionnelles',
					order: ['alternance', 'figeac', 'stage2', 'stage1', 'auto_entrepreneur', 'siteperso'],
					all: {
						alternance: {
							date: '2013-2012',
							titre: 'Alternance chez Annuaire.com dans le cadre de la Licence Professionnel',
							description: 'Développement web et intégration de la dernière version mobile du site'
						},
						figeac: {
							date: '2012',
							titre: 'Création du site intranet de la ville de Figeac (46)',
							description: 'Rédaction du cachier des charges, développement, intégration, et design du site intranet de la mairie de Figeac'
						},
						stage2: {
							date: '2012',
							titre: 'Stage chez Annuaire.com',
							description: 'Développeur web et intégrateur responsive: création de la version mobile du site annuaire.com'
						},
						stage1: {
							date: '2011',
							titre: 'Stage chez AltIT',
							description: 'Développeur web et intégrateur dans la SSII AltIT à Paris'
						},
						auto_entrepreneur: {
							date: '2011-2010',
							titre: 'Auto-entrepreneur',
							description: 'Créations de sites internet pour deux clients'
						},
						siteperso: {
							date: '2010',
							titre: 'Site personnel sur le code de la route: delirocode.fr',
							description: 'Créations de A à Z d\'un site personnel et optimisation du référencement avec jusqu\'à  2000 visites/jour durant l\'année 2011.'
						}
					}
				},
				experience_perso: {
					title: 'Expériences personnelles',
					order: ['cours', 'job_lafarge', 'job_figeac'],
					all: {
						cours: {
							date: '2011-2009',
							titre: 'Cours de Maths et Physique, à domicile, niveau Collège et Lycée.'
						},
						job_lafarge: {
							date: '2009',
							titre: 'Emploi jeune chez Lafarge à Saint-Cloud'
						},
						job_figeac: {
							date: '2008',
							titre: 'Job d\'été de surveillant de parc aquatique'
						}
					}
				},
				autres: {
					title: 'Autres informations',
					order: ['sports', 'divers'],
					all: {
						sports: {
							titre: 'Tennis de table et badminton en compétition, randonnée, escalade'	
						},
						divers: {
							titre: 'Lecture'		
						}
					}
				}
			}
		}
	},


	// Contenus divers du site
	content: {
		logoTitle: 'AS {web}',

		header: {
			identity: 'Prénom Nom',
			qualification: 'Développeur PHP/MySQL, Javascript, HTML5/CSS3'
		}
	}
}
