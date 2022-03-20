import { User } from './user';

export type UserData = {
  name: string,
  userName: string,
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  comment: string,
};

export type FieldProps = {
  fieldName: string,
  type?: string,
  placeholderValue?: string,
  validator?: (value: string) => undefined | string,
  readOnly?: boolean,
  required?: boolean,
  textarea?: boolean
}

export type InputProps = {
  inputData: {
    fieldName: string,
    type?: string,
    placeholderValue?: string,
    validator?: (value: string) => undefined | string,
    readOnly?: boolean,
    required?: boolean,
    textarea?: boolean
  }
}

export type FormData = {
  name: FieldProps,
  userName: FieldProps,
  email: FieldProps,
  street: FieldProps,
  city: FieldProps,
  zipcode: FieldProps,
  phone: FieldProps,
  website: FieldProps,
  comment: FieldProps,
  onSubmit: (data: UserData) => void,
}

export type UserCardProps = {
  userData: User,
  readOnlyData: boolean
}
