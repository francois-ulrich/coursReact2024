import { useMemo, useState } from "react";

const SquareList = () => {
  const [numbers, setNumbers] = useState([1]);
  const [counter, setCounter] = useState(0);

  const squares = useMemo(
    () =>
      numbers.map((number) => {
        console.log(`Calcul du carré de ${number}`);
        return number * number;
      }),
    [numbers]
  );

  return (
    <>
      <h1>useMemo:</h1>

      <div>
        <div>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Click to increment : {counter}
          </button>
          <button
            onClick={() => {
              setNumbers([...numbers, numbers.length + 1]);
            }}
          >
            Ajouter un nombre à traiter
          </button>
        </div>
        <ul>
          {squares.map((square, index) => (
            <li key={index}>{square}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SquareList;
