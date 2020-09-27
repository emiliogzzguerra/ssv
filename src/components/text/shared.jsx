import { co } from '../../styles/theme';
import { FONT_TYPES } from '../../constants';

export const getTypographySize = (type) => {
  const { font_size, line_height, margin_bottom } = FONT_TYPES[type];
  return `
    font-size: ${font_size}rem;
    line-height: ${line_height}em;
    ${margin_bottom ? `margin-bottom: ${margin_bottom}px` : ''}
  `;
};

export const getTypographySharedStyle = (prop, value) => {
  switch (prop) {
    case 'marginless':
      return 'margin: 0px;';
    case 'link':
      return value
        ? `
        color: ${co.accentColor};
        text-decoration: underline;
        `
        : '';
    case 'light':
      return `
      font-weight: 300;
      `;
    case 'medium':
      return `
      font-weight: 500;
      `;
    case 'semibold':
      return `
      font-weight: 600;
      `;
    case 'bold':
      return `
      font-weight: 700;
      `;
    case 'color':
      return `
      color: ${value};
      `;
    case 'hovund':
      return `
        &:hover {
          text-decoration: underline;
        }
      `;
    case 'underline':
      return `
      text-decoration: underline;
      `;
    case 'align':
      return `
      text-align: ${value};
      `;
    case 'fullwidth':
      return `
      width: 100%;
      `;
    default:
      return '';
  }
};
