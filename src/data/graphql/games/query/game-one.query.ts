import { gql } from "@apollo/client";

export const GET_GAME = gql`
  query GetGame($id: String!) {
    admin_game(id: $id) {
      id
      name
      description
    }
  }
`;

export interface GameResponse {
  admin_game: {
    id: string;
    name: string;
    description: string;
  };
}
