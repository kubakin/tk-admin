import AdminLayout from '../../components/Layout';
import { useEffect } from 'react';
import { GameInstanceTable } from '../../components/GameInstance/Tables/GameInstanceTable';
import { useProgress } from '../../data/graphql/game-instance/useProgress';
import { FinishedTable } from '../../components/GameInstance/Tables/FinishedTable';
import { useFinish } from '../../data/graphql/game-instance/useFinish';

export const GameInstancePage = () => {
  const {
    progressList: { data, loading },
  } = useProgress();
  const { finishList } = useFinish();
  const finishedList = finishList?.data?.admin_game_instance_list;
  return (
    <AdminLayout>
      <GameInstanceTable
        loading={loading}
        data={data?.admin_game_instance_list}
      />
      <FinishedTable loading={finishList.loading} data={finishedList} />
    </AdminLayout>
  );
};
