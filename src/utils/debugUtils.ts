export const logPipe = (label?: string) => <T>(data: T) => {
  console.log(label ?? 'logPipe', data);
  return data;
} 