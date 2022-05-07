export enum SortByMemberOptionKey {
  Penal = "penal",
  Admin = "adm",
  // PreRespTotal = "pre-resp-total",
  AdmEnt = 'adm_ent',
  Civil = 'civil',
  AdmPas = 'adm_pas',
  FrePartConv = "convocatorias"
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
  {
    value: SortByMemberOptionKey.Civil,
    label: "Presunta Resp. Civil"
  },
  {
    value: SortByMemberOptionKey.FrePartConv,
    label: "Frecuente Partición en Convocatorias"
  }
];
