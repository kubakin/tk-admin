import { useMutation, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import {
  GAME_INSTANCE_LIST,
  GameInstanceListInput,
  GameInstanceListResponse,
} from './query/list.query';
import { useTaskInstance } from '../task-instancee/useTaskInstance';

export const useProgress = () => {
  const context = useContext(GameContext);
  const progressList = useQuery<
    GameInstanceListResponse,
    GameInstanceListInput
  >(GAME_INSTANCE_LIST, {
    variables: { dto: { gameId: context.gameId, status: 'Started' } } ,
  });
  const { void_task } = useTaskInstance();

  const onTaskVoid = async (id: string) => {
    await void_task[0]({ variables: { id } });
    await progressList.refetch(progressList.variables);
  };

  return {
    progressList,
    onTaskVoid,
  };
};
