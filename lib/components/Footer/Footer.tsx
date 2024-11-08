import { FooterAddress } from './FooterAddress';
import { FooterBase } from './FooterBase';
import { FooterLogo } from './FooterLogo';
import { FooterMenu, type FooterMenuProps } from './FooterMenu';

export interface FooterProps {
  address: string;
  menu: FooterMenuProps;
}

export const Footer = ({ address, menu }: FooterProps) => {
  return (
    <FooterBase>
      <FooterAddress>
        <FooterLogo />
        {address}
      </FooterAddress>
      <FooterMenu {...menu} />
    </FooterBase>
  );
};
