export interface Convocatoria {
  codigo_convocatoria: number;
  miembro_comite: string;
  year_convocatoria: number;
  codigo_entidad_convocante: string;
  entidad_ruc_convocante: string;
  nombre_entidad: string;
  tipo_entidad: string;
  descripcion_proceso: string;
  codigo_proceso: string;
  tipo_compra: string;
  objeto_contractual: string;
  sector_entidad_convocante: string;
  sistema_contratacion_proceso: string;
  tipo_proceso_seleccion: string;
  monto_referencial: string;
  cantidad_items?: any;
  n_item: string;
  unidad_medida_item: string;
  estado_item: string;
  flag_paquete: string;
  codigo_item: string;
  item_cubso: string;
  distrito_item: string;
  provincia_item: string;
  departamento_item: string;
  monto_referencial_item: string;
  moneda: string;
  fecha_convocatoria: string;
  fecha_integracion_bases: string;
  fecha_presentacion_propuesta: string;
  year_convocatoria_osce: number;
  descripcion_item: string;
}

export interface Presunto {
  id: number;
  num_inform: string;
  dni: string;
  fullname: string;
  civil: boolean;
  penal: boolean;
  adm_ent: boolean;
  adm_pas: boolean;
  adm: boolean;
  departamento: string;
  provincia: string;
  distrito: string;
  fecha_emision: string;
}

export interface Irregulars {
  civil: number;
  penal: number;
  adm_ent: number;
  adm_pas: number;
  adm: number;
}

export type IrregularKey = keyof Irregulars;

export interface MiembroConvocatoria {
  dni: string;
  penal: boolean;
  fullname: string;
  total_penal: number;
  convocatorias: Convocatoria[];
  totalConvocatorias: number;
  presuntos: Presunto[];
  irregulars: Irregulars;
}