import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from "@mui/material";
import React, { FC } from "react";
import { MiembroConvocatoria } from "types";
// import dayjs from "dayjs";
import { capitalizeSentence } from "utils";
import {
  ResponsabilidadSrcIconParser,
  ResponsabilidadSrcIconParserKey
} from "utils/parsers";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import MaybeTooltip from "components/MaybeTooltip";
import IrregularCard from "components/IrregularCard";

interface MiembroConvocatoriaPanelProps {
  miembro: MiembroConvocatoria;
}

const MiembroConvocatoriaPanel: FC<MiembroConvocatoriaPanelProps> = ({
  miembro
}) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" maxWidth={300}>
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
          </Box>
          <Box>
            {miembro.presuntaIrregularidades.map((irregularidad) => (
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
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          Numero de convocatorias:&nbsp;{miembro.convocatoriaTotal}
        </Typography>
        <Typography variant="body2" component="div">
          Numero de proyectos con presuntas irregularidades:&nbsp;
          {miembro.proyectoIrregularTotal}
        </Typography>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default MiembroConvocatoriaPanel;
