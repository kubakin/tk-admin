import { gql } from "@apollo/client";

export const GAME_INSTANCE_LIST = gql`
  query GameIntanceList($dto: AdminGameInstanceQuery!) {
    admin_game_instance_list(dto: $dto) {
      id
      score
      status
      createdAt
      team {
        id
        name
      }
      game {
        id
        name
      }
      taskInstances {
        id
      }
    }
  }
`;

export interface GameInstanceListResponse {
  admin_game_instance_list: {
    id: string;
    score: number;
    status: string;
    createdAt: Date;
    team: {
      id: string;
      name: string;
    };
    game: {
      id: string;
      name: string;
    };
    taskInstances: {
      id: string;
      attempts: any[];
    }[];
  }[];
}

export interface GameInstanceListInput {
  dto: {
    id?: string;
    teamId?: string;
    status?: string;
    gameId?: string;
  };
}
