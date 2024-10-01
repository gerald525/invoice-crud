### Objective

Your challenge is to build out the frontend and backend components of an invoicing application for Techary Limited's accounting department.

### Brief

Your task is to build out the project to the design files provided in the `/designs` folder. The functionality outlined in **Expected Behaviour** is more important than implementing the designs pixel-perfect. You are only supposed to build out the desktop version of the assignment and it does not need to be responsive.

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized.

The design system file will give you more information about the various colors, fonts, and styles used in this project.

We provide example data in a local `data.json` file, you may use it to seed your database with initial data.

### Tasks

Your users should be able to:

- Create, read, update, and delete invoices
  - Create corresponding API endpoints
  - No authentication/session management is required. Imagine you're building this application for a single user (yourself)
- **Bonus**: Receive form validations when trying to create/edit an invoice
- **Bonus**: Save draft invoices, and mark pending invoices as paid
- **Bonus**: Filter invoices by status (draft/pending/paid)
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this)

### Expected Behaviour

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.

### Evaluation Criteria

- Show us your work through your commit history
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

**Have fun building!** 🚀

The Techary Limited Team