import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import {
  GAME_INSTANCE_LIST,
  GameInstanceListInput,
  GameInstanceListResponse,
} from "./query/list.query";

export const useProgress = () => {
  const context = useContext(GameContext);
  const progressList = useQuery<
    GameInstanceListResponse,
    GameInstanceListInput
  >(GAME_INSTANCE_LIST, { variables: { dto: { gameId: context.gameId } } });
  return {
    progressList,
  };
};
