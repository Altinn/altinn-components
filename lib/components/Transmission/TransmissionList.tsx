import { ListBase, Transmission, type TransmissionProps } from "..";

export interface TransmissionListProps {
  items: TransmissionProps[];
  className?: string;
}

export const TransmissionList = ({ items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ListBase>
      {items.map((item, index) => {
        return <Transmission {...item} key={index} />;
      })}
    </ListBase>
  );
};
