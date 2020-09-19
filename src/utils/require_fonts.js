let webFont;

export default async function requireFonts() {
  if (!webFont) {
    const { default: WebFont } = await import('webfontloader');
    webFont = WebFont;
  }

  setTimeout(() => (
    webFont.load({
      typekit: {
        id: 'yjq4zkd', // 'Lato:300,400,500,700,900'
        classes: false,
        events: false
      }
      // google: {
      //   families: families.constructor === String ?
      //     [families] :
      //     families,
      //   classes: false,
      //   events: false
      // }
    })
  ), 50);
}
