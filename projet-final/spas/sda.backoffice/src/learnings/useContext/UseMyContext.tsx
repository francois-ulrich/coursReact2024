import { ContextState, MyContext } from "./my-context";
import { Test1 } from "./Test1";
import { Test2 } from "./Test2";

export const UseMyContext = () => {
  const state: ContextState = {
    value: "Use my context !",
  };

  return (
    <>
      <MyContext.Provider value={state}>
        <Test1></Test1>
        <Test2></Test2>
      </MyContext.Provider>
    </>
  );
};
