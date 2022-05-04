import serverFrontendAPI from "./mock/serverFrontendAPI"

interface FetcherArgs {
  query?: string;
  mutation?: string;
  variables: any;
}

const fetcher = ({ query, mutation, variables }: FetcherArgs): Promise<any> => {
  if(!serverFrontendAPI[query ?? mutation ?? '']) return Promise.reject(new Error("Method not found"))

  return serverFrontendAPI[query ?? mutation ?? '']({
    variables
  })
}

export {
  fetcher
}