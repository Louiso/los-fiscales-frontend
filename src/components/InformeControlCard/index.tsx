import { Card, CardContent, CardHeader, Typography, Link } from '@mui/material'
import { Launch as LaunchIcon } from "@mui/icons-material";

import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import MaybeTooltip from 'components/MaybeTooltip'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Presunto } from 'types'

interface PresuntoCardProps {
  presunto: Presunto;
  sx?: any;
}

const InformeControlCard: FC<PresuntoCardProps> = ({ presunto, sx }) => {
  const classes = useStyles()

  return (
    <Card variant='outlined' sx={sx}>
      <CardHeader
        sx={{p: 1.5, pb: 0}}
        title={
          <Box display="flex" alignItems='center' width="100%">
            <MaybeTooltip title={presunto.titulo}>
              <Typography variant='h6' className={classes.title}>
                {presunto.titulo}
              </Typography>
            </MaybeTooltip>
          </Box>
        }
        classes={{
          action: classes.action,
        }}
        action={
          <Typography variant="caption">{dayjs(presunto.fecha_emision).format('MM/DD/YYYY')}</Typography>
        }
      />
      <CardContent sx={{p: 1.5, pt: 1}}>
        <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Departamento:</strong> {presunto.departamento}</Typography>
        <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Provincia:</strong> {presunto.provincia}</Typography>
        <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Distrito:</strong> {presunto.distrito}</Typography>
        {presunto.civil?<Typography variant="caption" sx={{mt: .5}} component='div'><strong>Resposnabilidad Civil:</strong> {presunto.civil?'Sí.':'No'}</Typography>:<div></div>}
        {presunto.penal? <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Resposnabilidad Penal:</strong> {presunto.penal?'Sí':'No'}</Typography> :<div></div> }
        {presunto.adm_ent? <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Resposnabilidad Adm. ENT:</strong> {presunto.adm_ent?'Sí':'No'}</Typography> :<div></div> }
        {presunto.adm_pas?<Typography variant="caption" sx={{mt: .5}} component='div'><strong>Resposnabilidad Adm. PAS:</strong> {presunto.adm_pas?'Sí':'No'}</Typography>: <div></div>} 
        {presunto.adm? <Typography variant="caption" sx={{mt: .5}} component='div'><strong>Resposnabilidad Adm.:</strong> {presunto.adm?'Sí':'No'}</Typography>:<div></div>}
        <Typography variant="caption" sx={{mt: .5}} component='div'> 
        <div className={classes.urls}>
        <strong>Resumen del Informe:
        </strong>
        <a href={`${presunto.url_resumen}`} target="_blank" rel="noreferrer">
                <LaunchIcon />
              </a>
       
        </div>
        <div className={classes.urls}>
        <strong>Informe de control posterior:
        </strong>
        <a href={`${presunto.url_informe}`} target="_blank" rel="noreferrer">
                <LaunchIcon />
              </a>
       
        </div>
        </Typography>
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
    width: 250,
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis'
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  },
  urls: {
    alignItems: 'center',
    display   : 'flex',
    
  }
}), { name: 'InformeControlCard'})

export default InformeControlCard