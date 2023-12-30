import { gql } from "@apollo/client";

export const UPDATE_GAME = gql`
  mutation CreateGame($id: String!, $dto: CreateUpdateGameDto!) {
    update_game(id: $id, dto: $dto)
  }
`;

export interface UpdateGameDto {
  id: string;
  dto: {
    description: string;
    name: string;
  };
}
