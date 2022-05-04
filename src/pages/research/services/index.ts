import { fetcher } from "app/fetchers";
import useSWR, { SWRResponse } from "swr"
import { MiembroConvocatoria } from "types";

interface UseGetMiembrosArgs {
  variables: {
    page: number;
    limit?: number;
    search?: string;
    sortBy?: string;
  }
}

export const useGetMiembros = (args: UseGetMiembrosArgs): SWRResponse<MiembroConvocatoria[], any> & { data: MiembroConvocatoria[] } => {
  const { data, ...rest } = useSWR<MiembroConvocatoria[]>({
    query: 'getMembers',
    variables: args.variables,
  }, fetcher)

  return {
    data: data ?? [],
    ...rest
  }
}
