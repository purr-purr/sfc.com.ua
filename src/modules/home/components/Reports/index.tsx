import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archivedInformation,
	auditReports,
	finServiceInfo,
	infoOwnershipStructure,
	innerRules,
	publicInfo,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks
			title="Документація та Інформація"
			titleType="heading"
			anchor="reports"
		>
			<Accordion title="Правила і договір про надання фінансових послуг">
				<DocumentsList list={innerRules} />
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
