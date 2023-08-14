import React from 'react'
import Excel from '../../../assets/images/excel.png'
import PDF from '../../../assets/images/pdf.png'
import autotable from 'jspdf-autotable'
import jsPDF from 'jspdf'
import { imgLink } from './helpers';
import moment from 'moment/moment';

function MenuComponent({columns, rows, reportTitle = 'Search Results', children, ...props}) {
    //   pdf function
  const callPDF = (mode) => {
    
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    })
    let col = JSON.parse(JSON.stringify(columns))
    col = col.map((obj) =>
      obj.title !== 'Actions'
        ? (() => {
            delete Object.assign(obj, { 'header': obj['title'] })['title']
            delete Object.assign(obj, { 'dataKey': obj['name'] })['name']
            return obj
          })()
        : {}
    )

    autotable(doc, {
      headStyles: { fillColor: [21, 58, 122], fontSize: 8 },
      margin: { horizontal: 10 },
      columnStyles: { 0: { halign: 'center', fillColor: [247, 144, 30], textColor: '#fff', fontStyle: 'bold' } },

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
          'data:image/jpeg;base64,' + imgLink, 'JPEG',
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
        doc.text(`Time : ${moment().format('LTS')}`, pageWidth - 40, 15, { align: 'left' })
        doc.text(`Records Found : ${rows.length}`, pageWidth - 40, 20, { align: 'left' })

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
  return (
    <div>
        <img src={Excel} onClick={children[0].props.onClick} style={{ left: '10px', height: '35px', position: 'absolute', cursor: 'pointer' }} alt="" />
        <img src={PDF} onClick={() => callPDF('pdf')} style={{ height: '40px', position: 'absolute', left: '60px', cursor: 'pointer' }} alt=''/>
      </div>
  )
}

export default MenuComponent
