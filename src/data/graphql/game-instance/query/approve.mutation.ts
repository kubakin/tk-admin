import { gql } from '@apollo/client';

export const APPROVE_INSTANCE = gql`
  mutation Approve($id: String!) {
    appove_game_instance(id: $id)
  }
`;

export interface ApproveGameInstanceDto {
  id: string;
}


