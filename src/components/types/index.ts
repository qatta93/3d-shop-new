import { RedirectableProviderType } from "next-auth/providers";
import { FC } from "react";

export interface FurnitureTypesProps {
  id: number,
  name: string,
  img: string,
  price: string,
}

export interface FurnitureDataProps {
  data: Array<any>,
  Component: FC<any>,
}

export interface FurnitureDetailsProps {
  id: string,
  type: string,
  name: string,
  price: string,
  color: string,
  description: string,
  embed: string,
  img: string,
  modelScale: number,
  modelPosition: Array<number>
}

export interface User {
  email: string,
  emailVerifed?: boolean,
  id: string,
  image?: string,
  password: string
}

export interface ProductInState {
  products: string,
  quantity: number,
}

export interface ProductInDatabase {
  id: string,
  products: string,
  quantity: number,
  userId: string,
}

export interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

export interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

export interface MobileNavProps {
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DesktopNavProps {
  session: any,
  signIn: any,
  signOut: any,
}

export interface ProductsContextType {
  state: ProductInState[],
}

export interface LoginFormProps {
  email: string,
  password: string,
}

export interface RegisterFormProps {
  name: string,
  email: string,
  password: string,
  repeatPassword: string,
}