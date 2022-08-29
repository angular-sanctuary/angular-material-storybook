import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {ConfirmationDialogComponent} from "./confirmation-dialog.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Usecases/dialog',
  component: ConfirmationDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule]
    })
  ],
  parameters: {
    options: {
      showPanel: false
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
} as Meta;

export const Template: Story<ConfirmationDialogComponent> = args => ({
  props: args
});
Template.storyName = 'success dialog';
