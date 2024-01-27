import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link as MUILink } from '@mui/material';
import classNames from 'classnames';

import styles from './styles.module.scss';

type SupportLinkProps = {
  url: string;
  className?: string;
};

export function SupportLink({ url, className }: SupportLinkProps) {
  return (
    <MUILink component="a" href={url} className={classNames(styles.layout, className)}>
      <span>Чат поддержки</span>
      <ContactSupportIcon />
    </MUILink>
  );
}
