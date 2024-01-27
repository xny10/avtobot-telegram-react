import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatDate(date: string | number | Date) {
  return format(date, 'h:mm dd MMMM yyyy', {
    locale: ru,
  });
}
