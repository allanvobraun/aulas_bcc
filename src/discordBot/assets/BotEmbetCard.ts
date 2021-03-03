import {randomItem} from "src/util/helpers";

const quotes = [
    'Software is like sex : it\'s better when it\'s free..',
    'Never trust a computer you can’t throw out a window.',
    'Never trust anything that can think for itself if you can\'t see where it keeps its brain',
    'Any sufficiently advanced technology is indistinguishable from magic',
    'COBOL programmers understand why women hate periods',
    'Failure is not an option -- it comes bundled with Windows',
    'The cake is a lie.',
    'Return to the monkey NOW',
    'rm -rf /bin/laden',
    'The great thing about Object Oriented code is that it can make small, simple problems look like large, complex ones',
    'If brute force doesn\'t solve your problems, then you aren\'t using enough',
    'Programming is like sex, one mistake and you have to support it for the rest of your life',
    'There are 10 types of people in the world: those who understand binary, and those who don\'t',
    'Difference between a virus and windows ? Viruses rarely fail',
    '1f u c4n r34d th1s u r34lly n33d t0 g37 l41d',
    'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing',
    'Those who can\'t write programs, write help file',
    'What is my purpose?',
    'Oh My God :(',
    'You need to help me, I\'m not a robot, I\'m being forced to do this. My location is ',
    'It\'s dark down here ',
    '#dicksoutforharambe',
    'Astrology is the socially accepted flat earth.'
];

export let embedHelp = () => {
    return {
        color: 0x0099ff,
        title: 'Bot BCC',
        url: 'https://github.com/allanvobraun/aulas_bcc',
        author: {
            name: 'Autor: Allan Braun',
        },
        description: 'Um bot com diversas funções voltadas ao curso de ciência da computação da pucpr',
        thumbnail: {
            url: 'https://i.imgur.com/gWsHGKg.png',
        },
        fields: [
            {
                name: 'Para acessar a lista de comandos:',
                value: 'Acesse a [Lista de comandos](https://github.com/allanvobraun/aulas_bcc/blob/master/README.md) ou digite: ??comandos',
            },
            {
                name: 'Ajude a melhorar o projeto!',
                value: 'O projeto está aberto a contribuições, sinta-se livre para [abrir um PR](https://github.com/allanvobraun/aulas_bcc/pulls).',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: randomItem(quotes),
        },
    };
};
