export type APITimelineItem = {
  title: string;
  description?: string;
  time: string; // format: "HH:MM"
  date: string; // format: "YYYY-MM-DD"
};

export type TimelineItem = {
  title: string;
  description?: string;
  time: Date; // format: "HH:MM"
  date: Date; // format: "YYYY-MM-DD"
};

export function parse(apiTimelineItem: APITimelineItem): TimelineItem {
  return {
    ...apiTimelineItem,
    time: parseStringTimeToDateTime(apiTimelineItem.time),
    date: new Date(apiTimelineItem.date),
  };
}

export function parseStringTimeToDateTime(time: string): Date {
  const [hours, minutes] = time.split(":").map((str) => parseInt(str));
  return new Date(0, 0, 0, hours, minutes);
}
