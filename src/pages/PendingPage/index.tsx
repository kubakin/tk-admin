import AdminLayout from '../../components/Layout';
import { useEffect } from 'react';
import { GameInstanceTable } from '../../components/GameInstance/Tables/GameInstanceTable';
import { useProgress } from '../../data/graphql/game-instance/useProgress';
import { usePending } from '../../data/graphql/game-instance/usePending';
import { PendingTable } from '../../components/GameInstance/Tables/PendingTable';

export const PendingPage = () => {
  const {
    pendingList: { data, loading },
  } = usePending();
  return (
    <AdminLayout>
      <PendingTable loading={loading} data={data?.admin_game_instance_list} />
    </AdminLayout>
  );
};
