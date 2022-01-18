import MyCounter from "../src/index.vue";
import userEvent from '@divriots/play-user-event';
import {screen} from '@testing-library/dom';

export default {
  component: MyCounter,
  parameters: {
    layout: "centered",
  },
};

export const story1 = {
  play: async () => {
    const inc = screen.getByText('+')
    const dec = screen.getByText('-')
    await userEvent.click(inc)
    await userEvent.click(dec)
    await userEvent.click(inc)
    await userEvent.click(dec)
    await userEvent.click(inc)
    await userEvent.click(dec)
    await userEvent.click(inc)
    await userEvent.click(dec)
  }
};

export const story2 = {
  play: async () => {
    const inc = screen.getByText('+')
    const dec = screen.getByText('-')
    await userEvent.click(inc)
    await userEvent.click(inc)
    await userEvent.click(inc)
    await userEvent.click(inc)
    await userEvent.click(dec)
    await userEvent.click(dec)
    await userEvent.click(dec)
    await userEvent.click(dec)
  }
};
