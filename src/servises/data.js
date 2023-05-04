import { format, formatDistanceToNow } from 'date-fns';

export function createData(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}

export const datapmam = (date) => {
  return format(new Date(date), 'Pp');
}