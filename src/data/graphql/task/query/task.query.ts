import { gql } from '@apollo/client';

export const TASK_LIST = gql`
  query TaskList($dto: TaskInputDto!) {
    admin_task_list(dto: $dto) {
      id
      name
      cost
      penalty
      type
    }
  }
`;

export interface TaskListResponse {
  admin_task_list: {
    id: string;
    name: string;
    cost: number;
    type: string
    penalty: number;
  }[];
}

export interface TaskListInput {
  dto: {
    gameId?: string;
  };
}
