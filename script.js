let gridSize;

function mouseOver(e){
       let cell = document.getElementById(e.target.id);// e.target.id === cellId
       cell.style.background="black";
    }

    function clearGrid(){
        console.log(this.id);
        for(i=1; i<=900; i++){
            let cell = document.getElementById(`cell${i}`);
            if(cell!==null){
             console.log('clear: '+ cell.id);
             cell.remove();
            }
      } 
   }

   function erase(e){
    let cell = document.getElementById(e.target.id);//e.target.id === cellId
       cell.style.background='rgba(167, 39, 139, 0.911)';
   }

 function createGrid(e){
   
   console.log(e.currentTarget);

     if(this.id==='size16'){
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
     clearGrid();

     for(i=1; i<=gridSize; i++){
        let grid = document.querySelector('.grid');
        let cell = document.createElement('div');
        cell.setAttribute('id','cell'+i)
        //cell.textContent = i;
        //console.log(cell);
        grid.appendChild(cell);
        }

        document.querySelector('.grid').style.gridTemplateColumns=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;
        document.querySelector('.grid').style.gridTemplateRows=`repeat(${gridSize/Math.sqrt(gridSize)},1fr)`;
 }

let grid = document.querySelector('.grid');
grid.addEventListener('mouseover', mouseOver);
grid.addEventListener('click', erase);
document.getElementById('size16').addEventListener('click', createGrid);
document.getElementById('size64').addEventListener('click', createGrid);
document.getElementById('size100').addEventListener('click', createGrid);
document.getElementById('size400').addEventListener('click', createGrid);
document.getElementById('size900').addEventListener('click', createGrid);
document.getElementById('clear').addEventListener('click',clearGrid);

