const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const formatURL = (url: string) => {
  url = url.trim();

  if (url[0] !== '/') return '/' + url;

  return url;
};

class HttpClient {
  async get(url: string) {
    const formattedURL = formatURL(url);

    return await fetch(API_BASE_URL + formattedURL);
  }

  async post(url: string, body: any, headers: { [key: string]: string } = {}) {
    const formattedURL = formatURL(url);

    return await fetch(API_BASE_URL + formattedURL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }

  async put(url: string, body: any, headers: { [key: string]: string } = {}) {
    const formattedURL = formatURL(url);

    return await fetch(API_BASE_URL + formattedURL, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }

  async patch(url: string, body: any, headers: { [key: string]: string } = {}) {
    const formattedURL = formatURL(url);

    return await fetch(API_BASE_URL + formattedURL, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }

  async delete(url: string, headers: { [key: string]: string } = {}) {
    const formattedURL = formatURL(url);

    return await fetch(API_BASE_URL + formattedURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }
}

export const httpClient = new HttpClient();
