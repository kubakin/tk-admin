import {Table} from "antd";
import {AttemptItemInterface, AttemptsTable} from "./AttemptsTable";
import {FC} from "react";

export interface TaskInstanceItemInterface {
    id: string
    attempts: AttemptItemInterface[]
}

interface TaskInstanceTableInterface {
    data: TaskInstanceItemInterface[]
}

export const TaskInstanceTable: FC<TaskInstanceTableInterface> = (props) => {
    return <Table expandedRowRender={(r) => AttemptsTable({data: r.attempts})} rowKey={'id'} dataSource={props.data}
                  columns={
                      [
                          {
                              title: 'ID',
                              dataIndex: 'id',
                          },
                          // {
                          //     title: 'Name',
                          //     dataIndex: 'name',
                          // },
                          // {
                          //     title: 'Team',
                          //     render: (val) => val?.name,
                          //     dataIndex: 'team',
                          // }
                      ]
                  }/>
}