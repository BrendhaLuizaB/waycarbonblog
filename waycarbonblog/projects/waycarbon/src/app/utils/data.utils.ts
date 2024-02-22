// date-utils.ts
export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    return formattedDate;
  }
