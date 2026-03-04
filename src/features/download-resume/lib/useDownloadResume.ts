export function useDownloadResume() {
  const download = () => {
    if (typeof window === 'undefined') return;

    const base = import.meta.env.BASE_URL ?? '/';
    const url = new URL('resume.pdf', window.location.origin + base).toString();

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return {
    download,
  };
}

