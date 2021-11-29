let webFont;

// NOTE: use "webfontloader" from "theprojectsomething/webfontloader#feature/google-fonts-v2"
// until https://github.com/typekit/webfontloader/pull/437 PR is merged
export default async function requireFonts(families) {
  if (!webFont) {
    const { default: WebFont } = await import('webfontloader');
    webFont = WebFont;
  }

  setTimeout(() => (
    webFont.load({
      google: {
        families: families.constructor === String ?
          [families] :
          families,
        classes: false,
        events: false,
        version: 2
      }
    })
  ), 50);
}
