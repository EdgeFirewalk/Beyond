import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      articles: [
        {
          id: 1,
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
          title: 'British scientists found a way to talk to cats',
          description: 'There is a potentially effective way for us to understand our pets!',
          publicationDate: '25.06.2023',
          text: 'British scientists have achieved a new breakthrough in the field of animal language, having managed to learn how to talk with cats. With the help of special techniques and training, scientists were able to decipher the gestures, purrs and facial expressions of cats, and also learned to translate their thoughts and instructions into the "Kotovsky" language. This opens up new possibilities for more effective communication with cats and may form the basis for further research in the field of communication with animals. Sed sodales consectetur erat, in malesuada tortor imperdiet vitae. Duis euismod, elit ut ultrices efficitur, lectus ipsum gravida sapien, a tincidunt urna enim eget metus. Cras tortor lorem, consequat vel ultricies eget, laoreet eget quam. Nam at diam at lorem laoreet auctor. Etiam eget quam at nulla dapibus congue. Praesent sed ipsum consectetur, porta sapien vel, venenatis erat. Nulla ut aliquam erat, in venenatis ligula. Phasellus et dapibus est, in pharetra est. Ut magna augue, fringilla eget vehicula a, convallis non felis. Donec sit amet accumsan lorem, nec efficitur justo. Nullam vitae leo viverra, eleifend leo vitae, hendrerit justo. Pellentesque tincidunt sapien non urna aliquet suscipit. Vivamus malesuada tincidunt turpis ac tincidunt. Proin bibendum eros eget bibendum molestie. Donec ac dui ultrices, convallis mi vitae, lobortis lorem. Quisque eu viverra nisi. Morbi vitae nulla id felis tempus sagittis vitae vel libero. Duis ultricies venenatis efficitur. Morbi et orci consequat, convallis enim et, eleifend ante. Donec sit amet nisl justo. Nullam ac ipsum sodales, euismod nunc nec, dignissim urna. Ut faucibus eros odio, vel aliquam libero iaculis nec.'
        },
        {
          id: 2,
          imageUrl: 'https://prof-mk.ru/wp-content/uploads/2020/12/lorem-ipsum-tekst-ryba.png',
          title: 'Lorem Ipsum',
          description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          publicationDate: '05.03.2023',
          text: 'Maecenas viverra vel velit ut dapibus. Integer sed nunc arcu. Fusce facilisis leo non tempus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque semper semper feugiat. Donec laoreet risus orci. Donec ultrices tincidunt ligula sed varius. Suspendisse accumsan odio nec magna egestas, at sollicitudin mauris dignissim. Mauris vel eros purus. Nam in ligula et est laoreet consectetur fermentum eu sapien. Proin blandit elit eu eros commodo venenatis. Ut vehicula consequat purus, quis ultricies augue venenatis eu. Ut iaculis rhoncus felis. Mauris interdum congue nibh, non rutrum ligula tempor ut. In et odio iaculis, hendrerit purus nec, laoreet nunc. Pellentesque aliquam aliquet ex. Duis pharetra quam arcu, eu egestas est convallis sit amet. Suspendisse potenti. Curabitur lacus velit, dictum ac ultricies at, pellentesque lobortis turpis. Nam id tellus eu nisl commodo fermentum id in erat. Donec neque nisi, venenatis id pretium et, mattis vel ante. Donec lectus mi, dapibus at risus non, egestas molestie eros. Quisque rhoncus mollis faucibus.'
        },
        {
          id: 3,
          imageUrl: 'https://cdn5.idcgames.com/storage/image/1333/game_home_bg_section_2/default.jpg',
          title: 'We may not be completely alone by now...',
          description: '⎅⟒⌇☊⍀⟟⌿⏁⟟⍜⋏ ⟟⌇ ⋏⍜⏁ ⌿⍀⍜⎐⟟⎅⟒⎅',
          publicationDate: '☊⍀.03.⋏⍜⏁⍜',
          text: '⌰⍜⍀⟒⋔ ⟟⌿⌇⎍⋔ ⎅⍜⌰⍜⍀ ⌇⟟⏁ ⏃⋔⟒⏁, ☊⍜⋏⌇⟒☊⏁⟒⏁⎍⍀ ⏃⎅⟟⌿⟟⌇☊⟟⋏☌ ⟒⌰⟟⏁. ⎐⟒⌇⏁⟟⏚⎍⌰⎍⋔ ⋏⍜⋏ ⍀⟟⌇⎍⌇ ⟒⎍ ⟒⌇⏁ ⋔⏃⌰⟒⌇⎍⏃⎅⏃ ⟒⌰⟒⋔⟒⋏⏁⎍⋔. ⌇⎍⌇⌿⟒⋏⎅⟟⌇⌇⟒ ⌿⍜⏁⟒⋏⏁⟟. ⟒⏁⟟⏃⋔ ⋔⏃⏁⏁⟟⌇ ⌰⏃⍜⍀⟒⟒⏁ ⍾⎍⏃⋔ ⟟⎅ ⟒☌⟒⌇⏁⏃⌇. ☊⍀⏃⌇ ⎐⎍⌰⌿⎍⏁⏃⏁⟒, ⋏⟟⏚⊑ ⌇⟒⎅ ⌿⍀⟒⏁⟟⎍⋔ ⌇⍜⎅⏃⌰⟒⌇, ⎅⎍⟟ ⟒⌇⏁ ⎎⏃⎍☊⟟⏚⎍⌇ ⌇⏃⌿⟟⟒⋏, ⋏⟒☊ ☊⍜⋔⋔⍜⎅⍜ ⟒⍀⏃⏁ ⌰⟟⏚⟒⍀⍜ ⟒☌⟒⏁ ⍜⍀☊⟟. ⎐⟒⌇⏁⟟⏚⎍⌰⎍⋔ ⎐⍜⌰⎍⏁⌿⏃⏁ ⎅⟟⏃⋔ ⎐⟒⌰ ⟒⍀⍜⌇ ☊⍜⋏☌⎍⟒ ☊⍜⋏⎅⟟⋔⟒⋏⏁⎍⋔. ⍾⎍⟟⌇⍾⎍⟒ ⎐⟟⏁⏃⟒ ⍀⊑⍜⋏☊⎍⌇ ⋔⏃☌⋏⏃, ⍾⎍⟟⌇ ☊⎍⍀⌇⎍⌇ ⋏⎍⌰⌰⏃. ⏃⟒⋏⟒⏃⋏ ⟟⋔⌿⟒⍀⎅⟟⟒⏁ ⟒⋏⟟⋔ ⏃⏁ ⌰⎍☊⏁⎍⌇ ⌿⍜⍀⏁⏁⟟⏁⍜⍀. ⟟⋏⏁⟒☌⟒⍀ ⟟⋏ ⟒⍀⏃⏁ ⎐⟟⏁⏃⟒ ⋔⏃⎍⍀⟟⌇ ⟟⋏⏁⟒⍀⎅⎍⋔ ⎎⟒⎍☌⟟⏃⏁. ⌇⟒⎅ ⌿⍀⟒⏁⟟⎍⋔ ⌰⟟⏚⟒⍀⍜ ⎐⟟⏁⏃⟒ ⍜⍀⋏⏃⍀⟒ ⌿⟒⌰⌰⟒⋏⏁⟒⌇⍾⎍⟒. ⋏⎍⌰⌰⏃⋔ ⌇⟒⎅ ⟒⌰⟒⟟⎎⟒⋏⎅ ⎍⍀⋏⏃. ☊⍀⏃⌇ ⏃☊ ⏁⎍⍀⌿⟟⌇ ⋔⏃☌⋏⏃. ⎎⎍⌇☊⟒ ⋔⏃☌⋏⏃ ⏃⍀☊⎍, ⎍⌰⏁⍀⟟☊⟟⟒⌇ ⏃ ☊⍜⋔⋔⍜⎅⍜ ⎐⟟⏁⏃⟒, ⟟⏃☊⎍⌰⟟⌇ ⟟⋏ ⌰⏃☊⎍⌇. ⎐⟒⌇⏁⟟⏚⎍⌰⎍⋔ ⍜⍀⋏⏃⍀⟒ ⟒⌇⏁ ⟒⎍ ⎎⟒⍀⋔⟒⋏⏁⎍⋔ ⌿⟒⌰⌰⟒⋏⏁⟒⌇⍾⎍⟒. ⌿⊑⏃⌇⟒⌰⌰⎍⌇ ⏁⟒⋔⌿⍜⍀, ⟒⋏⟟⋔ ⌿⍜⍀⏁⏁⟟⏁⍜⍀ ⏁⟟⋏☊⟟⎅⎍⋏⏁ ⌿⍜⌇⎍⟒⍀⟒, ⌿⎍⍀⎍⌇ ⋔⏃⌇⌇⏃ ⏃⌰⟟⍾⎍⏃⋔ ⌇⏃⌿⟟⟒⋏, ⎍⏁ ⟒⌰⟒⟟⎎⟒⋏⎅ ⌿⎍⍀⎍⌇ ⎅⍜⌰⍜⍀ ⌇⟒⎅ ⋔⏃⎍⍀⟟⌇. ⌰⍜⍀⟒⋔ ⟟⌿⌇⎍⋔ ⎅⍜⌰⍜⍀ ⌇⟟⏁ ⏃⋔⟒⏁, ☊⍜⋏⌇⟒☊⏁⟒⏁⎍⍀ ⏃⎅⟟⌿⟟⌇☊⟟⋏☌ ⟒⌰⟟⏁. ⏃⌰⟟⍾⎍⏃⋔ ⏃⏁ ⎎⍀⟟⋏☌⟟⌰⌰⏃ ⎅⎍⟟. ⋔⏃⎍⍀⟟⌇ ⌇⎍⌇☊⟟⌿⟟⏁ ⟒⌰⟒⋔⟒⋏⏁⎍⋔ ⟒⌇⏁, ⎍⏁ ⋔⏃⌖⟟⋔⎍⌇ ⟒⌖ ⎎⏃☊⟟⌰⟟⌇⟟⌇ ⍾⎍⟟⌇. ⎎⎍⌇☊⟒ ⌿⍜⍀⏁⏁⟟⏁⍜⍀ ⌰⍜⏚⍜⍀⏁⟟⌇ ⎐⍜⌰⎍⏁⌿⏃⏁. ⋏⎍⋏☊ ⎎⍀⟟⋏☌⟟⌰⌰⏃, ⎅⟟⏃⋔ ⎐⟒⌰ ⟒⎍⟟⌇⋔⍜⎅ ⎐⟟⎐⟒⍀⍀⏃, ⏁⎍⍀⌿⟟⌇ ⎅⟟⏃⋔ ⎎⏃⎍☊⟟⏚⎍⌇ ⌇⏃⌿⟟⟒⋏, ⎍⏁ ⎎⏃☊⟟⌰⟟⌇⟟⌇ ⟒⍀⍜⌇ ⋏⟟⏚⊑ ⋏⍜⋏ ⟒⍀⍜⌇. ⎅⍜⋏⟒☊ ⌰⎍☊⏁⎍⌇ ☊⍜⋏⌇⟒☊⏁⟒⏁⎍⍀ ⌰⏃⍜⍀⟒⟒⏁. ⟟⋏⏁⟒☌⟒⍀ ⌇⟒⎅ ⌰⟒⍜ ⟒⏁ ⌇⟒⋔ ⌿⍀⟒⏁⟟⎍⋔ ⍜⍀⋏⏃⍀⟒ ⟒⎍ ⌇⟟⏁ ⏃⋔⟒⏁ ⋏⟟⏚⊑. ⋔⏃⟒☊⟒⋏⏃⌇ ⏃☊ ⌿⎍⍀⎍⌇ ⟒⏁ ⌰⟒⍜ ⌇☊⟒⌰⟒⍀⟟⌇⍾⎍⟒ ⍀⎍⏁⍀⎍⋔ ⏃ ⟟⋏ ⟒⌖. ⌿⍀⏃⟒⌇⟒⋏⏁ ⋔⏃⌖⟟⋔⎍⌇ ⏃⍀☊⎍ ⏃ ⌿⎍⌰⎐⟟⋏⏃⍀ ⎎⏃⎍☊⟟⏚⎍⌇. ⋔⍜⍀⏚⟟ ⋏⟟⌇⟟ ⋔⏃⌇⌇⏃, ⎐⎍⌰⌿⎍⏁⏃⏁⟒ ⋏⟒☊ ⎍⌰⏁⍀⟟☊⟒⌇ ⎐⟟⏁⏃⟒, ⎍⌰⌰⏃⋔☊⍜⍀⌿⟒⍀ ⟒☌⟒⏁ ⍜⍀☊⟟. ⋏⎍⌰⌰⏃ ⏚⟟⏚⟒⋏⎅⎍⋔ ⋏⟒⍾⎍⟒ ⍜⍀⋏⏃⍀⟒, ⌰⏃⍜⍀⟒⟒⏁ ⋏⟟⌇⌰ ⎍⏁, ⌿⎍⌰⎐⟟⋏⏃⍀ ⎅⟟⏃⋔. ⎐⟟⎐⏃⋔⎍⌇ ⎐⎍⌰⌿⎍⏁⏃⏁⟒ ⌇☊⟒⌰⟒⍀⟟⌇⍾⎍⟒ ⟒⍀⍜⌇, ⋏⟒☊ ⏃⎍☊⏁⍜⍀ ⋏⟟⌇⌰ ⊑⟒⋏⎅⍀⟒⍀⟟⏁ ⋏⟒☊. ⋏⏃⋔ ⌇⟒⎅ ☊⎍⍀⌇⎍⌇ ⍾⎍⏃⋔. ⌿⍀⍜⟟⋏ ⟒⏁ ⋔⏃⎍⍀⟟⌇ ⋏⟒☊ ⋏⟟⌇⌰ ⌰⏃☊⟟⋏⟟⏃ ⏃⌰⟟⍾⎍⏃⋔. ⍾⎍⟟⌇⍾⎍⟒ ⎐⟒⌰ ⟒⌇⏁ ⏃☊☊⎍⋔⌇⏃⋏, ⌇⏃☌⟟⏁⏁⟟⌇ ⍾⎍⏃⋔ ⎍⏁, ☊⍜⋏☌⎍⟒ ⏃⎍☌⎍⟒. ⎎⎍⌇☊⟒ ⎐⟟⏁⏃⟒ ⏁⟒⌰⌰⎍⌇ ⟒☌⟒⏁ ⟒⍀⍜⌇ ⎍⌰⏁⍀⟟☊⟟⟒⌇ ⎐⎍⌰⌿⎍⏁⏃⏁⟒ ⟟⎅ ⟟⎅ ⍀⟟⌇⎍⌇. ⌿⟒⌰⌰⟒⋏⏁⟒⌇⍾⎍⟒ ⌰⏃☊⟟⋏⟟⏃ ⟒⌰⟒⟟⎎⟒⋏⎅ ⏃⎍☌⎍⟒ ⎐⟟⏁⏃⟒ ⏃⎍☊⏁⍜⍀.'
        }
      ]
    }
  }
})

export default store
