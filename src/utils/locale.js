import store from '../store';

export default function t(path) {
  let obj = store.state.i18n[store.state.locale];
  path.split('.').forEach(v => { obj = obj[v]; });

  return obj;
}
