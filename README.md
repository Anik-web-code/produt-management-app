# StealDeal

StealDeal is a modern, responsive e-commerce website built with Next.js, Tailwind CSS, and NextAuth.js. It allows users to browse products, view details, contact the owner, and for admins, add new products.

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd stealdeal



Install dependencies

npm install


Configure environment variables
Create a .env.local file in the root directory:

NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
EMAILJS_SERVICE_ID=your-emailjs-service-id
EMAILJS_TEMPLATE_ID=your-emailjs-template-id
EMAILJS_USER_ID=your-emailjs-user-id


Run the development server

npm run dev


Open http://localhost:3000
 in your browser.

Build & export for production

npm run build
npm run export

Route Summary
Route	Description	Access
/	Home page with hero section and top-selling products	Public
/products	All products listing page	Public
/products/[id]	Product detail page	Public
/dashboard/add-product	Add new product page	Admin only
/login	Login page (Google / Credentials)	Public
/contact	Contact form page	Public