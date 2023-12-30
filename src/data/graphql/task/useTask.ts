import { useMutation, useQuery } from '@apollo/client';
import { TASK_LIST, TaskListInput, TaskListResponse } from './query/task.query';
import { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import { CREATE_TASK, CreateTaskDto } from './query/create-task.mutation';
import { UPDATE_TASK, UpdateTaskDto } from './query/update-task.mutation';

export const useTask = () => {
  const context = useContext(GameContext);
  const createTask = useMutation<{ create_task: string }, CreateTaskDto>(
    CREATE_TASK,
  );
  const updateTask = useMutation<{ update_task: string }, UpdateTaskDto>(
    UPDATE_TASK,
  );
  const taskList = useQuery<TaskListResponse, TaskListInput>(TASK_LIST, {
    variables: { dto: { gameId: context.gameId } },
  });
  return {
    taskList,
    createTask,
    updateTask,
  };
};
