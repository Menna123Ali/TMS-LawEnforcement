import React, { useCallback, useEffect, useRef, useState } from 'react';
import { 
    Grid, 
    Table, 
    TableHeaderRow, 
    Toolbar,
    ExportPanel,
    TableFilterRow, 
    SearchPanel,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import moment from 'moment/moment';
import {
    SortingState,
    IntegratedSorting,
    FilteringState,
    IntegratedFiltering,
    SearchState,
    PagingState,
    IntegratedPaging,
    
  } from '@devexpress/dx-react-grid';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import saveAs from 'file-saver';
import { StyledTable } from './AdvancedTable.styles';
import MenuComponent from './MenuComponent';

const columns = [
    { name: 'index', title: 'Index', width: '105px' },
    { name: 'sTin', title: 'CTN', width: '140px' },
    { name: 'sPersonFullName', title: 'Name', width: '150px' },
    { name: 'nEntityTypeId', title: 'Entity Type', width: '150px' },
    { name: 'sApplicationNumber', title: 'Application Number', width: '150px' },
    { name: 'dtCreationDate', title: 'Application Date', type: 'datetime', width: '150px' },
    { name: 'actions', title: 'Actions' },
  ]
  const rowsData =[
    {
        "nEntityId": 1,
        "sNote": "entity notes",
        "nEntityTypeId": 1,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": 15712,
        "sTin": "23012119181",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-03-14T17:21:19.513",
        "tblPerson": [
            {
                "nPersonId": 1,
                "nEntityId": 1,
                "sPersonFirstName": "ahmed",
                "sPersonMiddelName": "ramadan",
                "sPersonLastName": "ragab",
                "sPersonAdditionalName": "mohamed",
                "sPersonMotherName": "mother",
                "sPersonFatherName": "father",
                "sPersonFullName": "ahmed ragab",
                "dPersonDateOfBirth": "2023-03-14T14:02:44.74",
                "nPersonCountryOfBirthId": 66,
                "nPersonPlaceOfBirthId": 15712,
                "nPersonGenderId": 1,
                "nPersonMaritalStatusId": 1,
                "nPersonNationalityId": 57,
                "nPersonLivingCountryId": 66,
                "nPersonOccupationId": 1569,
                "sPersonAddress": "8th mohamed tawfek wahba",
                "personContactPhone": "+234111232432423",
                "sPersonEmail": "aa@aa.com",
                "sPersonNationalId": "aa222",
                "sPersonBirthCertificateNo": "",
                "sPersonPrvPassportNo": "",
                "bIsDeleted": null,
                "bIsElection": null,
                "bIsPassport": null,
                "bIsBroker": false,
                "sPersonElectionId": ""
            }
        ],
        "tblCompany": [],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-03-14T17:21:17.96",
                "sAgentName": null,
                "nApplicationId": 1,
                "nEntityId": 1,
                "sApplicationNumber": "23012117623",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 1,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23012119181",
                    "nEntityStatusId": 1,
                    "tblPerson": [
                        {
                            "nPersonId": 1,
                            "nEntityId": 1,
                            "sPersonFirstName": "ahmed",
                            "sPersonMiddelName": "ramadan",
                            "sPersonLastName": "ragab",
                            "sPersonAdditionalName": "mohamed",
                            "sPersonMotherName": "mother",
                            "sPersonFatherName": "father",
                            "sPersonFullName": "ahmed ragab",
                            "dPersonDateOfBirth": "2023-03-14T14:02:44.74",
                            "nPersonCountryOfBirthId": 66,
                            "nPersonPlaceOfBirthId": 15712,
                            "nPersonGenderId": 1,
                            "nPersonMaritalStatusId": 1,
                            "nPersonNationalityId": 57,
                            "nPersonLivingCountryId": 66,
                            "nPersonOccupationId": 1569,
                            "sPersonAddress": "8th mohamed tawfek wahba",
                            "personContactPhone": "+234111232432423",
                            "sPersonEmail": "aa@aa.com",
                            "sPersonNationalId": "aa222",
                            "sPersonBirthCertificateNo": "",
                            "sPersonPrvPassportNo": "",
                            "bIsDeleted": null,
                            "bIsElection": null,
                            "bIsPassport": null,
                            "bIsBroker": false,
                            "sPersonElectionId": ""
                        }
                    ],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    },
    {
        "nEntityId": 2,
        "sNote": "entity notes",
        "nEntityTypeId": 2,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": null,
        "sTin": "23013649696",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-03-14T17:36:49.513",
        "tblPerson": [],
        "tblCompany": [
            {
                "nCompanyId": 1,
                "nEntityId": 2,
                "sCompanyName": "Ditech",
                "sCompanyAddress": "116 wraf road",
                "sCompanyEmail": "ditech@ditech.ae",
                "sCompanyPhone": "+22233333444",
                "sCompanyActivity": "Software",
                "sCompanyTradeLicense": "Cr12345",
                "sCompanyRepresentativeTIN": "23012119181",
                "bIsDeleted": null,
                "nRepresentativeTinId": 1,
                "bIsDealership": true,
                "nRepresentativeTin": {
                    "nEntityId": 1,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23012119181",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                }
            }
        ],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-03-14T17:36:49.293",
                "sAgentName": null,
                "nApplicationId": 2,
                "nEntityId": 2,
                "sApplicationNumber": "23013649293",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 2,
                    "sNote": "entity notes",
                    "nEntityTypeId": 2,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": null,
                    "sTin": "23013649696",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [
                        {
                            "nCompanyId": 1,
                            "nEntityId": 2,
                            "sCompanyName": "Ditech",
                            "sCompanyAddress": "116 wraf road",
                            "sCompanyEmail": "ditech@ditech.ae",
                            "sCompanyPhone": "+22233333444",
                            "sCompanyActivity": "Software",
                            "sCompanyTradeLicense": "Cr12345",
                            "sCompanyRepresentativeTIN": "23012119181",
                            "bIsDeleted": null,
                            "nRepresentativeTinId": 1,
                            "bIsDealership": true,
                            "nRepresentativeTin": {
                                "nEntityId": 1,
                                "sNote": "entity notes",
                                "nEntityTypeId": 1,
                                "bIsDeleted": null,
                                "nServiceCenterId": 1,
                                "sCityId": 15712,
                                "sTin": "23012119181",
                                "nEntityStatusId": 1,
                                "tblPerson": [],
                                "tblCompanyNEntity": [],
                                "tblServiceCenter": null,
                                "tblEntityFingurePrint": [],
                                "tblEntityPhotos": [],
                                "tblEntitySignatures": []
                            }
                        }
                    ],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    },
    {
        "nEntityId": 3,
        "sNote": "entity notes",
        "nEntityTypeId": 3,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": null,
        "sTin": "23013925911",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-03-14T17:39:25.9",
        "tblPerson": [],
        "tblCompany": [
            {
                "nCompanyId": 2,
                "nEntityId": 3,
                "sCompanyName": "KIRS",
                "sCompanyAddress": "km8 hadejia road",
                "sCompanyEmail": "aa@aa.com",
                "sCompanyPhone": "+23423423423423",
                "sCompanyActivity": "internal revenue",
                "sCompanyTradeLicense": "CR1234",
                "sCompanyRepresentativeTIN": "23012119181",
                "bIsDeleted": null,
                "nRepresentativeTinId": 1,
                "bIsDealership": null,
                "nRepresentativeTin": {
                    "nEntityId": 1,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23012119181",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                }
            }
        ],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-03-14T17:39:25.893",
                "sAgentName": null,
                "nApplicationId": 3,
                "nEntityId": 3,
                "sApplicationNumber": "23013925891",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 3,
                    "sNote": "entity notes",
                    "nEntityTypeId": 3,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": null,
                    "sTin": "23013925911",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [
                        {
                            "nCompanyId": 2,
                            "nEntityId": 3,
                            "sCompanyName": "KIRS",
                            "sCompanyAddress": "km8 hadejia road",
                            "sCompanyEmail": "aa@aa.com",
                            "sCompanyPhone": "+23423423423423",
                            "sCompanyActivity": "internal revenue",
                            "sCompanyTradeLicense": "CR1234",
                            "sCompanyRepresentativeTIN": "23012119181",
                            "bIsDeleted": null,
                            "nRepresentativeTinId": 1,
                            "bIsDealership": null,
                            "nRepresentativeTin": {
                                "nEntityId": 1,
                                "sNote": "entity notes",
                                "nEntityTypeId": 1,
                                "bIsDeleted": null,
                                "nServiceCenterId": 1,
                                "sCityId": 15712,
                                "sTin": "23012119181",
                                "nEntityStatusId": 1,
                                "tblPerson": [],
                                "tblCompanyNEntity": [],
                                "tblServiceCenter": null,
                                "tblEntityFingurePrint": [],
                                "tblEntityPhotos": [],
                                "tblEntitySignatures": []
                            }
                        }
                    ],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    },
    {
        "nEntityId": 4,
        "sNote": "entity notes",
        "nEntityTypeId": 1,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": 15712,
        "sTin": "23013655487",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-04-30T15:36:56.133",
        "tblPerson": [
            {
                "nPersonId": 2,
                "nEntityId": 4,
                "sPersonFirstName": "ahmed",
                "sPersonMiddelName": "",
                "sPersonLastName": "Ramadan",
                "sPersonAdditionalName": "",
                "sPersonMotherName": "",
                "sPersonFatherName": "",
                "sPersonFullName": "ahmed Ramadan",
                "dPersonDateOfBirth": "2023-04-30T12:17:40.333",
                "nPersonCountryOfBirthId": 66,
                "nPersonPlaceOfBirthId": 15712,
                "nPersonGenderId": 1,
                "nPersonMaritalStatusId": null,
                "nPersonNationalityId": 57,
                "nPersonLivingCountryId": null,
                "nPersonOccupationId": null,
                "sPersonAddress": "10 ahmed el zomort st",
                "personContactPhone": "+23487756554544",
                "sPersonEmail": "",
                "sPersonNationalId": "nin12345678",
                "sPersonBirthCertificateNo": "",
                "sPersonPrvPassportNo": "",
                "bIsDeleted": null,
                "bIsElection": null,
                "bIsPassport": null,
                "bIsBroker": false,
                "sPersonElectionId": ""
            }
        ],
        "tblCompany": [],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-04-30T15:36:54.133",
                "sAgentName": null,
                "nApplicationId": 5,
                "nEntityId": 4,
                "sApplicationNumber": "23013653528",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 4,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23013655487",
                    "nEntityStatusId": 1,
                    "tblPerson": [
                        {
                            "nPersonId": 2,
                            "nEntityId": 4,
                            "sPersonFirstName": "ahmed",
                            "sPersonMiddelName": "",
                            "sPersonLastName": "Ramadan",
                            "sPersonAdditionalName": "",
                            "sPersonMotherName": "",
                            "sPersonFatherName": "",
                            "sPersonFullName": "ahmed Ramadan",
                            "dPersonDateOfBirth": "2023-04-30T12:17:40.333",
                            "nPersonCountryOfBirthId": 66,
                            "nPersonPlaceOfBirthId": 15712,
                            "nPersonGenderId": 1,
                            "nPersonMaritalStatusId": null,
                            "nPersonNationalityId": 57,
                            "nPersonLivingCountryId": null,
                            "nPersonOccupationId": null,
                            "sPersonAddress": "10 ahmed el zomort st",
                            "personContactPhone": "+23487756554544",
                            "sPersonEmail": "",
                            "sPersonNationalId": "nin12345678",
                            "sPersonBirthCertificateNo": "",
                            "sPersonPrvPassportNo": "",
                            "bIsDeleted": null,
                            "bIsElection": null,
                            "bIsPassport": null,
                            "bIsBroker": false,
                            "sPersonElectionId": ""
                        }
                    ],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    },
    {
        "nEntityId": 5,
        "sNote": "entity notes",
        "nEntityTypeId": 2,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": null,
        "sTin": "23014251004",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-04-30T15:42:50.737",
        "tblPerson": [],
        "tblCompany": [
            {
                "nCompanyId": 3,
                "nEntityId": 5,
                "sCompanyName": "Ditech",
                "sCompanyAddress": "",
                "sCompanyEmail": "",
                "sCompanyPhone": "+23456677833",
                "sCompanyActivity": "",
                "sCompanyTradeLicense": "RF1234534545",
                "sCompanyRepresentativeTIN": "23013655487",
                "bIsDeleted": null,
                "nRepresentativeTinId": 4,
                "bIsDealership": false,
                "nRepresentativeTin": {
                    "nEntityId": 4,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23013655487",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                }
            }
        ],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-04-30T15:42:50.443",
                "sAgentName": null,
                "nApplicationId": 6,
                "nEntityId": 5,
                "sApplicationNumber": "23014250443",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 5,
                    "sNote": "entity notes",
                    "nEntityTypeId": 2,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": null,
                    "sTin": "23014251004",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [
                        {
                            "nCompanyId": 3,
                            "nEntityId": 5,
                            "sCompanyName": "Ditech",
                            "sCompanyAddress": "",
                            "sCompanyEmail": "",
                            "sCompanyPhone": "+23456677833",
                            "sCompanyActivity": "",
                            "sCompanyTradeLicense": "RF1234534545",
                            "sCompanyRepresentativeTIN": "23013655487",
                            "bIsDeleted": null,
                            "nRepresentativeTinId": 4,
                            "bIsDealership": false,
                            "nRepresentativeTin": {
                                "nEntityId": 4,
                                "sNote": "entity notes",
                                "nEntityTypeId": 1,
                                "bIsDeleted": null,
                                "nServiceCenterId": 1,
                                "sCityId": 15712,
                                "sTin": "23013655487",
                                "nEntityStatusId": 1,
                                "tblPerson": [],
                                "tblCompanyNEntity": [],
                                "tblServiceCenter": null,
                                "tblEntityFingurePrint": [],
                                "tblEntityPhotos": [],
                                "tblEntitySignatures": []
                            }
                        }
                    ],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    },
    {
        "nEntityId": 6,
        "sNote": "entity notes",
        "nEntityTypeId": 2,
        "bIsDeleted": null,
        "nServiceCenterId": null,
        "sCityId": null,
        "sTin": "23012036506",
        "nEntityStatusId": 1,
        "dtCreationDate": "2023-07-26T15:20:36.46",
        "tblPerson": [],
        "tblCompany": [
            {
                "nCompanyId": 4,
                "nEntityId": 6,
                "sCompanyName": "DSL",
                "sCompanyAddress": "NKKJNKN",
                "sCompanyEmail": "",
                "sCompanyPhone": "+2343456645",
                "sCompanyActivity": "",
                "sCompanyTradeLicense": "CAC.34",
                "sCompanyRepresentativeTIN": "23012119181",
                "bIsDeleted": null,
                "nRepresentativeTinId": 1,
                "bIsDealership": false,
                "nRepresentativeTin": {
                    "nEntityId": 1,
                    "sNote": "entity notes",
                    "nEntityTypeId": 1,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": 15712,
                    "sTin": "23012119181",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                }
            }
        ],
        "tblServiceCenter": null,
        "tblApplications": [
            {
                "dtCreationDate": "2023-07-26T15:20:36.283",
                "sAgentName": null,
                "nApplicationId": 50017,
                "nEntityId": 6,
                "sApplicationNumber": "23012036130",
                "nApplicationVersion": 1,
                "nDeployType": null,
                "nPriority": 1,
                "bReclamation": null,
                "bReproduction": null,
                "dtIssueDate": null,
                "dtExpiryDate": null,
                "dtEnrollmentDate": null,
                "nServiceCenterId": 1,
                "nEnrollmentPlace": null,
                "nCurrentStage": 1,
                "nApplicationStatus": 14,
                "nLicenseValidityId": null,
                "nEnrollmentOfficer": null,
                "bFingerPrintWaved": null,
                "bSignatureWaved": null,
                "nLockedBy": null,
                "sLockedOfficerName": "test ",
                "sNotes": "New Traffic File",
                "sDocumentComment": null,
                "sSecurityComment": null,
                "bIsLocked": null,
                "bIsRemote": null,
                "bIsDeleted": null,
                "nApplicationType": null,
                "nApplicationMainType": null,
                "nApplicationSubType": null,
                "nInvoiceId": null,
                "tblvVehicleApplication": null,
                "nInvoice": null,
                "nApplicationStatusNavigation": null,
                "tblAttachments": [],
                "tblIssuedCards": [],
                "tblApplicationCollectionGroup": [],
                "tblApplicationStatusLogger": [],
                "tblFingerprintMatchReportMaster": [],
                "root": null,
                "nEntity": {
                    "nEntityId": 6,
                    "sNote": "entity notes",
                    "nEntityTypeId": 2,
                    "bIsDeleted": null,
                    "nServiceCenterId": 1,
                    "sCityId": null,
                    "sTin": "23012036506",
                    "nEntityStatusId": 1,
                    "tblPerson": [],
                    "tblCompanyNEntity": [
                        {
                            "nCompanyId": 4,
                            "nEntityId": 6,
                            "sCompanyName": "DSL",
                            "sCompanyAddress": "NKKJNKN",
                            "sCompanyEmail": "",
                            "sCompanyPhone": "+2343456645",
                            "sCompanyActivity": "",
                            "sCompanyTradeLicense": "CAC.34",
                            "sCompanyRepresentativeTIN": "23012119181",
                            "bIsDeleted": null,
                            "nRepresentativeTinId": 1,
                            "bIsDealership": false,
                            "nRepresentativeTin": {
                                "nEntityId": 1,
                                "sNote": "entity notes",
                                "nEntityTypeId": 1,
                                "bIsDeleted": null,
                                "nServiceCenterId": 1,
                                "sCityId": 15712,
                                "sTin": "23012119181",
                                "nEntityStatusId": 1,
                                "tblPerson": [],
                                "tblCompanyNEntity": [],
                                "tblServiceCenter": null,
                                "tblEntityFingurePrint": [],
                                "tblEntityPhotos": [],
                                "tblEntitySignatures": []
                            }
                        }
                    ],
                    "tblServiceCenter": null,
                    "tblEntityFingurePrint": [],
                    "tblEntityPhotos": [],
                    "tblEntitySignatures": []
                },
                "nEntityRelationId": null,
                "nRegistrationTypeId": null,
                "nStateId": null,
                "shouldPrintApplictionInspection": false,
                "shouldPrintCards": false,
                "currentApplicationCollection": null,
                "tblApplicationSelectedIssuedCardType": [],
                "sRepresentativeTIN": null,
                "nRepresentativeId": null,
                "dtExpectedDeliveryDate": null,
                "tblDealershipDetails": null
            }
        ]
    }
]

const ExportToggleButton = () => {
return <></>

}

function AdvancedTable({reportTitle = 'Search Results'}) {
    const [rows, setRows] = useState([])
    const exporterRef = useRef(null);
    let saveCounter = 2

   useEffect(()=>{
    const newData = rowsData.map(row => {
       return  { 
                index: row.nEntityId, 
                sTin: row.sTin, 
                sPersonFullName: row.tblPerson[0]?.sPersonFullName || row.tblCompany[0].sCompanyName,
                nEntityTypeId: row.nEntityTypeId,
                sApplicationNumber: row.tblApplications[0].sApplicationNumber,
                dtCreationDate:  moment(row.dtCreationDate).format('MM/DD/YYYY HH:mm:ss')
            }
      })
      setRows(newData)
   },[])

// target export
const startExport = useCallback(() => {
    exporterRef.current.exportGrid();
  }, [exporterRef]);


// export function
  const onSave = (workbook) => {
    if (saveCounter % 2 == 0) {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'SearchResults.xlsx')
      })
    }
    saveCounter++
  }



  return (
    <StyledTable>
    <Grid rows={rows} columns={columns}>
         {/* export */}
         <Toolbar />
          <ExportPanel startExport={startExport} toggleButtonComponent={ExportToggleButton} menuComponent={(props)=><MenuComponent columns={columns} rows={rows} {...props}/>}  />

        <PagingState defaultCurrentPage={0}pageSize={2}/>
        <IntegratedPaging />

        {/* search input */}
        <SearchState />

        {/* filter */}
        <FilteringState />
        <IntegratedFiltering />
       

        {/* sorting */}
        <SortingState defaultSorting={[{ columnName: 'index', direction: 'asc' }]} />
        <IntegratedSorting />
        
        {/* table */}
        <Table />
        <TableHeaderRow showSortingControls />
        <TableFilterRow />
        <SearchPanel />


        <PagingPanel />
    </Grid>
    <GridExporter
        ref={exporterRef}
        rows={rows}
        columns={columns}
        onSave={onSave}
    />
  </StyledTable>
  )
}

export default AdvancedTable
