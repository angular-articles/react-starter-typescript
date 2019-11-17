export interface UserBaseI {
  name: Name,
  lastName: LastName,
  email: Email,
}

export interface UserI extends UserBaseI {
  token: Token,
}

export interface SignUpI extends UserBaseI {
  password: Password,
}

export type Token = string;
export type Name = string;
export type LastName = string;
export type Email = string;
export type Password = string;
