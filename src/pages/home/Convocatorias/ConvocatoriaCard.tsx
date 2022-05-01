import { Card, CardContent, CardHeader } from '@mui/material'
import React, { FC } from 'react'
import { Convocatoria } from 'types'

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
}

const ConvocatoriaCard: FC<ConvocatoriaCardProps> = ({
  convocatoria
}) => {
  return (
    <Card>
      <CardHeader 
        title={convocatoria.codigo} 
        subheader={convocatoria.descripcionProceso}/>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}

export default ConvocatoriaCard