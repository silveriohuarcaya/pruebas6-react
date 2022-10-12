import './index.scss';

const Preference = () => {
  // eslint-disable-next-line no-undef
  const mp = new MercadoPago('TEST-691c3d8f-fb34-4c59-b1a4-43e5bdccd8fe', {
    locale: 'es-PE',
  });

  const handleClick = () => {
    const checkout = mp.checkout({
      preference: {
        id: '1213369057-b435beb4-442b-4c19-97b8-8cc9c5c5b1b8',
      },
    });
    checkout.open();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Comprar
      </button>
    </div>
  );
};

export default Preference;
