import { MiembroConvocatoria, Convocatoria } from "types/trash";
/* 
CODIGOENTIDAD	ENTIDAD_RUC	ENTIDAD	TIPOENTIDAD	CODIGOCONVOCATORIA	DESCRIPCION_PROCESO	PROCESO	TIPO_COMPRA	OBJETOCONTRACTUAL	SECTOR	SISTEMA_CONTRATACION	TIPOPROCESOSELECCION	MONTOREFERENCIAL	N_ITEM	DESCRIPCION_ITEM	UNIDAD_MEDIDA	ESTADOITEM	PAQUETE	CODIGOITEM	ITEMCUBSO	DISTRITO_ITEM	PROVINCIA_ITEM	DEPARTAMENTO_ITEM	MONTO_REFERENCIAL_ITEM	MONEDA	FECHA_CONVOCATORIA	FECHAINTEGRACIONBASES	FECHAPRESENTACIONPROPUESTA
000215	20212177351	MUNICIPALIDAD DISTRITAL DE HUACACHI	GOBIERNO LOCAL	774991	EJECUCIÓN DE IOARR: REMODELACION DE PLAZOLETA; EN EL(LA) CENTRO POBLADO DE OCOCOCHA  DISTRITO DE HUACACHI, PROVINCIA HUARI, DEPARTAMENTO ANCASH	AS-SM-13-2022-MDHCHI/CS-1	Por la Entidad	Obra	GOBIERNO LOCAL	Suma alzada	Adjudicación Simplificada	132481.33	1	EJECUCI¿N DE IOARR: REMODELACION DE PLAZOLETA; EN EL(LA) CENTRO POBLADO DE OCOCOCHA  DISTRITO DE HUACACHI, PROVINCIA HUARI, DEPARTAMENTO ANCASH	Unidad	Consentido	NO	00233086	REMODELACION DE PLAZAS Y PLAZUELAS	HUACACHI	HUARI	ANCASH	132481.33	Soles	15/03/2022	21/03/2022	24/03/2022


*/

const convocatorias: Convocatoria[] = [
  {
    _id: "1",
    entidad: {
      _id: "1",
      codigo: "000215",
      ruc: "20212177351",
      nombre: "MUNICIPALIDAD DISTRITAL DE HUACACHI",
      tipo: "GOBIERNO LOCAL"
    },
    miembros: [
      {
        _id: "1",
        nombres: "LUIS MARTIN SOLANO PEREZ",
        convocatoriaTotal: 599,
        proyectoIrregularTotal: 20,
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 20,
            valor: "penal"
          }
        ],
        relacionesIrregulares: [
          {
            _id: "1",
            dni: "43092869",
            nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY",
            presuntasIrregularidades: [
              {
                etiqueta: "Penal",
                total: 100,
                valor: "penal"
              },
              {
                etiqueta: "Civil",
                total: 50,
                valor: "civil"
              }
            ],
            grado: 100,
            proyectosTotal: 300
          },
          {
            _id: "2",
            dni: "43092870",
            nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY 2",
            presuntasIrregularidades: [
              {
                etiqueta: "Penal",
                total: 100,
                valor: "penal"
              },
              {
                etiqueta: "Civil",
                total: 50,
                valor: "civil"
              }
            ],
            grado: 100,
            proyectosTotal: 300
          },
          {
            _id: "3",
            dni: "43092878",
            nombres: "ROBERT HUGO RODRIGUEZ",
            presuntasIrregularidades: [
              {
                etiqueta: "Penal",
                total: 100,
                valor: "penal"
              },
              {
                etiqueta: "Civil",
                total: 50,
                valor: "civil"
              }
            ],
            grado: 100,
            proyectosTotal: 300
          }
        ]
      },
      {
        _id: "2",
        nombres: "ATILIO BRUNO JORGE VARGAS",
        convocatoriaTotal: 599,
        proyectoIrregularTotal: 20,
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 30,
            valor: "penal"
          }
        ],
        relacionesIrregulares: [
          {
            _id: "1",
            dni: "43092869",
            nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY",
            presuntasIrregularidades: [
              {
                etiqueta: "Penal",
                total: 100,
                valor: "penal"
              },
              {
                etiqueta: "Civil",
                total: 50,
                valor: "civil"
              }
            ],
            grado: 100,
            proyectosTotal: 300
          }
        ]
      }
    ],
    codigo: "774991",
    descripcionProceso:
      "EJECUCIÓN DE IOARR: REMODELACION DE PLAZOLETA; EN EL(LA) CENTRO POBLADO DE OCOCOCHA  DISTRITO DE HUACACHI, PROVINCIA HUARI, DEPARTAMENTO ANCASH",
    codigoProceso: "AS-SM-13-2022-MDHCHI/CS-1",
    procesoSeleccionTipo: "Por la Entidad",
    compraTipo: "Obra",
    objectoContractual: "Suma alzada",
    sector: "Adjudicación Simplificada",
    sistemaContratacion: "Suma alzada",
    referencialMonto: 132481.33,
    item: {
      _id: "1",
      codigo: "00233086",
      cubso: "REMODELACION DE PLAZAS Y PLAZUELAS",
      distrito: "HUACACHI",
      provincia: "HUARI",
      descripcion:
        "EJECUCI¿N DE IOARR: REMODELACION DE PLAZOLETA; EN EL(LA) CENTRO POBLADO DE OCOCOCHA  DISTRITO DE HUACACHI, PROVINCIA HUARI, DEPARTAMENTO ANCASH",
      esPaquete: false,
      estado: "CONSENTIDO",
      medidaUnidad: "UNIDAD",
      moneda: "PEN",
      referencialMonto: 132481.33,
      total: 1
    },
    convocatoriaFecha: new Date("2020-03-15"),
    baseIntegracionFecha: new Date("2020-03-21"),
    propuestaPresentacionFecha: new Date("2020-03-24")
  }
];


