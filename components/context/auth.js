import { createContext, useContext, useEffect, useReducer } from "react";
import userbase from "userbase-js";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, isAuthenticated: false, user: payload };
    case "UNSET_USER":
      return initialState;
    default:
      throw new Error(`Unknown action: ${type}`);
  }
};

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initUserbase = async () => {
      try {
        const { user } = await userbase.init({
          appId: "fbbe7d19-9726-4534-83d8-a28b557a0ed2",
          updateUserHandler,
        });

        if (user) {
          dispatch({ type: "SET_USER", payload: user });
        }
      } catch (err) {
        console.log(err);
      }
    };

    initUserbase();
  }, []);

  const updateUserHandler = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const signUp = async ({ username, password }) => {
    const user = await userbase.signUp({
      username,
      password,
      rememberMe: "local",
    });

    dispatch({ type: "SET_USER", payload: user });
  };

  const signIn = async ({ username, password }) => {
    const user = await userbase.signIn({
      username,
      password,
      rememberMe: "local",
    });

    dispatch({ type: "SET_USER", payload: user });
  };

  const signOut = async () => {
    await userbase.signOut();

    dispatch({ type: "UNSET_USER" });
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={{ signUp, signIn, signOut }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error(` useAuthState must be used within AuthProvider`);
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error(` useAuthDispatch must be used within AuthProvider`);
  }

  return context;
};
