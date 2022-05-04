import useSWR from "swr";
import { MiembroConvocatoria } from "types";

interface UseGetMiembrosArgs {
  variables: {
    page: number;
    limit?: number;
    search?: string;
    sortBy?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGetMiembros = (args: UseGetMiembrosArgs) =>
  useSWR<MiembroConvocatoria[]>({
    query: "getMembers",
    variables: args.variables
  });

interface Search {
  search: string;
  sortBy: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSearchState = () =>
  useSWR<Search>({
    key: "getSearchState"
  });
