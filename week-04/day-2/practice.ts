interface FlyAble{

}

class Eagle implements FlyAble{
    public Fly(): void{
    console.log('I am flying');
    }

    public land(): void {
        console.log('I am landing');
    }

    public speak(): void{
        console.log('Screeeech');
    }
}

function somethingWithAnEagle(eagle: Eagle){
    eagle.Fly();
    eagle.land();
    eagle.speak();
}