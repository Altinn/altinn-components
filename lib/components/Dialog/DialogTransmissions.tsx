import { type TransmissionListProps, TransmissionList } from "..";

export const DialogTransmissions = ({
  items,
  ...props
}: TransmissionListProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <TransmissionList
      {...props}
      defaultItemColor="neutral"
      defaultItemTheme="subtle"
      items={items}
    />
  );
};
