import { gql } from '@apollo/client';

export const VOID_TASK_INSTANCE = gql`
  mutation VoidTask($id: String!) {
    void_task(id: $id)
  }
`;

export interface VoidTaskDto {
  id: string
}
