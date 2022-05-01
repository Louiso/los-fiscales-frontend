import Images from "assets/images";

const ResponsabilidadSrcIconParser = {
  penal: Images.Penal,
  adm: Images.Admin,
  adm_ent: Images.AdminEnt,
  adm_pas: Images.AdminPas,
  civil: Images.Civil
};

type ResponsabilidadSrcIconParserKey =
  keyof typeof ResponsabilidadSrcIconParser;

export { ResponsabilidadSrcIconParser };

export type { ResponsabilidadSrcIconParserKey };
