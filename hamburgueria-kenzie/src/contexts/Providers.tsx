import { iProviderProps } from "./UserContexts/types";
import { UserContextProvider } from "./UserContexts/UserContexts";


const Providers = ({ children } : iProviderProps) => {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
};

export default Providers;