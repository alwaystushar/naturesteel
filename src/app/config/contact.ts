/**
 * Contact form backend URL.
 * Set NEXT_PUBLIC_CONTACT_FORM_URL in .env.local to your PHP script URL, e.g.:
 *   https://yourdomain.com/contact.php
 * If not set, uses /php/contact.php (assumes PHP is served from same origin).
 */
export const CONTACT_FORM_URL =
  typeof process.env.NEXT_PUBLIC_CONTACT_FORM_URL === "string" &&
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL !== ""
    ? process.env.NEXT_PUBLIC_CONTACT_FORM_URL
    : "/php/contact.php";
