import { gql } from '@apollo/client';

export const TEAM_ONE = gql`
  query GetTeam($id: String!) {
    team_admin(id: $id) {
      id
      name
      createdAt
      users {
        id
        position {
          longitude
          latitude
          timestamp
        }
        name
        phone
      }
    }
  }
`;

export interface TeamOneResponse {
  team_admin: {
    id: string;
    name: string;

    createdAt: Date;
    users: {
      id: string;
      name: string;
      phone: string;
      position: {
        longitude: number;
        latitude: number;
        timestamp: number;
      };
    }[];
  };
}
