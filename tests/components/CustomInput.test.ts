import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomInput from "../../components/CustomInput.vue";

describe("CustomInput.vue", () => {
  it("renders with correct props", () => {
    const wrapper = mount(CustomInput, {
      props: {
        name: "email",
        label: "Email",
        placeholder: "Enter email",
        type: "email",
      },
      global: {
        stubs: {
          "provet-input": true, // Stub custom component
        },
      },
    });

    const input = wrapper.find("provet-input");
    expect(input.exists()).toBe(true);
    expect(input.attributes("type")).toBe("email");
    expect(input.attributes("name")).toBe("email");
    expect(input.attributes("placeholder")).toBe("Enter email");
  });
});
