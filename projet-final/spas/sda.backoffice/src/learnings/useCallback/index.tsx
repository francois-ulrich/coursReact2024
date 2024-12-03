import { memo, useCallback, useEffect, useRef, useState } from "react";

interface ChildProps {
  action: () => void;
}

const ChildComponent = memo(({ action }: ChildProps) => {
  console.info("Child component render");
  return <button onClick={action}>Click to increment (from child)</button>;
});

const ParentComponent = () => {
  console.info("Parent component render");

  const [counter, setCounter] = useState<number>(0);
  const counterRef = useRef<number>(counter);

  const incrementCounter = useCallback(() => {
    setCounter(counterRef.current + 1);
  }, []);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  return (
    <>
      <ChildComponent action={incrementCounter}></ChildComponent>

      <button onClick={incrementCounter}>
        Click to increment (from parent): {counter}
      </button>
    </>
  );
};

export default ParentComponent;
