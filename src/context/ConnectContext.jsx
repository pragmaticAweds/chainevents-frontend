/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const ConnectContext = createContext();

const initialState = {
  connection: null,
  account: null,
  address: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "connectWallet":
      return {
        ...state,
        connection: action.payload.connection,
        account: action.payload.account,
        address: action.payload.address,
      };
    case "disconnectWallet":
      return {
        ...state,
        connection: null,
        account: null,
        address: null,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const ConnectProvider = ({ children }) => {
  const [{ connection, account, address }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <ConnectContext.Provider
      value={{
        connection,
        address,
        account,
        dispatch,
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};

function useConnectWallet() {
  const context = useContext(ConnectContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scope");

  return context;
}

export { ConnectProvider, useConnectWallet };
