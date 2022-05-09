class User{
    constructor( username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('there are 20 users');
    }

    register(){
        console.log(this.username + 'is now registered');
    }
}
// let thaoly = new User('thaoly', 'thaolydn1805@gmail.com', '12345678');
// thaoly.register();
User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + 'is subscribed to the' +this.package + ' package');
    }
}
let dao = new User('dao', 'dao@gmail.com', '54321', 'Standard');
// dao.getPackage();
dao.register();