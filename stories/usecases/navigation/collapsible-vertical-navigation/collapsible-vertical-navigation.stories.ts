import {Meta, StoryFn} from "@storybook/angular";
import {defaultUsecasesParameters} from "../../../../.storybook/utils";
import {CollapsibleVerticalNavigationComponent} from "./collapsible-vertical-navigation.component";

export default {
  title: 'Usecases/Navigation',
  component: CollapsibleVerticalNavigationComponent,
  parameters: {
    ...defaultUsecasesParameters,
    viewport: {
      defaultViewport: 'mobile1'
    },
  }
} as Meta;

export const CollapsibleVerticalNavigation: StoryFn<CollapsibleVerticalNavigationComponent> = args => ({
  props: args
});
CollapsibleVerticalNavigation.storyName = 'collapsible vertical navigation';
