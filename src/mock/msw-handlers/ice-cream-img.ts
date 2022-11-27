import { rest } from 'msw';
import raspberry from '../../assets/img/ice-cream/ice-cream-scoops/raspberry.png';
import pistachio from '../../assets/img/ice-cream/ice-cream-scoops/pistachio.png';
import fruitSorbets from '../../assets/img/ice-cream/fruit-sorbets.png';
import cornRaspberry from '../../assets/img/ice-cream/corn-raspberry.png';
import cornMarshmallow from '../../assets/img/ice-cream/corn-marshmallow.png';

const iceCreamImages = [
  {
    path: '/raspberry',
    content: raspberry,
  },
  {
    path: '/pistachio',
    content: pistachio,
  },
  {
    path: '/fruit-sorbets',
    content: fruitSorbets,
  },
  {
    path: '/corn-raspberry',
    content: cornRaspberry,
  },
  {
    path: '/corn-marshmallow',
    content: cornMarshmallow,
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
