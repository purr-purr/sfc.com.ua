import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const companyDocs: IDocumentsList[] = [
	{
		title: 'Витяг з державного реєстру фінансових установ',
		link: importDoc(
			'витяг_з_державного_реєстру_фінансових_установ_ТОВ_“СИСТЕМНИЙ_ФІНАНСОВИЙ.pdf',
		),
	},
	{
		title: 'Свідоцтво фінансової установи',
		link: importDoc('Svidoctvo_SFC.pdf'),
	},
	{
		title: 'Статут',
		link: importDoc('Statut.pdf'),
	},
	{
		title: 'Виписка',
		link: importDoc('Vypyska.pdf'),
	},
];

export const publicInfo: IDocumentsList[] = [
	{
		title: 'Інформація щодо умов та порядку діяльності',
		link: importDoc('Informatsiia shchodo, umov ta poriadku diialnosti_.pdf'),
	},
	{
		title: 'Публічна інформація про компанію',
		link: importDoc('Publichna informatsiia pro kompaniiu_.pdf'),
	},
	{
		title: 'Механізми захисту прав споживачів',
		link: importDoc(
			'Mekhanizmy zakhystu prav spozhyvachiv TOV Systemnyi finansovyi konsaltynh.pdf',
		),
	},
];

export const finServiceInfo: IDocumentsList[] = [
	{
		title:
			'Вартість, ціна/тарифи, розмір плати (проценти)\n' +
			'надання коштів та банківських металів у кредит',
		link: importDoc('Taryfy kredyt TOV Systemnyi finansovyi konsaltynh (2).pdf'),
	},
	{
		title: 'Способи погашення кредиту',
		link: importDoc(
			'Sposoby pohashennia kredytu TOV Systemnyi finansovyi konsaltynh.pdf',
		),
	},
	{
		title:
			'ПРАВИЛА надання юридичним особам, фізичним особам-підприємцям послуги з надання коштів та банківських металів у кредит',
		link: importDoc(
			'PRAVYLA TOV Systemnyi finansovyi konsaltynh nadannia koshtiv ta bank.met. u kredyt_.pdf',
		),
	},
];

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2024',
		list: [
			{
				title: 'Структура власності станом на 11.06.2024',
				link: importDoc('Struktura_2024-2.pdf'),
			},
			{
				title: 'Структура власності станом на 01.01.2024',
				link: importDoc('Struktura_2024.pdf'),
			},
		],
	},
	{
		groupTitle: '2023',
		list: [
			{
				title: 'Структура власності станом на 01.01.2023',
				link: importDoc('Struktura_2023.pdf'),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title: 'Структура власності станом на 01.01.2022',
				link: importDoc('Struktura_2022.pdf'),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title: 'Структура власності станом на 15.06.2021',
				link:
					'https://drive.google.com/file/d/1fgmwcgaF_v0L5tEJOVu19XX9RtOGOyk-/view?usp=sharing',
			},
		],
	},
];

export const auditReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2023',
		list: [
			{
				title: 'Фінансова звітність за 2023 рік',
				link: importDoc('Audit_2023.pdf'),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title: 'Фінансова звітність за 2022 рік',
				link: importDoc('Audit_2022.pdf'),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title: 'Фінансова звітність за 2021 рік',
				link:
					'https://drive.google.com/file/d/1WJtuEr4yCiyZg6WUWyR99vM1lGCs8YDm/view?usp=sharing',
			},
		],
	},
	{
		groupTitle: '2020',
		list: [
			{
				title: 'Фінансова звітність за 2020 рік',
				link:
					'https://drive.google.com/file/d/1GOeoi-H4JNVNX-s9oTCNEzGhTULK1hhl/view?usp=sharing',
			},
			{
				title: 'Звітні данні за 2020 рік',
				link:
					'https://drive.google.com/file/d/1xYTcXXTaR1jHQJVs9gnquyBlmigsQ3l5/view?usp=sharing',
			},
		],
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title: 'Порядок розгляду звернень споживачів',
		link:
			'https://drive.google.com/file/d/16vL2_J9ViLcGjjxAtaZD1B00SYknPOjx/view?usp=sharing',
	},
	{
		title: 'Примірний договір про надання послуг з  факторингу',
		link:
			'https://drive.google.com/file/d/1oNrrEXdUF0slxmivV1Lv8DV5k_qJaBTV/view?usp=sharing',
	},
	{
		title:
			'Примірний договір про надання коштів у позику, в тому числі і на умовах фінансового кредиту',
		link:
			'https://drive.google.com/file/d/1ZW3KIfQ7PJVcxU6pEM-5MZJ0ZvTgsa4K/view?usp=sharing',
	},
	{
		title: 'Договір факторингу ',
		link: 'https://drive.google.com/open?id=1qmcnmhncaht6dmlmnvfdkbqqkkvyiydz',
	},
	{
		title: 'Внутрішні правила про надання фінансових послуг',
		link:
			'https://drive.google.com/file/d/1EFVKD5vKlgAQkM9ZFE93U00TIR4mdjU5/view?usp=sharing',
	},
	{
		title:
			'Вартість, ціна/тарифи, розмір плати (проценти)\n' +
			'за фінансовою послугою факторинг',
		link: importDoc('Taryfy faktoring TOV Systemnyi finansovyi konsaltynh.pdf'),
	},
];
