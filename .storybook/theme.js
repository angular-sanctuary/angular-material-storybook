import { create } from '@storybook/theming';
import CoverImage from '../stories/assets/image.png';

export default create({
  base: 'light',
  brandTitle: 'Angular Material Storybook',
  brandUrl: 'https://github.com/geromegrignon/angular-material-storybook',
  brandImage: CoverImage,
  brandTarget: '_self',
});
