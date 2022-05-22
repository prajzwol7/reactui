import React, { createContext, useReducer, useEffect } from "react";
import { InfoReducer } from "../reducers/InfoReducers";

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [info, dispatch] = useReducer(InfoReducer, [], () => {
    const localData = localStorage.getItem("infos");
    return localData ? JSON.parse(localData) : [];
  });

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  useEffect(() => {
    localStorage.setItem("infos", JSON.stringify(info));
  }, [info]);

  return (
    <FormContext.Provider value={{ info, dispatch, editUser }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
