const CARDS = [
    {
        id: 1,
        name: '1ª Temporada',
        bio: 'Após ficar desaparecido por quase vinte anos, o cientista Rick Sanchez reaparece na porta da casa de sua filha Beth para morar com ela e sua família.',
        link: 'https://www.youtube.com/embed/BFTSrbB2wII',
        brokenLink: '1º Temporada de Rick and Morty'
    },
    {
        id: 2,
        name: '2ª Temporada',
        bio: 'Após Rick e Morty terem decidido descongelar o tempo, eles terão de enfrentar parasitas alienígenas, Jerrys alternativos e uma dimensão que possivelmente nem existe.',
        link: 'https://www.youtube.com/embed/y23LCrlGQiQ?si=aJPVvba-8tEU3gQc',
        brokenLink: '2º Temporada de Rick and Morty'
    },
    {
        id: 3,
        name: '3ª Temporada',
        bio: 'Morty e Summer fazem uma viagem interdimensional para encontrar Rick, mas acabam achando vários sósias do cientista. Morty quer que Rick apague suas memórias.',
        link: 'https://www.youtube.com/embed/rLyOul8kau0?si=LDUxcrBhZpekuPsC',
        brokenLink: '3º Temporada de Rick and Morty'
    },
    {
        id: 4,
        name: '4ª Temporada',
        bio: 'A dupla que dá título ao programa aparece desvendando os novos mistérios da galáxia, enquanto lidam com autoridades espaciais que já os perseguem há um bom tempo.',
        link: 'https://www.youtube.com/embed/hl1U0bxTHbY',
        brokenLink: '4º Temporada de Rick and Morty'
    },
    {
        id: 5,
        name: '5ª Temporada',
        bio: 'Os dois protagonistas se arremessam em direção a um planeta em uma nave em ruínas, momento em que Morty decide chamar Jessica para confessar seus sentimentos.',
        link: 'https://www.youtube.com/embed/YUi5kz5RqfQ?si=9YBu85mFcRlH4TkD',
        brokenLink: '5º Temporada de Rick and Morty'
    },
    {
        id: 6,
        name: '6ª Temporada',
        bio: 'A história começa logo após o final da 5ª temporada. Os dois personagens têm dificuldades para se vestir e estão perto de precisarem enfrentar um… oceano de xixi.',
        link: 'https://www.youtube.com/embed/TKZquWaV_g4?si=HYhc1jBPVpFnmm_x',
        brokenLink: '6º Temporada de Rick and Morty'
    },
    {
        id: 7,
        name: '7ª Temporada',
        bio: 'Mr. Poopybutthole, surge melhor do que na temporada anterior e parece estar se recuperando de seus problemas. Contudo, as coisas pioram quando o personagem quebra as pernas e todas as coisas ruins que ele parecia ter deixado para trás retornam.',
        link: 'https://www.youtube.com/embed/PkZtVBNkmso?si=Ut0GqMFa2CX3YVrg',
        brokenLink: '7º Temporada de Rick and Morty'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        characters: CARDS,
    }
}) 

const LIST = [
    {
        id: 1,
        name: 'Bia Fray',
        comments: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        textAlt: 'Mulher parda, usando óculos de armação preta, usando uma blusa branca, cabelo preto em coque, ao fundo uma parede azul clara'
    },
    {
        id: 2,
        name: 'Fran Cross',
        comments: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
        textAlt: 'Mulher branca, de cabelo pink curto, sorrindo, ao fundo uma parede de livros'
    },
    {
        id: 3,
        name: 'Kira Oliveira',
        comments: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        avatar: 'assets/img/perfil.jpeg',
        textAlt: 'Mulher branca, de cabelo castanho escuro longo, olhos castanhos escuros, sorrindo, usando uma camisa cinza, ao fundo uma parede branca com mensagens'
    },
    {
        id: 4,
        name: 'Lady Croft',
        comments: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        textAlt: 'Mulher branca, de cabelo castanho claro longo, usando uma camisa vermelha, ao fundo uma parede marrom'
    },
    {
        id: 5,
        name: 'Pink Blue',
        comments: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        textAlt: 'Mulher branca, de cabelo castanho escuro curso e escaracolado,sorrindo, usando uma camisa cinza, ao fundo uma parede pink'
    }
]

const App1 = new Vue({
    el: '#testimonials',
    data: {
        testimonials: LIST,
    }
}) 