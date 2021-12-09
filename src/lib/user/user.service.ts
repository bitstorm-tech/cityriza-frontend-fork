import { post } from '$lib/http.service';

export async function createUser(email: string, password: string): Promise<Response> {
  return await post('/api/users', { email, password });
}

export function getInvalidUserFormFields(form): string[] {
  const invalidFields: string[] = [];

  if (form.email.value.length === 0) {
    invalidFields.push('E-Mail');
  }

  if (form.password.value.length === 0) {
    invalidFields.push('Passwort');
  }

  return invalidFields;
}
