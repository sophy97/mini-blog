// 아주 간단한(배경, 글자색만 변경하는) 다크모드 데이터를 관리하기 위한 context
// 보류

// const ThemeContext = createContext({});

// import { lightTheme, darkTheme } from '../components/theme';
// import { createContext, useState, useContext, useCallback } from 'react';
// import { ThemeProvider as StyledProvider } from 'styled-components';

// const ThemeProvider = ({children}) => {
//   const [ThemeMode, setThemeMode] = useState('light');
//   const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

//   return(
//     <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
//       <StyledProvider theme={themeObject}> 
//   {/* styled-components에서 제공하는 메서드 */}
//         { children }
//       </StyledProvider>      
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   const context = useContext(ThemeContext);
//   const { ThemeMode, setThemeMode } = context;

//   const toggleTheme = useCallback(() => {
//     if (ThemeMode === "light") {
//       setThemeMode("dark");
//     }
//     else {
//       setThemeMode("light")
//     };
//   }, [ThemeMode]);
  
//   return [ ThemeMode, toggleTheme];
// }

// export { ThemeProvider, useTheme };