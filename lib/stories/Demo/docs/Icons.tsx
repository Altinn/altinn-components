import { type AvatarSize, Flex, Icon, SizeEnum } from '../../../components';

export const Icons = ({ ...props }) => {
  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return <Icon theme="default" name="inbox" {...props} size={size as AvatarSize} key={size} />;
      })}
    </Flex>
  );
};
