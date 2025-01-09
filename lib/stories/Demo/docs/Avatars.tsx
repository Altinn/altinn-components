import { Avatar, type AvatarSize, Flex, SizeEnum } from '../../../components';

export const Avatars = ({ ...props }) => {
  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return <Avatar name="Avatar" {...props} size={size as AvatarSize} key={size} />;
      })}
    </Flex>
  );
};
