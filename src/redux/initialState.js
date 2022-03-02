export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: ' Gryzak czyszczący zęby',
        price: '25,20',
        image: 'assets/gryzak-czyszczacy-zeby.jpg',
      },
      {
        id: 2,
        title: 'Piłeczka dla psa',
        price: '21',
        image: 'assets/dog-ball.jpg',
      },
      {
        id: 3,
        title: 'Gumowy kurczak',
        price: '35',
        image: 'assets/Gumowy-kurczak.jpg',
      },
    ],

    loading: {
      active: false,
      error: false,
    },
  },
};
