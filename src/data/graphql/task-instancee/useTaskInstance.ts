import { useMutation } from "@apollo/client"
import { VOID_TASK_INSTANCE, VoidTaskDto } from "./query/void.mutation"

export const useTaskInstance = () => {
    const void_task = useMutation<{void_task: string}, VoidTaskDto>(VOID_TASK_INSTANCE)
    return {
        void_task
    }
}