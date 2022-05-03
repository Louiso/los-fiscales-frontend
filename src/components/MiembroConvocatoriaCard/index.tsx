import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { FC } from "react";
import { MiembroConvocatoria } from "types";
import { capitalizeSentence } from "utils";
import {
  ResponsabilidadSrcIconParser,
  ResponsabilidadSrcIconParserKey
} from "utils/parsers";
import MaybeTooltip from "components/MaybeTooltip";
import IrregularCard from "components/IrregularCard";

interface MiembroConvocatoriaCardProps {
  miembro: MiembroConvocatoria;
}

const MiembroConvocatoriaCard: FC<MiembroConvocatoriaCardProps> = ({
  miembro
}) => {
  return (
    <Card>
      <CardHeader
        title={
          <MaybeTooltip title={capitalizeSentence(miembro.nombres)}>
            <Typography
              sx={{
                color: "grey.700",
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {capitalizeSentence(miembro.nombres)}
            </Typography>
          </MaybeTooltip>
        }
        action={miembro.presuntaIrregularidades.map((irregularidad) => (
          <Box
            key={irregularidad.valor}
            display="flex"
            alignItems="center"
            sx={{ mr: 1 }}
          >
            <img
              style={{
                width: 24,
                height: 24
              }}
              src={
                ResponsabilidadSrcIconParser[
                  irregularidad.valor as ResponsabilidadSrcIconParserKey
                ]
              }
            />
            &nbsp;&nbsp;
            <Typography variant="caption">{irregularidad.total}</Typography>
          </Box>
        ))}
      />
      <CardContent>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          N° convocatorias:&nbsp;{miembro.convocatoriaTotal}
        </Typography>
        <Typography variant="body2" component="div">
          N° proyectos con presuntas irregularidades:&nbsp;
          {miembro.proyectoIrregularTotal}
        </Typography>

        {/* <Typography variant="body2" component="div" sx={{ mt: 1 }}>Ultima convocatoria:</Typography>
        <Paper variant="outlined">

        </Paper> */}
        <Box
          sx={{
            display: "grid",
            mt: 1.5,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridGap: "8px"
          }}
        >
          {miembro.relacionIrregulares.map((irregular) => (
            <IrregularCard key={irregular._id} irregular={irregular} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MiembroConvocatoriaCard;
