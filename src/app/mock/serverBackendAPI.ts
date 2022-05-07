import { miembros } from "./utils/data";

export interface Req {
  params: any;
  body: any;
  query: any;
}

const serverBackendAPI: Record<string, any | any[]> = {
  "GET /api/members": ({ query }: Req) => {
    console.log("query", query);
    return {
      info: {   
        totalDocs: 3,
        page: 1,
        hasNextPage: true
      },
      docs: miembros
    };
  },
  "POST /api/members/add": ({ body }: Req) => {
    console.log("body", body);
    return {};
  },
  "GET /api/members/:userId": ({ params }: Req): any => {
    const { userId } = params;

    return {
      _id: userId
    };
  }
};

type ServerBackendAPIKey = keyof typeof serverBackendAPI;

export default serverBackendAPI;

export type { ServerBackendAPIKey };
