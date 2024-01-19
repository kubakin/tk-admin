import { useQuery } from '@apollo/client';
import { Modal } from 'antd';
import {
  TEAM_ONE,
  TeamOneResponse,
} from '../../data/graphql/team/query/team-one.query';
import Card from 'antd/es/card/Card';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export interface TeamMapModalInterface {
  id: string;
  open: boolean;
  onClose: () => void;
}

export const TeamMapModal = (props: TeamMapModalInterface) => {
  const { data, loading } = useQuery<TeamOneResponse, { id: string }>(
    TEAM_ONE,
    {
      variables: { id: props.id },
    },
  );

  const team = data?.team_admin;
  const firstFounded = team?.users?.find((user) => user.position);
  const foundedUsers = team?.users?.filter((user) => user.position);
  return (
    <Modal onCancel={() => props.onClose()} open={props.open}>
      <Card loading={loading && !!firstFounded}>
        {firstFounded && (
          <YMaps>
            <div>
              <Map
                options={{}}
                defaultState={{
                  center: [
                    firstFounded.position.latitude,
                    firstFounded.position.longitude,
                  ],
                  zoom: 13,
                }}
              >
                {foundedUsers.map((user) => {
                  return (
                    <Placemark
                      properties={{
                        iconCaption: user.name,
                      }}
                      geometry={[
                        user.position.latitude,
                        user.position.longitude,
                      ]}
                    />
                  );
                })}
                {/* <Placemark geometry={[55.684758, 37.738521]} /> */}
                {/* <Circle
              geometry={[
                [latitude || center[0], longitude || center[1]],
                radius,
              ]}
              options={{
                draggable: true,
                fillColor: '#DB709377',
                strokeColor: '#990066',
                strokeOpacity: 0.8,
                strokeWidth: 5,
              }}
            /> */}
              </Map>
            </div>
          </YMaps>
        )}
      </Card>
    </Modal>
  );
};
