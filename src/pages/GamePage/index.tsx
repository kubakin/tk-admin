import { CreateUpdateGameForm } from "../../actions/CreateUpdateGame.form";
import AdminLayout from "../../components/Layout";
import { useGame } from "../../data/graphql/games/useGame";

export const GamePage = () => {
    const {getGame: {data}} = useGame();
    const game = data?.admin_game
    return <AdminLayout><CreateUpdateGameForm id={game?.id} data={game}/></AdminLayout>
}