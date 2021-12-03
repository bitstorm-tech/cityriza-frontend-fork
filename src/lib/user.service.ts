import { post } from '$lib/http.service';

export async function createUser(email: string, password: string): Promise<Response> {
  return await post('/api/users', { email, password });
}
