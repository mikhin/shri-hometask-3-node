export { default as Page__Header } from './__header';
export { default as Page__Body } from './__body';
export { default as Page__Footer } from './__footer';
export { default } from './page';

require('./__body/page__body.scss');
require('./__footer/page__footer.scss');

require('./page.scss');

require('./_view/_start/page_view_start.scss');
