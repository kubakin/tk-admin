import AdminLayout from "../../components/Layout";
import {useEffect} from "react";
import {GameInstanceTable} from "../../components/GameInstance/Tables/GameInstanceTable";
import { useProgress } from "../../data/graphql/game-instance/useProgress";

export const GameInstancePage = () => {
   const {progressList: {data, loading}} = useProgress()
    return <AdminLayout>
        <GameInstanceTable loading={loading} data={data?.admin_game_instance_list}/>
    </AdminLayout>
}