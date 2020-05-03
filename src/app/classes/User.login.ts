export class userLogin{
   private userName:string;
   private password:string;

    set UserSet(userName :string){
        this.userName=userName;

    }
    get UserGet() : string{
        return this.userName;
    }
    set PasswordSet(password :string){
        this.password=password;

    }
    get PasswordGet() : string{
        return this.password;
    }

}