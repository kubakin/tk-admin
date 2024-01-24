import { gql } from '@apollo/client';

export const UPDATE_GAME = gql`
  mutation CreateGame($id: String!, $dto: CreateUpdateGameDto!) {
    update_game(id: $id, dto: $dto)
  }
`;

export interface UpdateGameDto {
  id: string;
  dto: {
    name: string;
    description: string;
    hidden: boolean;
    cost: number;
    rules: string;
    personLimit: number;
    duration: number;
    taskStrategy: string;
    autoStart: boolean;
    autoEnd: boolean;
    plannedAt: Date;
    finalText: string;
  };
}
