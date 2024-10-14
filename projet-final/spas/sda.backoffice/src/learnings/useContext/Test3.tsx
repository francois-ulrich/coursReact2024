import { useMyContext } from "./my-context";

export const Test3 = () => {
  const context = useMyContext();

  const handleClick = () => {
    if (context.setState === null) return;

    context.setState({ value: "Context value changed !" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (context.setState === null) return;
    context.setState({ value: e.target.value });
  };

  return (
    <div>
      <h1>Test 3</h1>
      <div>
        <input
          type="text"
          value={context.state.value}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleClick}>
          Change
        </button>
      </div>
    </div>
  );
};
