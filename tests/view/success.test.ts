import { describe, it, expect, vi, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import SuccessPage from "../../pages/success.vue";

beforeAll(() => {
  vi.stubGlobal("definePageMeta", () => {});
  vi.stubGlobal("useHead", () => {});
});

describe("SuccessPage.vue", () => {
  it("renders success message and button", () => {
    const wrapper = mount(SuccessPage, {
      global: {
        stubs: ["provet-stack", "provet-icon", "provet-button"],
      },
    });

    expect(wrapper.text()).toContain("Success!");
    expect(wrapper.text()).toContain(
      "You have successfully signed up for the product."
    );
    expect(wrapper.text()).toContain("Back");
  });

  it("navigates to / when back button is clicked", async () => {
    const push = vi.fn();
    const wrapper = mount(SuccessPage, {
      global: {
        stubs: ["provet-stack", "provet-icon", "provet-button"],
        mocks: {
          $router: { push },
        },
      },
    });

    await wrapper.get('[data-test-id="back-button"]').trigger("click");
    expect(push).toHaveBeenCalledWith("/");
  });
});
