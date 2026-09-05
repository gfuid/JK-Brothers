// Google Sheets Order Integration Service for JK Brothers / ZK Brother
// Sends order records directly to your Google Sheet via Google Apps Script Web App

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL || 'https://script.google.com/macros/s/AKfycbwQoPbTCAyxt9NlqPBv36vdPzBc0_v_rgmZn6o9OQ4jRB-4J6263otnry_NVOqN1SHsOg/exec';

/**
 * Format cart items into a single readable string for Google Sheets cell
 */
export function formatItemsForSheet(cartItems) {
  return cartItems.map((item, idx) => {
    const itemTotal = item.product.price * item.quantity;
    return `[${idx + 1}] ${item.product.name} | Color: ${item.color || 'Standard'} | Qty: ${item.quantity} pcs @ ₹${item.product.price} (₹${itemTotal})`;
  }).join(' \n');
}

/**
 * Sends order payload to Google Apps Script Webhook
 */
export async function recordOrderInGoogleSheet({ orderId, customerDetails, cartItems, totalAmount }) {
  if (!GOOGLE_SHEET_URL) {
    console.warn('Google Sheet Web App URL is not set. Please add VITE_GOOGLE_SHEET_WEBAPP_URL in .env');
    return { success: false, reason: 'missing_sheet_url' };
  }

  const fullAddress = [
    customerDetails.address,
    customerDetails.city,
    customerDetails.state,
    customerDetails.postalCode
  ].filter(Boolean).join(', ');

  const payload = {
    order_id: orderId,
    order_date: new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    customer_name: customerDetails.contactName,
    business_name: customerDetails.businessName || 'Individual / Retail',
    email: customerDetails.email,
    phone: "'" + (customerDetails.phone || '').trim(),
    address: fullAddress,
    payment_mode: customerDetails.paymentMode || 'Bank Transfer (TT)',
    items: formatItemsForSheet(cartItems),
    total_amount: `₹${totalAmount.toLocaleString('en-IN')}`,
    status: 'Processing'
  };

  try {
    // We send payload as text/plain or url-encoded to avoid CORS pre-flight blocks with Google Apps Script
    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors', // Standard for Google Apps Script Webhooks
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log('Order successfully synced to Google Sheet');
    return { success: true };
  } catch (error) {
    console.error('Failed to sync order to Google Sheet:', error);
    return { success: false, error };
  }
}

/**
 * Fetches real-time status of a specific order directly from Google Sheets
 */
export async function fetchLiveOrderStatus(orderId) {
  if (!GOOGLE_SHEET_URL) return null;
  try {
    const res = await fetch(`${GOOGLE_SHEET_URL}?action=getStatus&order_id=${encodeURIComponent(orderId)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data && data.success ? data.status : null;
  } catch (err) {
    console.warn('Could not fetch live order status from sheet:', err);
    return null;
  }
}

/**
 * Fetches all order statuses from Google Sheet in a single batch call
 */
export async function fetchAllLiveOrderStatuses() {
  if (!GOOGLE_SHEET_URL) return {};
  try {
    const res = await fetch(`${GOOGLE_SHEET_URL}?action=getAllStatuses`);
    if (!res.ok) return {};
    const data = await res.json();
    return data && data.orders ? data.orders : {};
  } catch (err) {
    console.warn('Could not fetch all order statuses from sheet:', err);
    return {};
  }
}

/**
 * Sends enquiry / quote payload to Google Apps Script Webhook
 * Fully compatible with existing Order Sheets Apps Script deployment while passing rich enquiry fields
 */
export async function recordEnquiryInGoogleSheet({
  enquiryId,
  name,
  email,
  phone = '',
  company = '',
  address = '',
  city = '',
  state = '',
  postalCode = '',
  country = 'India',
  subject = '',
  message = '',
  category = '',
  quantity = null,
  type = 'General Enquiry'
}) {
  if (!GOOGLE_SHEET_URL) {
    console.warn('Google Sheet Web App URL is not set. Please add VITE_GOOGLE_SHEET_WEBAPP_URL in .env');
    return { success: false, reason: 'missing_sheet_url' };
  }

  const fullLocation = [address, city, state, country, postalCode].filter(Boolean).join(', ');
  const itemsText = [
    category ? `Category: ${category}` : '',
    quantity ? `Target Qty: ${quantity} pcs` : '',
    subject ? `Subject: ${subject}` : '',
    message ? `Note: ${message}` : ''
  ].filter(Boolean).join(' | ') || 'Direct Enquiry';

  const payload = {
    // Backward-compatible mapping with currently deployed Google Apps Script
    order_id: enquiryId || `ZK-ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
    order_date: new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    customer_name: name,
    business_name: company || 'Individual / Direct Lead',
    email: email,
    phone: phone ? "'" + String(phone).trim() : "'-",
    address: fullLocation || 'Online Website Enquiry',
    payment_mode: `[${type.toUpperCase()}] ${subject || category || 'Enquiry'}`,
    items: itemsText,
    total_amount: quantity ? `${quantity} pcs (Quote Req)` : 'Enquiry Lead',

    // Extended fields
    enquiry_type: type,
    subject: subject,
    category: category,
    quantity: quantity,
    message: message
  };

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log('Enquiry successfully synced to Google Sheet');
    return { success: true };
  } catch (error) {
    console.error('Failed to sync enquiry to Google Sheet:', error);
    return { success: false, error };
  }
}
