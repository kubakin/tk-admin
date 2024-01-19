import { useMutation, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import {
  GAME_INSTANCE_LIST,
  GameInstanceListInput,
  GameInstanceListResponse,
} from './query/list.query';
import { useTaskInstance } from '../task-instancee/useTaskInstance';
import { RELEASE_INSTANCE, ReleaseGameInstanceDto } from './query/release.mutation';

export const useFinish = () => {
  const context = useContext(GameContext);
  const finishList = useQuery<
    GameInstanceListResponse,
    GameInstanceListInput
  >(GAME_INSTANCE_LIST, {
    variables: { dto: { gameId: context.gameId, status: 'Finished' } } ,
  });
  const [release_game_instance] = useMutation<
    { release_game_instance: string },
    ReleaseGameInstanceDto
  >(RELEASE_INSTANCE);

  const onRelease = async (id: string) => {
    await release_game_instance({ variables: { id } });
    await finishList.refetch(finishList.variables);
  };

  return {
    finishList,
    onRelease,
  };
};
