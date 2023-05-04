import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({ title, stats }) => {
  const iconArr = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map((stat, index) => (
          <StatisticItem
            total={stat.total}
            title={stat.title}
            key={stat.id}
            icon={iconArr[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
