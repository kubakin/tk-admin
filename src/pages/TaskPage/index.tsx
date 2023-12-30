import AdminLayout from "../../components/Layout";
import { TaskList } from "../../components/Task/TaskList";
import { useTask } from "../../data/graphql/task/useTask";

export const TaskPage = () => {
    const {taskList: {data, loading}} = useTask()
    const tasks = data?.admin_task_list;
    return (
        <AdminLayout><TaskList loading={loading} data={tasks} /></AdminLayout>
    )
}