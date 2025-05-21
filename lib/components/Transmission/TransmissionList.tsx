import { Byline, List, Transmission, type TransmissionProps } from '..';

export interface TransmissionListProps {
  items: TransmissionProps[];
  className?: string;
}

export const TransmissionList = ({ items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <List>
      {items.map((item, index) => {
        const { datetime, byline, createdAtLabel } = item;
        return (
          <li key={item.id}>
            <List>
              <Byline as="li" datetime={datetime}>
                {byline || createdAtLabel}
              </Byline>
              <Transmission {...item} key={index} />
            </List>
          </li>
        );
      })}
    </List>
  );
};
