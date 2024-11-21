import { createContext, useCallback, useReducer } from "react";
export const ctx = createContext({ GetManuName: () => { }, manuName: "" });
const ContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        if (action.type === "MANUNAME") {
            return { ...state, manuName: action.payload }
        }
    };
    const [state, dispatch] = useReducer(reducer, { manuName: "Home" });
    const GetManuName = (name) => {
        dispatch({ type: "MANUNAME", payload: name });
    }
    const value = { GetManuName: GetManuName, manuName: state.manuName };
    return <ctx.Provider value={value}>{children}</ctx.Provider>;
}
export default ContextProvider;

