export class Debounce{
    
    timeout: any|null = null;

    run(fn: ()=>void, time: number){
        if(this.timeout!=null)
            clearTimeout(this.timeout);
        this.timeout = setTimeout(fn, time);
    }
}