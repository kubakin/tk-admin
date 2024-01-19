import { useState } from 'react';
import { TeamMapModal } from '../../components/Team/TeamMap.modal';

export interface TeamFieldInterface {
  id: string;
  name: string;
}
export const TeamField = (props: TeamFieldInterface) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <a
        href={'/'}
        onClick={(e) => {
          e.preventDefault();
          setModal(true);
        }}
      >
        {props.name}
      </a>
      {modal && (
        <TeamMapModal
          id={props.id}
          open={modal}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
};
