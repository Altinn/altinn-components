import { AvatarGroup, type AvatarSize, Flex, SizeEnum } from '../../../components';

export const AvatarGroups = ({ ...props }) => {

    const items = [
        { name: "Alfa"},
        { name: "Beta"},
        { name: "Charlie"}
    ];

  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return <AvatarGroup {...props} items={items} size={size as AvatarSize} key={size} />;
      })}
    </Flex>
  );
};
