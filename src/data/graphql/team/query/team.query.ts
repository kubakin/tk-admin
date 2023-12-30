import { gql } from "@apollo/client";

export const TEAM_LIST = gql`
  query TeamList {
    team_list {
      id
      name
      createdAt
      admin {
        id
        name
        phone
      }
    }
  }
`;

export interface TeamListResponse {
  team_list: {
    id: string;
    name: string;
    createdAt: Date;
    admin: {
      id: string;
      name: string;
      phone: string;
    };
  }[];
}
