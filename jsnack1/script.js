//array con i nomi degli invitati alla festa del grande Gatsby
alert('The Great Gatsby Party is coming');
//lista di nomi
var lista = ['Donovan', 'Nick', 'Sean', 'Matt', 'Joe'];
//chiedere nome all'utente
var nome = (prompt('Inserisci il tuo nome per verificare se sei tra gli invitati al mio party.'));
console.log(nome);
var presente = false;

for (var i=0; i < lista.length; i++){
  var invitato = lista[i];
  if(nome == invitato){
    presente = true;
  }
}
//comunica del outcome all'utente
console.log(presente);
if (presente == false) {
  console.log('Sorry, il tuo nome non è presente nella lista degli invitati');
}else{
  console.log('Fantastico,il tuo nome è presente nella lista degli invitati. Sarai il benvenuto al party del secolo!');
}
