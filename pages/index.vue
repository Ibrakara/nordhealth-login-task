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
            :hideRequired="true"
            type="email"
            required
            placeholder="user@example.com"
            label="Username"
          />
          <CustomInput
            id="password-input"
            name="password"
            :expand="true"
            :hideRequired="true"
            :type="passwordVisible ? 'text' : 'password'"
            required
            placeholder="••••••••"
            label="Password"
          >
            <provet-button
              type="button"
              slot="end"
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
            type="checkbox"
            v-model="receiveUpdates"
            label="I want to receive product updates announcements"
          />
          <provet-button type="submit" expand variant="primary">
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
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

//states
const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
});
const receiveUpdates = ref(false);
const passwordVisible = ref(false);

//functions
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const onSubmit = handleSubmit((values) => {
  console.log("Form submitted with values:", {
    ...values,
    receiveUpdates: receiveUpdates.value,
  });
});
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
