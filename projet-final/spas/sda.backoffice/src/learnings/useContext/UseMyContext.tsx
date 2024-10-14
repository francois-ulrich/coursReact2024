import { useState } from "react";
import { ContextState, MutableContext, MyContext } from "./my-context";
import { Test1 } from "./Test1";
import { Test2 } from "./Test2";
import { Test3 } from "./Test3";

export const UseMyContext = () => {
  const [state, setState] = useState<ContextState>({
    value: "Use my context !",
  });

  const sharedContext: MutableContext = { state, setState };

  return (
    <>
      <MyContext.Provider value={sharedContext}>
        <Test1></Test1>
        <Test2></Test2>
        <Test3></Test3>
      </MyContext.Provider>
    </>
  );
};
