import Paper from '@mui/material/Paper'
import React, { useContext, useEffect, useState, useRef, useCallback } from 'react'
import { GridExporter } from '@devexpress/dx-react-grid-export'
import saveAs from 'file-saver'
import Button from '@mui/material/Button'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import { Link, useHistory } from 'react-router-dom'
import { PagingState, IntegratedPaging, SortingState, IntegratedSorting, FilteringState, IntegratedFiltering, SearchState } from '@devexpress/dx-react-grid'
import { TableColumnVisibility, Grid, Table, TableHeaderRow, PagingPanel, Toolbar, ExportPanel, TableFilterRow, SearchPanel } from '@devexpress/dx-react-grid-material-ui'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore as ExpandMoreIcon, PauseCircleFilled, PlayCircleFilled } from '@mui/icons-material'
import Excel from './logo192.png'
import PDF from './logo192.png'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'
import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'
import { Template, TemplatePlaceholder, TemplateConnector } from '@devexpress/dx-react-core'
import { printerAxios } from '../../App'
import { flattenObject } from './table.utils'
import classes from './test.module.scss'

// import {
//   ThemeProvider,
//   createMuiTheme,
//   makeStyles,
// } from "@mui/material/styles";

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => ({
//   printIcon: {
//     color: "blue",
//     fontSize: "40px",
//     position: "absolute",
//     left: "110px",
//     cursor: "pointer",
//   },
//   viewIcon: {
//     fontSize: "30px",
//     cursor: "pointer",
//     position: "absolute",
//     right: "0",
//   },
//   button: {
//     margin: "0 0 0 auto",
//     flexShrink: 0,
//     minHeight: "52px",
//   },
//   columnButton: {
//     textDecoration: "none",
//     padding: "4px",
//     borderRadius: "4px",
//     color: "rgba(0, 0, 0, 0.87)",
//     background: "rgba(255,255,255,0.3)",
//     border: `1px solid rgba(21, 68, 122, 0.4)`,
//     textTransform: "lowercase",

//     "&:hover": {
//       background: "rgba(255,255,255,0.5)",
//       border: `1px solid rgba(21, 68, 122, 1)`,
//     },
//   },
//   searchFormWrap: {
//     margin: `-${theme.spacing(3)}px -${theme.spacing(
//       3
//     )}px 14px -${theme.spacing(3)}px`,
//     background: "#fff",
//     padding: theme.spacing(3),
//   },
//   searchContainer: {
//     display: "flex",
//     "& ._grid": {
//       flex: "1",
//     },
//   },
//   accordionDetails: {
//     background: "#f3f3f3",
//     padding: "16px",
//   },
//   MuiTableCellRoot: {
//     padding: "0px 0px",
//   },
//   pagination: {
//     color: "#fff",
//     fontWeight: "bold",
//     display: "flex",
//     justifyContent: "space-between",
//     paddingTop: "0px",
//     paddingBottom: "0px",

//     "& .MuiSelect-root": {
//       color: "#fff",
//     },

//     "& .MuiButtonBase-root": {
//       color: "#fff",
//     },
//     "& svg": {
//       color: "#fff",
//     },
//     "& .MuiIconButton-root.Mui-disabled": {
//       color: "rgba(255,255,255,0.5)",

//       "& svg": {
//         color: "rgba(255,255,255,0.5)",
//       },
//     },
//     "& .MuiTablePagination-toolbar": {
//       padding: "0 16px",
//     },
//     "& .MuiTablePagination-spacer": {
//       flex: "auto",
//       display: "none",
//     },
//     "& .MuiTablePagination-actions": {
//       marginLeft: "auto",
//     },
//   },
//   root: {
//     "& .MuiTableCell-root:last-child": {
//       textOverflow: "unset",
//       overflow: "unset",
//     },
//     "& .Content-content-167": {
//       display: "inline",
//     },
//     // '& .MuiTableHead-root':{
//     //   '& .MuiTableCell-root:first-child':{
//     //     width: '88px !important',
//     //   }
//     // }
//   },
// }));

const AdvanceTable = ({ Actions, rows, columns, header = 'Search Result', collapse = true, reportTitle = 'Search Results', apiColor = [], pageName = '' }) => {
  let saveCounter = 2
  let datesColumns = []
  let BooleanColums = []
  let datesTimeColumns = []
  const [pageSizes] = useState([5, 10, 15])
  const exporterRef = useRef(null)
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false)
  const [togglePlay, setTogglePlay] = useState(false)
  const ExportToggleButton = ({ onToggle, getMessage, buttonRef }) => {
    return <></>
  }
  const pagingPanelMessages = {
    rowsPerPage: 'Rows Per Page', //labels.rowsPerPage,
    info: `{from} of {to}`,
  }
  const filterRowMessages = {
    filterPlaceholder: 'filter',
  }
  columns.forEach((element) => {
    if (element.type?.toLowerCase() === 'datetime') datesTimeColumns.push(element)
    else if (element.type?.toLowerCase() === 'date') datesColumns.push(element)
    else if (element.type?.toLowerCase() === 'boolean') BooleanColums.push(element)
  })

  rows = rows.map((obj, index) => {
    obj = { ...flattenObject(obj), index: index + 1 }
    datesColumns.forEach((element) => {
      if (obj[element.name] && element.FnDateFormat) obj[element.name] = element.FnDateFormat(obj[element.name])
      else obj[element.name] = ''
    })
    datesTimeColumns.forEach((element) => {
      if (obj[element.name]) {
        if (element.FnDateTimeFormat) obj[element.name] = element.FnDateTimeFormat(obj[element.name])
        else obj[element.name] = moment(obj[element.name]).format('MM/DD/YYYY HH:mm:ss')
      }
    })

    BooleanColums.forEach((element) => {
      if (element.FnFormat) {
        obj[element.name] = element.FnFormat(obj[element.name])
      } else {
        if (obj[element.name]) obj[element.name] = 'Yes'
        else obj[element.name] = 'No'
      }
    })

    return obj
  })

  useEffect(() => {
    setExpanded(!expanded)
  }, [collapse])

  const setStatusClass = (api, responseStatus) => {
    const item = api.filter((item) => item.sApplicationStatusEn === responseStatus)
    return item.map((item) => item.sColorName)[0]
  }

  const expandedChange = () => {
    setExpanded(!expanded)
  }
  const startExport = useCallback(
    (options) => {
      exporterRef.current.exportGrid(options)
    },
    [exporterRef]
  )
  const onSave = (workbook) => {
    if (saveCounter % 2 == 0) {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'SearchResults.xlsx')
      })
    }
    saveCounter++
  }
  const RowComponent = ({ ...restProps }) => {
    return <Table.Row {...restProps} style={{ backgroundColor: 'blue' }} />
  }

  const CellComponent = ({ ...restProps }) => {
    if (restProps.column.name.toLowerCase() === 'index')
      return (
        <Table.Cell title={restProps.tableRow.row.index} {...restProps} style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: setStatusClass(apiColor, restProps.tableRow.row.sApplicationStatusEn),
            }}
          ></div>
          <b style={{ marginLeft: '7px' }}>{restProps.tableRow.row.index}</b>
        </Table.Cell>
      )

    if (restProps.column.name.toLowerCase() === 'nentitytypeid')
      return (
        <Table.Cell title={restProps.tableRow.row.nEntityTypeId === 2 ? 'Corporate' : restProps.tableRow.row.nEntityTypeId === 1 ? 'Person' : 'Governorate'} {...restProps} style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          {restProps.tableRow.row.nEntityTypeId === 2 ? 'Corporate' : restProps.tableRow.row.nEntityTypeId === 1 ? 'Person' : 'Governorate'}
        </Table.Cell>
      )

    if (restProps.column.name.toLowerCase() === 'stin')
      return (
        <Table.Cell title={restProps.tableRow.row.sTin} {...restProps} style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          <Link className={classes.columnButton} to={`/profile-page/${restProps.tableRow.row.sTin}`}>
            {restProps.tableRow.row.sTin}
          </Link>
        </Table.Cell>
      )

    return <Table.Cell {...restProps} title={restProps.column?.type?.toLowerCase() === 'date' ? '' : restProps.value} style={{ paddingTop: '0px', paddingBottom: '0px' }} />
  }
  const CellHeaderComponent = ({ ...restProps }) => {
    return (
      <Table.Cell
        className="tableCell"
        {...restProps}
        style={{
          paddingTop: '7px',
          paddingBottom: '7px',
          width: restProps.column.width ? restProps.column.width : '150px',
        }}
      />
    )
  }

  const callPDF = (mode) => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    })
    let col = JSON.parse(JSON.stringify(columns))
    col = col.map((obj) =>
      obj.title != 'Actions'
        ? (() => {
            delete Object.assign(obj, { ['header']: obj['title'] })['title']
            delete Object.assign(obj, { ['dataKey']: obj['name'] })['name']
            return obj
          })()
        : {}
    )

    autotable(doc, {
      headStyles: { fillColor: [21, 58, 122], fontSize: 8 },
      margin: { horizontal: 10 },
      columnStyles: {
        0: {
          halign: 'center',
          fillColor: [247, 144, 30],
          textColor: '#fff',
          fontStyle: 'bold',
        },
      },

      columns: col,
      body: rows,
      showHead: 'everyPage',
      startY: 40,
      styles: { overflow: 'linebreak' },
      bodyStyles: { valign: 'top' },
      theme: 'striped',
      didParseCell: (data) => {
        if (data.cell && data.cell.section === 'head') {
          switch (data.cell.raw) {
            case 'Index':
              data.cell.styles.halign = 'center'
              break
            default:
              data.cell.styles.halign = 'left'
              break
          }
        }
      },
      didDrawPage: function (data) {
        var pageSize = doc.internal.pageSize
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
        var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth()

        // Header
        doc.addImage(
          'data:image/jpeg;base64,' +
            'iVBORw0KGgoAAAANSUhEUgAABWwAAAIYCAYAAAD5HaVxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MUJCMTI0Q0NDQjExRUFCRDk5QzMyMTFCRTEwM0IxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3MUJCMTI1Q0NDQjExRUFCRDk5QzMyMTFCRTEwM0IxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDcxQkIxMjJDQ0NCMTFFQUJEOTlDMzIxMUJFMTAzQjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDcxQkIxMjNDQ0NCMTFFQUJEOTlDMzIxMUJFMTAzQjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7b+sW9AAESJElEQVR42uzd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',
          'JPEG',
          10,
          5,
          50,
          19
        )

        doc.setTextColor(21, 58, 122)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)

        doc.text('TMS', 25, 19, { align: 'left' })

        doc.setTextColor(21, 58, 122)
        doc.setFontSize(10)

        doc.text(`Date : ${moment(new Date()).format('MM/DD/YYYY')}`, pageWidth - 40, 10, { align: 'left' })
        doc.text(`Time : ${moment().format('LTS')}`, pageWidth - 40, 15, {
          align: 'left',
        })
        doc.text(`Records Found : ${rows.length}`, pageWidth - 40, 20, {
          align: 'left',
        })

        doc.setFontSize(14)
        doc.setTextColor(21, 58, 122)

        doc.setFont('helvetica', 'bold')
        doc.text(reportTitle, pageWidth / 2, 35, { align: 'center' })

        // Footer
        var str = 'Page ' + doc.internal.getNumberOfPages()
        doc.setFontSize(10)
        doc.text(str, data.settings.margin.left, pageHeight - 10)
      },
    })

    if (mode === 'pdf') doc.save('SearchResults.pdf')
    else if (mode === 'print') {
      doc.autoPrint()
      const hiddFrame = document.createElement('iframe')
      hiddFrame.style.position = 'fixed'
      hiddFrame.style.width = '1px'
      hiddFrame.style.height = '1px'
      hiddFrame.style.opacity = '0.01'
      const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
      if (isSafari) {
        hiddFrame.onload = () => {
          try {
            hiddFrame.contentWindow.document.execCommand('print', false, null)
          } catch (e) {
            hiddFrame.contentWindow.print()
          }
        }
      }
      hiddFrame.src = doc.output('bloburl')
      document.body.appendChild(hiddFrame)
    }
  }

  const callHistoryPause = () => {
    try {
      const response = printerAxios({
        method: 'GET',
        url: '/api/PrintJob/PauseAllPrintJob',
      })
        .then(function (response) {
          if (!response.data.success) {
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: "Jobs cannot be Dequeued",
            //   flashMessageType: "error",
            // });
          } else {
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: `jobs dequeued Succsfully`,
            //   flashMessageType: "success",
            // });
          }
        })
        .catch((e) => {
          var msg = 'Server Request Failed'
          if (!!e.response && !!e.response.data) {
            msg = e.response.data
          }
          // appDispatch({
          //   type: "FLASHMESSAGE",
          //   flashMessage: msg,
          //   flashMessageType: "error",
          // });
        })
    } catch (e) {
      // Error
      // appDispatch({
      //   type: "FLASHMESSAGE",
      //   flashMessage: "There was a problem or the request was cancelled.",
      //   flashMessageType: "error",
      // });
    }
    setTogglePlay(!togglePlay)
  }

  const callHistoryResume = () => {
    try {
      const response = printerAxios({
        method: 'GET',
        url: '/api/PrintJob/ResumeAllPrintJob',
      })
        .then(function (response) {
          if (!response.data.success) {
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: "Jobs cannot be Dequeued",
            //   flashMessageType: "error",
            // });
          } else {
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: `jobs Queued Succsfully`,
            //   flashMessageType: "success",
            // });
          }
        })
        .catch((e) => {
          var msg = 'Server Request Failed'
          if (!!e.response && !!e.response.data) {
            msg = e.response.data
          }
          // appDispatch({
          //   type: "FLASHMESSAGE",
          //   flashMessage: msg,
          //   flashMessageType: "error",
          // });
        })
    } catch (e) {
      // Error
      // appDispatch({
      //   type: "FLASHMESSAGE",
      //   flashMessage: "There was a problem or the request was cancelled.",
      //   flashMessageType: "error",
      // });
    }
    setTogglePlay(!togglePlay)
  }
  const MenuComponent = ({ children, visible, target, onHide }) => {
    return (
      <>
        <img
          src={Excel}
          onClick={children[0].props.onClick}
          style={{
            left: '10px',
            height: '35px',
            position: 'absolute',
            cursor: 'pointer',
          }}
        />
        <img
          src={PDF}
          onClick={() => callPDF('pdf')}
          style={{
            height: '40px',
            position: 'absolute',
            left: '60px',
            cursor: 'pointer',
          }}
        />
        <PrintIcon onClick={() => callPDF('print')} className={classes.printIcon} />

        {togglePlay && pageName === 'printerHistory' && <PlayCircleFilled className={classes.viewIcon} onClick={() => callHistoryResume()} />}

        {!togglePlay && pageName === 'printerHistory' && <PauseCircleFilled className={classes.viewIcon} onClick={() => callHistoryPause()} />}
      </>
    )
  }
  const SortingIcon = ({ direction }) => (direction === 'asc' ? <ArrowUpward style={{ fontSize: '16px' }} /> : <ArrowDownward style={{ fontSize: '16px' }} />)
  const SortLabel = ({ onSort, children, direction }) => (
    <Button onClick={onSort} style={{ color: '#fff', fontSize: '12px' }}>
      <span title={children.props.children} style={{ width: columns.width }}>
        {children}
      </span>
      {direction && <SortingIcon direction={direction} />}
    </Button>
  )
  const PagingContainer = (props) => <PagingPanel.Container {...props} className={classes.pagination} />
  const FilterCell = (props) => {
    if (props.column.name === 'actions') return null
    else return <TableFilterRow.Cell {...props} />
  }
  const [tableColumnExtensions] = useState([{ columnName: 'actions', align: 'left', width: '150px' }])
  const ToolbarRoot = (props) => {
    return (
      <Toolbar.Root
        {...props}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingBottom: '0',
          paddingTop: '0',
          height: '10',
          paddingRight: '50px',
        }}
      />
    )
  }
  const CustomizeExcelCell = (cell, row, column) => {
    cell.alignment = { horizontal: 'left' }
  }

  const [defaultHiddenColumnNames] = useState(['id'])

  return (
    <div className="searchAccordion">
      <Accordion expanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={expandedChange} className="_accordionSummary">
          <Typography className={classes.heading}>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Paper id="table" className={classes.root}>
            <Grid rows={rows} columns={columns}>
              <SortingState defaultSorting={[{ columnName: 'index', direction: 'asc' }]} />
              <IntegratedSorting />
              <Toolbar rootComponent={ToolbarRoot} />
              <ExportPanel startExport={startExport} toggleButtonComponent={ExportToggleButton} menuComponent={MenuComponent} />

              <FilteringState defaultFilters={[]} />
              <SearchState />
              <IntegratedFiltering />

              <PagingState defaultCurrentPage={0} />
              <IntegratedPaging />

              <Actions for={['actions']} />
              <Table columnExtensions={tableColumnExtensions} cellComponent={CellComponent} />

              <TableHeaderRow showSortingControls sortLabelComponent={SortLabel} cellComponent={CellHeaderComponent} rowComponent={RowComponent} />

              <TableColumnVisibility defaultHiddenColumnNames={defaultHiddenColumnNames} />
              <TableFilterRow cellComponent={FilterCell} messages={filterRowMessages} />

              <PagingPanel pageSizes={pageSizes} containerComponent={PagingContainer} messages={pagingPanelMessages} />
              <Template name="root">
                <TemplateConnector>
                  {({ rows: filteredRows }) => {
                    return <TemplatePlaceholder />
                  }}
                </TemplateConnector>
              </Template>
              <SearchPanel />
            </Grid>
            <GridExporter ref={exporterRef} rows={rows} columns={columns} onSave={onSave} customizeCell={CustomizeExcelCell} />
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default AdvanceTable