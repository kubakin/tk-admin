import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($dto: CreateTaskDto!) {
    create_task(dto: $dto)
  }
`;

export interface CreateTaskDto {
  dto: {
    description: string;
    name: string;
    defaultOrder: number;
    type: string;
    answer: any;
    gameId: string;
    cost: number;
    penalty: number;
  };
}
