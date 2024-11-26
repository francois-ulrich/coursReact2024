/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Row } from "react-bootstrap";
import { Game } from "../../models";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import {
  formatStringToDateTime,
  formatNullableStringToDateTime,
} from "../../../../util";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Exemple de thème
import "primereact/resources/primereact.min.css"; // Styles de base
import "primeicons/primeicons.css"; // Icônes PrimeIcons
import { useGamesContext } from "../../store/gamesContext";

interface Props {
  openEdit: (game: Game) => void;
  openDelete: (game: Game) => void;
}

const GamesList = (props: Props) => {
  const gamesContext = useGamesContext();

  const dateStartFormatBody = (game: Game): string => {
    return formatStringToDateTime(game.dateStart);
  };

  const dateEndFormatBody = (game: Game): string => {
    return formatNullableStringToDateTime(game.dateEnd);
  };

  const successTemplateBody = (game: Game): string => {
    return game.success ? "Oui" : "Non";
  };

  const actionBodyTemplate = (game: Game) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => props.openEdit(game)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => props.openDelete(game)}
        />
      </div>
    );
  };

  return (
    <>
      <h1>Games</h1>

      <Row>
        <DataTable value={gamesContext.state.games} dataKey="id">
          <Column field="id" header="ID" />
          <Column field="name" header="Nom du jeu" sortable />
          <Column field="characterName" header="Nom du joueur" sortable />
          <Column
            field="success"
            header="Jeu fini ?"
            body={successTemplateBody}
            filter
          />
          <Column
            field="dateStart"
            header="Date de début"
            body={dateStartFormatBody}
            sortable
          />
          <Column
            field="dateEnd"
            header="Date de fin"
            body={dateEndFormatBody}
            sortable
          />
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </Row>
    </>
  );
};

export default GamesList;
