import { gql } from "@apollo/client";

export const CREATE_GAME = gql`
mutation CreateGame($dto: CreataUpdateGameDto!) {
    create_game(dto: $dto) 
  }
`;

export interface CreateGameDto {
  dto: {
    id: string;
    description: string;
    name: string;
  };
}
