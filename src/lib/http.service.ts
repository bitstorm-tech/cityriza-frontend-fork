const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

export function createUrl(path: string): string {
  return `${BACKEND_HOST}${path}`;
}

export function post(path: string, payload, isFormData = false): Promise<Response> {
  const url = createUrl(path);
  const body = isFormData ? payload : JSON.stringify(payload);
  const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
  return fetch(url, { method: 'POST', body, headers });
}
