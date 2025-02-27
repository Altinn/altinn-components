import { Byline, ListBase, Transmission, type TransmissionProps } from '..';

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
        const { datetime, byline, createdAtLabel } = item;
        return (
          <li key={item.id}>
            <ListBase>
              <Byline as="li" datetime={datetime}>
                {byline || createdAtLabel}
              </Byline>
              <Transmission {...item} key={index} />
            </ListBase>
          </li>
        );
      })}
    </ListBase>
  );
};
