import { Box, Card, CardContent, CardHeader, IconButton, Tooltip, Typography } from "@mui/material";
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
import InformeControlCard from 'components/InformeControlCard'
import AccordionPartialList from "components/AccordionPartialList";
import { Launch as LaunchIcon } from "@mui/icons-material";
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
        sx={{
          pb: 0
        }}
        action={
          <Box display="flex" alignItems='center'>
            {Object.keys(miembro.irregulars).map((key) => (
              <Tooltip title={key} key={key}>
                <Box
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
              </Tooltip>
            ))}
            <Tooltip title="Data Completa">
              <a href={`${import.meta.env.VITE_SERVER_URL}/api/miembros/${miembro.dni}`} target="_blank" rel="noreferrer">
                <LaunchIcon />
              </a>
            </Tooltip>
          </Box>
        }
      />
      <CardContent sx={{pt: 1}}>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          N° convocatorias:&nbsp;{miembro.totalConvocatorias}
        </Typography>
        <Typography variant="body2" component="div">
          N° proyectos con presuntas irregularidades:&nbsp;
          {miembro.presuntos.length}
        </Typography>
        {Boolean(miembro.presuntos && miembro.presuntos.length) && (
          <AccordionPartialList
            disabledVisibilityIdent
            display="flex"
            getLabel={(expanded, restTotalChildren) => expanded ? 'Ver menos' : `Ver ${restTotalChildren} informe${restTotalChildren === 1 ? '' : 's'} más`}
            title={'Informes de control con presuntas responsabilidades'}>
            {miembro.presuntos!.map((presunto) => (
              <InformeControlCard key={presunto.num_inform} presunto={presunto} sx={{height: '100%'}} />
            ))}
          </AccordionPartialList>
        )}
        {Boolean(miembro.convocatorias && miembro.convocatorias.length) && (
          <AccordionPartialList
            disabledVisibilityIdent
            display="flex"
            getLabel={(expanded, restTotalChildren) => expanded ? 'Ver menos' : `Ver ${restTotalChildren} experiencia${restTotalChildren === 1 ? '' : 's'} más`}
            title={`${miembro.convocatorias.length >= 12 ? 12: miembro.convocatorias.length} Ultimas convocatorias:`}>
            {miembro.convocatorias!.map((convocatoria) => (
              <ConvocatoriaCard key={convocatoria.codigo_convocatoria} convocatoria={convocatoria} sx={{height: '100%'}} />
            ))}
          </AccordionPartialList>
        )}

        {/* {Boolean(miembro.convocatorias && miembro.convocatorias.length) && (
          <AccordionPartialList
            disabledVisibilityIdent
            display="flex"
            getLabel={(expanded, restTotalChildren) => expanded ? 'Ver menos' : `Ver ${restTotalChildren} experiencia${restTotalChildren === 1 ? '' : 's'} más`}
            title={`${miembro.convocatorias.length >= 12 ? 12: miembro.convocatorias.length} Ultimas convocatorias:`}>
            {miembro.convocatorias!.map((convocatoria) => (
              <ConvocatoriaCard key={convocatoria.codigo_convocatoria} convocatoria={convocatoria} sx={{height: '100%'}} />
            ))}
          </AccordionPartialList>
        )} */}
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
