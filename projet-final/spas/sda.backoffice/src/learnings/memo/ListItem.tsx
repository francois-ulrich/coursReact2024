import { memo, useState } from "react";

interface ListItemProps {
  value: string;
}

/*
Sans le memo(...), cliquer sur le bouton d'incrémentation, dont la valeur est gérée par un useState, va re-rendre tous les éléments de la liste (à cause du useState) !
Le memo() sert à mettre en cache un composant pour qu'il ne se re-rende pas.
*/

const ListItem = memo(({ value }: ListItemProps) => {
  console.log(value);

  return <li>{value}</li>;
});

export const List = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ul>
        <ListItem value="Element de liste 1"></ListItem>
        <ListItem value="Element de liste 2"></ListItem>
        <ListItem value="Element de liste 3"></ListItem>
      </ul>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click to increment : {counter}
      </button>
    </>
  );
};
