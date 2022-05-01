import { Card, CardContent, CardHeader } from "@mui/material";
import React, { FC } from "react";
import { Convocatoria } from "types";
import dayjs from 'dayjs'
import { capitalize } from "utils";

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
}

const ConvocatoriaCard: FC<ConvocatoriaCardProps> = ({ convocatoria }) => {


  return (
    <Card>
      <CardHeader
        title={convocatoria.codigo}
        subheader={capitalize(convocatoria.descripcionProceso.toLowerCase())}
        action={dayjs(convocatoria.convocatoriaFecha).format('DD/MM/YYYY')}
      />
      <CardContent></CardContent>
    </Card>
  );
};

export default ConvocatoriaCard;
