import { rest } from 'msw';
import raspberry from '../../../assets/img/iceCream/iceCreamScoops/raspberry.png';
import pistachio from '../../../assets/img/iceCream/iceCreamScoops/pistachio.png';
import bubblegum from '../../../assets/img/iceCream/iceCreamScoops/bubblegum.png';
import fruitSorbets from '../../../assets/img/iceCream/fruit-sorbets.png';
import cornRaspberry from '../../../assets/img/iceCream/corn-raspberry.png';
import cornMarshmallow from '../../../assets/img/iceCream/corn-marshmallow.png';
import cornStrawberry from '../../../assets/img/iceCream/corn-strawberry.png';
import cornBanana from '../../../assets/img/iceCream/corn-banana.png';
import cornCaramel from '../../../assets/img/iceCream/corn-caramel.png';

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
    path: '/bubblegum',
    content: bubblegum,
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
  {
    path: '/corn-strawberry',
    content: cornStrawberry,
  },
  {
    path: '/corn-banana',
    content: cornBanana,
  },
  {
    path: '/corn-caramel',
    content: cornCaramel,
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
