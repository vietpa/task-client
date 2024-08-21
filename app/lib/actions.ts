
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { APP_CONSTANTS } from '../globals/common';
import axiosInstance from './interceptors';
import axios from 'axios';
import { cookies } from 'next/headers';

const AuthSchema = z.object({
  username: z.string().trim().min(1, { message: 'Required' }),
  password: z.string().trim().min(1, { message: 'Required' })
});

const authenticate = async (prevState: string | undefined, formData: FormData) => {
  const validateFields: any = AuthSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validateFields.success) return { errors: validateFields.error.flatten().fieldErrors, message: 'Missing Fields. Failed to Login.' };
  const { username, password } = validateFields.data;
  console.log(`${APP_CONSTANTS.BASE_API_URL}/auth`);
  const res: any = await axios.put(`${APP_CONSTANTS.BASE_API_URL}/auth`, { username, password });
  cookies().set('access_token', res.data.access_token, { secure: true });
  return res.data;
}

const register = async (prevState: string | undefined, formData: FormData) => {
  try {
    const validateFields: any = AuthSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validateFields.success) return { errors: validateFields.error.flatten().fieldErrors, message: 'Missing Fields. Failed to Register.' };
    const { username, password } = validateFields.data;
    const res: any = await axios.post(`${APP_CONSTANTS.BASE_API_URL}/auth`, { username, password });
    if (res.status === 201) redirect('/login');
  } catch (error: any) {
    console.log(error);
  }
}

const TaskSchema = z.object({
  id: z.string(),
  name: z.string().trim().min(1, { message: 'Required' }),
  content: z.string().trim().min(1, { message: 'Required' }),
  userId: z.string(),
})

const CreateTask = TaskSchema.omit({ id: true, userId: true });

const createTask = async (prevState: string | undefined, formData: FormData) => {
  const validateFields: any = CreateTask.safeParse(Object.fromEntries(formData.entries()));

  if (!validateFields.success) return { errors: validateFields.error.flatten().fieldErrors, message: 'Missing Fields. Failed to Create Task.' };
  const { name, content } = validateFields.data;
  const res: any = await axiosInstance.post('tasks', { name, content });
  if (res.status === 201) redirect('/tasks');
}

const UpdateTask = TaskSchema.omit({ id: true, userId: true });

const updateTask = async (prevState: string | undefined, formData: FormData) => {
  const validateFields: any = UpdateTask.safeParse(Object.fromEntries(formData.entries()));

  if (!validateFields.success) return { errors: validateFields.error.flatten().fieldErrors, message: 'Missing Fields. Failed to Update Task.' };
  const { name, content } = validateFields.data;
  const res: any = await axiosInstance.put('tasks', { name, content });
  return res.data;
}

const deleteTask = async (id: string) => {
  const res: any = await axiosInstance.delete(`tasks/${id}`);
  revalidatePath('/dashboard/invoices');
  return res.data;
}


export { authenticate, register, createTask, updateTask, deleteTask }