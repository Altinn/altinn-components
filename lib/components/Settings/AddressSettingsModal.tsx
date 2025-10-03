import { ExternalLinkIcon, HouseHeartIcon } from '@navikt/aksel-icons';
import {
  Button,
  ButtonGroup,
  SettingsModal,
  type SettingsModalProps,
  TextareaField,
  type TextareaFieldProps,
  Typography,
} from '../';
export interface AddressSettingsModalProps extends SettingsModalProps {
  valueField?: TextareaFieldProps;
}

export const AddressSettingsModal = ({
  title = 'Endre adresse',
  icon = HouseHeartIcon,
  valueField = {
    label: 'Adresse',
    value: 'Idrettsveien 1, 5025 Bergen',
    readOnly: true,
  },
  open,
  onClose,
}: AddressSettingsModalProps) => {
  return (
    <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
      <TextareaField {...valueField} size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altinn bruker adressen din fra <a href="https://skatteetaten.no/">Folkeregisteret</a>.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline" icon={ExternalLinkIcon} reverse>
          Endre adresse
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};
