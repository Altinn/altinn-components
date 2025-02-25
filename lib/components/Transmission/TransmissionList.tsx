import { ListBase, Byline, Transmission, type TransmissionProps } from "..";

export interface TransmissionListProps {
  items: TransmissionProps[];
  className?: string;
}

export const TransmissionList = ({ items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ListBase margin={0}>
      {items.map((item, index) => {
        const { sender, createdAt, createdAtLabel } = item;

        return (
          <li key={item.id}>
            <ListBase>
              <Byline datetime={createdAt}>
                {sender && <strong>{sender.name + ", "}</strong>}
                {createdAtLabel}
              </Byline>
              <Transmission {...item} key={index} />
            </ListBase>
          </li>
        );
      })}
    </ListBase>
  );
};
