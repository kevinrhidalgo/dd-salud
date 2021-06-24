import React, { createContext, useReducer } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

//the function that is getting the user to authenticate for the protected page
function reducer(state, action) {
    switch (action.type) {
        case "GET_USER":
            return action.payload;
        default:
            return state;
    }
}

function UserProvider({ value = {}, ...props }) {
    const [state, dispatch] = useReducer(reducer, []);

    return <Provider value={[state, dispatch]} {...props} />;
}

export { UserProvider, UserContext };
