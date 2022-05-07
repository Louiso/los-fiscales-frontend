import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { FC } from "react";
import { MiembroConvocatoria, IrregularKey } from 'types';
import { capitalizeSentence } from "utils";
import {
  ResponsabilidadSrcIconParser,
  ResponsabilidadSrcIconParserKey
} from "utils/parsers";
import MaybeTooltip from "components/MaybeTooltip";
// import IrregularCard from "components/IrregularCard";
import ConvocatoriaCard from "components/ConvocatoriaCard";

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
          <MaybeTooltip title={capitalizeSentence(miembro.fullname)}>
            <Typography
              sx={{
                color: "grey.700",
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {capitalizeSentence(miembro.fullname)}
            </Typography>
          </MaybeTooltip>
        }
        action={
          <Box display="flex" alignItems='center'>
            {Object.keys(miembro.irregulars).map((key) => (
              <Box
                key={key}
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
                      key as ResponsabilidadSrcIconParserKey
                    ]
                  }
                />
                &nbsp;&nbsp;
                <Typography variant="caption">{miembro.irregulars[key as IrregularKey]}</Typography>
              </Box>
            ))}
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          N° convocatorias:&nbsp;{miembro.totalConvocatorias}
        </Typography>
        <Typography variant="body2" component="div">
          N° proyectos con presuntas irregularidades:&nbsp;
          {miembro.presuntos.length}
        </Typography>
        {Boolean(miembro.convocatorias && miembro.convocatorias.length) && (
          <>
            <Typography variant="body2" component="div" sx={{ mt: 1 }}>Ultimas convocatorias:</Typography>
            <Box
              sx={{
                display: "grid",
                mt: 1.5,
                gridTemplateColumns: "1fr",
                gridGap: "8px"
              }}
            >
              {miembro.convocatorias!.map((convocatoria) => (
                <ConvocatoriaCard key={convocatoria.codigo_convocatoria} convocatoria={convocatoria} />
              ))}
            </Box>
          </>
        )}
        {/* <Box
          sx={{
            display: "grid",
            mt: 1.5,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridGap: "8px"
          }}
        >
          {miembro.relacionesIrregulares.map((irregular) => (
            <IrregularCard key={irregular._id} irregular={irregular} />
          ))}
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default MiembroConvocatoriaCard;
