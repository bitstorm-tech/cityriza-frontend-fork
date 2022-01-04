import { post } from '$lib/http.service';

export async function createMerchant(name: string, startDate: string, endDate: string): Promise<Response> {
  // return await post('/api/users', { email, password });
  return await post('/api/merchants', { name, startDate, endDate });
}

export function getInvalidMerchantFormFields(form): string[] {
  const invalidFields: string[] = [];

  if (form.name.value.length === 0) {
    invalidFields.push('Name');
  }

  if (form.startDate.value.length === 0) {
    invalidFields.push('Start-Datum');
  }

  if (form.endDate.value.length === 0) {
    invalidFields.push('End-Datum');
  }

  return invalidFields;
}
