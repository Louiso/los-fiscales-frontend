export type PresuntaIrregularidad = {
  etiqueta: string;
  valor: string;
  total: number;
};

export type MiembroConvocatoria = {
  _id: string;
  nombres: string;
  presuntaIrregularidades: PresuntaIrregularidad[];
  relacionIrregulares: {
    _id: string;
    nombres: string;
    dni: string;
    proyectosTotal: number;
    presuntaIrregularidades: PresuntaIrregularidad[];
    grado: number;
    // links donde es tiene presuntas irregularidades
  }[];
};

export type UnitMeasure = "UNIDAD" | "SERVICIO";
export type ItemStatus = "CONSENTIDO" | "ADJUDICADO";
export type Currency = "USD" | "PEN";

export type Item = {
  _id: string;
  total: number;
  descripcion: string;
  medidadUnidad: UnitMeasure;
  estado: ItemStatus;
  esPaquete: boolean;
  codigo: string;
  cubso: string;
  distrito: string;
  provincia: string;
  referencialMonto: number;
  moneda: Currency;
};

export type Entidad = {
  _id: string;
  codigo: string;
  nombre: string;
  ruc: string;
  tipo: string;
};

export type Convocatoria = {
  _id: string;
  miembros: MiembroConvocatoria[];
  entidad: Entidad;
  codigo: string;
  descripcionProceso: string;
  codigoProceso: string;
  procesoSeleccionTipo: string;
  compraTipo: string;
  objectoContractual: string;
  sector: string;
  sistemaContratacion: string;
  referencialMonto: number;
  item: Item;
  convocatoriaFecha: Date;
  baseIntegracionFecha: Date;
  propuestaPresentacionFecha: Date;
};
