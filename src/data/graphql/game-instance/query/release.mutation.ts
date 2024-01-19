import { gql } from '@apollo/client';

export const RELEASE_INSTANCE = gql`
  mutation Release($id: String!) {
    release_game_instance(id: $id)
  }
`;

export interface ReleaseGameInstanceDto {
  id: string;
}


