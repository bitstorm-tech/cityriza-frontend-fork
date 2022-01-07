import http from '$lib/http.service';

export async function createNetwork(name: string, amountOfDisplays: string, merchants: string): Promise<string> {
  const response = await http.post('/api/networks', { name, amountOfDisplays, merchants });
  return response.data.id;
}

export async function updateNetwork(
  id: string,
  name: string,
  amountOfDisplays: string,
  merchants: string
): Promise<void> {
  await http.patch('/api/networks', { id, name, amountOfDisplays, merchants });
}

export async function deleteNetwork(id: string): Promise<void> {
  console.dirxml(id);
  await http.delete(`/api/networks/${id}`);
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
