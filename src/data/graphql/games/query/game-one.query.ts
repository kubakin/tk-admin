import { gql } from '@apollo/client';

export const GET_GAME = gql`
  query GetGame($id: String!) {
    admin_game(id: $id) {
      id
      name
      description
      hidden
      cost
      rules
      personLimit
      duration
      taskStrategy
      autoStart
      autoEnd
      plannedAt
      finalText
    }
  }
`;

export interface GameResponse {
  admin_game: {
    id: string;
    name: string;
    description: string;
    hidden: boolean;
    cost: number;
    rules: string;
    personLimit: number;
    duration: number;
    taskStrategy: string;
    autoStart: boolean;
    autoEnd: boolean;
    plannedAt: Date;
    finalText: string;
  };
}
