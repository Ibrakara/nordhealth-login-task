<template>
  <provet-stack
    class="signup-page-container"
    justify-content="center"
    align-items="center"
  >
    <img :src="logo" alt="Provet Logo" class="logo" />
    <provet-card padding="l">
      <h1 slot="header">Sign up</h1>
      <form @submit.prevent="onSubmit">
        <provet-stack>
          <CustomInput
            id="email-input"
            name="email"
            :expand="true"
            type="email"
            placeholder="user@example.com"
            label="Username"
          />
          <CustomInput
            id="password-input"
            name="password"
            :expand="true"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="••••••••"
            label="Password"
          >
            <provet-button
              type="button"
              slot="end"
              data-test-id="password-toggle-button"
              aria-describedby="password-tooltip"
              square
              @click="togglePasswordVisibility"
            >
              <provet-icon
                v-show="!passwordVisible"
                name="interface-edit-on"
              ></provet-icon>
              <provet-icon
                v-show="passwordVisible"
                name="interface-edit-off"
              ></provet-icon>
            </provet-button>
          </CustomInput>
          <provet-tooltip id="password-tooltip">
            Show / hide password
          </provet-tooltip>
          <provet-checkbox
            id="updates-checkbox"
            type="checkbox"
            v-model="receiveUpdates"
            label="I want to receive product updates announcements"
          />
          <provet-button
            data-test-id="form-submit-button"
            type="submit"
            expand
            variant="primary"
          >
            Sign up
          </provet-button>
        </provet-stack>
      </form>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import logo from "~/assets/images/provet-cloud-logo.png";
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

// Set the page title
useHead({
  title: "Sign Up - Provet Cloud",
});
//router
const router = useRouter();

// Global state
const formSubmitted = useState("formSubmitted", () => false);

//states
const schema = z.object({
  email: z.string().nonempty("Required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Required")
    .min(6, "Password must be at least 6 characters"),
});
const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
});
const receiveUpdates = ref(false);
const passwordVisible = ref(false);

//functions
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const onSubmit = handleSubmit(() => {
  formSubmitted.value = true;
  resetFormValues();
  router.push("/success");
});
function resetFormValues() {
  resetForm({
    values: {
      email: "",
      password: "",
    },
    errors: {},
    touched: {},
  });
  receiveUpdates.value = false;
}
</script>
<style scoped>
.signup-page-container {
  max-width: 340px;
  margin: var(--n-space-xl) auto;
}
.logo {
  width: 100%;
  max-width: 200px;
  margin-bottom: var(--n-space-xl);
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
</style>
