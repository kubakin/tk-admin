import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import {
  GAME_INSTANCE_LIST,
  GameInstanceListInput,
  GameInstanceListResponse,
} from "./query/list.query";

export const usePending = () => {
  const context = useContext(GameContext);
  const pendingList = useQuery<
    GameInstanceListResponse,
    GameInstanceListInput
  >(GAME_INSTANCE_LIST, { variables: { dto: { gameId: context.gameId, status: "CREATED" } } });
  return {
    pendingList,
  };
};
