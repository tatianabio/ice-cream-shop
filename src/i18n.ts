import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      order: 'Order',

      // Benefits tile
      benefitsTitle: 'Gllacy Shop is an online and offline store selling ice cream of its own production by weight',
      benefitManufacturing: 'All our ice cream is made in-house using modern equipment and time-tested technologies.',
      benefitQuality:
        'Cream and milk of the highest quality are used to make ice cream. All ingredients and additives are made from natural raw materials.',
      benefitFarms:
        'The purchase of ingredients is made only from proven farms with which we have long-term cooperation.',
      benefitDelivery:
        'Delivery of our ice cream is carried out in a special thermal pack, which prevents the ice cream from melting and leads to keeping an excellent taste.',

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

      // Benefits tile
      benefitsTitle:
        'Gllacy Shop est une boutique en ligne et hors ligne vendant des glaces de sa propre production au poids',
      benefitManufacturing:
        "Toutes nos glaces sont fabriquées en interne à l'aide d'équipements modernes et de technologies éprouvées.",
      benefitQuality:
        'La crème et le lait de la plus haute qualité sont utilisés pour faire de la crème glacée. Tous les ingrédients et additifs sont fabriqués à partir de matières premières naturelles.',
      benefitFarms:
        "L'achat d'ingrédients se fait uniquement auprès de fermes éprouvées avec lesquelles nous avons une coopération à long terme.",
      benefitDelivery:
        'La livraison de nos glaces est effectuée dans un pack thermique spécial, qui ne permet pas à la glace de fondre et vous permet de conserver un excellent goût.',

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
