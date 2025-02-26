import { ListBase, Byline, Transmission, type TransmissionProps } from '..';

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
        const { datetime, dateline, createdAtLabel } = item;

        return (
          <li key={item.id}>
            <ListBase>
              <Byline datetime={datetime}>{dateline || createdAtLabel}</Byline>
              <Transmission {...item} key={index} />
            </ListBase>
          </li>
        );
      })}
    </ListBase>
  );
};
