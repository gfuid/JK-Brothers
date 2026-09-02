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
    total_amount: `₹${totalAmount.toLocaleString('en-IN')}`
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
