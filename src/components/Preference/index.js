import './index.scss';

const Preference = (data) => {
  // eslint-disable-next-line no-undef
  const mp = new MercadoPago('TEST-691c3d8f-fb34-4c59-b1a4-43e5bdccd8fe', {
    locale: 'es-PE',
  });

  // eslint-disable-next-line no-unused-vars
  const checkout = mp.checkout({
    preference: {
      id: data.preferenceId,
    },
    autoOpen: true,
  });
  console.log('wilfredo', checkout);
};

export default Preference;
