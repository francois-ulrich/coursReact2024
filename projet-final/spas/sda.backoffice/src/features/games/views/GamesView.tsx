import { PrimeReactProvider } from "primereact/api";
import GamesList from "../components/GamesList";
import { Game } from "../models";
import { GamesContextProvider } from "../store/GamesContextProvider";
import { useState } from "react";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Exemple de thème
import "primereact/resources/primereact.min.css"; // Styles de base
import "primeicons/primeicons.css"; // Icônes PrimeIcons
import { GameCreationDialog } from "../components/Dialogs/GameCreationDialog";
import { GameEditionDialog } from "../components/Dialogs/GameEditionDialog";
import { GameDeletionDialog } from "../components/Dialogs/GameDeletionDialog";

export const GamesView = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [isCreationDialogVisible, setIsCreationDialogVisible] =
    useState<boolean>(false);
  const [isEditionDialogVisible, setIsEditionDialogVisible] =
    useState<boolean>(false);
  const [isDeletionDialogVisible, setIsDeletionDialogVisible] =
    useState<boolean>(false);

  const handleCreationDialogOnHide = () => {
    if (!isCreationDialogVisible) return;

    setIsCreationDialogVisible(false);
  };

  const handleEditDialogOnHide = () => {
    if (!isEditionDialogVisible) return;

    setIsEditionDialogVisible(false);
  };

  const handleDeletionDialogOnHide = () => {
    if (!isDeletionDialogVisible) return;

    setIsDeletionDialogVisible(false);
  };

  const openNew = () => {
    setIsCreationDialogVisible(true);
  };

  const openEdit = (game: Game) => {
    setSelectedGame(game);
    setIsEditionDialogVisible(true);
  };

  const openDelete = (game: Game) => {
    setSelectedGame(game);
    setIsDeletionDialogVisible(true);
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
              className="p-button-text"
              onClick={openNew}
            />
          </div>

          <GamesList openEdit={openEdit} openDelete={openDelete} />

          <GameCreationDialog
            visible={isCreationDialogVisible}
            onHide={handleCreationDialogOnHide}
          ></GameCreationDialog>

          {selectedGame && (
            <>
              <GameEditionDialog
                game={selectedGame}
                visible={isEditionDialogVisible}
                onHide={handleEditDialogOnHide}
              ></GameEditionDialog>

              <GameDeletionDialog
                game={selectedGame}
                visible={isDeletionDialogVisible}
                onHide={handleDeletionDialogOnHide}
              ></GameDeletionDialog>
            </>
          )}
        </PrimeReactProvider>
      </GamesContextProvider>
    </>
  );
};
