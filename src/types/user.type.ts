export interface User {
    userId: string;
    roleId: string;
    counterId: string;
    username: string;
    fullName: any;
    gender: any;
    phoneNumber: any;
    email: string;
    password: string;
    status: boolean;
    createdAt: any;
    updatedAt: any;
    bills: any[];
    counter: any;
    purchases: any[];
    role: Role;
}

export interface Role {
    roleId: string;
    roleName: string;
    users: any[];
}

export interface Token {
    token: string;
    expiration: string;
}

export interface TokenDecode {
    Id: string;
    nameid: string;
    sub: string;
    email: string;
    role: string;
    jti: string;
    nbf: number;
    exp: number;
    iat: number;
    iss: string;
    aud: string;
}

export interface JewelryType {
    jewelryTypeId: string;
    name: string;
    jewelries: any[];
}

export type SignInRequest = Pick<User, 'email' | 'password'>;
