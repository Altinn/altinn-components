import { FooterAddress } from './FooterAddress';
import { FooterBase } from './FooterBase';
import { FooterLogo } from './FooterLogo';
import { FooterMenu, type FooterMenuProps } from './FooterMenu';
import styles from './footer.module.css';

export interface FooterProps {
  address: string;
  address2?: string;
  menu: FooterMenuProps;
}

export const Footer = ({ address, address2, menu }: FooterProps) => {
  return (
    <FooterBase>
      <FooterAddress>
        <FooterLogo />
        <div className={styles.address}>
          <span>{address}</span>
          <span>{address2}</span>
        </div>
      </FooterAddress>
      <FooterMenu {...menu} />
    </FooterBase>
  );
};
