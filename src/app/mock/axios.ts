import { matchPath, PathMatch } from "react-router-dom"
import qs from 'query-string'

type FetchResponse<T> = {
  data: T,
  success: boolean
}

interface ProcessUrlReturn {
  method: string; 
  pathname: string;
  endpoint: string;
  endpointKey: string;
  match: PathMatch<string> | null,
  query: any;
}

function processUrl(url: string, serverMock: any): ProcessUrlReturn {
  const [ method, pathname ] = url.split(' ')

  const endpointKey = Object.keys(serverMock)
    .filter((key) => key.includes(method))
    .find((key) => {
      const [ , endpoint ] = key.split(' ')

      return matchPath({
        path: endpoint,
        caseSensitive: true
      }, pathname)
    })

  if(!endpointKey) throw new Error('404')

  const [ , endpoint ] = endpointKey.split(' ')
  
  const match = matchPath({
    path: endpoint,
    caseSensitive: true
  }, pathname)

  return {
    method, 
    pathname, 
    endpoint,
    endpointKey,
    match,
    query: qs.parseUrl(url).query
  }
}

function _get<T> (serverMock: any) {
  function _(url: string): FetchResponse<T> {
    const {
      match,
      endpointKey,
      query
    } = processUrl(`GET ${url}`, serverMock)
  
    return serverMock[endpointKey]({
      params: match?.params,
      query
    })
  }
  return _
}

function _post<T> (serverMock: any) {
  function _(url: string, json: any): FetchResponse<T> {
    const {
      match,
      query,
      endpointKey
    } = processUrl(`POST ${url}`, serverMock)  
  
    return serverMock[endpointKey]({
      params: match?.params,
      body: json,
      query
    })
  }

  return _
}

function _put<T> (serverMock: any) {
  function _ (url: string, json: any): FetchResponse<T> {
    const {
      match,
      query,
      endpointKey
    } = processUrl(`PUT ${url}`, serverMock)  
  
    return serverMock[endpointKey]({
      params: match?.params,
      body: json,
      query
    })
  }

  return _
}

function _delete<T> (serverMock: any) {
  function _(url: string): FetchResponse<T> {
    const {
      match,
      endpointKey,
      query
    } = processUrl(`DELETE ${url}`, serverMock)  

    return serverMock[endpointKey]({
      params: match?.params,
      query
    })
  }
  return _
} 

const axiosMock = (serverMock: any) => ({
  get: _get(serverMock),
  post: _post(serverMock),
  put: _put(serverMock),
  delete: _delete(serverMock)
})

export default axiosMock