export function formatTimestamp(timestamp: string): string {
  const datetime = new Date(timestamp);

  const yyyy = datetime.getFullYear();
  const mm = String(datetime.getMonth() + 1).padStart(2, '0');
  const dd = String(datetime.getDate()).padStart(2, '0');
  const HH = String(datetime.getHours()).padStart(2, '0');
  const MM = String(datetime.getMinutes()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${HH}:${MM}`;
}
