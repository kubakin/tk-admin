import {FC, ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import { GameContext } from "../context/GameContext";
import { useGame } from "../data/graphql/games/useGame";

export const GameProvider: FC<{ children: ReactNode }> = ({children}) => {
    const {gameList:{data}, getGame: {refetch}} = useGame()
    const game = data?.admin_game_list?.[0];
    const [gameId, setGame] = useState<string| null>(game?.id)

    useEffect(()=> {
        if (!gameId) {
            setGame(game?.id);
        }
    }, [game])

    useEffect(()=> {
        if (gameId) {
            refetch({id: gameId})
        }
    }, [gameId])
    return <GameContext.Provider value={{gameId: gameId, changeGame: (id: string)=> setGame(id)}}>{children}</GameContext.Provider>
}