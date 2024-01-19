import { gql } from '@apollo/client';

export const TASK_LIST = gql`
  query TaskList($dto: TaskInputDto!) {
    admin_task_list(dto: $dto) {
      id
      name
      cost
      penalty
      type
      answer
      defaultOrder
      description
    }
  }
`;

export interface TaskListResponse {
  admin_task_list: {
    id: string;
    name: string;
    cost: number;
    type: string;
    defaultOrder: number;
    penalty: number;
    answer: any;
    description: string;
  }[];
}

export interface TaskListInput {
  dto: {
    gameId?: string;
  };
}
