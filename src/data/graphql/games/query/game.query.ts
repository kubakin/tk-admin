import { gql } from "@apollo/client";

export const GAME_LIST = gql`
  query GameList {
    admin_game_list {
      id
      name
    }
  }
`;

export interface GameListResponse {
  admin_game_list: {
    id: string;
    name: string;
  }[];
}
