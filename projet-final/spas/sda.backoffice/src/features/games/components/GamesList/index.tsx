/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Row } from "react-bootstrap";
import { Game } from "../../models";
import { useEffect, useState } from "react";
import business from "../../services/games.application";
import { format } from "date-fns";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

const GamesList = () => {
  const [games, setGames] = useState<Game[]>([]);

  const dateStartFormatBody = (game: Game): string => {
    return format(new Date(game.dateStart), "dd/MM/yyyy kk:mm");
  };

  const dateEndFormatBody = (game: Game): string => {
    return game.dateEnd
      ? format(new Date(game.dateEnd), "dd/MM/yyyy kk:mm")
      : "-";
  };

  const successTemplateBody = (game: Game): string => {
    return game.success ? "Oui" : "Non";
  };

  const actionBodyTemplate = (game: Game) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning p-mr-2"
          onClick={() => handleEdit(game)}
          aria-label="Edit"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => handleDelete(game)}
          aria-label="Delete"
        />
      </div>
    );
  };

  const handleEdit = (game: Game) => {
    console.log("Edit game:", game);
  };

  const handleDelete = (game: Game) => {
    console.log("Delete:", game);
  };

  useEffect(() => {
    business.getAll().then((res) => {
      setGames(res);
    });
  }, []);

  const gameTableComponent = (
    <>
      <h1>Games</h1>

      <Row>
        <DataTable value={games} dataKey="id">
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

  return gameTableComponent;
};

export default GamesList;
