import { CgGym } from 'react-icons/cg'


export const links = [
    {
        name: "Home",
        path: '/gym'
    },
    {
        name: "Sobre",
        path: '/about'
    },
    {
        name: "Galeria",
        path: '/gallery'
    },
    {
        name: "Planos",
        path: '/plans'
    },
    {
        name: "Professores",
        path: '/trainers'
    },
    {
        name: "Contato",
        path: '/contact'
    }
]


export const programs = [
    {
        id: 1,
        icon: <CgGym />,
        title: "Musculação",
        info: "Os melhores e mais avançados equipamentos.",
        path: "/programs"
    },
    {
        id: 2,
        icon: <CgGym />,
        title: "Ginástica",
        info: "Ginástica funcional para todo o corpo.",
        path: "/programs"
    },
    {
        id: 3,
        icon: <CgGym />,
        title: "Treinos",
        info: "Treinos voltados para o melhor rendimento.",
        path: "/programs"
    },
    {
        id: 4,
        icon: <CgGym />,
        title: "Aeróbica",
        info: "Ganhe fôlego para o seu dia a dia.",
        path: "/programs"
    }
]


export const values = [
    {
        id: 1,
        icon: <CgGym />,
        title: "Gym SHAPE",
        desc: "Nosso exclusivo circuito de emagrecimento, intenso e com duração de 30 minutos."
    },
    {
        id: 2,
        icon: <CgGym />,
        title: "Gym CROSS",
        desc: "Emagrecimento com ganho de condicionamento físico em apenas 30 minutos."
    },
    {
        id: 3,
        icon: <CgGym />,
        title: "Gym HIIT",
        desc: "Um treino intervalado de alta intensidade que usa o peso do próprio corpo."
    },
    {
        id: 4,
        icon: <CgGym />,
        title: "Gym STRONG",
        desc: "É um treino coletivo de hipertrofia, com foco em fortalecimento muscular."
    }
]


export const faqs = [
    {
        id: 1,
        question: "O que é o Gym Amigo?",
        answer: "É um programa para indicação de seus amigos para treinar juntos e ainda ganhar descontos."
    },
    {
        id: 2,
        question: "O que é Espaço do cliente?",
        answer: "É um local em nossa academia onde tiramos todas a dúvidas presencialmente."
    },
    {
        id: 3,
        question: "Vocês tem professores?",
        answer: "Em todas as únidades temos professores capacitados e especializados."
    },
    {
        id: 4,
        question: "Como pago a mensalidade?",
        answer: "Existem diversas formas: Pode pagar presencialmente, pix, cartão ou boleto."
    },
    {
        id: 5,
        question: "Qual o horário de funcionamento?",
        answer: "Funcionamos todos os dias do ano, inclusive em finais de semana e feriados."
    },
    {
        id: 6,
        question: "Onde posso treinar?",
        answer: "Você pode treinar em qualquer uma das nossas unidades espalhadas em todo o território nacional."
    }
]


export const testimonials = [
    {
        id: 1,
        name: "Joice Silva",
        quote: "Tive o grande prazer de treinar na rede de academias Gym, e estou muito satisfeita com minha experiência.",
        job: "Advogada",
        avatar: require("./images/avatar1.png")
    },
    {
        id: 2,
        name: "Júlia Santos",
        quote: "Assim que saio da faculdade vou para a Gym, amo este local e recomendo.",
        job: "Estudante",
        avatar: require("./images/avatar2.png")
    },
    {
        id: 3,
        name: "Marta Soares",
        quote: "Ambiênte lega, descolado, aconchegante, divertido e além de tudo, posso manter a forma para o verão.",
        job: "Designer",
        avatar: require("./images/avatar3.png")
    },
    {
        id: 4,
        name: "Joana De Andrade",
        quote: "Depois de um dia de trabalho, gosto muito de passar um tempinho cuidando do corpo.",
        job: "Secretária",
        avatar: require("./images/avatar4.png")
    },
    {
        id: 5,
        name: "Gabrielle Oliveira",
        quote: "Além de ficar próximo da minha casa, posso ir a Gym a qualquer hora e dia da semana, amo.",
        job: "Cabelereira",
        avatar: require("./images/avatar5.png")
    }
]


export const plans = [
    {
        id: 1,
        name: 'Pacote Prata',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        price: 49.90,
        features: [
            {feature: 'Musculação', available: true},
            {feature: 'Aeróbico', available: true},
            {feature: 'Treino online', available: true},
            {feature: 'Gym App', available: true},
            {feature: 'Primeira semana grátis', available: true},
            {feature: '30 dias grátis para amigo', available: false},
            {feature: 'Acesso ilimitado', available: false},
            {feature: 'Massagem', available: false},
            {feature: 'Sauna', available: false},
            {feature: 'Acompanhamento profissional', available: false},
            {feature: 'Piscina', available: false},
            {feature: 'Acesso em todo Brasil', available: false},
            {feature: '30 Dias de teste grátis', available: false}
        ]
    },
    {
        id: 2,
        name: 'Pacote Ouro',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        price: 69.90,
        features: [
            {feature: 'Musculação', available: true},
            {feature: 'Aeróbico', available: true},
            {feature: 'Treino online', available: true},
            {feature: 'Gym App', available: true},
            {feature: 'Primeira semana grátis', available: true},
            {feature: '30 dias grátis para amigo', available: true},
            {feature: 'Acesso ilimitado', available: true},
            {feature: 'Massagem', available: true},
            {feature: 'Sauna', available: false},
            {feature: 'Acompanhamento profissional', available: false},
            {feature: 'Piscina', available: false},
            {feature: 'Acesso em todo Brasil', available: false},
            {feature: '30 Dias de teste grátis', available: false}
        ]
    },
    {
        id: 3,
        name: 'Pacote Platina',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        price: 89.90,
        features: [
            {feature: 'Musculação', available: true},
            {feature: 'Aeróbico', available: true},
            {feature: 'Treino online', available: true},
            {feature: 'Gym App', available: true},
            {feature: 'Primeira semana grátis', available: true},
            {feature: '30 dias grátis para amigo', available: true},
            {feature: 'Acesso ilimitado', available: true},
            {feature: 'Massagem', available: true},
            {feature: 'Sauna', available: true},
            {feature: 'Acompanhamento profissional', available: true},
            {feature: 'Piscina', available: true},
            {feature: 'Acesso em todo Brasil', available: true},
            {feature: '30 Dias de teste grátis', available: true}
        ]
    }
]


const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Sophia Arantes',
        job: 'Aeróbico',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Samanta Silva',
        job: 'Funcional',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Marco Antônio',
        job: 'Musculação',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Jhonny Aki',
        job: 'Massagem',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Natalia Gomes',
        job: 'Musculação',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Roberta Maria',
        job: 'Spining',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]