export interface Order {
  cartId: number;
  userId: User;
}

export interface User {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  userId: number;
  firstName: string;
  lastName: string;
  address: string;
  createdAt: string;
  roles: string[];
}
