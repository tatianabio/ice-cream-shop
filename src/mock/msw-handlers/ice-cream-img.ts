import { rest } from 'msw';
import raspberry from '../../assets/img/ice-cream-tastes/raspberry.png';
import pistachio from '../../assets/img/ice-cream-tastes/pistachio.png';

const iceCreamImages = [
  {
    path: '/raspberry',
    content: raspberry,
  },
  {
    path: '/pistachio',
    content: pistachio,
  },
];

// eslint-disable-next-line
export const getProductImg = (path: string, img: any) =>
  rest.get(path, async (req, res, ctx) => {
    const image = await fetch(img).then((resp) => resp.arrayBuffer());
    return res(
      ctx.set('Content-Length', image.byteLength.toString()),
      ctx.set('Content-Type', 'image/png'),
      ctx.body(image)
    );
  });

export const allIceCreamImages = iceCreamImages.map(({ path, content }) => {
  return getProductImg(path, content);
});
