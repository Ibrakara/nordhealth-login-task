import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import index from "@/pages/index.vue";

beforeAll(() => {
  vi.stubGlobal("useState", () => {});
  vi.stubGlobal("useHead", () => {});
});

// 🔐 Define this before importing the component!
const pushMock = vi.fn();

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

// Mock assets
vi.mock("~/assets/images/provet-cloud-logo.png", () => ({
  default: "test-logo-path",
}));

describe("index.vue", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    wrapper = mount(index, {
      global: {
        stubs: {
          "provet-stack": {
            template: "<div><slot /></div>",
          },
          "provet-card": {
            template: "<div><slot name='header' /><slot /></div>",
          },
          "provet-button": {
            template: "<button><slot /></button>",
          },
          "provet-icon": true,
          "provet-tooltip": true,
          "provet-checkbox": {
            template: "<input type='checkbox' v-model='modelValue' />",
            props: ["modelValue"],
          },
        },
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the Provet logo", () => {
    const logo = wrapper.find(".logo");
    expect(logo.exists()).toBe(true);
    expect(logo.attributes("src")).toBe("test-logo-path");
    expect(logo.attributes("alt")).toBe("Provet Logo");
  });

  it("renders the sign up form with all fields", () => {
    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find("#email-input").exists()).toBe(true);
    expect(wrapper.find("#password-input").exists()).toBe(true);
    expect(wrapper.find("#updates-checkbox").exists()).toBe(true);
    expect(wrapper.find('[data-test-id="form-submit-button"]').exists()).toBe(
      true
    );
  });

  it("toggles password visibility when button is clicked", async () => {
    const passwordInput = wrapper.find("#password-input");
    const toggleButton = wrapper.find(
      '[data-test-id="password-toggle-button"]'
    );

    // Initial state should be password hidden
    expect(passwordInput.attributes("type")).toBe("password");

    // Click the toggle button
    await toggleButton.trigger("click");
    await nextTick();
    expect(passwordInput.attributes("type")).toBe("text");

    // Click again to toggle back
    await toggleButton.trigger("click");
    expect(passwordInput.attributes("type")).toBe("password");
  });
});
