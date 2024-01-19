import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: String!, $dto: UpdateTaskDto!) {
    update_task(dto: $dto, id: $id)
  }
`;

export interface UpdateTaskDto {
  id: string;
  dto: {
    description?: string;
    name?: string;
    defaultOrder?: number;
    type?: string;
    answer?: any;
    gameId?: string;
    cost?: number;
    penalty?: number;
  };
}
