import Header from "./components/Header.jsx";
import {AppRouter} from "./routes/AppRouter.jsx";
import {createContext, useState} from "react";

export const Context = createContext();

function App() {
    const [user, setUser] = useState(null);
  return (
    <>
        <Context.Provider value={{user: user, setUser: setUser}}>
          <Header />
          <AppRouter />
        </Context.Provider>
    </>
  )
}

export default App
