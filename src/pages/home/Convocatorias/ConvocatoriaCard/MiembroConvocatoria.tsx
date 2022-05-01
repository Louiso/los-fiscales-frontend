import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, Typography } from "@mui/material";
import React, { FC } from "react";
import { MiembroConvocatoria } from "types";
// import dayjs from "dayjs";
import { capitalizeSentence } from "utils";
import { ResponsabilidadSrcIconParser, ResponsabilidadSrcIconParserKey } from 'utils/parsers' 
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import MaybeTooltip from "components/MaybeTooltip";

interface MiembroConvocatoriaProps {
  miembro: MiembroConvocatoria;
}

const MiembroConvocatoriaCard: FC<MiembroConvocatoriaProps> = ({ miembro }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Box display="flex" alignItems='center' justifyContent='space-between' width='100%'>
          <Box display='flex' maxWidth={300}>
            <MaybeTooltip title={capitalizeSentence(miembro.nombres)}>
              <Typography 
                sx={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}>{capitalizeSentence(miembro.nombres)}</Typography>
            </MaybeTooltip>
          </Box>
          <Box>
            {miembro.presuntaIrregularidades.map((irregularidad) => (
              <Box key={irregularidad.valor} display='flex' alignItems='center' sx={{mr: 1}}>
                <img
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  src={ResponsabilidadSrcIconParser[irregularidad.valor as ResponsabilidadSrcIconParserKey]} />
                &nbsp;&nbsp;
                <Typography variant='caption'>{irregularidad.total}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridGap: '8px',
        }}>
          {miembro.relacionIrregulares.map((irregular) => (
            <Paper variant="outlined" key={irregular._id} sx={{p: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <Typography>{capitalizeSentence(irregular.nombres)}</Typography>
                <Typography variant='caption' component='div' sx={{mt: 1}}>Dni: {irregular.dni}</Typography>
                <Typography variant='caption' component='div'>Grado: {irregular.grado}</Typography>
                <Typography variant='caption' component='div'>Total de proyectos: {irregular.proyectosTotal}</Typography>
              </div>
              <Box display="flex" sx={{mt: 1}}>
                {irregular.presuntaIrregularidades.map((irregularidad) => (
                  <Box key={irregularidad.valor} display='flex' alignItems='center' sx={{mr: 1}}>
                    <img
                      style={{
                        width: 24,
                        height: 24,
                      }}
                      src={ResponsabilidadSrcIconParser[irregularidad.valor as ResponsabilidadSrcIconParserKey]} />
                    &nbsp;&nbsp;
                    <Typography variant='caption'>{irregularidad.total}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MiembroConvocatoriaCard;
