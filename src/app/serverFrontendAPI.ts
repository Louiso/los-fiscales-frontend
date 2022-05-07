import axios from "axios";
// import axiosMock from "./utils/axios";
// import serverBackendAPI from "./serverBackendAPI";

const getInstance = () => {
  // if (import.meta.env.MODE === "development")
  //   return axiosMock(serverBackendAPI);

  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
  });

  return instance;
};

const _instance = getInstance();

export type MethodOptions<Variables = any> = {
  variables?: Variables;
};

const serverFrontendAPI: Record<
  string,
  (args?: MethodOptions) => Promise<any>
> = {
  getMembers: async () => {
    const { data: { data } } = await _instance.get("/api/miembros");
    
    return data
  },
};

export default serverFrontendAPI;
