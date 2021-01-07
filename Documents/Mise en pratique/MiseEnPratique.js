function ageCheck(age){
    return (age > 17 ? "Vous pouvez entrer !" : "Site interdit aux mineurs");
};

function afficherEntier(valeur){
    for(const nombre = 0;nombre <= valeur;nombre ++){
        return nombre;
    }
}
console.log(afficherEntier(12));