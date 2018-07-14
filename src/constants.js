export const QUESTIONS = [
    {
        title: 'Sexo gostas?',
        name: 'sex',
        options: [
            {
                label: 'MALE',
                value: 'MALE',
            },
            {
                label: 'FEMALE',
                value: 'FEMALE',
            },
        ]
    },
    {
        title: 'DADOS PESSOAIS',
        options: [
            {
                label: 'Idade',
                help: 'Ex: 24',
                extraLabel: 'anos',
            },
            {
                label: 'Altura',
                help: 'Ex: 181',
                extraLabel: 'cm',
            },
            {
                label: 'Peso',
                help: 'Ex: 70.4',
                extraLabel: 'Kg',
            }
        ]
    },
    {
        title: 'NIVEL DE ACTIVIDADE FÍSICA?',
        name: 'level',
        options: [
            {
                label: 'TENHO UMA VIDA COMPLETAMENTE SEDENTARIA',
                value: 1,
            },
            {
                label: 'PRATICO ACTIVIDADE FÍSICA DE FORMA MUITO PONTUAL',
                value: 2,
            },
            {
                label: 'PRATICO ACTIVIDADE FÍSICA 2 A 3 VEZES POR SEMANA',
                value: 3,
            },
            {
                label: 'PRATICO ACTIVIDADE FÍSICA 4 A 5 VEZES POR SEMANA',
                value: 4,
            },
            {
                label: 'NÃO CONSIGO PASSAR UM DIA SEM PRATICAR ACTIVIDADE FÍSCA',
                value: 5,
            },
        ]
    },
    {
        title: 'OBJECTIVO?',
        name: 'goal',
        options: [
            {
                label: 'SAÚDE/MANUTENÇÃO',
                value: 1,
            },
            {
                label: 'REDUÇÃO DE MASSA GORDA',
                value: 2,
            },
            {
                label: 'AUMENTO DE MASSA MUSCULAR',
                value: 3,
            },
        ]
    },
    {
        title: 'COM QUAL DESTAS SITUAÇÕES SE IDENTIFICA MAIS',
        name: 'type',
        options: [
            {
                label: 'AUMENTO DE MASSA MUSCULAR',
                value: 1,
            },
            {
                label: 'TENHO MUITA DIFICULDADE EM GANHAR PESO',
                value: 2,
            },
            {
                label: 'GANHO PESO COM MUITA FACILIDADE',
                value: 3,
            },
        ]
    },
];

export const OTHERS = {
    finish: {
        header: 'Ora aqui esta o final do questionario questionario e tal',
        buttonTex: 'Download',
    },
    questions: {
        button: {
            label: 'Continue',
        }
    }
}

export const FILES = {
    1: [
        {
            text: '<1500 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
        {
            text: '1500 – 2000 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
        {
            text: '2000 – 2500 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
        {
            text: '2500 – 3000 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
        {
            text: '3000 – 3500 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
        {
            text: '>3500 ganha peso com facilidade',
            link: 'http://www.coisas.fixes',
        },
    ],
    2: [
        {
            text: '<1500 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
        {
            text: '1500 – 2000 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
        {
            text: '2000 – 2500 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
        {
            text: '2500 – 3000 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
        {
            text: '3000 – 3500 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
        {
            text: '>3500 ganha massa muscular facilidade',
            link: 'http://www.xvideos.com',
        },
    ],
    3: [
        {
            text: '<1500 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
        {
            text: '1500 – 2000 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
        {
            text: '2000 – 2500 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
        {
            text: '2500 – 3000 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
        {
            text: '3000 – 3500 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
        {
            text: '>3500 tenho muita dificuldade em ganhar peso',
            link: 'http://www.buecenas.com'
        },
    ],
};