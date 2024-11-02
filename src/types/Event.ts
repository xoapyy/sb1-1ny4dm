export interface Event {
  id: string;
  title: string;
  date: Date;
  description?: string;
  time?: string;
}

export type EventFormData = Omit<Event, 'id' | 'date'> & {
  date: string;
};