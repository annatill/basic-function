import { formatDistanceToNow } from 'date-fns';

export function createData(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}
