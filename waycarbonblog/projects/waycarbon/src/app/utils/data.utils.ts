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

 export function formatMemberSince(memberSince: string | undefined): string {
    if (memberSince) {
      const date = new Date(memberSince);
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      return date.toLocaleDateString('pt-BR', options);
    } else {
      return '';
    }
  }