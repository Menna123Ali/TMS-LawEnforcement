import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Badge, Button, Popover, Typography, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Notifications as NotificationsIcon, TouchApp as TouchAppIcon, ExitToApp as ExitToAppIcon, SettingsApplications as MiscellaneousServicesIcon } from '@mui/icons-material'
import { UserMenuContainer } from './UserMenu.styles'
import Icon from '@mui/material/Icon'

import AvatarImage from '../../../../assets/images/logo-mini.png'
import NotificationPopper from '../NotificationPopper'

const UserMenu = ({ className }) => {
  console.log(className)
  const [userMenu, setUserMenu] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [counter, setopencounter] = useState(false)

  const modules = [
    {
      module: {
        moduelId: 12,
        moduleName: 'Invoice & Billing',
        moduleIconId: 39,
        moduleOrder: 0,
        isDeleted: null,
        isMenuItem: true,
        moduleIcon: {
          iconId: 39,
          iconName: 'attach_money',
        },
        tblPages: [
          {
            pageId: 1091,
            pageName: 'Create invoice V2',
            pageUrl: '/invoices-billing/create-invoice-v2',
            moduleId: 12,
            pageIconId: 40,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 40,
              iconName: 'money',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2125,
                pageId: 1091,
                actionNameAr: 'Create Invoice v2',
                actionNameEn: 'Create Invoice v2',
              },
              {
                actionId: 2126,
                pageId: 1091,
                actionNameAr: 'manual override',
                actionNameEn: 'manual override',
              },
              {
                actionId: 2127,
                pageId: 1091,
                actionNameAr: 'view vin pending response',
                actionNameEn: 'view vin pending response',
              },
            ],
          },
          {
            pageId: 41,
            pageName: 'Create Invoice',
            pageUrl: '/invoices-billing/create-invoice',
            moduleId: 12,
            pageIconId: 40,
            pageViewOrder: 1,
            isDeleted: null,
            isMenuItem: true,
            pageIcon: {
              iconId: 40,
              iconName: 'money',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 41,
                pageId: 41,
                actionNameAr: 'Create Invoice',
                actionNameEn: 'Create Invoice',
              },
              {
                actionId: 1070,
                pageId: 41,
                actionNameAr: 'Print Fees',
                actionNameEn: 'Print Fees',
              },
              {
                actionId: 1071,
                pageId: 41,
                actionNameAr: 'Check Fees',
                actionNameEn: 'Check Fees',
              },
            ],
          },
          {
            pageId: 82,
            pageName: 'Create Patch Invoice',
            pageUrl: '/invoices-billing/create-patch-invoice',
            moduleId: 12,
            pageIconId: 21,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 21,
              iconName: 'people',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1113,
                pageId: 82,
                actionNameAr: 'New Patch Invoice',
                actionNameEn: 'New Patch Invoice',
              },
            ],
          },
          {
            pageId: 46,
            pageName: 'Pay Invoice',
            pageUrl: '/invoices-billing/teller',
            moduleId: 12,
            pageIconId: 15,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1060,
                pageId: 46,
                actionNameAr: 'Pay Invoice',
                actionNameEn: 'Pay Invoice',
              },
            ],
          },
          {
            pageId: 62,
            pageName: 'Add Bank Log',
            pageUrl: '/invoices-billing/add-bank-log',
            moduleId: 12,
            pageIconId: 39,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 39,
              iconName: 'attach_money',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1082,
                pageId: 62,
                actionNameAr: 'اضافة سجل بنكى',
                actionNameEn: 'Add Bank Log',
              },
            ],
          },
          {
            pageId: 48,
            pageName: 'Attach Receipt',
            pageUrl: '/invoices-billing/attach',
            moduleId: 12,
            pageIconId: 13,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: false,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1062,
                pageId: 48,
                actionNameAr: 'Attach Receipt',
                actionNameEn: 'Attach Receipt',
              },
            ],
          },
          {
            pageId: 63,
            pageName: 'View Invoice Trans',
            pageUrl: '/invoices-billing/view-bank-log',
            moduleId: 12,
            pageIconId: 27,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 27,
              iconName: 'article',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1083,
                pageId: 63,
                actionNameAr: 'عرض السجل',
                actionNameEn: 'View Log',
              },
            ],
          },
          {
            pageId: 42,
            pageName: 'Search Invoice',
            pageUrl: '/invoices-billing/search-invoice',
            moduleId: 12,
            pageIconId: 15,
            pageViewOrder: 4,
            isDeleted: null,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 42,
                pageId: 42,
                actionNameAr: 'Search Invoice',
                actionNameEn: 'Search Invoice',
              },
              {
                actionId: 1068,
                pageId: 42,
                actionNameAr: 'Print Invoice',
                actionNameEn: 'Print Invoice',
              },
              {
                actionId: 1069,
                pageId: 42,
                actionNameAr: 'Download Receipt',
                actionNameEn: 'Download Receipt',
              },
              {
                actionId: 4145,
                pageId: 42,
                actionNameAr: 'Search invoice Edit Invoice',
                actionNameEn: 'Search invoice Edit Invoice',
              },
              {
                actionId: 4146,
                pageId: 42,
                actionNameAr: 'Reattach invoice',
                actionNameEn: 'Reattach invoice',
              },
            ],
          },
          {
            pageId: 68,
            pageName: 'Plate Types',
            pageUrl: '/invoices-billing/Plate-Types',
            moduleId: 12,
            pageIconId: 13,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1094,
                pageId: 68,
                actionNameAr: 'add Type',
                actionNameEn: 'add Type',
              },
              {
                actionId: 1095,
                pageId: 68,
                actionNameAr: 'Edit Type',
                actionNameEn: 'Edit Type',
              },
              {
                actionId: 1096,
                pageId: 68,
                actionNameAr: 'Delete Type',
                actionNameEn: 'Delete Type',
              },
            ],
          },
          {
            pageId: 84,
            pageName: 'App Type Fees',
            pageUrl: '/invoices-billing/App-fees',
            moduleId: 12,
            pageIconId: 39,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 39,
              iconName: 'attach_money',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1117,
                pageId: 84,
                actionNameAr: 'Add App Fees',
                actionNameEn: 'Add App Fees',
              },
            ],
          },
          {
            pageId: 3098,
            pageName: 'Edit Invoice',
            pageUrl: '/invoices-billing/edit-invoice',
            moduleId: 12,
            pageIconId: 33,
            pageViewOrder: 10,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 33,
              iconName: 'assignment_ind',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 4140,
                pageId: 3098,
                actionNameAr: 'Edit Invoice',
                actionNameEn: 'Edit Invoice',
              },
              {
                actionId: 4141,
                pageId: 3098,
                actionNameAr: 'Edit Status',
                actionNameEn: 'Edit Status',
              },
              {
                actionId: 4142,
                pageId: 3098,
                actionNameAr: 'Edit Receipt',
                actionNameEn: 'Edit Receipt',
              },
              {
                actionId: 4143,
                pageId: 3098,
                actionNameAr: 'Edit Attachment',
                actionNameEn: 'Edit Attachment',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 1091,
          pageName: 'Create invoice V2',
          pageUrl: '/invoices-billing/create-invoice-v2',
          moduleId: 12,
          pageIconId: 40,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 40,
            iconName: 'money',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2125,
              pageId: 1091,
              actionNameAr: 'Create Invoice v2',
              actionNameEn: 'Create Invoice v2',
            },
            {
              actionId: 2126,
              pageId: 1091,
              actionNameAr: 'manual override',
              actionNameEn: 'manual override',
            },
            {
              actionId: 2127,
              pageId: 1091,
              actionNameAr: 'view vin pending response',
              actionNameEn: 'view vin pending response',
            },
          ],
        },
        {
          pageId: 41,
          pageName: 'Create Invoice',
          pageUrl: '/invoices-billing/create-invoice',
          moduleId: 12,
          pageIconId: 40,
          pageViewOrder: 1,
          isDeleted: null,
          isMenuItem: true,
          pageIcon: {
            iconId: 40,
            iconName: 'money',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 41,
              pageId: 41,
              actionNameAr: 'Create Invoice',
              actionNameEn: 'Create Invoice',
            },
            {
              actionId: 1070,
              pageId: 41,
              actionNameAr: 'Print Fees',
              actionNameEn: 'Print Fees',
            },
            {
              actionId: 1071,
              pageId: 41,
              actionNameAr: 'Check Fees',
              actionNameEn: 'Check Fees',
            },
          ],
        },
        {
          pageId: 82,
          pageName: 'Create Patch Invoice',
          pageUrl: '/invoices-billing/create-patch-invoice',
          moduleId: 12,
          pageIconId: 21,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 21,
            iconName: 'people',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1113,
              pageId: 82,
              actionNameAr: 'New Patch Invoice',
              actionNameEn: 'New Patch Invoice',
            },
          ],
        },
        {
          pageId: 46,
          pageName: 'Pay Invoice',
          pageUrl: '/invoices-billing/teller',
          moduleId: 12,
          pageIconId: 15,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1060,
              pageId: 46,
              actionNameAr: 'Pay Invoice',
              actionNameEn: 'Pay Invoice',
            },
          ],
        },
        {
          pageId: 62,
          pageName: 'Add Bank Log',
          pageUrl: '/invoices-billing/add-bank-log',
          moduleId: 12,
          pageIconId: 39,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 39,
            iconName: 'attach_money',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1082,
              pageId: 62,
              actionNameAr: 'اضافة سجل بنكى',
              actionNameEn: 'Add Bank Log',
            },
          ],
        },
        {
          pageId: 48,
          pageName: 'Attach Receipt',
          pageUrl: '/invoices-billing/attach',
          moduleId: 12,
          pageIconId: 13,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: false,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1062,
              pageId: 48,
              actionNameAr: 'Attach Receipt',
              actionNameEn: 'Attach Receipt',
            },
          ],
        },
        {
          pageId: 63,
          pageName: 'View Invoice Trans',
          pageUrl: '/invoices-billing/view-bank-log',
          moduleId: 12,
          pageIconId: 27,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 27,
            iconName: 'article',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1083,
              pageId: 63,
              actionNameAr: 'عرض السجل',
              actionNameEn: 'View Log',
            },
          ],
        },
        {
          pageId: 42,
          pageName: 'Search Invoice',
          pageUrl: '/invoices-billing/search-invoice',
          moduleId: 12,
          pageIconId: 15,
          pageViewOrder: 4,
          isDeleted: null,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 42,
              pageId: 42,
              actionNameAr: 'Search Invoice',
              actionNameEn: 'Search Invoice',
            },
            {
              actionId: 1068,
              pageId: 42,
              actionNameAr: 'Print Invoice',
              actionNameEn: 'Print Invoice',
            },
            {
              actionId: 1069,
              pageId: 42,
              actionNameAr: 'Download Receipt',
              actionNameEn: 'Download Receipt',
            },
            {
              actionId: 4145,
              pageId: 42,
              actionNameAr: 'Search invoice Edit Invoice',
              actionNameEn: 'Search invoice Edit Invoice',
            },
            {
              actionId: 4146,
              pageId: 42,
              actionNameAr: 'Reattach invoice',
              actionNameEn: 'Reattach invoice',
            },
          ],
        },
        {
          pageId: 68,
          pageName: 'Plate Types',
          pageUrl: '/invoices-billing/Plate-Types',
          moduleId: 12,
          pageIconId: 13,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1094,
              pageId: 68,
              actionNameAr: 'add Type',
              actionNameEn: 'add Type',
            },
            {
              actionId: 1095,
              pageId: 68,
              actionNameAr: 'Edit Type',
              actionNameEn: 'Edit Type',
            },
            {
              actionId: 1096,
              pageId: 68,
              actionNameAr: 'Delete Type',
              actionNameEn: 'Delete Type',
            },
          ],
        },
        {
          pageId: 84,
          pageName: 'App Type Fees',
          pageUrl: '/invoices-billing/App-fees',
          moduleId: 12,
          pageIconId: 39,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 39,
            iconName: 'attach_money',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1117,
              pageId: 84,
              actionNameAr: 'Add App Fees',
              actionNameEn: 'Add App Fees',
            },
          ],
        },
        {
          pageId: 3098,
          pageName: 'Edit Invoice',
          pageUrl: '/invoices-billing/edit-invoice',
          moduleId: 12,
          pageIconId: 33,
          pageViewOrder: 10,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 33,
            iconName: 'assignment_ind',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 4140,
              pageId: 3098,
              actionNameAr: 'Edit Invoice',
              actionNameEn: 'Edit Invoice',
            },
            {
              actionId: 4141,
              pageId: 3098,
              actionNameAr: 'Edit Status',
              actionNameEn: 'Edit Status',
            },
            {
              actionId: 4142,
              pageId: 3098,
              actionNameAr: 'Edit Receipt',
              actionNameEn: 'Edit Receipt',
            },
            {
              actionId: 4143,
              pageId: 3098,
              actionNameAr: 'Edit Attachment',
              actionNameEn: 'Edit Attachment',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 9,
        moduleName: 'Hidden Module',
        moduleIconId: 3,
        moduleOrder: 0,
        isDeleted: false,
        isMenuItem: false,
        moduleIcon: {
          iconId: 3,
          iconName: 'public',
        },
        tblPages: [
          {
            pageId: 32,
            pageName: 'Report Viewer',
            pageUrl: '/report-view/',
            moduleId: 9,
            pageIconId: 12,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: false,
            pageIcon: {
              iconId: 12,
              iconName: 'supervisor_account',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 32,
                pageId: 32,
                actionNameAr: 'View Report',
                actionNameEn: 'View Report',
              },
            ],
          },
          {
            pageId: 33,
            pageName: 'Customer Profile',
            pageUrl: '/profile-page/:tin',
            moduleId: 9,
            pageIconId: 12,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: false,
            pageIcon: {
              iconId: 12,
              iconName: 'supervisor_account',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 33,
                pageId: 33,
                actionNameAr: 'View Customer Profile',
                actionNameEn: 'View Customer Profile',
              },
            ],
          },
          {
            pageId: 44,
            pageName: 'Document Viewer',
            pageUrl: '/document-viewer/:id',
            moduleId: 9,
            pageIconId: 12,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: false,
            pageIcon: {
              iconId: 12,
              iconName: 'supervisor_account',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 44,
                pageId: 44,
                actionNameAr: 'Document Viewer',
                actionNameEn: 'Document Viewer',
              },
            ],
          },
          {
            pageId: 81,
            pageName: 'Config Full Screen',
            pageUrl: '/config-page/:component',
            moduleId: 9,
            pageIconId: 2,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 2,
              iconName: 'tv',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1112,
                pageId: 81,
                actionNameAr: 'View Full Screen Configs',
                actionNameEn: 'View Full Screen Configs',
              },
            ],
          },
          {
            pageId: 70,
            pageName: 'User Notification',
            pageUrl: '/notifications',
            moduleId: 9,
            pageIconId: 3,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 3,
              iconName: 'public',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1101,
                pageId: 70,
                actionNameAr: 'View Notifications',
                actionNameEn: 'View Notifications',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 32,
          pageName: 'Report Viewer',
          pageUrl: '/report-view/',
          moduleId: 9,
          pageIconId: 12,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: false,
          pageIcon: {
            iconId: 12,
            iconName: 'supervisor_account',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 32,
              pageId: 32,
              actionNameAr: 'View Report',
              actionNameEn: 'View Report',
            },
          ],
        },
        {
          pageId: 33,
          pageName: 'Customer Profile',
          pageUrl: '/profile-page/:tin',
          moduleId: 9,
          pageIconId: 12,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: false,
          pageIcon: {
            iconId: 12,
            iconName: 'supervisor_account',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 33,
              pageId: 33,
              actionNameAr: 'View Customer Profile',
              actionNameEn: 'View Customer Profile',
            },
          ],
        },
        {
          pageId: 44,
          pageName: 'Document Viewer',
          pageUrl: '/document-viewer/:id',
          moduleId: 9,
          pageIconId: 12,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: false,
          pageIcon: {
            iconId: 12,
            iconName: 'supervisor_account',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 44,
              pageId: 44,
              actionNameAr: 'Document Viewer',
              actionNameEn: 'Document Viewer',
            },
          ],
        },
        {
          pageId: 81,
          pageName: 'Config Full Screen',
          pageUrl: '/config-page/:component',
          moduleId: 9,
          pageIconId: 2,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 2,
            iconName: 'tv',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1112,
              pageId: 81,
              actionNameAr: 'View Full Screen Configs',
              actionNameEn: 'View Full Screen Configs',
            },
          ],
        },
        {
          pageId: 70,
          pageName: 'User Notification',
          pageUrl: '/notifications',
          moduleId: 9,
          pageIconId: 3,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 3,
            iconName: 'public',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1101,
              pageId: 70,
              actionNameAr: 'View Notifications',
              actionNameEn: 'View Notifications',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 1,
        moduleName: 'Traffic File',
        moduleIconId: 3,
        moduleOrder: 2,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 3,
          iconName: 'public',
        },
        tblPages: [
          {
            pageId: 1,
            pageName: 'Personal CTN',
            pageUrl: '/ctn/create-personal-traffic-file/new',
            moduleId: 1,
            pageIconId: 4,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 4,
              iconName: 'perm_identity',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1,
                pageId: 1,
                actionNameAr: 'Add Personal Traffic File',
                actionNameEn: 'Add Personal Traffic File',
              },
            ],
          },
          {
            pageId: 2,
            pageName: 'Corporate CTN',
            pageUrl: '/ctn/create-Corporate-traffic-file/new',
            moduleId: 1,
            pageIconId: 5,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 5,
              iconName: 'business',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2,
                pageId: 2,
                actionNameAr: 'Add Company Traffic File',
                actionNameEn: 'Add Company Traffic File',
              },
            ],
          },
          {
            pageId: 69,
            pageName: 'Governorate CTN',
            pageUrl: '/ctn/Governorate-Traffic-File/new',
            moduleId: 1,
            pageIconId: 34,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 34,
              iconName: 'admin_panel_settings',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1100,
                pageId: 69,
                actionNameAr: 'Add Governorate CTN',
                actionNameEn: 'Add Governorate CTN',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 1,
          pageName: 'Personal CTN',
          pageUrl: '/ctn/create-personal-traffic-file/new',
          moduleId: 1,
          pageIconId: 4,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 4,
            iconName: 'perm_identity',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1,
              pageId: 1,
              actionNameAr: 'Add Personal Traffic File',
              actionNameEn: 'Add Personal Traffic File',
            },
          ],
        },
        {
          pageId: 2,
          pageName: 'Corporate CTN',
          pageUrl: '/ctn/create-Corporate-traffic-file/new',
          moduleId: 1,
          pageIconId: 5,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 5,
            iconName: 'business',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2,
              pageId: 2,
              actionNameAr: 'Add Company Traffic File',
              actionNameEn: 'Add Company Traffic File',
            },
          ],
        },
        {
          pageId: 69,
          pageName: 'Governorate CTN',
          pageUrl: '/ctn/Governorate-Traffic-File/new',
          moduleId: 1,
          pageIconId: 34,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 34,
            iconName: 'admin_panel_settings',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1100,
              pageId: 69,
              actionNameAr: 'Add Governorate CTN',
              actionNameEn: 'Add Governorate CTN',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 2,
        moduleName: 'Driving License',
        moduleIconId: 6,
        moduleOrder: 3,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 6,
          iconName: 'contact_mail',
        },
        tblPages: [
          {
            pageId: 3,
            pageName: 'New License',
            pageUrl: '/driving-license/new-driving-license/new',
            moduleId: 2,
            pageIconId: 7,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 7,
              iconName: 'control_point',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 3,
                pageId: 3,
                actionNameAr: 'Add New DL License',
                actionNameEn: 'Add New DL License',
              },
              {
                actionId: 51,
                pageId: 3,
                actionNameAr: 'Search TIN',
                actionNameEn: 'Search TIN',
              },
              {
                actionId: 1053,
                pageId: 3,
                actionNameAr: 'Save DL As Draft',
                actionNameEn: 'Save DL As Draft',
              },
            ],
          },
          {
            pageId: 5,
            pageName: 'License Renew',
            pageUrl: '/driving-license/renew-driving-license',
            moduleId: 2,
            pageIconId: 8,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 8,
              iconName: 'autorenew',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 5,
                pageId: 5,
                actionNameAr: 'Renew Drive License ',
                actionNameEn: 'Renew Drive  License ',
              },
            ],
          },
          {
            pageId: 4,
            pageName: 'License Damaged',
            pageUrl: '/driving-license/damaged-driving-license',
            moduleId: 2,
            pageIconId: 9,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 9,
              iconName: 'all_out',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 4,
                pageId: 4,
                actionNameAr: 'Add License Damaged',
                actionNameEn: 'Add License Damaged',
              },
            ],
          },
          {
            pageId: 6,
            pageName: 'License Lost',
            pageUrl: '/driving-license/lost-driving-license',
            moduleId: 2,
            pageIconId: 10,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 10,
              iconName: 'search_off',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 6,
                pageId: 6,
                actionNameAr: 'Add Drive  License Lost',
                actionNameEn: 'Add Drive  License Lost',
              },
            ],
          },
          {
            pageId: 7,
            pageName: 'License Blocking',
            pageUrl: '/driving-license/driving-license-blocking',
            moduleId: 2,
            pageIconId: 11,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 11,
              iconName: 'block',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 7,
                pageId: 7,
                actionNameAr: 'Add Drive  License Blocking',
                actionNameEn: 'Add Drive  License Blocking',
              },
            ],
          },
          {
            pageId: 8,
            pageName: 'Type Transfer',
            pageUrl: '/driving-license/driving-type-transfer',
            moduleId: 2,
            pageIconId: 12,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 12,
              iconName: 'supervisor_account',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 8,
                pageId: 8,
                actionNameAr: 'Add Drive  License Type Transfer',
                actionNameEn: 'Add Drive  License Type Transfer',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 3,
          pageName: 'New License',
          pageUrl: '/driving-license/new-driving-license/new',
          moduleId: 2,
          pageIconId: 7,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 7,
            iconName: 'control_point',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 3,
              pageId: 3,
              actionNameAr: 'Add New DL License',
              actionNameEn: 'Add New DL License',
            },
            {
              actionId: 51,
              pageId: 3,
              actionNameAr: 'Search TIN',
              actionNameEn: 'Search TIN',
            },
            {
              actionId: 1053,
              pageId: 3,
              actionNameAr: 'Save DL As Draft',
              actionNameEn: 'Save DL As Draft',
            },
          ],
        },
        {
          pageId: 5,
          pageName: 'License Renew',
          pageUrl: '/driving-license/renew-driving-license',
          moduleId: 2,
          pageIconId: 8,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 8,
            iconName: 'autorenew',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 5,
              pageId: 5,
              actionNameAr: 'Renew Drive License ',
              actionNameEn: 'Renew Drive  License ',
            },
          ],
        },
        {
          pageId: 4,
          pageName: 'License Damaged',
          pageUrl: '/driving-license/damaged-driving-license',
          moduleId: 2,
          pageIconId: 9,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 9,
            iconName: 'all_out',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 4,
              pageId: 4,
              actionNameAr: 'Add License Damaged',
              actionNameEn: 'Add License Damaged',
            },
          ],
        },
        {
          pageId: 6,
          pageName: 'License Lost',
          pageUrl: '/driving-license/lost-driving-license',
          moduleId: 2,
          pageIconId: 10,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 10,
            iconName: 'search_off',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 6,
              pageId: 6,
              actionNameAr: 'Add Drive  License Lost',
              actionNameEn: 'Add Drive  License Lost',
            },
          ],
        },
        {
          pageId: 7,
          pageName: 'License Blocking',
          pageUrl: '/driving-license/driving-license-blocking',
          moduleId: 2,
          pageIconId: 11,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 11,
            iconName: 'block',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 7,
              pageId: 7,
              actionNameAr: 'Add Drive  License Blocking',
              actionNameEn: 'Add Drive  License Blocking',
            },
          ],
        },
        {
          pageId: 8,
          pageName: 'Type Transfer',
          pageUrl: '/driving-license/driving-type-transfer',
          moduleId: 2,
          pageIconId: 12,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 12,
            iconName: 'supervisor_account',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 8,
              pageId: 8,
              actionNameAr: 'Add Drive  License Type Transfer',
              actionNameEn: 'Add Drive  License Type Transfer',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 3,
        moduleName: 'Vehicle Registration',
        moduleIconId: 16,
        moduleOrder: 4,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 16,
          iconName: 'time_to_leave',
        },
        tblPages: [
          {
            pageId: 12,
            pageName: 'New Vehicle Registration',
            pageUrl: '/vehicle-registration/new-vehicle-registration',
            moduleId: 3,
            pageIconId: 7,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 7,
              iconName: 'control_point',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 12,
                pageId: 12,
                actionNameAr: 'Add New Vehicle License',
                actionNameEn: 'Add New Vehicle License',
              },
              {
                actionId: 3139,
                pageId: 12,
                actionNameAr: 'Search Allocation',
                actionNameEn: 'Search Allocation',
              },
              {
                actionId: 3140,
                pageId: 12,
                actionNameAr: 'Enforce Allocation',
                actionNameEn: 'Enforce Allocation',
              },
              {
                actionId: 3141,
                pageId: 12,
                actionNameAr: 'allocation ',
                actionNameEn: 'allocation ',
              },
              {
                actionId: 3142,
                pageId: 12,
                actionNameAr: 'Deallocation',
                actionNameEn: 'Deallocation',
              },
              {
                actionId: 4136,
                pageId: 12,
                actionNameAr: 'new Vehicle Manual Allocation',
                actionNameEn: 'new Vehicle Manual Allocation',
              },
            ],
          },
          {
            pageId: 83,
            pageName: 'Preregistered Vehicle',
            pageUrl: '/vehicle-registration/pre-register-vehicle-registration',
            moduleId: 3,
            pageIconId: 25,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 25,
              iconName: 'commute',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1114,
                pageId: 83,
                actionNameAr: 'Create Preregistered Vehicle',
                actionNameEn: 'Create Preregistered Vehicle',
              },
              {
                actionId: 3143,
                pageId: 83,
                actionNameAr: 'Preregistered  Search Allocation',
                actionNameEn: 'Preregistered Search Allocation',
              },
              {
                actionId: 3144,
                pageId: 83,
                actionNameAr: 'Preregistered  enforce allocation',
                actionNameEn: 'Preregistered  enforce allocation',
              },
              {
                actionId: 3145,
                pageId: 83,
                actionNameAr: 'Preregistered plate allocation',
                actionNameEn: 'Preregistered plate allocation',
              },
              {
                actionId: 3146,
                pageId: 83,
                actionNameAr: 'Preregistered plate deallocation',
                actionNameEn: 'Preregistered plate deallocation',
              },
              {
                actionId: 4138,
                pageId: 83,
                actionNameAr: 'Preregistered Vehicle  Manual Allocation',
                actionNameEn: 'Preregistered Vehicle  Manual Allocation',
              },
            ],
          },
          {
            pageId: 13,
            pageName: 'Renew Vehicle Registration',
            pageUrl: '/vehicle-registration/renew-vehicle-registration',
            moduleId: 3,
            pageIconId: 8,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 8,
              iconName: 'autorenew',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 13,
                pageId: 13,
                actionNameAr: 'Renew Vehicle License',
                actionNameEn: 'Renew Vehicle License',
              },
            ],
          },
          {
            pageId: 14,
            pageName: 'Old Vehicle Registration',
            pageUrl: '/vehicle-registration/old-vehicle-registration',
            moduleId: 3,
            pageIconId: 19,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 19,
              iconName: 'account_balance_wallet',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 14,
                pageId: 14,
                actionNameAr: 'Add Vehicle Mortgaging',
                actionNameEn: 'Add Vehicle Mortgaging',
              },
              {
                actionId: 3147,
                pageId: 14,
                actionNameAr: 'Old Vehicle Search Plate Allocation',
                actionNameEn: 'Old Vehicle Search Plate Allocation',
              },
              {
                actionId: 3148,
                pageId: 14,
                actionNameAr: 'Old Vehicle Enforce Plate Allocation',
                actionNameEn: 'Old Vehicle Enforce Plate Allocation',
              },
              {
                actionId: 3149,
                pageId: 14,
                actionNameAr: 'Old Vehicle Allocation',
                actionNameEn: 'Old Vehicle Allocation',
              },
              {
                actionId: 3150,
                pageId: 14,
                actionNameAr: 'Old Vehicle Deallocation',
                actionNameEn: 'Old Vehicle Deallocation',
              },
              {
                actionId: 4137,
                pageId: 14,
                actionNameAr: 'old Vehicle Manual Allocation',
                actionNameEn: 'old Vehicle Manual Allocation',
              },
            ],
          },
          {
            pageId: 15,
            pageName: 'Ownership Transfer',
            pageUrl: '/vehicle-registration/vehicle-ownership-transfer',
            moduleId: 3,
            pageIconId: 21,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 21,
              iconName: 'people',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 15,
                pageId: 15,
                actionNameAr: 'Add Ownership Transfer',
                actionNameEn: 'Add Ownership Transfer',
              },
            ],
          },
          {
            pageId: 47,
            pageName: 'Vehicle Ownership Transfer',
            pageUrl: '/vehicle-registration/vehicle-ownership-transfer',
            moduleId: 3,
            pageIconId: 21,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 21,
              iconName: 'people',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1061,
                pageId: 47,
                actionNameAr: 'Add Ownership Transfer',
                actionNameEn: 'Add Ownership Transfer',
              },
              {
                actionId: 3151,
                pageId: 47,
                actionNameAr: 'Ownership Transfer Search Plate Allocation',
                actionNameEn: 'Ownership Transfer Search Plate Allocation',
              },
              {
                actionId: 3152,
                pageId: 47,
                actionNameAr: 'Ownership Transfer Enforce Plate Allocation',
                actionNameEn: 'Ownership Transfer Enforce Plate Allocation',
              },
              {
                actionId: 3153,
                pageId: 47,
                actionNameAr: 'Ownership Transfer  Allocation',
                actionNameEn: 'Ownership Transfer  Allocation',
              },
              {
                actionId: 3154,
                pageId: 47,
                actionNameAr: 'Ownership Transfer  Deallocation',
                actionNameEn: 'Ownership Transfer  Deallocation',
              },
              {
                actionId: 4139,
                pageId: 47,
                actionNameAr: 'Ownership Transfer Manual Allocation',
                actionNameEn: 'Ownership Transfer Manual Allocation',
              },
            ],
          },
          {
            pageId: 16,
            pageName: 'Vehicle License Lost',
            pageUrl: '/vehicle-registration/lost-vehicle-license',
            moduleId: 3,
            pageIconId: 9,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 9,
              iconName: 'all_out',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 16,
                pageId: 16,
                actionNameAr: 'Add Vehicle Seizing',
                actionNameEn: 'Add Vehicle Seizing',
              },
            ],
          },
          {
            pageId: 31,
            pageName: 'Vehicle License Damaged',
            pageUrl: '/vehicle-registration/damage-vehicle-license',
            moduleId: 3,
            pageIconId: 12,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 12,
              iconName: 'supervisor_account',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 31,
                pageId: 31,
                actionNameAr: 'Add VR Type Transfer',
                actionNameEn: 'Add VR Type Transfer',
              },
            ],
          },
          {
            pageId: 64,
            pageName: 'New Vehicle for Inspection',
            pageUrl: '/vehicle-registration/vehicle-inspection',
            moduleId: 3,
            pageIconId: 15,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1084,
                pageId: 64,
                actionNameAr: 'عرض فحص المركبه',
                actionNameEn: 'view vehicle inspection',
              },
            ],
          },
          {
            pageId: 65,
            pageName: 'Inspection',
            pageUrl: '/vehicle-registration/vehicle-inspection-result',
            moduleId: 3,
            pageIconId: 17,
            pageViewOrder: 9,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 17,
              iconName: 'find_in_page',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1085,
                pageId: 65,
                actionNameAr: 'نتيجة الفحص',
                actionNameEn: 'inspection result view',
              },
              {
                actionId: 1090,
                pageId: 65,
                actionNameAr: 'Visual Inspection',
                actionNameEn: 'Visual Inspection',
              },
              {
                actionId: 1091,
                pageId: 65,
                actionNameAr: 'ExhaustEmissionsTest',
                actionNameEn: 'ExhaustEmissionsTest',
              },
              {
                actionId: 1092,
                pageId: 65,
                actionNameAr: 'BrakeTest',
                actionNameEn: 'BrakeTest',
              },
              {
                actionId: 1093,
                pageId: 65,
                actionNameAr: 'PitTest',
                actionNameEn: 'PitTest',
              },
            ],
          },
          {
            pageId: 66,
            pageName: 'Inspection Search & Override',
            pageUrl: '/vehicle-registration/Inspection-OverRide',
            moduleId: 3,
            pageIconId: 26,
            pageViewOrder: 9,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 26,
              iconName: 'subject',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1086,
                pageId: 66,
                actionNameAr: 'Search Vehicle',
                actionNameEn: 'Search Vehicle',
              },
              {
                actionId: 1087,
                pageId: 66,
                actionNameAr: 'Print Inspection',
                actionNameEn: 'Print Inspection',
              },
              {
                actionId: 1088,
                pageId: 66,
                actionNameAr: 'Override Result',
                actionNameEn: 'Override Result',
              },
              {
                actionId: 1089,
                pageId: 66,
                actionNameAr: 'View Inspection',
                actionNameEn: 'View Inspection',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 12,
          pageName: 'New Vehicle Registration',
          pageUrl: '/vehicle-registration/new-vehicle-registration',
          moduleId: 3,
          pageIconId: 7,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 7,
            iconName: 'control_point',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 12,
              pageId: 12,
              actionNameAr: 'Add New Vehicle License',
              actionNameEn: 'Add New Vehicle License',
            },
            {
              actionId: 3139,
              pageId: 12,
              actionNameAr: 'Search Allocation',
              actionNameEn: 'Search Allocation',
            },
            {
              actionId: 3140,
              pageId: 12,
              actionNameAr: 'Enforce Allocation',
              actionNameEn: 'Enforce Allocation',
            },
            {
              actionId: 3141,
              pageId: 12,
              actionNameAr: 'allocation ',
              actionNameEn: 'allocation ',
            },
            {
              actionId: 3142,
              pageId: 12,
              actionNameAr: 'Deallocation',
              actionNameEn: 'Deallocation',
            },
            {
              actionId: 4136,
              pageId: 12,
              actionNameAr: 'new Vehicle Manual Allocation',
              actionNameEn: 'new Vehicle Manual Allocation',
            },
          ],
        },
        {
          pageId: 83,
          pageName: 'Preregistered Vehicle',
          pageUrl: '/vehicle-registration/pre-register-vehicle-registration',
          moduleId: 3,
          pageIconId: 25,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 25,
            iconName: 'commute',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1114,
              pageId: 83,
              actionNameAr: 'Create Preregistered Vehicle',
              actionNameEn: 'Create Preregistered Vehicle',
            },
            {
              actionId: 3143,
              pageId: 83,
              actionNameAr: 'Preregistered  Search Allocation',
              actionNameEn: 'Preregistered Search Allocation',
            },
            {
              actionId: 3144,
              pageId: 83,
              actionNameAr: 'Preregistered  enforce allocation',
              actionNameEn: 'Preregistered  enforce allocation',
            },
            {
              actionId: 3145,
              pageId: 83,
              actionNameAr: 'Preregistered plate allocation',
              actionNameEn: 'Preregistered plate allocation',
            },
            {
              actionId: 3146,
              pageId: 83,
              actionNameAr: 'Preregistered plate deallocation',
              actionNameEn: 'Preregistered plate deallocation',
            },
            {
              actionId: 4138,
              pageId: 83,
              actionNameAr: 'Preregistered Vehicle  Manual Allocation',
              actionNameEn: 'Preregistered Vehicle  Manual Allocation',
            },
          ],
        },
        {
          pageId: 13,
          pageName: 'Renew Vehicle Registration',
          pageUrl: '/vehicle-registration/renew-vehicle-registration',
          moduleId: 3,
          pageIconId: 8,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 8,
            iconName: 'autorenew',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 13,
              pageId: 13,
              actionNameAr: 'Renew Vehicle License',
              actionNameEn: 'Renew Vehicle License',
            },
          ],
        },
        {
          pageId: 14,
          pageName: 'Old Vehicle Registration',
          pageUrl: '/vehicle-registration/old-vehicle-registration',
          moduleId: 3,
          pageIconId: 19,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 19,
            iconName: 'account_balance_wallet',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 14,
              pageId: 14,
              actionNameAr: 'Add Vehicle Mortgaging',
              actionNameEn: 'Add Vehicle Mortgaging',
            },
            {
              actionId: 3147,
              pageId: 14,
              actionNameAr: 'Old Vehicle Search Plate Allocation',
              actionNameEn: 'Old Vehicle Search Plate Allocation',
            },
            {
              actionId: 3148,
              pageId: 14,
              actionNameAr: 'Old Vehicle Enforce Plate Allocation',
              actionNameEn: 'Old Vehicle Enforce Plate Allocation',
            },
            {
              actionId: 3149,
              pageId: 14,
              actionNameAr: 'Old Vehicle Allocation',
              actionNameEn: 'Old Vehicle Allocation',
            },
            {
              actionId: 3150,
              pageId: 14,
              actionNameAr: 'Old Vehicle Deallocation',
              actionNameEn: 'Old Vehicle Deallocation',
            },
            {
              actionId: 4137,
              pageId: 14,
              actionNameAr: 'old Vehicle Manual Allocation',
              actionNameEn: 'old Vehicle Manual Allocation',
            },
          ],
        },
        {
          pageId: 15,
          pageName: 'Ownership Transfer',
          pageUrl: '/vehicle-registration/vehicle-ownership-transfer',
          moduleId: 3,
          pageIconId: 21,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 21,
            iconName: 'people',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 15,
              pageId: 15,
              actionNameAr: 'Add Ownership Transfer',
              actionNameEn: 'Add Ownership Transfer',
            },
          ],
        },
        {
          pageId: 47,
          pageName: 'Vehicle Ownership Transfer',
          pageUrl: '/vehicle-registration/vehicle-ownership-transfer',
          moduleId: 3,
          pageIconId: 21,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 21,
            iconName: 'people',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1061,
              pageId: 47,
              actionNameAr: 'Add Ownership Transfer',
              actionNameEn: 'Add Ownership Transfer',
            },
            {
              actionId: 3151,
              pageId: 47,
              actionNameAr: 'Ownership Transfer Search Plate Allocation',
              actionNameEn: 'Ownership Transfer Search Plate Allocation',
            },
            {
              actionId: 3152,
              pageId: 47,
              actionNameAr: 'Ownership Transfer Enforce Plate Allocation',
              actionNameEn: 'Ownership Transfer Enforce Plate Allocation',
            },
            {
              actionId: 3153,
              pageId: 47,
              actionNameAr: 'Ownership Transfer  Allocation',
              actionNameEn: 'Ownership Transfer  Allocation',
            },
            {
              actionId: 3154,
              pageId: 47,
              actionNameAr: 'Ownership Transfer  Deallocation',
              actionNameEn: 'Ownership Transfer  Deallocation',
            },
            {
              actionId: 4139,
              pageId: 47,
              actionNameAr: 'Ownership Transfer Manual Allocation',
              actionNameEn: 'Ownership Transfer Manual Allocation',
            },
          ],
        },
        {
          pageId: 16,
          pageName: 'Vehicle License Lost',
          pageUrl: '/vehicle-registration/lost-vehicle-license',
          moduleId: 3,
          pageIconId: 9,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 9,
            iconName: 'all_out',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 16,
              pageId: 16,
              actionNameAr: 'Add Vehicle Seizing',
              actionNameEn: 'Add Vehicle Seizing',
            },
          ],
        },
        {
          pageId: 31,
          pageName: 'Vehicle License Damaged',
          pageUrl: '/vehicle-registration/damage-vehicle-license',
          moduleId: 3,
          pageIconId: 12,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 12,
            iconName: 'supervisor_account',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 31,
              pageId: 31,
              actionNameAr: 'Add VR Type Transfer',
              actionNameEn: 'Add VR Type Transfer',
            },
          ],
        },
        {
          pageId: 64,
          pageName: 'New Vehicle for Inspection',
          pageUrl: '/vehicle-registration/vehicle-inspection',
          moduleId: 3,
          pageIconId: 15,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1084,
              pageId: 64,
              actionNameAr: 'عرض فحص المركبه',
              actionNameEn: 'view vehicle inspection',
            },
          ],
        },
        {
          pageId: 65,
          pageName: 'Inspection',
          pageUrl: '/vehicle-registration/vehicle-inspection-result',
          moduleId: 3,
          pageIconId: 17,
          pageViewOrder: 9,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 17,
            iconName: 'find_in_page',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1085,
              pageId: 65,
              actionNameAr: 'نتيجة الفحص',
              actionNameEn: 'inspection result view',
            },
            {
              actionId: 1090,
              pageId: 65,
              actionNameAr: 'Visual Inspection',
              actionNameEn: 'Visual Inspection',
            },
            {
              actionId: 1091,
              pageId: 65,
              actionNameAr: 'ExhaustEmissionsTest',
              actionNameEn: 'ExhaustEmissionsTest',
            },
            {
              actionId: 1092,
              pageId: 65,
              actionNameAr: 'BrakeTest',
              actionNameEn: 'BrakeTest',
            },
            {
              actionId: 1093,
              pageId: 65,
              actionNameAr: 'PitTest',
              actionNameEn: 'PitTest',
            },
          ],
        },
        {
          pageId: 66,
          pageName: 'Inspection Search & Override',
          pageUrl: '/vehicle-registration/Inspection-OverRide',
          moduleId: 3,
          pageIconId: 26,
          pageViewOrder: 9,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 26,
            iconName: 'subject',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1086,
              pageId: 66,
              actionNameAr: 'Search Vehicle',
              actionNameEn: 'Search Vehicle',
            },
            {
              actionId: 1087,
              pageId: 66,
              actionNameAr: 'Print Inspection',
              actionNameEn: 'Print Inspection',
            },
            {
              actionId: 1088,
              pageId: 66,
              actionNameAr: 'Override Result',
              actionNameEn: 'Override Result',
            },
            {
              actionId: 1089,
              pageId: 66,
              actionNameAr: 'View Inspection',
              actionNameEn: 'View Inspection',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 21,
        moduleName: 'Plates',
        moduleIconId: 40,
        moduleOrder: 5,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 40,
          iconName: 'money',
        },
        tblPages: [
          {
            pageId: 1089,
            pageName: 'New Dealership Certificate',
            pageUrl: '/Plates/new-dealership-certificate',
            moduleId: 21,
            pageIconId: 28,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 28,
              iconName: 'assignment',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2123,
                pageId: 1089,
                actionNameAr: 'Dealership Certificate',
                actionNameEn: 'Dealership Certificate',
              },
            ],
          },
          {
            pageId: 71,
            pageName: 'Fancy Number Plate',
            pageUrl: '/Plates/Fancy-Plate-No',
            moduleId: 21,
            pageIconId: 36,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 36,
              iconName: 'widgets',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1102,
                pageId: 71,
                actionNameAr: 'Add Fancy Plate',
                actionNameEn: 'Add Fancy Plate',
              },
            ],
          },
          {
            pageId: 72,
            pageName: 'Out of Series Number Plate',
            pageUrl: '/Plates/Out-Series-Plate',
            moduleId: 21,
            pageIconId: 20,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 20,
              iconName: 'local_shipping',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1103,
                pageId: 72,
                actionNameAr: 'Add Out Series Plate',
                actionNameEn: 'Add Out Series Plate',
              },
            ],
          },
          {
            pageId: 74,
            pageName: 'Drop & Retake Number Plate',
            pageUrl: '/Plates/Retake-Plate',
            moduleId: 21,
            pageIconId: 8,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 8,
              iconName: 'autorenew',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1105,
                pageId: 74,
                actionNameAr: 'Retake Plate',
                actionNameEn: 'Retake Plate',
              },
            ],
          },
          {
            pageId: 75,
            pageName: 'Lost Number Plate',
            pageUrl: '/Plates/Lost-Plate',
            moduleId: 21,
            pageIconId: 17,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 17,
              iconName: 'find_in_page',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1106,
                pageId: 75,
                actionNameAr: 'Replace Lost Plate',
                actionNameEn: 'Replace Lost Plate',
              },
            ],
          },
          {
            pageId: 76,
            pageName: 'Damaged Number Plate',
            pageUrl: '/Plates/Damaged-Plate',
            moduleId: 21,
            pageIconId: 9,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 9,
              iconName: 'all_out',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1107,
                pageId: 76,
                actionNameAr: 'Replace Damaged Plate',
                actionNameEn: 'Replace Damaged Plate',
              },
            ],
          },
          {
            pageId: 1096,
            pageName: 'Plate Allocation',
            pageUrl: '/Plates/plate-allocation',
            moduleId: 21,
            pageIconId: 28,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 28,
              iconName: 'assignment',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2133,
                pageId: 1096,
                actionNameAr: 'Plate Allocation',
                actionNameEn: 'Plate Allocation',
              },
              {
                actionId: 3135,
                pageId: 1096,
                actionNameAr: 'Search Plate Allocation',
                actionNameEn: 'Search Plate Allocation',
              },
              {
                actionId: 3136,
                pageId: 1096,
                actionNameAr: 'Enforce Plate Allocation',
                actionNameEn: 'Enforce Plate Allocation',
              },
              {
                actionId: 3137,
                pageId: 1096,
                actionNameAr: 'Allocation Action',
                actionNameEn: 'Allocation Action',
              },
              {
                actionId: 3138,
                pageId: 1096,
                actionNameAr: 'Deallocation Action',
                actionNameEn: 'Deallocation Action',
              },
              {
                actionId: 4135,
                pageId: 1096,
                actionNameAr: 'Manual Plate Allocation\t',
                actionNameEn: 'Manual Plate Allocation\t',
              },
            ],
          },
          {
            pageId: 3099,
            pageName: 'Plate Reallocation',
            pageUrl: '/Plates/plate-Reallocation',
            moduleId: 21,
            pageIconId: 8,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 8,
              iconName: 'autorenew',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 4144,
                pageId: 3099,
                actionNameAr: 'Plate Reallocation',
                actionNameEn: 'Plate Reallocation',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 1089,
          pageName: 'New Dealership Certificate',
          pageUrl: '/Plates/new-dealership-certificate',
          moduleId: 21,
          pageIconId: 28,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 28,
            iconName: 'assignment',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2123,
              pageId: 1089,
              actionNameAr: 'Dealership Certificate',
              actionNameEn: 'Dealership Certificate',
            },
          ],
        },
        {
          pageId: 71,
          pageName: 'Fancy Number Plate',
          pageUrl: '/Plates/Fancy-Plate-No',
          moduleId: 21,
          pageIconId: 36,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 36,
            iconName: 'widgets',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1102,
              pageId: 71,
              actionNameAr: 'Add Fancy Plate',
              actionNameEn: 'Add Fancy Plate',
            },
          ],
        },
        {
          pageId: 72,
          pageName: 'Out of Series Number Plate',
          pageUrl: '/Plates/Out-Series-Plate',
          moduleId: 21,
          pageIconId: 20,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 20,
            iconName: 'local_shipping',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1103,
              pageId: 72,
              actionNameAr: 'Add Out Series Plate',
              actionNameEn: 'Add Out Series Plate',
            },
          ],
        },
        {
          pageId: 74,
          pageName: 'Drop & Retake Number Plate',
          pageUrl: '/Plates/Retake-Plate',
          moduleId: 21,
          pageIconId: 8,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 8,
            iconName: 'autorenew',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1105,
              pageId: 74,
              actionNameAr: 'Retake Plate',
              actionNameEn: 'Retake Plate',
            },
          ],
        },
        {
          pageId: 75,
          pageName: 'Lost Number Plate',
          pageUrl: '/Plates/Lost-Plate',
          moduleId: 21,
          pageIconId: 17,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 17,
            iconName: 'find_in_page',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1106,
              pageId: 75,
              actionNameAr: 'Replace Lost Plate',
              actionNameEn: 'Replace Lost Plate',
            },
          ],
        },
        {
          pageId: 76,
          pageName: 'Damaged Number Plate',
          pageUrl: '/Plates/Damaged-Plate',
          moduleId: 21,
          pageIconId: 9,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 9,
            iconName: 'all_out',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1107,
              pageId: 76,
              actionNameAr: 'Replace Damaged Plate',
              actionNameEn: 'Replace Damaged Plate',
            },
          ],
        },
        {
          pageId: 1096,
          pageName: 'Plate Allocation',
          pageUrl: '/Plates/plate-allocation',
          moduleId: 21,
          pageIconId: 28,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 28,
            iconName: 'assignment',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2133,
              pageId: 1096,
              actionNameAr: 'Plate Allocation',
              actionNameEn: 'Plate Allocation',
            },
            {
              actionId: 3135,
              pageId: 1096,
              actionNameAr: 'Search Plate Allocation',
              actionNameEn: 'Search Plate Allocation',
            },
            {
              actionId: 3136,
              pageId: 1096,
              actionNameAr: 'Enforce Plate Allocation',
              actionNameEn: 'Enforce Plate Allocation',
            },
            {
              actionId: 3137,
              pageId: 1096,
              actionNameAr: 'Allocation Action',
              actionNameEn: 'Allocation Action',
            },
            {
              actionId: 3138,
              pageId: 1096,
              actionNameAr: 'Deallocation Action',
              actionNameEn: 'Deallocation Action',
            },
            {
              actionId: 4135,
              pageId: 1096,
              actionNameAr: 'Manual Plate Allocation\t',
              actionNameEn: 'Manual Plate Allocation\t',
            },
          ],
        },
        {
          pageId: 3099,
          pageName: 'Plate Reallocation',
          pageUrl: '/Plates/plate-Reallocation',
          moduleId: 21,
          pageIconId: 8,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 8,
            iconName: 'autorenew',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 4144,
              pageId: 3099,
              actionNameAr: 'Plate Reallocation',
              actionNameEn: 'Plate Reallocation',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 10,
        moduleName: 'Verification',
        moduleIconId: 28,
        moduleOrder: 6,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 28,
          iconName: 'assignment',
        },
        tblPages: [
          {
            pageId: 80,
            pageName: 'Application Verification',
            pageUrl: '/verification/application-verification',
            moduleId: 10,
            pageIconId: 13,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1111,
                pageId: 80,
                actionNameAr: 'Verify Application',
                actionNameEn: 'Verify Application',
              },
            ],
          },
          {
            pageId: 9,
            pageName: 'DL Document Verification',
            pageUrl: '/driving-license/document-verification',
            moduleId: 10,
            pageIconId: 13,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 9,
                pageId: 9,
                actionNameAr: 'Verifiy Drive  License  Document',
                actionNameEn: 'Verifiy Drive  License Document',
              },
            ],
          },
          {
            pageId: 10,
            pageName: 'DL Security Verification',
            pageUrl: '/driving-license/security-verification',
            moduleId: 10,
            pageIconId: 14,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 14,
              iconName: 'verified_user',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 10,
                pageId: 10,
                actionNameAr: 'Verifiy Drive  License Security',
                actionNameEn: 'Verifiy Drive  License Security',
              },
            ],
          },
          {
            pageId: 43,
            pageName: 'VR Verification',
            pageUrl: '/vehicle-registration/document-verification',
            moduleId: 10,
            pageIconId: 13,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 43,
                pageId: 43,
                actionNameAr: 'VR Verification',
                actionNameEn: 'VR Verification',
              },
            ],
          },
          {
            pageId: 45,
            pageName: 'Rejected Application',
            pageUrl: '/verification/rejected-applications',
            moduleId: 10,
            pageIconId: 11,
            pageViewOrder: 7,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 11,
              iconName: 'block',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1059,
                pageId: 45,
                actionNameAr: 'View Rejected Application',
                actionNameEn: 'View Rejected Application',
              },
            ],
          },
          {
            pageId: 3096,
            pageName: 'Stock Verification',
            pageUrl: '/verification/stock-verification',
            moduleId: 10,
            pageIconId: 14,
            pageViewOrder: 8,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 14,
              iconName: 'verified_user',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 3133,
                pageId: 3096,
                actionNameAr: 'Stock Verification',
                actionNameEn: 'Stock Verification',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 80,
          pageName: 'Application Verification',
          pageUrl: '/verification/application-verification',
          moduleId: 10,
          pageIconId: 13,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1111,
              pageId: 80,
              actionNameAr: 'Verify Application',
              actionNameEn: 'Verify Application',
            },
          ],
        },
        {
          pageId: 9,
          pageName: 'DL Document Verification',
          pageUrl: '/driving-license/document-verification',
          moduleId: 10,
          pageIconId: 13,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 9,
              pageId: 9,
              actionNameAr: 'Verifiy Drive  License  Document',
              actionNameEn: 'Verifiy Drive  License Document',
            },
          ],
        },
        {
          pageId: 10,
          pageName: 'DL Security Verification',
          pageUrl: '/driving-license/security-verification',
          moduleId: 10,
          pageIconId: 14,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 14,
            iconName: 'verified_user',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 10,
              pageId: 10,
              actionNameAr: 'Verifiy Drive  License Security',
              actionNameEn: 'Verifiy Drive  License Security',
            },
          ],
        },
        {
          pageId: 43,
          pageName: 'VR Verification',
          pageUrl: '/vehicle-registration/document-verification',
          moduleId: 10,
          pageIconId: 13,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 43,
              pageId: 43,
              actionNameAr: 'VR Verification',
              actionNameEn: 'VR Verification',
            },
          ],
        },
        {
          pageId: 45,
          pageName: 'Rejected Application',
          pageUrl: '/verification/rejected-applications',
          moduleId: 10,
          pageIconId: 11,
          pageViewOrder: 7,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 11,
            iconName: 'block',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1059,
              pageId: 45,
              actionNameAr: 'View Rejected Application',
              actionNameEn: 'View Rejected Application',
            },
          ],
        },
        {
          pageId: 3096,
          pageName: 'Stock Verification',
          pageUrl: '/verification/stock-verification',
          moduleId: 10,
          pageIconId: 14,
          pageViewOrder: 8,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 14,
            iconName: 'verified_user',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 3133,
              pageId: 3096,
              actionNameAr: 'Stock Verification',
              actionNameEn: 'Stock Verification',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 22,
        moduleName: 'Other Services',
        moduleIconId: 1,
        moduleOrder: 6,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 1,
          iconName: 'dashboard',
        },
        tblPages: [
          {
            pageId: 77,
            pageName: 'Learner Permit',
            pageUrl: 'Other/Learner-Permit',
            moduleId: 22,
            pageIconId: 6,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 6,
              iconName: 'contact_mail',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1108,
                pageId: 77,
                actionNameAr: 'Create Learner Permit',
                actionNameEn: 'Create Learner Permit',
              },
            ],
          },
          {
            pageId: 78,
            pageName: 'Road Worthiness',
            pageUrl: 'Other/Road-Worthiness',
            moduleId: 22,
            pageIconId: 25,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 25,
              iconName: 'commute',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1109,
                pageId: 78,
                actionNameAr: 'Create Road Worthiness',
                actionNameEn: 'Create Road Worthiness',
              },
            ],
          },
          {
            pageId: 79,
            pageName: 'Certificate of insurance',
            pageUrl: 'Other/Certificate-insurance',
            moduleId: 22,
            pageIconId: 34,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 34,
              iconName: 'admin_panel_settings',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1110,
                pageId: 79,
                actionNameAr: 'Create Insurance Certificate',
                actionNameEn: 'Create Insurance Certificate',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 77,
          pageName: 'Learner Permit',
          pageUrl: 'Other/Learner-Permit',
          moduleId: 22,
          pageIconId: 6,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 6,
            iconName: 'contact_mail',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1108,
              pageId: 77,
              actionNameAr: 'Create Learner Permit',
              actionNameEn: 'Create Learner Permit',
            },
          ],
        },
        {
          pageId: 78,
          pageName: 'Road Worthiness',
          pageUrl: 'Other/Road-Worthiness',
          moduleId: 22,
          pageIconId: 25,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 25,
            iconName: 'commute',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1109,
              pageId: 78,
              actionNameAr: 'Create Road Worthiness',
              actionNameEn: 'Create Road Worthiness',
            },
          ],
        },
        {
          pageId: 79,
          pageName: 'Certificate of insurance',
          pageUrl: 'Other/Certificate-insurance',
          moduleId: 22,
          pageIconId: 34,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 34,
            iconName: 'admin_panel_settings',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1110,
              pageId: 79,
              actionNameAr: 'Create Insurance Certificate',
              actionNameEn: 'Create Insurance Certificate',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 13,
        moduleName: 'Search',
        moduleIconId: 15,
        moduleOrder: 7,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 15,
          iconName: 'search',
        },
        tblPages: [
          {
            pageId: 18,
            pageName: 'Search VR Application',
            pageUrl: '/vehicle-registration/search-vehicle-registration-application',
            moduleId: 13,
            pageIconId: 15,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 18,
                pageId: 18,
                actionNameAr: 'Search VR Application',
                actionNameEn: 'Search VR Application',
              },
              {
                actionId: 57,
                pageId: 18,
                actionNameAr: 'View VR Application',
                actionNameEn: 'View VR Application',
              },
              {
                actionId: 1074,
                pageId: 18,
                actionNameAr: 'Print VR Application',
                actionNameEn: 'Print VR Application',
              },
              {
                actionId: 2122,
                pageId: 18,
                actionNameAr: 'Edit VR Application',
                actionNameEn: 'Edit VR Application',
              },
            ],
          },
          {
            pageId: 34,
            pageName: 'Search CTN',
            pageUrl: '/ctn/search-ctn-application',
            moduleId: 13,
            pageIconId: 15,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 34,
                pageId: 34,
                actionNameAr: 'Search TIN & DL App',
                actionNameEn: 'Search TIN & DL App',
              },
              {
                actionId: 52,
                pageId: 34,
                actionNameAr: 'View DL Application',
                actionNameEn: 'View DL Application',
              },
              {
                actionId: 55,
                pageId: 34,
                actionNameAr: 'Edit DL Application',
                actionNameEn: 'Edit DL Application',
              },
              {
                actionId: 1073,
                pageId: 34,
                actionNameAr: 'Print DL/TIN Application',
                actionNameEn: 'Print DL/TIN Application',
              },
            ],
          },
          {
            pageId: 1095,
            pageName: 'Search Plate Application',
            pageUrl: '/Plates/search-plates',
            moduleId: 13,
            pageIconId: 15,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2131,
                pageId: 1095,
                actionNameAr: 'Search Plate App',
                actionNameEn: 'Search Plate App',
              },
              {
                actionId: 2132,
                pageId: 1095,
                actionNameAr: 'View App',
                actionNameEn: 'View App',
              },
            ],
          },
          {
            pageId: 35,
            pageName: 'Search Driving License',
            pageUrl: '/driving-license/search-driving-license',
            moduleId: 13,
            pageIconId: 15,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 35,
                pageId: 35,
                actionNameAr: 'Search Driving License',
                actionNameEn: 'Search Driving License',
              },
              {
                actionId: 1057,
                pageId: 35,
                actionNameAr: 'View Driving License ',
                actionNameEn: 'View Driving License ',
              },
            ],
          },
          {
            pageId: 36,
            pageName: 'Search Vehicle License',
            pageUrl: '/vehicle-registration/search-vehicle-License',
            moduleId: 13,
            pageIconId: 15,
            pageViewOrder: 7,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 36,
                pageId: 36,
                actionNameAr: 'Search Vehicle License',
                actionNameEn: 'Search Vehicle License',
              },
              {
                actionId: 1054,
                pageId: 36,
                actionNameAr: 'View VR License',
                actionNameEn: 'View VR  License',
              },
              {
                actionId: 5135,
                pageId: 36,
                actionNameAr: 'Edit VR License',
                actionNameEn: 'Edit VR License',
              },
              {
                actionId: 5136,
                pageId: 36,
                actionNameAr: 'Print VR License',
                actionNameEn: 'Print VR License',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 18,
          pageName: 'Search VR Application',
          pageUrl: '/vehicle-registration/search-vehicle-registration-application',
          moduleId: 13,
          pageIconId: 15,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 18,
              pageId: 18,
              actionNameAr: 'Search VR Application',
              actionNameEn: 'Search VR Application',
            },
            {
              actionId: 57,
              pageId: 18,
              actionNameAr: 'View VR Application',
              actionNameEn: 'View VR Application',
            },
            {
              actionId: 1074,
              pageId: 18,
              actionNameAr: 'Print VR Application',
              actionNameEn: 'Print VR Application',
            },
            {
              actionId: 2122,
              pageId: 18,
              actionNameAr: 'Edit VR Application',
              actionNameEn: 'Edit VR Application',
            },
          ],
        },
        {
          pageId: 34,
          pageName: 'Search CTN',
          pageUrl: '/ctn/search-ctn-application',
          moduleId: 13,
          pageIconId: 15,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 34,
              pageId: 34,
              actionNameAr: 'Search TIN & DL App',
              actionNameEn: 'Search TIN & DL App',
            },
            {
              actionId: 52,
              pageId: 34,
              actionNameAr: 'View DL Application',
              actionNameEn: 'View DL Application',
            },
            {
              actionId: 55,
              pageId: 34,
              actionNameAr: 'Edit DL Application',
              actionNameEn: 'Edit DL Application',
            },
            {
              actionId: 1073,
              pageId: 34,
              actionNameAr: 'Print DL/TIN Application',
              actionNameEn: 'Print DL/TIN Application',
            },
          ],
        },
        {
          pageId: 1095,
          pageName: 'Search Plate Application',
          pageUrl: '/Plates/search-plates',
          moduleId: 13,
          pageIconId: 15,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2131,
              pageId: 1095,
              actionNameAr: 'Search Plate App',
              actionNameEn: 'Search Plate App',
            },
            {
              actionId: 2132,
              pageId: 1095,
              actionNameAr: 'View App',
              actionNameEn: 'View App',
            },
          ],
        },
        {
          pageId: 35,
          pageName: 'Search Driving License',
          pageUrl: '/driving-license/search-driving-license',
          moduleId: 13,
          pageIconId: 15,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 35,
              pageId: 35,
              actionNameAr: 'Search Driving License',
              actionNameEn: 'Search Driving License',
            },
            {
              actionId: 1057,
              pageId: 35,
              actionNameAr: 'View Driving License ',
              actionNameEn: 'View Driving License ',
            },
          ],
        },
        {
          pageId: 36,
          pageName: 'Search Vehicle License',
          pageUrl: '/vehicle-registration/search-vehicle-License',
          moduleId: 13,
          pageIconId: 15,
          pageViewOrder: 7,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 36,
              pageId: 36,
              actionNameAr: 'Search Vehicle License',
              actionNameEn: 'Search Vehicle License',
            },
            {
              actionId: 1054,
              pageId: 36,
              actionNameAr: 'View VR License',
              actionNameEn: 'View VR  License',
            },
            {
              actionId: 5135,
              pageId: 36,
              actionNameAr: 'Edit VR License',
              actionNameEn: 'Edit VR License',
            },
            {
              actionId: 5136,
              pageId: 36,
              actionNameAr: 'Print VR License',
              actionNameEn: 'Print VR License',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 23,
        moduleName: 'Reports',
        moduleIconId: 19,
        moduleOrder: 9,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 19,
          iconName: 'account_balance_wallet',
        },
        tblPages: [
          {
            pageId: 88,
            pageName: 'Monthly Invoice Report',
            pageUrl: '/invoice-reports/invoice-report',
            moduleId: 23,
            pageIconId: 40,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 40,
              iconName: 'money',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1119,
                pageId: 88,
                actionNameAr: 'View  Monthly Invoice Report',
                actionNameEn: 'View Monthly Invoice Report',
              },
            ],
          },
          {
            pageId: 89,
            pageName: 'User Invoice Report',
            pageUrl: '/invoice-reports/user-invoices-report',
            moduleId: 23,
            pageIconId: 32,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 32,
              iconName: 'person_edit',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1120,
                pageId: 89,
                actionNameAr: 'View  User Invoice Report',
                actionNameEn: 'View User Invoice Report',
              },
            ],
          },
          {
            pageId: 1094,
            pageName: 'Invoice Report',
            pageUrl: '/invoice-reports/invoice-report',
            moduleId: 23,
            pageIconId: 27,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 27,
              iconName: 'article',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2130,
                pageId: 1094,
                actionNameAr: 'Invoice Report',
                actionNameEn: 'Invoice Report',
              },
            ],
          },
          {
            pageId: 1088,
            pageName: 'Monthly Revnu Report',
            pageUrl: '/invoice-reports/monthly-revnu-report',
            moduleId: 23,
            pageIconId: 27,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 27,
              iconName: 'article',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 3120,
                pageId: 1088,
                actionNameAr: 'Monthly Revnu Report',
                actionNameEn: 'Monthly Revnu Report',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 88,
          pageName: 'Monthly Invoice Report',
          pageUrl: '/invoice-reports/invoice-report',
          moduleId: 23,
          pageIconId: 40,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 40,
            iconName: 'money',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1119,
              pageId: 88,
              actionNameAr: 'View  Monthly Invoice Report',
              actionNameEn: 'View Monthly Invoice Report',
            },
          ],
        },
        {
          pageId: 89,
          pageName: 'User Invoice Report',
          pageUrl: '/invoice-reports/user-invoices-report',
          moduleId: 23,
          pageIconId: 32,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 32,
            iconName: 'person_edit',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1120,
              pageId: 89,
              actionNameAr: 'View  User Invoice Report',
              actionNameEn: 'View User Invoice Report',
            },
          ],
        },
        {
          pageId: 1094,
          pageName: 'Invoice Report',
          pageUrl: '/invoice-reports/invoice-report',
          moduleId: 23,
          pageIconId: 27,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 27,
            iconName: 'article',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2130,
              pageId: 1094,
              actionNameAr: 'Invoice Report',
              actionNameEn: 'Invoice Report',
            },
          ],
        },
        {
          pageId: 1088,
          pageName: 'Monthly Revnu Report',
          pageUrl: '/invoice-reports/monthly-revnu-report',
          moduleId: 23,
          pageIconId: 27,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 27,
            iconName: 'article',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 3120,
              pageId: 1088,
              actionNameAr: 'Monthly Revnu Report',
              actionNameEn: 'Monthly Revnu Report',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 11,
        moduleName: 'Personalization',
        moduleIconId: 4,
        moduleOrder: 12,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 4,
          iconName: 'perm_identity',
        },
        tblPages: [
          {
            pageId: 37,
            pageName: 'DL Card Printing',
            pageUrl: '/card-management/print-driving-License',
            moduleId: 11,
            pageIconId: 13,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 13,
              iconName: 'grading',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 37,
                pageId: 37,
                actionNameAr: 'DL Card Printing',
                actionNameEn: 'DL Card Printing',
              },
            ],
          },
          {
            pageId: 39,
            pageName: 'DL Card Delivery',
            pageUrl: '/card-management/delivery-driving-License',
            moduleId: 11,
            pageIconId: 15,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 39,
                pageId: 39,
                actionNameAr: 'DL Card Delivery',
                actionNameEn: 'DL Card Delivery',
              },
            ],
          },
          {
            pageId: 38,
            pageName: 'VR Printing',
            pageUrl: '/card-management/print-vehicle-License',
            moduleId: 11,
            pageIconId: 14,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 14,
              iconName: 'verified_user',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 38,
                pageId: 38,
                actionNameAr: 'VR Card Printing',
                actionNameEn: 'VR Card Printing',
              },
            ],
          },
          {
            pageId: 40,
            pageName: 'VR Delivery',
            pageUrl: '/card-management/delivery-vehicle-License',
            moduleId: 11,
            pageIconId: 16,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 16,
              iconName: 'time_to_leave',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 40,
                pageId: 40,
                actionNameAr: 'VR Card Delivery',
                actionNameEn: 'VR Card Delivery',
              },
              {
                actionId: 2120,
                pageId: 40,
                actionNameAr: 'set delivered',
                actionNameEn: 'set delivered',
              },
            ],
          },
          {
            pageId: 85,
            pageName: 'App Delivery',
            pageUrl: '/card-management/App-Delivery',
            moduleId: 11,
            pageIconId: 30,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 30,
              iconName: 'content_paste',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1118,
                pageId: 85,
                actionNameAr: 'Deliver App Printables',
                actionNameEn: 'Deliver App Printables',
              },
            ],
          },
          {
            pageId: 61,
            pageName: 'QR Reader',
            pageUrl: '/card-management/qr-reader',
            moduleId: 11,
            pageIconId: 23,
            pageViewOrder: 5,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 23,
              iconName: 'plagiarism',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1081,
                pageId: 61,
                actionNameAr: 'قرائة الرمز',
                actionNameEn: 'Qr read',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 37,
          pageName: 'DL Card Printing',
          pageUrl: '/card-management/print-driving-License',
          moduleId: 11,
          pageIconId: 13,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 13,
            iconName: 'grading',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 37,
              pageId: 37,
              actionNameAr: 'DL Card Printing',
              actionNameEn: 'DL Card Printing',
            },
          ],
        },
        {
          pageId: 39,
          pageName: 'DL Card Delivery',
          pageUrl: '/card-management/delivery-driving-License',
          moduleId: 11,
          pageIconId: 15,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 39,
              pageId: 39,
              actionNameAr: 'DL Card Delivery',
              actionNameEn: 'DL Card Delivery',
            },
          ],
        },
        {
          pageId: 38,
          pageName: 'VR Printing',
          pageUrl: '/card-management/print-vehicle-License',
          moduleId: 11,
          pageIconId: 14,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 14,
            iconName: 'verified_user',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 38,
              pageId: 38,
              actionNameAr: 'VR Card Printing',
              actionNameEn: 'VR Card Printing',
            },
          ],
        },
        {
          pageId: 40,
          pageName: 'VR Delivery',
          pageUrl: '/card-management/delivery-vehicle-License',
          moduleId: 11,
          pageIconId: 16,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 16,
            iconName: 'time_to_leave',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 40,
              pageId: 40,
              actionNameAr: 'VR Card Delivery',
              actionNameEn: 'VR Card Delivery',
            },
            {
              actionId: 2120,
              pageId: 40,
              actionNameAr: 'set delivered',
              actionNameEn: 'set delivered',
            },
          ],
        },
        {
          pageId: 85,
          pageName: 'App Delivery',
          pageUrl: '/card-management/App-Delivery',
          moduleId: 11,
          pageIconId: 30,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 30,
            iconName: 'content_paste',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1118,
              pageId: 85,
              actionNameAr: 'Deliver App Printables',
              actionNameEn: 'Deliver App Printables',
            },
          ],
        },
        {
          pageId: 61,
          pageName: 'QR Reader',
          pageUrl: '/card-management/qr-reader',
          moduleId: 11,
          pageIconId: 23,
          pageViewOrder: 5,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 23,
            iconName: 'plagiarism',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1081,
              pageId: 61,
              actionNameAr: 'قرائة الرمز',
              actionNameEn: 'Qr read',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 14,
        moduleName: 'Printer Management',
        moduleIconId: 4,
        moduleOrder: 13,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 4,
          iconName: 'perm_identity',
        },
        tblPages: [
          {
            pageId: 50,
            pageName: 'Add Printer',
            pageUrl: '/printers/add-printer',
            moduleId: 14,
            pageIconId: 16,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 16,
              iconName: 'time_to_leave',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1064,
                pageId: 50,
                actionNameAr: 'add printer',
                actionNameEn: 'add printer',
              },
            ],
          },
          {
            pageId: 51,
            pageName: 'Edit Printer',
            pageUrl: '/printers/edit-printer',
            moduleId: 14,
            pageIconId: 16,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 16,
              iconName: 'time_to_leave',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1065,
                pageId: 51,
                actionNameAr: 'edit printer',
                actionNameEn: 'edit printer',
              },
            ],
          },
          {
            pageId: 49,
            pageName: 'View Printer Status',
            pageUrl: '/printers/view-printer-status',
            moduleId: 14,
            pageIconId: 16,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 16,
              iconName: 'time_to_leave',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1063,
                pageId: 49,
                actionNameAr: 'View Print Jobs',
                actionNameEn: 'View Print Jobs',
              },
              {
                actionId: 1116,
                pageId: 49,
                actionNameAr: 'Print All Jobs',
                actionNameEn: 'Print All Jobs',
              },
            ],
          },
          {
            pageId: 52,
            pageName: 'Search Print Jobs',
            pageUrl: '/printers/view-printer-history',
            moduleId: 14,
            pageIconId: 16,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 16,
              iconName: 'time_to_leave',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1067,
                pageId: 52,
                actionNameAr: 'view printer history',
                actionNameEn: 'view printer history',
              },
              {
                actionId: 1075,
                pageId: 52,
                actionNameAr: 'Dequeue Job',
                actionNameEn: 'Dequeue Job',
              },
              {
                actionId: 1077,
                pageId: 52,
                actionNameAr: 'Resume Job',
                actionNameEn: 'Resume Job',
              },
              {
                actionId: 1078,
                pageId: 52,
                actionNameAr: 'Delete Job',
                actionNameEn: 'Delete Job',
              },
              {
                actionId: 1079,
                pageId: 52,
                actionNameAr: 'RePrint Job',
                actionNameEn: 'RePrint job',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 50,
          pageName: 'Add Printer',
          pageUrl: '/printers/add-printer',
          moduleId: 14,
          pageIconId: 16,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 16,
            iconName: 'time_to_leave',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1064,
              pageId: 50,
              actionNameAr: 'add printer',
              actionNameEn: 'add printer',
            },
          ],
        },
        {
          pageId: 51,
          pageName: 'Edit Printer',
          pageUrl: '/printers/edit-printer',
          moduleId: 14,
          pageIconId: 16,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 16,
            iconName: 'time_to_leave',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1065,
              pageId: 51,
              actionNameAr: 'edit printer',
              actionNameEn: 'edit printer',
            },
          ],
        },
        {
          pageId: 49,
          pageName: 'View Printer Status',
          pageUrl: '/printers/view-printer-status',
          moduleId: 14,
          pageIconId: 16,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 16,
            iconName: 'time_to_leave',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1063,
              pageId: 49,
              actionNameAr: 'View Print Jobs',
              actionNameEn: 'View Print Jobs',
            },
            {
              actionId: 1116,
              pageId: 49,
              actionNameAr: 'Print All Jobs',
              actionNameEn: 'Print All Jobs',
            },
          ],
        },
        {
          pageId: 52,
          pageName: 'Search Print Jobs',
          pageUrl: '/printers/view-printer-history',
          moduleId: 14,
          pageIconId: 16,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 16,
            iconName: 'time_to_leave',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1067,
              pageId: 52,
              actionNameAr: 'view printer history',
              actionNameEn: 'view printer history',
            },
            {
              actionId: 1075,
              pageId: 52,
              actionNameAr: 'Dequeue Job',
              actionNameEn: 'Dequeue Job',
            },
            {
              actionId: 1077,
              pageId: 52,
              actionNameAr: 'Resume Job',
              actionNameEn: 'Resume Job',
            },
            {
              actionId: 1078,
              pageId: 52,
              actionNameAr: 'Delete Job',
              actionNameEn: 'Delete Job',
            },
            {
              actionId: 1079,
              pageId: 52,
              actionNameAr: 'RePrint Job',
              actionNameEn: 'RePrint job',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 4,
        moduleName: 'Inventory Control',
        moduleIconId: 38,
        moduleOrder: 14,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 38,
          iconName: 'apartment',
        },
        tblPages: [
          {
            pageId: 19,
            pageName: 'Add New Store',
            pageUrl: '/inventory-control/new-stock',
            moduleId: 4,
            pageIconId: 22,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 22,
              iconName: 'note_add',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 19,
                pageId: 19,
                actionNameAr: 'Add New Stock',
                actionNameEn: 'Add New Stock',
              },
            ],
          },
          {
            pageId: 20,
            pageName: 'Search Store',
            pageUrl: '/inventory-control/search-stock',
            moduleId: 4,
            pageIconId: 23,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 23,
              iconName: 'plagiarism',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 20,
                pageId: 20,
                actionNameAr: 'Search Stock',
                actionNameEn: 'Search Stock',
              },
            ],
          },
          {
            pageId: 21,
            pageName: 'Receipt Journal',
            pageUrl: '/inventory-control/new-receipt-journal/new',
            moduleId: 4,
            pageIconId: 18,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 18,
              iconName: 'create_new_folder',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 21,
                pageId: 21,
                actionNameAr: 'Add Supplies',
                actionNameEn: 'Add Supplies',
              },
            ],
          },
          {
            pageId: 22,
            pageName: 'Search Inventory Journals',
            pageUrl: '/inventory-control/search-batches',
            moduleId: 4,
            pageIconId: 17,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 17,
              iconName: 'find_in_page',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 22,
                pageId: 22,
                actionNameAr: 'Search Batches',
                actionNameEn: 'Search Batches',
              },
            ],
          },
          {
            pageId: 24,
            pageName: 'Stock Balance',
            pageUrl: '/inventory-control/search-shipments',
            moduleId: 4,
            pageIconId: 25,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 25,
              iconName: 'commute',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 24,
                pageId: 24,
                actionNameAr: 'Search Shipments',
                actionNameEn: 'Search Shipments',
              },
            ],
          },
          {
            pageId: 1092,
            pageName: 'Packs Transfer',
            pageUrl: '/inventory-control/packs-transfer',
            moduleId: 4,
            pageIconId: 8,
            pageViewOrder: 6,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 8,
              iconName: 'autorenew',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2128,
                pageId: 1092,
                actionNameAr: 'packs transfer',
                actionNameEn: 'packs transfer',
              },
            ],
          },
          {
            pageId: 1093,
            pageName: 'Search',
            pageUrl: '/inventory-control/packs-search',
            moduleId: 4,
            pageIconId: 15,
            pageViewOrder: 7,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 15,
              iconName: 'search',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2129,
                pageId: 1093,
                actionNameAr: 'Search',
                actionNameEn: 'Search',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 19,
          pageName: 'Add New Store',
          pageUrl: '/inventory-control/new-stock',
          moduleId: 4,
          pageIconId: 22,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 22,
            iconName: 'note_add',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 19,
              pageId: 19,
              actionNameAr: 'Add New Stock',
              actionNameEn: 'Add New Stock',
            },
          ],
        },
        {
          pageId: 20,
          pageName: 'Search Store',
          pageUrl: '/inventory-control/search-stock',
          moduleId: 4,
          pageIconId: 23,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 23,
            iconName: 'plagiarism',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 20,
              pageId: 20,
              actionNameAr: 'Search Stock',
              actionNameEn: 'Search Stock',
            },
          ],
        },
        {
          pageId: 21,
          pageName: 'Receipt Journal',
          pageUrl: '/inventory-control/new-receipt-journal/new',
          moduleId: 4,
          pageIconId: 18,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 18,
            iconName: 'create_new_folder',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 21,
              pageId: 21,
              actionNameAr: 'Add Supplies',
              actionNameEn: 'Add Supplies',
            },
          ],
        },
        {
          pageId: 22,
          pageName: 'Search Inventory Journals',
          pageUrl: '/inventory-control/search-batches',
          moduleId: 4,
          pageIconId: 17,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 17,
            iconName: 'find_in_page',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 22,
              pageId: 22,
              actionNameAr: 'Search Batches',
              actionNameEn: 'Search Batches',
            },
          ],
        },
        {
          pageId: 24,
          pageName: 'Stock Balance',
          pageUrl: '/inventory-control/search-shipments',
          moduleId: 4,
          pageIconId: 25,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 25,
            iconName: 'commute',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 24,
              pageId: 24,
              actionNameAr: 'Search Shipments',
              actionNameEn: 'Search Shipments',
            },
          ],
        },
        {
          pageId: 1092,
          pageName: 'Packs Transfer',
          pageUrl: '/inventory-control/packs-transfer',
          moduleId: 4,
          pageIconId: 8,
          pageViewOrder: 6,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 8,
            iconName: 'autorenew',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2128,
              pageId: 1092,
              actionNameAr: 'packs transfer',
              actionNameEn: 'packs transfer',
            },
          ],
        },
        {
          pageId: 1093,
          pageName: 'Search',
          pageUrl: '/inventory-control/packs-search',
          moduleId: 4,
          pageIconId: 15,
          pageViewOrder: 7,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 15,
            iconName: 'search',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2129,
              pageId: 1093,
              actionNameAr: 'Search',
              actionNameEn: 'Search',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 5,
        moduleName: 'User Management',
        moduleIconId: 37,
        moduleOrder: 15,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 37,
          iconName: 'supervised_user_circle',
        },
        tblPages: [
          {
            pageId: 25,
            pageName: 'Add User',
            pageUrl: '/user-management/add-User',
            moduleId: 5,
            pageIconId: 31,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 31,
              iconName: 'person_add',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 25,
                pageId: 25,
                actionNameAr: 'Add User ',
                actionNameEn: 'Add User',
              },
            ],
          },
          {
            pageId: 26,
            pageName: 'Search Users',
            pageUrl: '/user-management/edit-User-Roles',
            moduleId: 5,
            pageIconId: 32,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 32,
              iconName: 'person_edit',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 26,
                pageId: 26,
                actionNameAr: 'Search Users',
                actionNameEn: 'Search Users',
              },
              {
                actionId: 1056,
                pageId: 26,
                actionNameAr: 'Edit User',
                actionNameEn: 'Edit User',
              },
              {
                actionId: 1058,
                pageId: 26,
                actionNameAr: 'Activate User',
                actionNameEn: 'Activate User',
              },
            ],
          },
          {
            pageId: 27,
            pageName: 'Add Role',
            pageUrl: '/user-management/add-Role',
            moduleId: 5,
            pageIconId: 11,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 11,
              iconName: 'block',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 27,
                pageId: 27,
                actionNameAr: 'Add Role',
                actionNameEn: 'Add Lookup Tables',
              },
            ],
          },
          {
            pageId: 28,
            pageName: 'Search Roles',
            pageUrl: '/user-management/edit-Roles',
            moduleId: 5,
            pageIconId: 33,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 33,
              iconName: 'assignment_ind',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 28,
                pageId: 28,
                actionNameAr: 'Search Role',
                actionNameEn: 'Search Role',
              },
              {
                actionId: 1055,
                pageId: 28,
                actionNameAr: 'Edit Role',
                actionNameEn: 'Edit Role',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 25,
          pageName: 'Add User',
          pageUrl: '/user-management/add-User',
          moduleId: 5,
          pageIconId: 31,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 31,
            iconName: 'person_add',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 25,
              pageId: 25,
              actionNameAr: 'Add User ',
              actionNameEn: 'Add User',
            },
          ],
        },
        {
          pageId: 26,
          pageName: 'Search Users',
          pageUrl: '/user-management/edit-User-Roles',
          moduleId: 5,
          pageIconId: 32,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 32,
            iconName: 'person_edit',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 26,
              pageId: 26,
              actionNameAr: 'Search Users',
              actionNameEn: 'Search Users',
            },
            {
              actionId: 1056,
              pageId: 26,
              actionNameAr: 'Edit User',
              actionNameEn: 'Edit User',
            },
            {
              actionId: 1058,
              pageId: 26,
              actionNameAr: 'Activate User',
              actionNameEn: 'Activate User',
            },
          ],
        },
        {
          pageId: 27,
          pageName: 'Add Role',
          pageUrl: '/user-management/add-Role',
          moduleId: 5,
          pageIconId: 11,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 11,
            iconName: 'block',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 27,
              pageId: 27,
              actionNameAr: 'Add Role',
              actionNameEn: 'Add Lookup Tables',
            },
          ],
        },
        {
          pageId: 28,
          pageName: 'Search Roles',
          pageUrl: '/user-management/edit-Roles',
          moduleId: 5,
          pageIconId: 33,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 33,
            iconName: 'assignment_ind',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 28,
              pageId: 28,
              actionNameAr: 'Search Role',
              actionNameEn: 'Search Role',
            },
            {
              actionId: 1055,
              pageId: 28,
              actionNameAr: 'Edit Role',
              actionNameEn: 'Edit Role',
            },
          ],
        },
      ],
    },
    {
      module: {
        moduelId: 6,
        moduleName: 'Admin Control Panel',
        moduleIconId: 34,
        moduleOrder: 16,
        isDeleted: false,
        isMenuItem: true,
        moduleIcon: {
          iconId: 34,
          iconName: 'admin_panel_settings',
        },
        tblPages: [
          {
            pageId: 1090,
            pageName: 'Road Safety Blocked Vehicles',
            pageUrl: '/admin-control-panel/road-safety-blocked-vehicles',
            moduleId: 6,
            pageIconId: 11,
            pageViewOrder: 0,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 11,
              iconName: 'block',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 2124,
                pageId: 1090,
                actionNameAr: 'View list',
                actionNameEn: 'View list',
              },
            ],
          },
          {
            pageId: 29,
            pageName: 'Lookup Tables',
            pageUrl: '/admin-control-panel/lookup-tables',
            moduleId: 6,
            pageIconId: 35,
            pageViewOrder: 1,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 35,
              iconName: 'table_chart',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 29,
                pageId: 29,
                actionNameAr: 'Add Lookup',
                actionNameEn: 'Add Lookup',
              },
            ],
          },
          {
            pageId: 30,
            pageName: 'Favorite Menu',
            pageUrl: '/admin-control-panel/favorite-menu',
            moduleId: 6,
            pageIconId: 36,
            pageViewOrder: 2,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 36,
              iconName: 'widgets',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 30,
                pageId: 30,
                actionNameAr: 'View',
                actionNameEn: 'View',
              },
            ],
          },
          {
            pageId: 53,
            pageName: 'Configurations',
            pageUrl: '/admin-control-panel/config',
            moduleId: 6,
            pageIconId: 36,
            pageViewOrder: 3,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 36,
              iconName: 'widgets',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 1072,
                pageId: 53,
                actionNameAr: 'View Configuration',
                actionNameEn: 'View Configuration',
              },
            ],
          },
          {
            pageId: 3097,
            pageName: 'Reports',
            pageUrl: '/admin-control-panel/reports',
            moduleId: 6,
            pageIconId: 27,
            pageViewOrder: 4,
            isDeleted: false,
            isMenuItem: true,
            pageIcon: {
              iconId: 27,
              iconName: 'article',
            },
            tblPagePermissions: null,
            tblPageActions: [
              {
                actionId: 3134,
                pageId: 3097,
                actionNameAr: 'Reports',
                actionNameEn: 'Reports',
              },
            ],
          },
        ],
      },
      pages: [
        {
          pageId: 1090,
          pageName: 'Road Safety Blocked Vehicles',
          pageUrl: '/admin-control-panel/road-safety-blocked-vehicles',
          moduleId: 6,
          pageIconId: 11,
          pageViewOrder: 0,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 11,
            iconName: 'block',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 2124,
              pageId: 1090,
              actionNameAr: 'View list',
              actionNameEn: 'View list',
            },
          ],
        },
        {
          pageId: 29,
          pageName: 'Lookup Tables',
          pageUrl: '/admin-control-panel/lookup-tables',
          moduleId: 6,
          pageIconId: 35,
          pageViewOrder: 1,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 35,
            iconName: 'table_chart',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 29,
              pageId: 29,
              actionNameAr: 'Add Lookup',
              actionNameEn: 'Add Lookup',
            },
          ],
        },
        {
          pageId: 30,
          pageName: 'Favorite Menu',
          pageUrl: '/admin-control-panel/favorite-menu',
          moduleId: 6,
          pageIconId: 36,
          pageViewOrder: 2,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 36,
            iconName: 'widgets',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 30,
              pageId: 30,
              actionNameAr: 'View',
              actionNameEn: 'View',
            },
          ],
        },
        {
          pageId: 53,
          pageName: 'Configurations',
          pageUrl: '/admin-control-panel/config',
          moduleId: 6,
          pageIconId: 36,
          pageViewOrder: 3,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 36,
            iconName: 'widgets',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 1072,
              pageId: 53,
              actionNameAr: 'View Configuration',
              actionNameEn: 'View Configuration',
            },
          ],
        },
        {
          pageId: 3097,
          pageName: 'Reports',
          pageUrl: '/admin-control-panel/reports',
          moduleId: 6,
          pageIconId: 27,
          pageViewOrder: 4,
          isDeleted: false,
          isMenuItem: true,
          pageIcon: {
            iconId: 27,
            iconName: 'article',
          },
          tblPagePermissions: null,
          tblPageActions: [
            {
              actionId: 3134,
              pageId: 3097,
              actionNameAr: 'Reports',
              actionNameEn: 'Reports',
            },
          ],
        },
      ],
    },
  ]
  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget)
  }

  const handleNotification = async (event) => {
    //
    setIsOpen(!isOpen)
    setAnchorEl(event.currentTarget)
    // appDispatch({
    //   type: 'TOASTNTOFICATIONCOUNTER',
    //   badgeContentNumber: 0,
    // })
    // try {
    //   const response = await NotificationAxios({
    //     method: 'PUT',
    //     url: `Notification/UpdateStatusForSearchModel?status=${status.seen}`,
    //     data: {
    //       statuses: [status.Send, status.deliverd],
    //       excepted: [status.seen, status.Read, status.unRead],
    //     },
    //   })

    //   if (response.data) {
    //     appDispatch({
    //       type: 'TOASTNTOFICATIONCOUNTER',
    //       badgeContentNumber: 0,
    //     })
    //   }
    // } catch (e) {
    //   console.log('Error in notfications')
    // }
  }
  const userMenuClose = () => {
    // appDispatch({ type: "LOGOUT" })
    // appDispatch({ type: "FLASHMESSAGE", flashMessage: "You've been logged out", flashMessageType: "success" })

    setUserMenu(null)
  }

  const handleLogout = () => {
    userMenuClose()
    window.location.href = '/logout'
  }

  const clickAwayHandler = () => setIsOpen(false)

  return (
    <div className={className}>
      <UserMenuContainer>
        {/* {props.TimeoutCountdown && props.TimeoutCountdown < 10 ? <div className="counterItem">{props.TimeoutCountdown && <div>Session Ends In {props.TimeoutCountdown} s</div>}</div> : ''} */}
        <Button className="min-h-40" onClick={userMenuClick}>
          <div className="userText">
            <Typography className="userTitle">Menna</Typography>
          </div>
          <Avatar className="avatar" alt="user photo" src={AvatarImage} />
        </Button>
        <div style={{ position: 'relative' }}>
          <Badge
            color="secondary"
            badgeContent={1}
            style={{
              position: 'absolute',
              right: '15px',
              top: '10px',
            }}
          ></Badge>

          <Button className="min-h-40" onClick={handleNotification}>
            <Avatar className="avatar">
              <NotificationsIcon />
            </Avatar>
          </Button>
        </div>
        <Popover
          open={Boolean(userMenu)}
          anchorEl={userMenu}
          onClose={userMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          classes={{
            paper: 'py-8',
          }}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>

          <Link to="/Service" className="menuService">
            <MenuItem>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              Service Info
            </MenuItem>
          </Link>

          <Link to="/Agent" className="menuService">
            <MenuItem>
              <ListItemIcon>
                <TouchAppIcon />
              </ListItemIcon>
              Agent
            </MenuItem>
          </Link>
        </Popover>
        {<NotificationPopper {...{ clickAwayHandler, isOpen, setopencounter, counter, anchorEl, setAnchorEl }} />}
        {/* {<SendNotification />} */}
      </UserMenuContainer>
      <div className="cards">
        {Object.entries({
          '1091_Page': true,
          '42_Page': true,
        }).map((itemsSelected) => {
          if (itemsSelected[1]) {
            return (
              <React.Fragment key={itemsSelected[0]}>
                <div className="card">
                  {modules.map((item) =>
                    item.pages.map((child) => {
                      if (child.pageId + '_Page' === itemsSelected[0]) {
                        return (
                          <Button key={child.pageId} size="small" component={Link} to={child.pageUrl} color="primary" className="favBTN" startIcon={<Icon>{child.pageIcon.iconName}</Icon>}>
                            <span>{child.pageName.length > 15 ? child.pageName.substr(0, 20) + '...' : child.pageName}</span>
                            {/* <span>{child.pageName}</span> */}
                          </Button>
                        )
                      }
                      return null
                    })
                  )}
                </div>
              </React.Fragment>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default UserMenu
