import IsMobileJS from 'ismobilejs';

export default function isMobile() {
  return document.documentElement.clientWidth < 1024 || (
    IsMobileJS(window.navigator.userAgent).any &&
      document.documentElement.clientWidth <= 1023
  );
}
