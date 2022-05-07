import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Children } from 'react'
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface AccordionPartialListProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  disabledVisibilityIdent?: boolean;
  sectionKey?: string;
  getLabel?: (expanded: boolean, restTotalChildren: number) => string;
  classes?: any;
  display?: string;
}

const AccordionPartialList: FC<AccordionPartialListProps> = ({
  title,
  children,
  disabledVisibilityIdent,
  className,
  sectionKey = 'section',
  // ignoreKey = 'ignore',
  // eslint-disable-next-line no-unused-vars
  getLabel = (expanded, restTotalChildren) => expanded ? 'Ver menos' : `Ver ${restTotalChildren} más`,
  display = 'block'
}) => {
  const listContainerRef = useRef<HTMLDivElement>(null)
  const classes = useStyles({ disabledVisibilityIdent })

  const [ lastIndexElementOfFirstRow, setLastIndexElementOfFirstRow ] = useState(0)
  const [ hasMoreRows, setHasMoreRows ] = useState(false)
  const [ isExpanded, setIsExpanded ] = useState(false)

  const totalChildren = useMemo(() => {
    const childrenArray = Children.toArray(children).filter((child: any) => !child.key.includes(sectionKey))

    return childrenArray.length
  }, [ children, sectionKey ])

  const _handleClickToggleButton = () => {
    setIsExpanded(prev => !prev)
  }

  const childrens: any[] = Children.toArray(children)

  const indexToShow = childrens[0]?.key.includes(sectionKey) ? 1 : 0

  const calculateStateDisplayFlex = () => {
    const [ firstElement ] = (listContainerRef.current?.childNodes ?? []) as any[]

    if(firstElement && listContainerRef.current) {
      let indexFirstElementOfSecondRow = -1
      for (const index in listContainerRef.current.childNodes) {
        const element: any = listContainerRef.current.childNodes[index]

        if(element.offsetTop > firstElement.offsetTop) {
          indexFirstElementOfSecondRow = Number(index)
          break
        }
      }

      if(indexFirstElementOfSecondRow >= 1) {
        setLastIndexElementOfFirstRow(indexFirstElementOfSecondRow - 1)
        setHasMoreRows(true)
      } else {
        setLastIndexElementOfFirstRow(listContainerRef.current.childNodes.length - 1)
      }      

      /*
        hacer un filter de aquellos elementos que se encuentra en la primera fila
        y guardar un booleano para saber si hay mas filas

      */
    }
  }
  useEffect(() => {
    if(display === 'flex') {
      calculateStateDisplayFlex()

      window.addEventListener('resize', calculateStateDisplayFlex)

      return () => {
        window.removeEventListener('resize', calculateStateDisplayFlex)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("totalChildren", totalChildren)
  console.log("hasMoreRows", hasMoreRows)

  return (
    <div className={className}>
      <div className={classes.summary}>{title}</div>
      <div className={classes.body}>
        <Box
          // className={clsx(classes.childrenList, _classes.childrenList, {
          //   [classes.childrenListFlex]: display === 'flex'
          // })}
          ref={listContainerRef}
          sx={{
            display: "grid",
            mt: 1.5,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "8px",
            gridRowGap: isExpanded ? '8px': 0
          }}
        >
          {Children.map(childrens, (child, index) => {
            let animate = (
              (display === 'flex' && index <= lastIndexElementOfFirstRow) ||
              (index <= indexToShow)
            ) ? 'open' : 'hidden'

            if(isExpanded)
              animate = 'open'

            return (
              <motion.div
                animate={animate}
                className={classes.motionDiv}
                initial={animate}
                key={`AccordionPartialList-Child-${child.key}`}
                variants={{
                  hidden: {
                    height: 0,
                    opacity: 0
                  },
                  open: {
                    opacity: 1,
                    height: 'auto'
                  }
                }}>
                {child}
              </motion.div>
            )
          })}
        </Box>
      </div>
      {((totalChildren > 1 && totalChildren !== childrens.length) || hasMoreRows) && (
        <Button
          sx={{
            mt: 1.5
          }}
          color='primary'
          fullWidth onClick={_handleClickToggleButton} size='small'
          startIcon={
            isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }>
          {getLabel(isExpanded, display === 'flex' ? totalChildren - (lastIndexElementOfFirstRow + 1) : totalChildren - 1)}
        </Button>
      )}
    </div>
  )
}

const useStyles = makeStyles<Theme>((theme) => ({
  body: {
    display    : 'flex',
    width      : '100%'
  },
  childrenList: {
    // marginTop: theme.spacing(1.5)
    flex: 1
  },
  childrenListFlex: {
    display  : 'flex',
    flexWrap : 'wrap',
    marginTop: theme.spacing(1),
    overflow : 'hidden'
  },
  ident: {
    backgroundColor: ({ disabledVisibilityIdent }: any) => disabledVisibilityIdent ? 'transparent' : theme.palette.divider,
    height         : 'auto',
    marginRight    : theme.spacing(2.5),
    width          : 1
  },
  motionDiv: {
    overflow: 'hidden',
    height: '100%'
  },
  summary: {
    alignItems: 'center',
    display   : 'flex',
    height    : 24,
    minHeight : 24,
    padding   : 0
  }
}), { name: 'AccordionPartialList' })

export default AccordionPartialList
