export const drawerWidth = 300
export const inactivityTimeout = 10 * 60 * 1000 // 60 sec 1000 mill
export const supportedFilesFormat = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', 'application/pdf']
export const maxFilesSizes = {
  attachReceipt: 500 * 1000,
  tin: { photo: 500 * 1000, signature: 500 * 1000, attach: 500 * 1000 },
  dl: { photo: 500 * 1000, signature: 500 * 1000, attach: 500 * 1000 },
  vr: 500 * 1000 /*size in Bytes*/,
}
const rootServerURI = window.location.origin
const FrontURL = {
  Dev: 'http://localhost:53812/',
  ProdUat: 'http://ltm-appuat/',
  DubaiArchana: 'http://192.168.0.202/',
  DubaiNigDemo: 'http://86.98.4.21:105/',
  DubaiNigDemoDynamic: rootServerURI,
  DubaiDemo: 'http://86.98.4.21:85/',
  DubaiDemoDynamic: rootServerURI,
  DubaiUat: 'http://86.98.4.21:83/',
  DubaiUatDynamic: rootServerURI,
  DubaiDev: 'http://86.98.4.21:81/',
}

const tmsAPIURL = {
  DevLocal: 'http://localhost:55497/',
  DevLawEnforcement: 'http://192.168.1.200:55497/',
  Dev: 'http://192.168.1.200/tmsapi/',
  Dev4400: 'http://192.168.1.200:4400/TMSAPI/',
  ProdUat: 'http://ltm-appuat/tmsapi/',
  DubaiArchana: 'http://192.168.0.202/TMSAPI/',
  DubaiNigDemo: 'http://86.98.4.21:105/TMSAPI/',
  DubaiNigDemoDynamic: rootServerURI + '/TMSAPI/',
  DubaiDemo: 'http://86.98.4.21:85/TMSAPI/',
  DubaiDemoDynamic: rootServerURI + '/TMSAPI/',
  DubaiUat: 'http://86.98.4.21:83/TMSUatApi/',
  DubaiUatDynamic: rootServerURI + '/TMSUatApi/',
  DubaiDev: 'http://86.98.4.21:81/TMSDevApi/',
}
const securityAPIURL = {
  DevLocal: 'http://localhost:55500/',
  DevLawEnforcement: 'http://192.168.1.200:55500/',
  Dev: 'http://192.168.1.200/TMSAuth/',
  Dev4400: 'http://192.168.1.200:4400/TMSAuth/',
  ProdUat: 'http://ltm-appuat/tmsauth/',
  DubaiArchana: 'http://192.168.0.202/TMSAuth/',
  DubaiNigDemo: 'http://86.98.4.21:105/TMSAuth/',
  DubaiNigDemoDynamic: rootServerURI + '/TMSAuth/',
  DubaiDemo: 'http://86.98.4.21:85/TMSAuth/',
  DubaiDemoDynamic: rootServerURI + '/TMSAuth/',
  DubaiUat: 'http://86.98.4.21:83/TMSUatAuth/',
  DubaiUatDynamic: rootServerURI + '/TMSUatAuth/',
  DubaiDev: 'http://86.98.4.21:81/TMSDevAuth/',
}
const NotificationIURL = {
  DevLocal: 'http://localhost:60703/',
  Dev: 'http://localhost:60703/',
  DubaiNigDemo: 'http://86.98.4.21:105/TMSNotification/',
  DubaiNigDemoDynamic: rootServerURI + '/TMSNotification/',
  DubaiDev: 'http://86.98.4.21:81/TMSDevNotification/',
}
const reportAPIURL = {
  DevLocal: 'https://localhost:44376/',
  Dev: 'http://192.168.1.200/TMSReport/',
  ProdUat: 'http://ltm-appuat/tmsreport/',
  DubaiArchana: 'http://192.168.0.202/TMSReport/',
  DubaiNigDemo: 'http://86.98.4.21:105/TMSReport/',
  DubaiNigDemoDynamic: rootServerURI + '/TMSReport/',
  DubaiDemo: 'http://86.98.4.21:85/TMSReport/',
  DubaiDemoDynamic: rootServerURI + '/TMSReport/',
  DubaiUat: 'http://86.98.4.21:83/TMSUatReport/',
  DubaiUatDynamic: rootServerURI + '/TMSUatReport/',
  DubaiDev: 'http://86.98.4.21:81/TMSDevReport/',
}
const printServerAPIURL = {
  DevLocal: 'http://localhost:2303/',
  Dev: 'http://192.168.1.200/TMSprint/',
  ProdUat: 'http://ltm-appuat/tmsprintmanager/',
  DubaiArchana: 'http://192.168.0.202/TMSPrint/',
  DubaiNigDemo: 'http://86.98.4.21:105/TMSPrint/',
  DubaiNigDemoDynamic: rootServerURI + '/TMSPrint/',
  DubaiDemo: 'http://86.98.4.21:85/TMSPrint/',
  DubaiDemoDynamic: rootServerURI + '/TMSPrint/',
  DubaiUat: 'http://86.98.4.21:83/TMSUatPrint/',
  DubaiUatDynamic: rootServerURI + '/TMSUatPrint/',
  DubaiDev: 'http://86.98.4.21:81/TMSDevPrint/',
}

export const currentEnvURL = {
  tmsApi: tmsAPIURL.Dev,
  authApi: securityAPIURL.Dev,
  printServerApi: printServerAPIURL.Dev,
  reportApi: reportAPIURL.Dev,
  FrontURL: FrontURL.Dev,
  NotificationApi: NotificationIURL.Dev,
}
export const LOCAL_STORAGE_CONSTANT = {
  TOKEN: 'token',
  USERNAME: 'username',
  AVATAR: 'avatar',
  USERDATA: 'userData',
}
