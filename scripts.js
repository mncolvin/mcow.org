var quote = new Array()
quote[0] = 'Matthew Colvin\'s Official Website'
quote[1] = 'Manatee Committee Of Wisconsin'
quote[2] = 'Multiple Counts Of Wiretapping'
quote[3] = 'Mild consternation over wealth'
quote[4] = 'mediocre coffee on wednesday'

var randomquote = Math.floor(Math.random()*(quote.length));
function printquote(){
document.write(quote[randomquote]);
}