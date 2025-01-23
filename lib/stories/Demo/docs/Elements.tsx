import { useNavigation } from '../';
import { Flex, PageBase, PageNav, Section, Typography } from '../../../components';
import { brreg } from '../data/avatar';

import { Avatars } from './Avatars';
import { AvatarGroups } from './AvatarGroups';
import { Buttons } from './Buttons';
import { Colors } from './Colors';
import { Icons } from './Icons';

export const Elements = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase spacing={3}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Typography>
        <h1>Icons and avatars</h1>
        <h2>Avatar</h2>
        <p>
          Use avatars to identify people and companies across Altinn. They come in multiple sizes and are included
          in components like ListItem and MenuItem.
        </p>
        <Avatars name="Person" type="person" />
        <p>People avatars are circular and uses a light background color.</p>
        <Avatars name="Company" type="company" />
        <p>Company avatars are square and uses a dark background color.</p>
        <Avatars {...brreg} />
        <p>Companies can also be idenitfied by their logo.</p>

        <h2>Avatar groups</h2>
        <p>Use avatar groups when you need to identify a group of companies or a group of people.</p>

        <AvatarGroups defaultType="company" />
        <p>Group of companies.</p>
        <AvatarGroups defaultType="person" />
        <p>Group of people.</p>

        <h2>Icon</h2>
        <p>
          Icons are used to identify content and functionality. They come in multiple sizes and are included in
          components like ListItem and MenuItem.
        </p>
        <Icons />
        <p>Default icons are outline.</p>
        <Icons variant="solid" theme="base-default" />
        <p>Solid icons with a dark theme.</p>

        <h2>List elements</h2>
        <p>Use lists to identify a piece of content.</p>
      </Typography>
    </PageBase>
  );
};
