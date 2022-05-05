import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Convocatoria } from 'types'

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria
}

const ConvocatoriaCard: FC<ConvocatoriaCardProps> = ({ convocatoria }) => {
  const classes = useStyles()
  return (
    <Card variant='outlined'>
      <CardHeader
        sx={{p: 1.5}}
        title={`${convocatoria.entidad.nombre} - ${convocatoria.codigo}`}
        titleTypographyProps={{
          variant: 'h6',
        }}
        classes={{
          action: classes.action,
        }}
        action={
          <Typography variant="caption">{dayjs(convocatoria.convocatoriaFecha).format('MM/DD/YYYY')}</Typography>
        }
      />
      <CardContent sx={{p: 1.5}}>
        <Typography variant="caption" component='div'><strong>Descripción:</strong> {convocatoria.descripcionProceso}</Typography>
        <Typography variant="caption" component='div'><strong>Tipo de Entidad:</strong> {convocatoria.entidad.tipo}</Typography>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() => ({
  action: {
    marginRight: 0,
    marginTop: -2
  }
}), { name: 'ConvocatoriaCard'})

export default ConvocatoriaCard