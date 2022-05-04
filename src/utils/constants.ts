
export enum SortByMemberOptionKey {
  PreRespPenal = 'pre-resp-penal',
  PreRespAdmin = 'pre-resp-administrativa',
  PreRespTotal = 'pre-resp-total',
  FrePartConv = 'fre-part-conv',
}

export const SortByMemberOptions = [
  {
    value: SortByMemberOptionKey.PreRespPenal,
    label: 'Presunta Resp. Penal'
  },
  {
    value: SortByMemberOptionKey.PreRespAdmin,
    label: 'Presunta Resp. Administrativa'
  },
  {
    value: SortByMemberOptionKey.PreRespTotal,
    label: 'Presunta Resp. Total'
  },
  {
    value: SortByMemberOptionKey.FrePartConv,
    label: 'Frecuente Partición en Convocatorias'
  }
]
