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
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, XMarkIcon } from "@navikt/aksel-icons";

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
                  <IconButton icon={XMarkIcon} variant={variant} size={size} iconAltText="xmark" />
                  <Button variant={variant} size={size}>
                    Button
                  </Button>
                  <Button variant={variant} icon={ArrowLeftIcon} size={size}>
                    Button
                  </Button>
                  <Button reverse variant={variant} icon={ArrowRightIcon} size={size}>
                    Button
                  </Button>
                  <ComboButton variant={variant} icon={ChevronDownIcon} size={size}>
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
