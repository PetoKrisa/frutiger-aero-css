function randint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function lerp(s,e,t){
    return (s+(t*(e-s)))
}

async function sleep(x) {
    await new Promise(r => setTimeout(r, x));
}

class Bubble{
    constructor(id){
        this.id = id
        this.x;
        this.y;
        this.parent = document.getElementsByClassName("bg-animate")[0]
        this.parent.innerHTML = this.parent.innerHTML + `<div class="bubble" data-id=${id}></div>`
    }

    async loop() {
        let x1 = randint(100,this.parent.clientWidth-150)
        let y1 = randint(100,this.parent.clientHeight-10)
        let x2 = randint(x1-150,x1+150)
        let y2 = randint(y1-200,y1-500)

        let steps = randint(800,900)
        let slep = randint(10,15)

        let size = 0;

        this.x = x1
        this.y = y1
        if(x2 < this.parent.clientWidth || y2 < this.parent.clientHeight ){
            for(let i = 0; i < steps; i++){
            
                this.x = lerp(x1, x2, i/steps)
                this.y = lerp(y1, y2, i/steps)

                size = Math.sin(i/steps*Math.PI)*100
                await sleep(slep)
                document.getElementsByClassName("bubble")[this.id].style.left = `${this.x}px`
                document.getElementsByClassName("bubble")[this.id].style.top = `${this.y}px`
                document.getElementsByClassName("bubble")[this.id].style.width = `${size}px`
                document.getElementsByClassName("bubble")[this.id].style.height = `${size}px`
                console.log(size)
            }
        } else{
            this.loop()
        }
        
        this.loop()
    }
}

for(let i = 0; i < 10; i++){
    x = new Bubble(i);
    x.loop();
}