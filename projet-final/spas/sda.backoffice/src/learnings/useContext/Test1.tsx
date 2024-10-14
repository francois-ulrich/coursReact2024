import { useMyContext } from "./my-context";

export const Test1 = () => {
  const context = useMyContext();
  return (
    <div>
      <h1>Test 1</h1>
      <div>{context.state.value}</div>
    </div>
  );
};
