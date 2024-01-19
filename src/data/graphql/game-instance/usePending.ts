import { useMutation, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import {
  GAME_INSTANCE_LIST,
  GameInstanceListInput,
  GameInstanceListResponse,
} from './query/list.query';
import {
  APPROVE_INSTANCE,
  ApproveGameInstanceDto,
} from './query/approve.mutation';
import {
  REJECT_INSTANCE,
  RejectGameInstanceDto,
} from './query/reject.mutation';

export const usePending = () => {
  const context = useContext(GameContext);
  const [appove_game_instance] = useMutation<
    { appove_game_instance: string },
    ApproveGameInstanceDto
  >(APPROVE_INSTANCE);
  const pendingList = useQuery<GameInstanceListResponse, GameInstanceListInput>(
    GAME_INSTANCE_LIST,
    {
      variables: { dto: { gameId: context.gameId, status: 'Created' } },
    },
  );
  const [reject_game_instance] = useMutation<
    { reject_game_instance: string },
    RejectGameInstanceDto
  >(REJECT_INSTANCE);

  const onApprove = async (id: string) => {
    await appove_game_instance({ variables: { id } });
    await pendingList.refetch(pendingList.variables);
  };

  const onReject = async (id: string) => {
    await reject_game_instance({ variables: { id } });
    await pendingList.refetch(pendingList.variables);
  };

  return {
    pendingList,
    onApprove,
    onReject,
  };
};
