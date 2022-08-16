import { useQuery, UseQueryResult } from 'react-query';

export const useFetch = <T>(
    queryKey: string | string[],
    path: string,
    fetcher: (path: string, quries?: string[]) => Promise<T>,
    options?: Object
): UseQueryResult<T> => useQuery(queryKey, () => fetcher(path), options);
