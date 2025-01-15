import { SettingsSection } from '..';
import { Button, Flex, Grid, Heading, ListItem, PageBase, Section, TextField, Typography } from '../../../components';

export const AddressSettings = () => {
  return (
    <SettingsSection>
      <Flex direction="col" spacing={2}>
        <Flex spacing={2} style={{ width: '100%' }}>
          <TextField label="SMS" />
          <TextField label="E-post" />
        </Flex>
        <TextField label="Adresse" />
      </Flex>
      <Flex as="footer" justify="start" spacing={2}>
        <Button>Lagre endringer</Button>
      </Flex>
    </SettingsSection>
  );
};
