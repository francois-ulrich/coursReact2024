import { PrimeReactProvider } from "primereact/api";
import GamesList from "../components/GamesList";
import { Game } from "../models";
import { GamesContextProvider } from "../store/GamesContextProvider";
import { GameEditDialog } from "../components/Dialogs/GameEditDialog";
import { useState } from "react";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Exemple de thème
import "primereact/resources/primereact.min.css"; // Styles de base
import "primeicons/primeicons.css"; // Icônes PrimeIcons

export const GamesView = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [isEditionDialogVisible, setIsEditionDialogVisible] =
    useState<boolean>(false);

  const handleEditDialogOnHide = () => {
    if (!isEditionDialogVisible) return;

    setIsEditionDialogVisible(false);
  };

  const openNew = () => {
    console.log("Open new");
  };

  const openEdit = (game: Game) => {
    setSelectedGame(game);
    setIsEditionDialogVisible(true);
  };

  const openDelete = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <>
      <GamesContextProvider>
        <PrimeReactProvider>
          <div className="flex flex-wrap gap-2">
            <Button
              label="New"
              icon="pi pi-plus"
              severity="success"
              onClick={openNew}
            />
          </div>

          <GamesList openEdit={openEdit} openDelete={openDelete} />

          {selectedGame && (
            <GameEditDialog
              game={selectedGame}
              visible={isEditionDialogVisible}
              onHide={handleEditDialogOnHide}
            ></GameEditDialog>
          )}
        </PrimeReactProvider>
      </GamesContextProvider>
    </>
  );
};
