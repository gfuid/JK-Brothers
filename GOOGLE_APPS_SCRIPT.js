/**
 * =========================================================================
 * JK BROTHERS (zkbrother.com) — 2-WAY LIVE ORDER & ENQUIRY SYNC SYSTEM
 * =========================================================================
 * 
 * Features:
 * 1. doPost: Automatically records wholesale orders and enquiries from website.
 *    - Auto-creates "Order Sheets" tab with Royal Navy headers.
 *    - Automatically adds a Dropdown list in the 'Status' column (Column K).
 *    - Default status is set to 'Processing'.
 * 
 * 2. Admin Dropdown Control:
 *    - Admin can simply click the dropdown in Google Sheet to change status:
 *      [Processing, Confirmed, Dispatched, Delivered, Cancelled]
 * 
 * 3. doGet: Serves live statuses back to the website in real time:
 *    - Real-time 4-step progress tracker on /orders page.
 *    - 1-click Order ID tracking for customers.
 * 
 * HOW TO INSTALL IN GOOGLE SHEETS:
 * 1. Open your Google Sheet (e.g. JK Brothers Orders).
 * 2. Click on top menu: Extensions > Apps Script.
 * 3. Delete any existing code and paste this entire file.
 * 4. Click 'Save' (Floppy icon).
 * 5. Click 'Deploy' > 'New deployment'.
 * 6. Select type: 'Web app'.
 *    - Description: JK Brothers 2-Way Order Manager
 *    - Execute as: 'Me' (your email)
 *    - Who has access: 'Anyone'
 * 7. Click 'Deploy', authorize permissions, and copy the Web App URL!
 */

const SHEET_NAME = "Order Sheets";

const STATUS_OPTIONS = [
  "Processing",
  "Confirmed",
  "Dispatched",
  "Delivered",
  "Cancelled"
];

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  const headers = [
    "Order ID",
    "Order Date",
    "Customer Name",
    "Business Name",
    "Email",
    "Phone",
    "Shipping Address",
    "Payment Mode",
    "Items Ordered",
    "Total Amount",
    "Status"
  ];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0B2144");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function doPost(e) {
  try {
    const sheet = setupSheet();
    const data = JSON.parse(e.postData.contents);
    
    const initialStatus = data.status || "Processing";
    
    // Append order row
    sheet.appendRow([
      data.order_id || "",
      data.order_date || new Date().toLocaleString("en-IN"),
      data.customer_name || "",
      data.business_name || "",
      data.email || "",
      data.phone || "",
      data.address || "",
      data.payment_mode || "",
      data.items || "",
      data.total_amount || "",
      initialStatus
    ]);
    
    const lastRow = sheet.getLastRow();
    
    // Create Dropdown Validation in Column K (Status)
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(STATUS_OPTIONS, true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(lastRow, 11).setDataValidation(rule);
    sheet.getRange(lastRow, 11).setHorizontalAlignment("center");
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      order_id: data.order_id,
      current_status: initialStatus
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.getActiveSheet();
    }
    
    const params = e ? e.parameter : {};
    const action = params.action;
    const requestedOrderId = params.order_id;
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        orders: {}
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const headers = data[0];
    let orderIdCol = 0; // Column A
    let statusCol = 10; // Column K
    
    for (let j = 0; j < headers.length; j++) {
      const h = String(headers[j]).toLowerCase();
      if (h.includes("order id")) orderIdCol = j;
      if (h.includes("status")) statusCol = j;
    }
    
    // 1. Single Order Lookup (?action=getStatus&order_id=ZK-ORD-XXXXX)
    if (action === "getStatus" && requestedOrderId) {
      const cleanTarget = String(requestedOrderId).trim().toUpperCase();
      for (let i = 1; i < data.length; i++) {
        const rowOrderId = String(data[i][orderIdCol]).trim().toUpperCase();
        if (rowOrderId === cleanTarget) {
          const currentStatus = data[i][statusCol] || "Processing";
          return ContentService.createTextOutput(JSON.stringify({
            success: true,
            orderId: requestedOrderId,
            status: currentStatus
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Order ID not found"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. Batch Lookup: Return all orders and their current status (?action=getAllStatuses)
    const orderMap = {};
    for (let i = 1; i < data.length; i++) {
      const id = String(data[i][orderIdCol]).trim();
      const st = String(data[i][statusCol] || "Processing").trim();
      if (id) {
        orderMap[id] = st;
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      orders: orderMap
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