const miembros: MiembroConvocatoria[] = [
  {
    _id: "1",
    nombres: "LUIS MARTIN SOLANO PEREZ",
    convocatoriaTotal: 599,
    proyectoIrregularTotal: 20,
    presuntasIrregularidades: [
      {
        etiqueta: "Penal",
        total: 20,
        valor: "penal"
      }
    ],
    relacionesIrregulares: [
      {
        _id: "1",
        dni: "43092869",
        nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY",
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 100,
            valor: "penal"
          },
          {
            etiqueta: "Civil",
            total: 50,
            valor: "civil"
          }
        ],
        grado: 100,
        proyectosTotal: 300
      },
      {
        _id: "2",
        dni: "43092870",
        nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY 2",
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 100,
            valor: "penal"
          },
          {
            etiqueta: "Civil",
            total: 50,
            valor: "civil"
          }
        ],
        grado: 100,
        proyectosTotal: 300
      },
      {
        _id: "3",
        dni: "43092878",
        nombres: "ROBERT HUGO RODRIGUEZ",
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 100,
            valor: "penal"
          },
          {
            etiqueta: "Civil",
            total: 50,
            valor: "civil"
          }
        ],
        grado: 100,
        proyectosTotal: 300
      }
    ],
    ultimasConvocatorias: convocatorias.slice(0, 1)
  },
  {
    _id: "2",
    nombres: "ATILIO BRUNO JORGE VARGAS",
    convocatoriaTotal: 599,
    proyectoIrregularTotal: 20,
    presuntasIrregularidades: [
      {
        etiqueta: "Penal",
        total: 30,
        valor: "penal"
      }
    ],
    relacionesIrregulares: [
      {
        _id: "1",
        dni: "43092869",
        nombres: "ROBERT HUGO RODRIGUEZ HUAYANEY",
        presuntasIrregularidades: [
          {
            etiqueta: "Penal",
            total: 100,
            valor: "penal"
          },
          {
            etiqueta: "Civil",
            total: 50,
            valor: "civil"
          }
        ],
        grado: 100,
        proyectosTotal: 300
      }
    ],
    ultimasConvocatorias: convocatorias.slice(1)
  }
];

export { miembros, convocatorias };
