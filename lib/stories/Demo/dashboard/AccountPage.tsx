import { AccountHeader, useNavigation } from '..';
import { Heading, PageBase, PageNav, Section } from '../../../components';

export const AccountPage = () => {
  const { breadcrumbs, section } = useNavigation();

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <AccountHeader name="Mathias Dyngeland" currentAccount={undefined} type={'person'} />
      <Heading size="xl">{section?.title}</Heading>
      <Section theme="default" shadow="xs">
        <div style={{ opacity: 0, height: '480px' }}>
          <p />
          <p />
          <p />
          <p />
          <p />
          <p />
        </div>
      </Section>
    </PageBase>
  );
};
