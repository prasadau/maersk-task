var data = [
    {
        number: 1,
        className: 'bg-color1'
    },
    {
        number: 2,
        className: 'bg-color2'
    },
    {
        number: 3,
        className: 'bg-color3'
    },
    {
        number: 4,
        className: 'bg-color2'
    },
    {
        number: 5,
        className: 'bg-color3'
    },
    {
        number: 6,
        className: 'bg-color4'
    },
    {
        number: 7,
        className: 'bg-color4'
    },
    {
        number: 8,
        className: 'bg-color1'
    },
    {
        number: 9,
        className: 'bg-color3'
    }
];

var clonedArr = [...data];

function shuffleArr(){
    clonedArr.sort(() => {
        var randomNum = Math.random() - 0.5;
        return randomNum
    });
    updateGrid(clonedArr);
}

function sortArr(){
    clonedArr.sort((a,b)=>{
        return a.number - b.number
    })
    updateGrid(clonedArr);
}

function updateGrid(data){
    var cardTemplate =``;
    data.forEach(el=>{
        cardTemplate +=  ` <div class="grid-item ${el.className}">${el.number}</div>`;
    })
    $('.grid').html(cardTemplate);
}
      
updateGrid(data);

