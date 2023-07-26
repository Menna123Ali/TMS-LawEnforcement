import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Axios from "axios";
import printJS from "print-js";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import Actionsbutton from "./Actionsbutton";
import classes from "./test.module.scss";

// import {
//   ThemeProvider,
//   createMuiTheme,
//   makeStyles,
// } from "@material-ui/core/styles";

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => ({
//   viewModal: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "50%",
//     background: "#f3f3f3",
//     boxShadow: 24,
//     padding: "20px",
//     borderRadius: "5px",
//     height: "100%",
//     overflowY: "auto",
//   },
//   viewIcon: {
//     color: "orange",
//     // fontSize: '30px',
//     cursor: "pointer",
//   },
//   deleteIcon: {
//     color: "red",
//     // fontSize: '30px',
//     cursor: "pointer",
//   },

//   root: {
//     width: "100%",
//   },
//   container: {
//     // maxHeight: 460
//   },
//   accordionDetails: {
//     background: "#f3f3f3",
//     padding: "16px",
//   },
//   table: {
//     overflow: "hidden",

//     "& > .MuiTableHead-root": {
//       background: "blue",

//       "& th": {
//         color: "red",
//         fontSize: "15px",
//         fontWeight: "bold",

//         "& span": {
//           "&:hover": {
//             color: "#fff",
//           },
//           "&.MuiTableSortLabel-active": {
//             color: "#fff",
//           },
//           "& svg": {
//             color: "#fff !important",
//           },
//         },
//       },
//     },
//   },
//   rowBody: {},
//   pagination: {
//     background: "blue",
//     color: "#fff",
//     fontSize: "14px",
//     fontWeight: "bold",

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
// }));

const TableActions = ({ ModalRef, DeleteModalRef, uploadModalRef }) => {
  // const classes = useStyles();

  // const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState();
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(true);
  // const [rows, setRows] = useState(props.rows)
  const [showView, setShowView] = useState("");
  // const [showPrintInvoice, setShowPrintInvoice] = useState('')
  // const [showDownloadReceipt, setShowDownloadReceipt] = useState('')
  const [showDeleteInvoice, setShowDeleteInvoice] = useState("");

  // const [invoiceData, setInvoiceData] = useState(null)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = async (nInvoiceId, isPatchInvoice = false) => {
    setIsGenerating(true);

    var reportName = "NewInvoiceReport";
    if (isPatchInvoice) {
      reportName = "PatchInvoice";
    }
    let response = await fetch(
      `http://192.168.1.200/TMSReport/Export/${reportName}?reportParamsURL=InvoiceId:${nInvoiceId};`,
      {
        method: "Get",
        headers: new Headers({
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFobWVkLnJhbWFkYW4zIiwiZW1haWwiOiJhYUBhYS5jb20iLCJuYW1laWQiOiI4NzQxM2U4OC1hY2EwLTQ4MDEtYjI4NC05MmNkNzQyY2M4OGIiLCJnaXZlbl9uYW1lIjoiMSIsImRlbnlvbmx5c2lkIjoiRmFsc2UiLCJkZW55b25seXByaW1hcnlzaWQiOiJGYWxzZSIsInJvbGUiOiJTdXBlckFkbWluTGl2ZSIsImF1ZCI6WyJodHRwOi8vbnRtLWFwcC8iLCJodHRwOi8vbnRtLWFwcC9UTVNBUEkvIiwiaHR0cDovL250bS1hcHAvVE1TUHJpbnQvIiwiaHR0cDovL250bS1hcHAvVE1TUmVwb3J0LyIsImh0dHA6Ly9udG0tYXBwL1RNU05vdGlmaWNhdGlvbi8iXSwibmJmIjoxNjg4OTgzNDMwLCJleHAiOjE2ODkwNDM0MzAsImlhdCI6MTY4ODk4MzQzMCwiaXNzIjoiaHR0cDovL250bS1hcHAvVE1TQXV0aC8ifQ.KMS6Rbtwr-wqQ3kvZjNvVZJQ0nstTvkn9GwV-N2PWXo`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }
    );
    let data = await response.blob();
    var pdfUrl = URL.createObjectURL(data);
    printJS(pdfUrl);

    //appDispatch({ type: 'REPORTVIEWER', reportProps: `NewInvoiceReport?InvoiceId=${nInvoiceId}` })
    //const win = window.open('/report-view/', '_blank')
    //if (win != null) {
    //    win.focus()
    //}
  };

  const handleDownload = (nInvoiceId, fileName = "receipt") => {
    // setIsSubmitting(true)
    async function callInvoiceSearch() {
      const response = await Axios({
        method: "Get",
        url: "/api/Invoice/GetInvoiceAttachment",
        params: {
          invoiceId: nInvoiceId,
        },
      })
        .then(function (response) {
          // setIsSubmitting(false)
          if (response.data) {
            setResults(response.data);
            var a = document.createElement("a");
            a.href = `data:image/jpeg;base64, ${response.data.binAttachmentsImage}`;
            //let fileExtension = mime.extension(response.data.nAttachmentsImageType)
            let fileExtension = response.data.nAttachmentsImageType
              ?.toLowerCase()
              .startsWith("application")
              ? "pdf"
              : "png";
            a.setAttribute("download", fileName + "." + fileExtension);
            a.click();
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: "Results Found",
            //   flashMessageType: "success",
            // });
          } else {
            // appDispatch({
            //   type: "FLASHMESSAGE",
            //   flashMessage: "No Result Found ",
            //   flashMessageType: "error",
            // });
            setResults("");
          }
        })
        .catch((e) => {
          var msg = "Server Request Failed";
          if (!!e.response && !!e.response.data) {
            msg = e.response.data;
          }
          // appDispatch({
          //   type: "FLASHMESSAGE",
          //   flashMessage: msg,
          //   flashMessageType: "error",
          // });
          // setIsSubmitting(false)
        });
    }
    callInvoiceSearch();
  };

  const handleView = (row) => {
    if (ModalRef.current) {
      ModalRef.current.open();
    }

    Axios.get("/api/Invoice/GetInvoiceServicesAndFees", {
      params: { invoiceId: row.nInvoiceId },
    }).then((e) => {
      if (ModalRef.current) {
        ModalRef.current.setInvoiceData({
          invoice: row,
          invoiceDetail: e.data.model,
        });
      }
    });
  };

  const removeImageTypePrefix = (base64String) => {
    return base64String?.replace(/^data:image\/[a-z]+;base64,/, "");
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const ActionsFormatter = useCallback(({ row }) => {
    console.log(row);
    //
    const tblPageActions = [1069, 1068, 1066];
    const showDownloadReceipt =
      tblPageActions.filter((x) => x.actionId == 1069).length > 0;
    const showPrintInvoice =
      tblPageActions.filter((x) => x.actionId == 1068).length > 0;
    const voidInvoice =
      tblPageActions.filter((x) => x.actionId == 1066).length > 0;
    let actions = [
      {
        icon: <VisibilityIcon className={classes.viewIcon} />,
        name: "View",
        onClick: () => handleView(row),
      },
    ];
    // if (showDownloadReceipt && row.nInvoiceStatusId >= 3) {
    actions = [
      ...actions,
      {
        icon: <VisibilityIcon className={classes.viewIcon} />,
        name: "Download",
        onClick: () =>
          handleDownload(row.nInvoiceId, "receipt " + row.sInvoiceNumber),
      },
    ];
    // }
    if (showPrintInvoice) {
      actions = [
        {
          icon: <VisibilityIcon className={classes.viewIcon} />,
          name: "Print",
          onClick: () => handlePrint(row.nInvoiceId, row.bIsPatchParent),
        },
        ...actions,
      ];
    }

    if (voidInvoice && row.nInvoiceStatusId <= 3) {
      actions = [
        ...actions,
        {
          icon: <VisibilityIcon color="error" />,
          name: "Remove",
          onClick: () => {
            if (DeleteModalRef.current)
              DeleteModalRef.current.open(row.nInvoiceId);
          },
        },
      ];
    }
    if (row.nInvoiceStatusId === 3) {
      actions = [
        ...actions,
        {
          icon: (
            <>
              {/* <button type='file'  /> */}
              <VisibilityIcon className={classes.viewIcon} />
            </>
          ),
          name: "Upload",
          onClick: () => {
            if (uploadModalRef.current)
              uploadModalRef.current.open(row.nInvoiceId);
            // const input = document.createElement('input')
            // input.type = 'file'

            // input.addEventListener('change', async (event) => {
            //   try {
            //     const file = event.target.files[0]
            //     const base64Image = await convertToBase64(file)
            //     const imageWithoutPrefix = await removeImageTypePrefix(base64Image)

            //     // Perform form submission logic here
            //     const response = await Axios({
            //       method: 'POST',
            //       url: '/api/Invoice/AddInvoiceAttachment',
            //       data: {
            //         nInvoiceId: row.invoiceId,
            //         TbliInvoiceAttachmentImages: [
            //           {
            //             binAttachmentsImage: imageWithoutPrefix,
            //             NAttachmentsImageType: FileType.split('/')[0]?.trim(),
            //           },
            //         ],
            //       },
            //     })
            //   } catch (e) {

            //   }

            // })

            // input.click()
          },
        },
      ];
    }
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Actionsbutton actions={actions} />
        </div>
      </>
    );
  }, []);

  return ActionsFormatter;
};

export default TableActions;
