export interface Company {
  email: string;
  password: string;
  association: boolean;
  branch: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  contactPerson: string;
  phone: string;
  taxId?: string;
}
