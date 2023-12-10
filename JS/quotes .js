const quotes = [
    {
       quote: " 산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: " 한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드건",
    },
    {
        quote: "  행복은 습관이다,그것을 몸에 지니라",
        author: "허버드",
    },
    {

       quote:" 자신감 있는 표정을 지으면 자신감이 생긴다 ",
       author: "찰스다윈건",
    }

]

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  console.log(quotes[0]);

  console.log(quotes[Math.floor(Math.random() *quotes.length)]);

  const todayQuote = quotes[Math.floor(Math.random() *quotes.length)];

  
  quote.innerText = todayQuote.quote+ '\n';
  author.innerText = '-'+todayQuote.author ;