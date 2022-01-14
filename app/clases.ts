class usuario{
    private nombre:string;
    private edad:number;
    private rut:string;

    constructor(nombre:string, edad:number, rut:string){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
    }

    get getNombre():string{
        return this.nombre;
    }

    get getEdad():number{
        return this.edad;
    }

    get getRut():string{
        return this.rut;
    }
}

let u = new usuario("eduardo",25,"19494");
console.log(u.getNombre);