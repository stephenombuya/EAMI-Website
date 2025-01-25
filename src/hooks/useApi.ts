import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { useRetry } from './useRetry';

interface ApiError {
  message: string;
  code: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

export function useApiQuery<T>(
  key: string[],
  fetcher: () => Promise<T>,
  options?: Omit<UseQueryOptions<T, ApiError>, 'queryKey' | 'queryFn'>
) {
  const { execute } = useRetry(fetcher);

  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: execute,
    ...options,
  });
}

export function useApiMutation<T, V>(
  mutationFn: (variables: V) => Promise<T>,
  options?: Omit<UseMutationOptions<T, ApiError, V>, 'mutationFn'>
) {
  const { execute } = useRetry(() => Promise.resolve());

  return useMutation<T, ApiError, V>({
    mutationFn: async (variables) => {
      try {
        const result = await execute();
        return mutationFn(variables);
      } catch (error) {
        throw new Error('API Error');
      }
    },
    ...options,
  });
}
