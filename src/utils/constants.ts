export enum SortByMemberOptionKey {
  Penal = "penal",
  Admin = "adm",
  // PreRespTotal = "pre-resp-total",
  AdmEnt = 'adm_ent',
  Civil = 'civil',
  AdmPas = 'adm_pas',
  FrePartConv = "fre-part-conv"
}

export const SortByMemberOptions = [
  {
    value: SortByMemberOptionKey.Penal,
    label: "Presunta Resp. Penal"
  },
  {
    value: SortByMemberOptionKey.Admin,
    label: "Presunta Resp. Administrativa"
  },
  // {
  //   value: SortByMemberOptionKey.PreRespTotal,
  //   label: "Presunta Resp. Total"
  // },
  // {
  //   value: SortByMemberOptionKey.FrePartConv,
  //   label: "Frecuente Partición en Convocatorias"
  // }
];
