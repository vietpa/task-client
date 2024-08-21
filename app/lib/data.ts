import axiosInstance from "./interceptors";

const getTasks = async () => {
  const res = await axiosInstance.get('tasks');
  if (res.status !== 200) throw Error('Failed to fetch data');
  return res.data;
}

const getTask = async (id: string) => {
  const res = await axiosInstance.get(`tasks/${id}`);
  if (res.status !== 200) throw Error('Failed to fetch data');
  return res.data;
}

export { getTasks, getTask };