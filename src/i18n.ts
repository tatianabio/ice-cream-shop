import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      order: 'Order',

      // Fillers
      jams: 'Jams',
      syrups: 'Syrups',
      fruit: 'Fruit',
      sprinkles: 'Sprinkles',
      chocolate: 'Chocolate',

      // Product Card
      iceCreamScoop: 'Scoop of ice cream',
      addToCart: 'Add one kilogram of the ice cream to the cart',
      notAvailable: 'Not available',

      // Ice cream tastes
      raspberry: 'Raspberry',
      raspberryDescription: 'Vanilla ice cream with raspberry jam',
    },
  },
  fr: {
    translation: {
      order: 'Ordre',

      // Fillers
      jams: 'Confitures',
      syrups: 'Sirops',
      fruit: 'Fruit',
      sprinkles: 'Pépites de sucre',
      chocolate: 'Chocolat',

      // Product Card
      iceCreamScoop: 'Boule de crème glacée',
      addToCart: 'Ajouter un kilogramme de crème glacée au panier',
      notAvailable: 'Indisponible',

      // Ice cream tastes
      raspberry: 'Framboise',
      raspberryDescription: 'Glace vanille à la confiture de framboise',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
