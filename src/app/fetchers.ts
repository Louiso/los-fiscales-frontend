import serverFrontendAPI from "./serverFrontendAPI";
import state from "./state";

interface FetcherArgs {
  query?: string;
  mutation?: string;
  variables: any;
  key?: string;
  // data?: any;
}

const fetcher = ({
  query,
  mutation,
  key,
  // data,
  variables
}: FetcherArgs): Promise<any> => {
  if (key) return state[key];

  if (!serverFrontendAPI[query ?? mutation ?? ""])
    return Promise.reject(new Error("Method not found"));

  return (
    serverFrontendAPI[query ?? mutation ?? ""]({
      variables
    })
  );
};

function serialize(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    // Serialize the key.
    const serializedKey = JSON.stringify(key);

    // Pass the serialized key, and unserialize it in fetcher.
    return useSWRNext(
      serializedKey,
      (k: any) => fetcher(JSON.parse(k)),
      config
    );
  };
}

export { fetcher, serialize };
