import useGetInitialState from "@/components/hooks/useGetInitialState";
import { ProductsContextType } from "@/components/types";
import { useReducer, createContext } from "react";
import productsReducer from './AppReducer'

const Context = createContext<ProductsContextType | null>(null);

const Provider = ({ children }) => {
  const [initialState] = useGetInitialState();

  const [state, dispatch] = useReducer(productsReducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };