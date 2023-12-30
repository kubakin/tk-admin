import React from "react";

export const GameContext = React.createContext({
  gameId: null,
  changeGame: (gameId: string) => {},
});
