const quotes = [
    {
    quote: '배신은 상처에 소금을 뿌린 것만큼이나 쓰라리다',
    author: '- 갱플랭크 -'
    },
    {
    quote: '자신의 한계를 인정하는 것이 실패의 첫걸음이지',
    author: '- 리 신 -'
    },
    {
    quote: '운명을 피하는 건 겁쟁이나 하는 짓이지',
    author: '- 바루스 -'
    },
    {
    quote: '방랑자라고 길을 잃은 건 아니지',
    author: '- 야스오 -'
    },
    {
    quote: '시간이 얼마나 있는지는 상관없어 어떻게 쓰느냐가 중요하지',
    author: '- 에코 -'
    },
    {
    quote: '가치 있는 자만 살아남는 거야',
    author: '- 제드 -'
    },
    {
    quote: '어떤 위대한 짜임새도 결국 작은 실오라기 하나로 시작하죠',
    author: '- 탈리야 -'
    },
    {
    quote: '뛰어난 전략은 바로 절대 포기하지 않는 거죠',
    author: '- 럭스 -'
    },
    {
    quote: '꽃이 피려면 적당한 자극이 필요한 법이야',
    author: '- 아이번 -'
    },
    {
    quote: '인생의 쓴 맛을 보았나! 꾹 참고 씹다 보면, 달달해 질 거야',
    author: '- 브라움 -'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
