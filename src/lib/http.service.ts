const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
const headers = { 'Content-Type': 'application/json' };

export function createUrl(path: string): string {
  return `${VITE_BACKEND_HOST}${path}`;
}

export function post(path: string, payload): Promise<Response> {
  const url = createUrl(path);
  const body = JSON.stringify(payload);
  return fetch(url, { method: 'POST', body, headers });
}
