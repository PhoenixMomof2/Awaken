// src/context/ThemeContext.js

// Create context
const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {



  return (
    <ThemeContext.Provider value={{theme}}>
      <Group />
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };