import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Modal
      modalWindow: 'Modal window.',
      closeModal: 'Close the modal window.',

      // Global Status Message
      statusMessagesList: 'The list of status messages.',
      success: 'Success!',
      error: 'Error :-(',
      successfulSubmission: 'The data was successfully submitted.',
      errorMessage: 'Something went wrong. Please try again later.',

      // Forms: common phrases
      requiredField: 'This field is required.',
      incorrectEmail: 'This email is incorrect.',
      sendButton: 'Send',
      showTooltip: 'Show tooltip.',

      // Feedback Form
      feedbackFormTitle: 'We will definitely answer you!',
      nameAndSurname: 'Name and surname',
      freeForm: 'In free form',

      // Subscription section
      subscriptionDescription:
        'Subscribe to our sweet newsletter and always be aware of all the most delicious that we have going on. We promise not to spam or send any unnecessary nonsense. Honestly =)',
      subscriptionTitle: 'Subscribe to our newsletter!',

      // Breadcrumbs
      main: 'Main',
      catalog: 'Catalog',

      // Offer Section
      order: 'Order',
      offerSectionTitle: 'Order one of our best ice creams!',

      // Ice cream offers
      showPrevious: 'Show previous ice cream',
      showNext: 'Show next ice cream',

      strawberryCornTitle: 'Soft ice cream with strawberry jam',
      strawberryCornDescription:
        'Natural ice cream made from fresh cream and milk with delicious strawberry jam is the perfect dessert for the whole family.',

      bananaCornTitle: 'Ice cream with banana flavor',
      bananaCornDescription:
        'Ice cream with a bright banana flavor will give you freshness and enjoyment even on the hottest summer day.',

      caramelCornTitle: 'Caramel ice cream with marshmallows',
      caramelCornDescription:
        'An unusual sweet dessert with caramel topping and marshmallow pieces will win the hearts of sweet teeth of all ages.',

      // Offers bullet pagination
      iceCreamNo: 'Ice cream Number',
      iceIsShown: 'This ice cream is on the screen now',
      iceIsNotShown: 'This ice cream is not on the screen now',

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

      // Blog article tile
      recentInBlog: 'New in our blog',
      serveFruitSorbets: '10 ways to serve fruit sorbets to the table',

      // Gift tile
      readGiftDetails: 'More details',
      giftIllustration: 'Illustrative representation of the gift',

      // Gifts
      raspberryGift: 'Raspberry for free!',
      raspberryGiftDescription:
        'If you buy 2 kg of any fruit ice cream, we will add a jar of raspberry jam to your order for free.',

      marshmallowGift: 'Marshmallow for free!',
      marshmallowGiftDescription:
        'If you buy 2 kg of ice cream, we will add a package of tender marshmallows to your order for free.',
    },
  },
  fr: {
    translation: {
      // Modal
      modalWindow: 'Fenêtre modale.',
      closeModal: 'Fermez la fenêtre modale.',

      // Global Status Message
      statusMessagesList: "La liste des messages d'état.",
      success: 'Succès!',
      error: 'Erreur :-(',
      successfulSubmission: 'Les données ont été soumises avec succès.',
      errorMessage: "Quelque chose s'est mal passé. Veuillez réessayer plus tard.",

      // Forms: common phrases
      requiredField: 'Ce champ est requis.',
      incorrectEmail: 'Cet e-mail est incorrect.',
      sendButton: 'Envoyer',
      showTooltip: 'Afficher une infobulle.',

      // Feedback Form
      feedbackFormTitle: 'Nous vous répondrons certainement!',
      nameAndSurname: 'Nom et surnom',
      freeForm: 'Sous forme libre',

      // Subscription section
      subscriptionDescription:
        'Abonnez-vous à notre douce newsletter et soyez toujours au courant de tout ce que nous avons de plus délicieux. Nous nous engageons à ne pas spammer ni envoyer de bêtises inutiles. Franchement =)',
      subscriptionTitle: 'Abonnez-vous à notre newsletter!',

      // Breadcrumbs
      main: "D'accueil",
      catalog: 'Catalogue',

      // Offer Section
      order: 'Ordre',
      offerSectionTitle: 'Commandez une de nos meilleures glaces!',

      // Ice cream offers
      showPrevious: 'Afficher la glace précédente',
      showNext: 'Afficher la glace suivante',

      strawberryCornTitle: 'Glace molle à la confiture de fraise',
      strawberryCornDescription:
        'Une glace naturelle à base de crème fraîche et de lait avec une délicieuse confiture de fraises est le dessert parfait pour toute la famille.',

      bananaCornTitle: 'Glace au goût de banane',
      bananaCornDescription:
        "Une crème glacée au goût éclatant de banane vous procurera fraîcheur et plaisir même lors des journées d'été les plus chaudes.",

      caramelCornTitle: 'Glace au caramel avec des guimauves',
      caramelCornDescription:
        'Un dessert sucré inhabituel avec une garniture au caramel et des morceaux de guimauve gagnera le cœur des becs sucrés de tous âges.',

      // Offers bullet pagination
      iceCreamNo: 'Numéro de crème glacée',
      iceIsShown: "Cette glace est à l'écran maintenant",
      iceIsNotShown: "Cette glace n'est pas à l'écran maintenant",

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

      // Blog article tile
      recentInBlog: 'Nouveau dans notre blog',
      serveFruitSorbets: '10 façons de servir des sorbets aux fruits à table',

      // Gift tile
      readGiftDetails: 'Plus de détails',
      giftIllustration: 'Représentation illustrative du cadeau',

      // Gifts
      raspberryGift: 'Framboise gratuitement!',
      raspberryGiftDescription:
        "Lors de l'achat de 2 kg de n'importe quelle glace aux fruits, nous ajouterons gratuitement un pot de confiture de framboises à votre commande.",

      marshmallowGift: 'Guimauve gratuitement!',
      marshmallowGiftDescription:
        "Lors de l'achat de 2 kg de crème glacée, nous ajouterons gratuitement un paquet de tendres guimauves à votre commande.",
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
