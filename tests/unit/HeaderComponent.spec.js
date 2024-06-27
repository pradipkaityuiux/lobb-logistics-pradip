import { shallowMount } from "@vue/test-utils";
import HeaderComponent from "@/layout/commonBlocks/HeaderComponent.vue";

describe("HeaderComponent", () => {
  it("renders correctly with today's date", () => {
    const wrapper = shallowMount(HeaderComponent);

    // Assert the rendered text of the small element matches today's date
    expect(wrapper.find(".heading small").text()).toContain(
      getFormattedTodayDate()
    );

    // Function to get today's date in the format expected by the component
    function getFormattedTodayDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      const today = new Date()
        .toLocaleDateString("en-US", options)
        .toUpperCase();
      return today;
    }
  });
});
