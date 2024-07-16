import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archivedInformation,
	auditReports,
	companyDocs,
	finServiceInfo,
	infoOwnershipStructure,
	publicInfo,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks
			title="Документація та Інформація"
			titleType="heading"
			anchor="reports"
		>
			<Accordion title="Документи фінансової установи">
				<DocumentsList list={companyDocs} />
			</Accordion>

			<Accordion title="Публічна та інша інформація">
				<DocumentsList list={publicInfo} />
			</Accordion>

			<Accordion title="Інформація про фінансову послугу">
				<DocumentsList list={finServiceInfo} />
			</Accordion>

			<Accordion title="Аудит фінансової звітності">
				<DocumentsList groupList={auditReports} />
			</Accordion>

			<Accordion title="Розкриття структури власності">
				<DocumentsList groupList={infoOwnershipStructure} />
			</Accordion>

			<Accordion title="Архівна інформація">
				<DocumentsList list={archivedInformation} />
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
