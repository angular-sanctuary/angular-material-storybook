import { create } from '@storybook/theming';
import CoverImage from '../stories/assets/logo.png';

export default create({
  base: 'light',
  brandTitle: 'Angular Material Storybook',
  brandUrl: 'https://github.com/geromegrignon/angular-material-storybook',
  brandImage: CoverImage,
  brandTarget: '_self',

  barSelectedColor: 'rgba(0,68,85,1)',
  colorSecondary: 'rgba(0,68,85,1)',
});
