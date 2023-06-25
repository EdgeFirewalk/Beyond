import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      articles: [
        {
          id: 1,
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
          title: 'British scientists found a way to talk to cats',
          description: 'There is a potential solution for us to understand our pets!',
          publicationDate: '25.06.2023'
        },
        {
          id: 2,
          imageUrl: 'https://i.playground.ru/p/BZ-T5plu1TPLRxWVycej2A.jpeg',
          title: 'Was it the end?',
          description: 'Rocksteady Studios & Warner Bros. approved that something new about Batman Arkham game series is coming up pretty soon',
          publicationDate: '05.05.2023'
        }
      ]
    }
  }
})

export default store
