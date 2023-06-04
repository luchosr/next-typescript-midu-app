// import { createContext, useReducer, useContext } from 'react';
// import { appReducer, initialState } from './storeReducer';

// const AppContext = createContext(initialState);

// export const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(appReducer, initialState);

//   const updateTollgates = (tollgates) => {
//     const myTollgates = tollgates;
//     dispatch({
//       type: 'UPDATE_TOLLGATES',
//       payload: myTollgates,
//     });
//   };

//   const updateSolutionDesign = (newSolutionDesign) => {
//     let newTollgate = [...state.tollgates];
//     newTollgate[1].pre_requisites[3] = newSolutionDesign;
//     dispatch({
//       type: 'UPDATE_TOLLGATES',
//       payload: newTollgate,
//     });
//   };

//   const value = {
//     tollgates: state.tollgates,
//     updateSolutionDesign,
//     updateTollgates,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export const useAppContext = () => {
//   const context = useContext(AppContext);

//   if (context === undefined) {
//     throw new Error('useAppContext must be used within ShopContext');
//   }

//   return context;
// };
import { createContext, useReducer } from 'react';
import { initialStore, storeReducer } from './storeReducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
