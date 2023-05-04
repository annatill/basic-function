import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from 'react-icons';
export const StatisticItem = ({ total, title, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: '60px' }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
