/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Row } from "react-bootstrap";
import { Game } from "../../models";
import { useEffect, useState } from "react";
import business from "../../services/games.application";
import { PrimeReactProvider } from "primereact/api";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { GameEditDialog } from "../Dialogs/GameEditDialog";
import {
  formatStringToDateTime,
  formatNullableStringToDateTime,
} from "../../../../util";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Exemple de thème
import "primereact/resources/primereact.min.css"; // Styles de base
import "primeicons/primeicons.css"; // Icônes PrimeIcons

const GamesList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [isEditionDialogVisible, setIsEditionDialogVisible] =
    useState<boolean>(false);

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
          onClick={() => openEdit(game)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => openDelete(game)}
        />
      </div>
    );
  };

  const openEdit = (game: Game) => {
    setSelectedGame(game);
    setIsEditionDialogVisible(true);
    console.log("Edit game:", game);
  };

  const openDelete = (game: Game) => {
    setSelectedGame(game);
    console.log("Delete:", game);
  };

  const handleEditDialogOnHide = () => {
    if (!isEditionDialogVisible) return;

    setIsEditionDialogVisible(false);
  };

  useEffect(() => {
    business.getAll().then((res) => {
      setGames(res);
    });
  }, []);

  useEffect(() => {
    console.log(selectedGame);
  }, [selectedGame]);

  return (
    <>
      <h1>Games</h1>
      <PrimeReactProvider>
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

        {selectedGame && (
          <GameEditDialog
            game={selectedGame}
            visible={isEditionDialogVisible}
            onHide={handleEditDialogOnHide}
          ></GameEditDialog>
        )}
      </PrimeReactProvider>
    </>
  );
};

export default GamesList;
