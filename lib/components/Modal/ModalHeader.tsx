import { XMarkIcon } from '@navikt/aksel-icons';
import { IconButton } from '../Button';
import { Flex } from '../Page';
import { Heading } from '../Typography';

export interface ModalHeaderProps {
  title: string;
  closeTitle?: string;
  onClose?: () => void;
}

export const ModalHeader = ({ title, onClose, closeTitle }: ModalHeaderProps) => {
  return (
    <Heading as="h2" size="xl">
      <Flex direction="row" justify="between" align="center" spacing={8}>
        {title}
        {typeof onClose === 'function' && (
          <IconButton
            icon={XMarkIcon}
            variant="outline"
            onClick={onClose}
            iconAltText={closeTitle ?? 'close'}
            size="md"
          />
        )}
      </Flex>
    </Heading>
  );
};
