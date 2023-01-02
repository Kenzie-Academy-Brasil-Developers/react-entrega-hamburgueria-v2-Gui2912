import { CartContextProvider } from './CartContexts/CartContexts';
import { ProductsContextProvider } from './ProductsContexts/ProductsContexts';
import { iProviderProps } from './UserContexts/types';
import { UserContextProvider } from './UserContexts/UserContexts';

const Providers = ({ children }: iProviderProps) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>{children}</ProductsContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
