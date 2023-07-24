export function convertMinutesToHoursMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursStr = `${hours}h`;
  const minutesStr = `${remainingMinutes}m`;

  return `${hoursStr} ${minutesStr}`;
}
