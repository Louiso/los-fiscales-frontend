import axios from 'axios'
import axiosMock from './axios'
import serverBackendAPI from './serverBackendAPI'

const getInstance = () => {
  if(import.meta.env.MODE === 'development') return axiosMock(serverBackendAPI)
  
  const instance = axios.create({

  })

  return instance
}

const _instance = getInstance() 

export type MethodOptions<Variables = any> = {
  variables?: Variables;
}

const serverFrontendAPI: Record<string, (args?: MethodOptions) => Promise<any>> = {
  getMembers: async () => {
    return _instance.get('/api/members')
  }
}

export default serverFrontendAPI