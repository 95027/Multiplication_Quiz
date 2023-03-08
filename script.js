const num1=Math.ceil(Math.random()*20);
const num2=Math.ceil(Math.random()*10);

document.getElementById('quest').innerHTML=`what is ${num1} multiply by ${num2}`;

const correctAns=num1*num2;

let score=localStorage.getItem('score');

if(score<0)
{

    localStorage.clear();
    alert('You lose the game.......');
    score=0;
}
else if(!score)
{
    score=0;
}


document.getElementById('score').innerHTML='score:'+score;

document.getElementById('form').addEventListener('submit',()=>{
    const userAns=+input.value;

    if(correctAns===userAns)
    {
        score++;
        addScore();
        console.log(score)
    }
    else
    {
        score--;
        addScore();
        console.log(score)
    }
})

function addScore()
{
    localStorage.setItem("score",JSON.stringify(score));
}