# Website form delivery

The current simplified router serves the home page at every route and does not
mount the stored contact, volunteer, event, or messaging forms. This configuration
and helper are ready for those forms. This update does not restore routes or
change direct email links.

Public form submissions use the consolidated PIA EmailJS account: service
`service_o3lsjkm`, template `template_pia_requests`, and the same account's public
key. Configure all three `VITE_EMAILJS_*` variables together and rebuild Amplify
app `d39ycowgvb2ojq` in us-east-2.

The template fixes To Email to `erik@patriotsinaction.com` and Cc to
`dan@patriotsinaction.com`. Reply-To is `{{reply_to}}`; From Email uses the
connected service's default. Contact, volunteer, event, and messaging inquiries
include the complete formatted message, the visitor email, a PFA PAC subject
prefix, source URL, and timestamp. Public contact links do not control delivery.

Test form payloads with EmailJS intercepted. Provider acceptance alone does not
confirm inbox delivery; send a real verification email only when authorized.
