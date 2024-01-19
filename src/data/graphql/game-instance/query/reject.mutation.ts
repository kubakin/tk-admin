import { gql } from '@apollo/client';

export const REJECT_INSTANCE = gql`
  mutation Reject($id: String!) {
    reject_game_instance(id: $id)
  }
`;

export interface RejectGameInstanceDto {
  id: string;
}


