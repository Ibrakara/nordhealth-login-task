# Provet Cloud Signup App

This is a **Nuxt 3** application for a signup form that allows users to register for a product. The app includes form validation, password visibility toggling, and a success page after form submission.

## Features

- **Signup Form**:

  - Fields for email and password.
  - Checkbox for opting into product updates and announcements.
  - Form validation using `vee-validate` and `zod`.
  - Password visibility toggle.

- **Success Page**:

  - Redirects to a success page after successful form submission.
  - Prevents direct access to the success page via URL using middleware.

- **Unit Tests**:
  - Tests for form rendering, validation, and functionality using `Vitest` and `@vue/test-utils`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ibrakara/nordhealth-login-task.git
   cd nordhealth-login-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── components
│   ├── CustomInput.vue # Custom input component with validation
├── middleware
│   ├── auth.ts # Middleware to prevent unauthorized access to the success page
├── pages
│   ├── index.vue # Signup form page
│   ├── success.vue # Success page after form submission
├── tests
│   ├── view
│   ├── form.test.ts # Unit tests for the signup form
├── assets
│   ├── images
│   ├── provet-cloud-logo.png # Logo used in the app
```

## Middleware

The `auth.ts` middleware ensures that users cannot directly access the success page without submitting the form. If the `formSubmitted` state is false, the user is redirected back to the signup page.

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  const formSubmitted = useState<boolean>("formSubmitted");
  if (!formSubmitted.value) {
    alert("Please fill out the form before proceeding.");
    return navigateTo("/");
  }
});
```

## Unit Tests

Unit tests are written using **Vitest** and **@vue/test-utils**. The tests cover:

- Rendering of form fields and components.
- Validation error messages for invalid or empty inputs.
- Password visibility toggle functionality.
- Form submission and redirection to the success page.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

## Validation

The app uses **vee-validate** and **zod** for form validation. The validation schema ensures:

- **Email**: Must be a valid email address and cannot be empty.
- **Password**: Must be at least 6 characters long and cannot be empty.

Example schema:

```ts
const schema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
```

## How It Works

### Signup Form:

1. Users fill out the email and password fields.
2. Validation errors are displayed if the fields are invalid or empty.
3. Users can toggle password visibility.

### Form Submission:

1. On successful submission, the `formSubmitted` state is set to `true`.
2. The user is redirected to the success page.

### Success Page:

1. Displays a success message.
2. Prevents unauthorized access using the `auth.ts` middleware.

## Scripts

- **Start Development Server**:

  ```bash
  npm run dev
  ```

- **Build for Production**:

  ```bash
  npm run build
  ```

- **Run Tests**:

  ```bash
  npm run test
  ```

## License

This project is licensed under the MIT License.
