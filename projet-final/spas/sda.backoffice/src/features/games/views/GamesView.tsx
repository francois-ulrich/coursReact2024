import { PrimeReactProvider } from "primereact/api";
import GamesList from "../components/GamesList";
import { Game } from "../models";
import { GamesContextProvider } from "../store/GamesContextProvider";
import { GameEditDialog } from "../components/Dialogs/GameEditDialog";
import { useState } from "react";

export const GamesView = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [isEditionDialogVisible, setIsEditionDialogVisible] =
    useState<boolean>(false);

  const handleEditDialogOnHide = () => {
    if (!isEditionDialogVisible) return;

    setIsEditionDialogVisible(false);
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
