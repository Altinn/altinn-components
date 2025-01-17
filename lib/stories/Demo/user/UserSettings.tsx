import { AddressSettings, SettingsSection, useNavigation } from '..';
import { Button, Flex, Heading, PageBase, PageNav, TextField, Typography } from '../../../components';

export const UserSettings = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">Kontaktinformasjon</Heading>
      <AddressSettings />
      <Heading size="lg">Forhåndsvalgt aktør</Heading>
      <SettingsSection>
        <Typography>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem
            malesuada magna mollis euismod.
          </p>
        </Typography>
      </SettingsSection>
      <Heading size="lg">Innloggingsinformasjon</Heading>
      <SettingsSection>
        <Flex direction="col" spacing={2}>
          <TextField label="Brukernavn" />
          <TextField label="Mobilnummer" />
        </Flex>
        <Flex as="footer" justify="start" spacing={2}>
          <Button>Lagre endringer</Button>
        </Flex>
      </SettingsSection>
    </PageBase>
  );
};
