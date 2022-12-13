import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defaultUsecasesParameters } from '../../../.storybook/utils';

export default {
  title: 'Usecases/Dialog',
  component: ConfirmationDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
  parameters: {
    ...defaultUsecasesParameters,
  },
} as Meta;

export const Template: StoryObj<ConfirmationDialogComponent> = {
  render: (args) => ({
    props: args,
  }),
  name: 'success (custom css)',
};
