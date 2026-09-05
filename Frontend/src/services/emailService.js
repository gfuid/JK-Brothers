import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You can set these in Frontend/.env using VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_m4b3bcx';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_syzqnvn';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'EGoDESX5eYVCqg0fQ';

/**
 * Format cart items into a clean HTML table for the email body
 */
export function formatOrderItemsHtml(cartItems) {
  return cartItems.map((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    return `
      <tr style="border-bottom: 1px solid #eeeeee;">
        <td style="padding: 12px 8px; font-size: 13px; color: #333333;">
          <strong>${index + 1}. ${item.product.name}</strong><br/>
          <span style="font-size: 11px; color: #777777;">Color: ${item.color || 'Standard'} | Subcategory: ${item.product.subCategory || 'Textiles'}</span>
        </td>
        <td style="padding: 12px 8px; font-size: 13px; text-align: center; color: #333333;">
          ${item.quantity} pcs
        </td>
        <td style="padding: 12px 8px; font-size: 13px; text-align: right; color: #333333;">
          ₹${item.product.price.toLocaleString('en-IN')}
        </td>
        <td style="padding: 12px 8px; font-size: 13px; text-align: right; font-weight: bold; color: #0B2144;">
          ₹${itemTotal.toLocaleString('en-IN')}
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Format cart items into a clean plain-text summary (as fallback or plain text preview)
 */
export function formatOrderItemsText(cartItems) {
  return cartItems.map((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    return `${index + 1}. ${item.product.name} (${item.color || 'Standard'}) - Qty: ${item.quantity} pcs @ ₹${item.product.price} = ₹${itemTotal}`;
  }).join('\n');
}

/**
 * Sends order confirmation email to both store admin and customer via EmailJS
 */
export async function sendOrderConfirmationEmail({ orderId, customerDetails, cartItems, totalAmount }) {
  if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS Public Key is not configured yet. Please set VITE_EMAILJS_PUBLIC_KEY in .env');
    return { success: false, reason: 'unconfigured_keys' };
  }

  const itemsHtml = formatOrderItemsHtml(cartItems);
  const itemsText = formatOrderItemsText(cartItems);
  const fullAddress = [
    customerDetails.address,
    customerDetails.city,
    customerDetails.state,
    customerDetails.postalCode
  ].filter(Boolean).join(', ');

  const templateParams = {
    order_id: orderId,
    customer_name: customerDetails.contactName,
    customer_email: customerDetails.email,
    customer_phone: customerDetails.phone,
    business_name: customerDetails.businessName || 'Individual / Retail',
    shipping_address: fullAddress,
    payment_mode: customerDetails.paymentMode || 'Bank Transfer (TT)',
    total_amount: `₹${totalAmount.toLocaleString('en-IN')}`,
    order_date: new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    order_items: itemsText,       // For plain text tags
    order_items_html: itemsHtml,  // For rich HTML template tables
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('EmailJS Success:', response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Send Error:', error);
    return { success: false, error };
  }
}

/**
 * Sends enquiry / quote request notification email via EmailJS
 */
export async function sendEnquiryEmail({
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
  if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS Public Key is not configured yet. Please set VITE_EMAILJS_PUBLIC_KEY in .env');
    return { success: false, reason: 'unconfigured_keys' };
  }

  const fullLocation = [address, city, state, country, postalCode].filter(Boolean).join(', ');
  const displayId = enquiryId || `ZK-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
  const displayDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const plainSummary = [
    `Type: ${type}`,
    subject ? `Subject: ${subject}` : '',
    category ? `Category: ${category}` : '',
    quantity ? `Quantity: ${quantity} pcs` : '',
    `Message: ${message}`
  ].filter(Boolean).join('\n');

  const richHtml = `
    <div style="font-family: sans-serif; color: #333; line-height: 1.5;">
      <h3 style="color: #0B2144; margin-bottom: 8px;">New ${type} Received</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        ${subject ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0; font-weight: bold; width: 130px;">Subject:</td><td>${subject}</td></tr>` : ''}
        ${category ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0; font-weight: bold;">Category:</td><td>${category}</td></tr>` : ''}
        ${quantity ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0; font-weight: bold;">Target Quantity:</td><td>${quantity} pcs</td></tr>` : ''}
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Message:</td><td style="white-space: pre-wrap;">${message || 'No additional message.'}</td></tr>
      </table>
    </div>
  `;

  const templateParams = {
    order_id: displayId,
    customer_name: name,
    customer_email: email,
    customer_phone: phone || 'Not provided',
    business_name: company || 'Direct Website Contact',
    shipping_address: fullLocation || 'Direct Website Submission',
    payment_mode: `Enquiry: ${type}`,
    total_amount: quantity ? `${quantity} pcs (Quote Request)` : 'Direct Lead',
    order_date: displayDate,
    order_items: plainSummary,
    order_items_html: richHtml,
    // Direct fields for custom template variables
    enquiry_id: displayId,
    name: name,
    email: email,
    phone: phone,
    company: company,
    subject: subject,
    message: message,
    category: category,
    quantity: quantity
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('EmailJS Enquiry Sent:', response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Enquiry Send Error:', error);
    return { success: false, error };
  }
}

