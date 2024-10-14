import { useMyContext } from "./my-context";

export const Test2 = () => {
  const context = useMyContext();
  return (
    <div>
      <h1>Test 2</h1>
      <div>{context.state.value}</div>
    </div>
  );
};
