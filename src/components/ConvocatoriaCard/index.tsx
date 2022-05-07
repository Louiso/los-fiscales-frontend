import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import MaybeTooltip from 'components/MaybeTooltip'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Convocatoria } from 'types'

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
  sx?: any;
}

const ConvocatoriaCard: FC<ConvocatoriaCardProps> = ({ convocatoria, sx }) => {
  const classes = useStyles()

  return (
    <Card variant='outlined' sx={sx}>
      <CardHeader
        sx={{p: 1.5, pb: 0}}
        title={
          <Box display="flex" alignItems='center' width="100%">
            <MaybeTooltip title={convocatoria.nombre_entidad}>
              <Typography variant='h6' className={classes.title}>
                {convocatoria.nombre_entidad}
              </Typography>
            </MaybeTooltip>
            -&nbsp;
            <Typography>
              {convocatoria.codigo_convocatoria}
            </Typography>
          </Box>
        }
        classes={{
          action: classes.action,
        }}
        action={
          <Typography variant="caption">{dayjs(convocatoria.fecha_convocatoria).format('MM/DD/YYYY')}</Typography>
        }
      />
      <CardContent sx={{p: 1.5, pt: 1}}>
        <MaybeTooltip title={convocatoria.descripcion_proceso}>
          <Typography variant="caption" className={classes.description} component='div'><strong>Descripción:</strong> {convocatoria.descripcion_proceso}</Typography>
        </MaybeTooltip>
        <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Tipo de Entidad:</strong> {convocatoria.tipo_entidad}</Typography>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() => ({
  action: {
    marginRight: '0 !important',
    marginTop: '2px !important'
  },
  title: {
    width: 166,
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis'
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  }
}), { name: 'ConvocatoriaCard'})

export default ConvocatoriaCard