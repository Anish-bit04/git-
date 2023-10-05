function books(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.final= function(){
        return title+"by"+author+","+pages +"pages"+ read;
    }

}
const func= new books("The Hobbit"," J.R.R. Tolkien",295,"not read yet" )
console.log(func)

// let Obje= {
// name:avavd,
// type:sfgafds,
// class:sdvsd
// }
// Obje.getprototypeOf()