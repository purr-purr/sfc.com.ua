import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@utils/const';

import s from './About.module.scss';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about" className={s.container}>
			<SplitBlocks title={`ПОПЕРЕДЖЕННЯ`} titleType="text">
				<p>
					<b>
						Клієнтами ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» можуть бути виключно:
						фізичні особи – підприємці; юридичні особи.
					</b>
				</p>
				<p>
					<b>
						ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» не надає банківські метали у кредит,
						та здійснює в межах фінансової послуги тільки надання коштів у кредит.
					</b>
				</p>

				<p>
					<b>
						ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» не здійснює та не планує здійснювати
						надання коштів у кредит фізичним особам-споживачам.
					</b>
				</p>

				<p>
					<b>
						ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» не здійснює врегулювання
						простроченої заборгованості з фізичними особами-споживачами фінансових
						послуг.
					</b>
				</p>

				<p>
					<b>
						ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» припинило надання фінансової послуги
						- факторинг
					</b>
				</p>
			</SplitBlocks>

			<BlockTitle title="Про компанію" />

			<SplitBlocks title="Відомості про фінансову установу" titleType="heading">
				<p>
					<strong>
						Повне найменування юридичної особи (небанківської фінансової установи)
					</strong>
				</p>
				<p>
					ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ»
					(далі – Товариство або Установа)
				</p>
				<h4>Скорочена назва ТОВ</h4>
				<p>ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ»</p>
				<h4>Код ЄДРПОУ</h4>
				<p>42483814</p>
				<h4>Місцезнаходження</h4>
				<p>{COMPANY_ADDRESS}</p>
				<h4>Контактний телефон</h4>
				<p>{COMPANY_PHONE}</p>
				<h4> Усі способи зв&#39;язку доступні для захищеної категорії осіб)</h4>
				<p>
					{COMPANY_PHONE}; {COMPANY_EMAIL}
				</p>
				<h4>Адреса електронної пошти</h4>
				<p>{COMPANY_EMAIL}</p>
				<h4>Режим роботи Установи</h4>
				<p>
					Робочі дні та години: <br />
					Пн-Чт з 9-00 до 18-00 <br />
					Пт з 9-00 до 17-00 <br />
					(крім офіційних святкових і неробочих днів) <br />
					Години перерви: з 13-00 до 14-00 <br />
					Вихідні дні: субота, неділя
				</p>
				<h4>
					Відомості про державну реєстрацію особи, яка надає фінансові послуги
				</h4>
				<p>
					дата реєстрації: 19.09.2018 <br />
					номер запису: 1 071 102 0000 042393
				</p>
				<h4>
					Інформація щодо включення Установи до Державного реєстру фінансових установ
				</h4>
				<p>
					Установу внесено до Державного реєстру фінансових установ згідно із
					Розпорядженням <br /> Нацкомфінпослуг від 19.03.2020 №531
					<br />
					<br />
					<a
						href="https://drive.google.com/file/d/11jDjhd-CM-wAL-XtovBUJ0sRg0oEAa4Q/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Свідоцтво
					</a>{' '}
					про реєстрацію фінансової установи ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ»
					<br />
					<br />
					Посилання на реєстраційну картку юридичної особи в Комплексно-інформаційній
					системі Національного банку України (далі - КІС НБУ):
					<a
						href="https://kis.bank.gov.ua/Home/SrchViewIMDetail/30000001106828"
						target="_blank"
						rel="noreferrer"
					>
						https://kis.bank.gov.ua/Home/SrchViewIMDetail/30000001106828
					</a>
					<br /> <br /> За посиланням КІС НБУ:
					<a
						href="https://bank.gov.ua/ua/supervision/nonbanks/registers-lists"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/supervision/nonbanks/registers-lists
					</a>
				</p>
				<h4>Інформація про ліцензії Товариства</h4>
				<p>
					ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» на підставі ліцензії на діяльність
					фінансової компанії надає один вид фінансової послуги: надання коштів та
					банківських металів у кредит. <br /> Посилання в КІС НБУ на ліцензію
					Товариства:
					<a
						href="https://kis.bank.gov.ua/Home/SrchViewLic/30000001014528"
						target="_blank"
						rel="noreferrer"
					>
						https://kis.bank.gov.ua/Home/SrchViewLic/30000001014528
					</a>
				</p>
				<p>
					<b>Інформації про ліцензії, які мало раніше Товариство:</b> <br />
					Національним банком України <b>20.03.2024 переоформлені ліцензії </b>
					Товариства:
				</p>
				<ul>
					<li>
						<p>
							на надання коштів у позику в тому числі на умовах фінансового кредиту
							(дата видачі - 01.12.2021);
						</p>
					</li>
					<li>
						<p>на надання послуг з факторингу (дата видачі - 09.06.2020)</p>
					</li>
				</ul>
				<br />
				<b>
					На ліцензію на діяльність фінансової компанії, з правом надання фінансових
					послуг:
				</b>
				<ul>
					<li>
						<p>надання коштів та банківських металів у кредит;</p>
					</li>
					<li>
						<p>факторинг</p>
					</li>
				</ul>
				<p>
					Переоформлення ліцензій на підставі пункту 32 розділу VII Закону України
					«Про фінансові послуги та фінансові компанії» та пункту 10 додатку 1 до
					Постанови № 199. Дата переоформлення: 20.03.2024.
				</p>
				<p>
					{' '}
					Рішенням Одноосібного учасника Товариства №03062024-01 від 03.06.2024
					прийнято рішення про припинення з 03.06.2024 послуг з факторингу.
				</p>
				<p>
					<b>05.07.2024</b> Комітет з питань нагляду та регулювання діяльності ринків
					небанківських фінансових послуг НБУ прийняв рішення про надання погодження
					ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ»{' '}
					<b>
						зміни обсягу ліцензії (звуження) на діяльність фінансової компанії та
						виключення з такої ліцензії фінансової послуги – факторинг.
					</b>
				</p>
				<h4>Перелік фінансових послуг, що надає/ має намір надавати Товариство.</h4>
				<ul>
					<li>
						<p>
							НАДАННЯ КОШТІВ ТА БАНКІВСЬКИХ МЕТАЛІВ У КРЕДИТ. Товариство надає кредити
							фізичним особам-підприємцям, юридичним особам. Товариство не здійснює
							споживче кредитування та не кредитує фізичних осіб
						</p>
					</li>
					<li>
						<p>
							ФАКТОРИНГ (Рішенням Одноосібного учасника Товариства №03062024-01 від
							03.06.2024 прийнято рішення про припинення з 03.06.2024 послуг з
							факторингу; документи на звуження обсягу ліцензії подано до Національного
							банку України)
						</p>
					</li>
				</ul>
				<h4>Керівники:</h4>
				<p>
					Директор <b>(з 16.05.2024)</b>
				</p>
				<p>
					<b>Габіда Дмитро Миколайович</b>, призначено на посаду безстроково, з
					16.05.2024 та протягом періоду перебування на посаді
				</p>
				<p>
					Директор <b>(по 15.05.2024)</b>
				</p>
				<p>
					<b>Вернигора Олег Олександрович</b>, строк повноважень: з 28.02.2020 по
					15.05.2024
				</p>
				<p>
					Головний бухгалтер <b>(з 16.05.2024)</b>
				</p>
				<p>
					<b>Смірнова Наталія Володимирівна</b>, призначено на посаду безстроково, з
					16.05.2024 та протягом періоду перебування на посаді
				</p>
				<p>
					Головний бухгалтер <b>(по 15.05.2024)</b>
				</p>
				<p>
					<b>Ємельяненко Людмила Володимирівна</b>, строк повноважень: з 02.06.2023
					по 15.05.2024
				</p>
				<h4>Посилання на структури власності Товариства розміщені на сайті НБУ</h4>
				<p>
					<a
						href="https://bank.gov.ua/ua/supervision/licensing-nonbanking/shareholders-nfp/42483814"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/supervision/licensing-nonbanking/shareholders-nfp/42483814
					</a>
				</p>
				<h4>Учасники:</h4>
				<p>з 11.06.2024 учасник Товариства</p>{' '}
				<p>
					<b>Шумський Георгій Анатолійович</b>, Україна, частка володіння в
					статутному капіталі Товариства – 100%
				</p>
				<p>по 10.06.2024 учасник Товариства</p>{' '}
				<p>
					<b>Вернигора Олег Олександрович</b>, Україна, частка володіння в статутному
					капіталі Товариства – 100%
				</p>
				<br />
				<p>
					<b>
						З інформацією про основні показники діяльності Товариства на підставі
						поданої до Національного банку України звітності можна ознайомитись за
						гіперпосиланням:
					</b>
				</p>
				<a
					href="	https://bank.gov.ua/ua/statistic/supervision-statist/data-supervision"
					target="_blank"
					rel="noreferrer"
				>
					{' '}
					https://bank.gov.ua/ua/statistic/supervision-statist/data-supervision
				</a>
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
