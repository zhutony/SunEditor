import { Plugin } from './Plugin';

// command
import blockquote from './command/blockquote';

// submenu
import align from './submenu/align';
import font from './submenu/font';
import fontSize from './submenu/fontSize';
import fontColor from './submenu/fontColor';
import hiliteColor from './submenu/hiliteColor';
import horizontalRule from './submenu/horizontalRule';
import list from './submenu/list';
import table from './submenu/table';
import formatBlock from './submenu/formatBlock';
import lineHeight from './submenu/lineHeight';
import template from './submenu/template';
import paragraphStyle from './submenu/paragraphStyle';
import textStyle from './submenu/textStyle';

// dialog
import link from './dialog/link';
import image from './dialog/image';
import video from './dialog/video';
import math from './dialog/math';

declare const _plugins: Plugin[];

export { blockquote, align, font, fontSize, fontColor, hiliteColor, horizontalRule, list, table, formatBlock, lineHeight, template, paragraphStyle, textStyle, link, image, video, math };
export default _plugins;