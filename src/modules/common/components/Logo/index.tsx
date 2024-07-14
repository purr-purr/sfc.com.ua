import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '@public/assets/logo.svg';

import s from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image className={s.container} src={LOGO} alt="logo" />
		</Link>
	);
};

export default Logo;
