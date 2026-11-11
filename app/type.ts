export interface User {
  firstname: string;
  lastname: string;
  middlename?: string;
  gender?: string;
  age: number;
  isOld?: boolean;
}

export interface Client {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    bs: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface MyUser {
  firstname: string;
  lastname: string;
  email: string;
  _id: string;
}