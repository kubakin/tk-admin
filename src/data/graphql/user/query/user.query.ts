import { gql } from "@apollo/client";

export const USER_LIST = gql`
  query UserList {
    admin_user_list {
      id
      phone
      team {
        id
        name
      }
    }
  }
`;

export interface UserListResponse {
  admin_user_list: {
    id: string;
    phone: string;
    team: {
      id: string;
      name: string;
    };
  }[];
}
