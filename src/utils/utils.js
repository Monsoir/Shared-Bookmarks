export function getHostName(url) {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }

  return '';
}

export function getURLIndex(aURL) {
  const hostname = getHostName(aURL);
  if (hostname) {
    const http = 'http://';
    const https = 'https://';
    if (aURL.startsWith(http)) {
      return `${http}${hostname}`;
    }

    return `${https}${hostname}`;
  }

  return '';
}

export function getFavicon(aURL) {
  const indexURL = getURLIndex(aURL);
  if (indexURL) {
    return `${indexURL}/favicon.ico`;
  }

  return '';
}
