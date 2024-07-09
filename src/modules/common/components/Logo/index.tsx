import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import s from './Logo.module.scss';

import LOGO from '@public/assets/logo.svg';

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image className={s.container} src={LOGO} alt="logo" />
		</Link>
	);
};

export default Logo;
