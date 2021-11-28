//let cells = window.prompt('How many squares on the grid? 16 or 64?');
gridSize = 400;
for(i=1; i<=gridSize; i++){
let container = document.getElementById('grid');
let cell = document.createElement('div');
cell.setAttribute('id','cell'+i)
//cell.textContent = i;
console.log(cell);
container.appendChild(cell);
}

document.getElementById('grid').style.gridTemplateColumns=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;
document.getElementById('grid').style.gridTemplateRows=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;

function mouseOver(){
    
   document.onmouseover = function(e){
       cellId=e.target.id;
       console.log(cellId);
        if(cellId!=='grid'&& cellId!=="" & cellId!=='container'){
       let element = document.getElementById(cellId);
       element.style.background="black";
       }
       

       
   }
    
}

document.addEventListener('mouseover',mouseOver);
