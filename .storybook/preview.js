import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { initializeRTL } from 'storybook-addon-rtl';

setCompodocJson(docJson);
initializeRTL();

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'story',
  docs: {inlineStories: true}
}
