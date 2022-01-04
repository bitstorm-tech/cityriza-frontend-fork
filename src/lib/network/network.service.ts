import { post } from '$lib/http.service';

export async function createNetwork(name: string, amountOfDisplays: string, merchants: string): Promise<Response> {
  // return await post('/api/users', { email, password });
  return await post('/api/networks', { name, amountOfDisplays, merchants });
}

export function getInvalidNetworkFormFields(form): string[] {
  const invalidFields: string[] = [];

  if (form.name.value.length === 0) {
    invalidFields.push('Name');
  }

  if (form.amountOfDisplays.value.length === 0) {
    invalidFields.push('Anzahl der Displays');
  }

  if (form.merchants.value.length === 0) {
    invalidFields.push('Merchant');
  }

  return invalidFields;
}
