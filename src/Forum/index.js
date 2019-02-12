import Forum from './Forum'
import React from 'react';
const randomDate = () => new Date(+(new Date()) - Math.floor(Math.random() * 10000000000))

const threads = [
    {
        id: '1',
        question: 'what what what what what whatwhat ?',
        time: randomDate(),
        description: ' blablablamuibdfmouibqfdsmunbfds mouijdsfmbufd lkujbdsf<liuf lkjhhbfbf iubdf iuybdofihbdsspf sdqyuifbhsd qfhpuqsd hfildy   .',
        comments: 8,
        numberLikes: 42,
        tagNames: [
            '#tatatata',
            '#rararara',
            '#zazazaza',
            '#babababa',
        ],
        isAsked: true,
    },



]
const ConnectedForum = () => (
    <Forum
        threads={threads}
    />
)
export default ConnectedForum
