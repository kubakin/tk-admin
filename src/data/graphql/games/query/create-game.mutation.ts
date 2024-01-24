import { gql } from '@apollo/client';

export const CREATE_GAME = gql`
  mutation CreateGame($dto: CreateUpdateGameDto!) {
    create_game(dto: $dto)
  }
`;

export interface CreateGameDto {
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
