import {
  Button,
  type ButtonSize,
  type ButtonVariant,
  ComboButton,
  Flex,
  Heading,
  IconButton,
  MetaItem,
} from '../../../components';

const buttonSizes = ['sm', 'md', 'lg'] as ButtonSize[];
const buttonVariants = ['solid', 'outline', 'dotted', 'text'] as ButtonVariant[];

export const Buttons = () => {
  return (
    <Flex direction="col" spacing={4}>
      <Heading size="xl">Buttons</Heading>
      {buttonVariants.map((variant) => {
        return (
          <Flex key={variant} direction="col" spacing={4}>
            <MetaItem>variant:{variant}</MetaItem>
            {buttonSizes.map((size) => {
              return (
                <Flex key={size} spacing={4} align="center">
                  <IconButton icon="x-mark" variant={variant} size={size} />
                  <Button variant={variant} size={size}>
                    Button
                  </Button>
                  <Button variant={variant} icon="arrow-left" size={size}>
                    Button
                  </Button>
                  <Button reverse variant={variant} icon="arrow-right" size={size}>
                    Button
                  </Button>
                  <ComboButton variant={variant} icon="chevron-down" size={size}>
                    ComboButton
                  </ComboButton>
                  <MetaItem>{size}</MetaItem>
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};
