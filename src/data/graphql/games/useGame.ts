import { useMutation, useQuery } from "@apollo/client";
import { GAME_LIST, GameListResponse } from "./query/game.query";
import { GET_GAME, GameResponse } from "./query/game-one.query";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import { CREATE_GAME, CreateGameDto } from "./query/create-game.mutation";
import { UPDATE_GAME, UpdateGameDto } from "./query/update-game.mutation";

export const useGame = () => {
  const context = useContext(GameContext);
  const createGame = useMutation<string, CreateGameDto>(CREATE_GAME);
  const updateGame = useMutation<string, UpdateGameDto>(UPDATE_GAME);
  const gameList = useQuery<GameListResponse>(GAME_LIST);
  const getGame = useQuery<GameResponse, { id: string }>(GET_GAME, {
    variables: { id: context.gameId },
  });
  return {
    gameList,
    getGame,
    createGame,
    updateGame,
  };
};
