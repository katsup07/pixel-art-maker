let gridSize;

function mouseOver(){
    //let grid = document.getElementById('grid');
    grid.onmouseover = e => {
       cellId=e.target.id;
       console.log(cellId);
       let cell = document.getElementById(cellId);
       cell.style.background="black";
        }
    }

    function clear(){
        console.log(this.id);
        for(i=1; i<=900; i++){
            let cell = document.getElementById('cell'+i);
            console.log(cell);
            if(cell!==null){
             console.log('clear: '+ cell.id);
             cell.remove();}
      }
            
   }

   function erase(){
    let cell = document.getElementById(cellId);
       cell.style.background='green';
   }

 function createGrid(e){
   
   console.log(this.id);

     if(this.id==='size16'){
        //console.log(this.id);
         gridSize= 16;
     }
     else if(this.id==='size64'){
        console.log(this.id);
         gridSize= 64;
     }
     else if(this.id==='size100'){
        console.log(this.id);
         gridSize= 100;
     }
     else if(this.id==='size400'){
         gridSize=400;
     }
     else if(this.id==='size900'){
        gridSize=900;
    }
     else
     alert("Oops. Something went wrong.");
     //this.removeEventListener('click',createGrid);
     clear();

     for(i=1; i<=gridSize; i++){
        let container = document.getElementById('grid');
        let cell = document.createElement('div');
        cell.setAttribute('id','cell'+i)
        //cell.textContent = i;
        //console.log(cell);
        container.appendChild(cell);
        }

        document.getElementById('grid').style.gridTemplateColumns=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;
        document.getElementById('grid').style.gridTemplateRows=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;
 }

let grid = document.getElementById('grid');
grid.addEventListener('mouseover',mouseOver);
grid.addEventListener('click', erase);
document.getElementById('size16').addEventListener('click', createGrid);
document.getElementById('size64').addEventListener('click', createGrid);
document.getElementById('size100').addEventListener('click', createGrid);
document.getElementById('size400').addEventListener('click', createGrid);
document.getElementById('size900').addEventListener('click', createGrid);
document.getElementById('clear').addEventListener('click',clear);

