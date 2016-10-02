var cards,dealer,player,back;function startGame(){console.log('startGame()');setIdTxt('win','0.0');setIdTxt('status','BLACK JACK');cards=getCards();dealer=[getCard()];player=[getCard(),getCard()];getBackCard();setIdTxt('dealerLabel',getSum(dealer));setIdTxt('playerLabel',getSum(player));setCardsTo('dealer',dealer);setCardsTo('player',player);if(getStatus('player',player)){setIdHtml('status','Devil\'s luck! <br> Black Jack in the hand! $_$');return false;}
hideButton('deal');hideButton('clearBet');showButton('hit');showButton('stand');hideId('chips');}
function endGame(){cards=getCards();}
function Hit(){console.log('Hit()');player.push(getCard());setIdTxt('playerLabel',getSum(player));setCardsTo('player',player);if(msg=getStatus('player',player)){showButton('deal');showButton('clearBet');hideButton('hit');hideButton('stand');showId('chips');setIdTxt('status',msg);}}
function Stand(){console.log('Stand()');while(getSum(dealer)<17){dealer.push(getCard());setIdTxt('dealerLabel',getSum(dealer));setCardsTo('dealer',dealer);};if(msg=getStatus('dealer',dealer)){showButton('deal');showButton('clearBet');hideButton('hit');hideButton('stand');showId('chips');setIdTxt('status',msg);}}
function getStatus(member,memberCards){var msg,sum=getSum(memberCards);if(sum==21){winMoney(member);msg=ucfirst(member)+': Has Black Jack! $_$';return msg;}if(sum>21){if(member=='dealer')winMoney('player');if(member=='player')winMoney('dealer');msg=ucfirst(member)+': Has Bust';return msg;}else if(member=='dealer'){var sumDealer=getSum(dealer);var sumPlayer=getSum(player);if(sumPlayer==sumDealer){winMoney('both');msg='Draw!';return msg;}else if(sumPlayer>sumDealer){winMoney('player');msg='Win! :)';return msg;}else{winMoney(member);msg='Lose :(';return msg;}}}
function winMoney(member){console.log('winMoney('+member+')');var bankroll,win=0,data=getBetData();if(member=='player'){win=data.bet*2;}else if(member=='both'){win=data.bet;}
bankroll=(data.bankroll+win)-data.bet;setIdTxt('bankroll',bankroll.toFixed(1));setIdTxt('win',win.toFixed(1));setIdTxt('playerLabel','deal?');}
function setCardsTo(member,cards){console.log('setCardsTo('+member+', '+cards+')');var memberCards=getCardsStyles(cards);if(member=='dealer'){getBackCard();memberCards+=back;}
setIdHtml(member+'Cards',memberCards);}
function getBackCard(){console.log('getBackCard()');var length=dealer.length;back='<div class="card back stack'+length+'"></div>';}
function IncreaseBet(n){console.log('IncreaseBet('+n+')');var bankroll,bet,data=getBetData(n);if(data.betNew>data.bankroll){if(!confirm("You don't have enough money! Take a credit?")){return false;}}
bankroll=data.bankroll-data.betNew;bet=data.bet+data.betNew;setIdTxt('bankroll',bankroll.toFixed(1));setIdTxt('bet',bet.toFixed(1));setIdTxt('playerLabel','deal?');showButton('deal');showButton('clearBet');}
function DecreaseBet(n){console.log('DecreaseBet('+n+')');var bankroll,bet=0,data=getBetData(n);if(data.betNew>data.bet||data.betNew==0){bankroll=data.bankroll+data.bet;}else{bet=data.bet-data.betNew;bankroll=data.bankroll+data.betNew;}
if(bet==0){hideButton('deal');hideButton('clearBet');setIdTxt('playerLabel','place bet');}
setIdTxt('bet',bet.toFixed(1));setIdTxt('bankroll',bankroll.toFixed(1));}
function getBetData(n){console.log('getBetData('+n+')');if(n=='undefined')n=0;var bankroll=parseFloat(getIdTxt('bankroll'));var bet=parseFloat(getIdTxt('bet'));var betNew=parseFloat(n);var data={bankroll:bankroll,bet:bet,betNew:betNew};return data;}
function getIdTxt(id){console.log('getIdTxt('+id+')');var elem=document.getElementById(id);var txt=elem.innerText;return txt;}
function setIdTxt(id,txt){console.log('setIdTxt('+id+', '+txt+')');var elem=document.getElementById(id);elem.innerText=txt;}
function setIdHtml(id,html){console.log('setIdHtml('+id+', '+html+')');var elem=document.getElementById(id);elem.innerHTML=html;}
function hideId(id){document.getElementById(id).style.display='none';}
function showId(id){document.getElementById(id).style.display='block';}
function showButton(name){document.getElementById(name).style.display="inline-block";}
function hideButton(name){document.getElementById(name).style.display="none";}
function ucfirst(str){var f=str.charAt(0).toUpperCase();return f+str.substr(1,str.length-1);}
function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function getCards(){console.log('getCards()');var cards=[];for(var i=0;i<52;i++){cards[i]='c'+i;}
return cards;}
function getCard(){console.log('getCard()');if(cards.length==0){alert('No more cards!');return 0;}
var n=getRandomInt(0,cards.length-1);var card=cards[n];cards.splice(n,1);return card;}
function getCardVal(card){if(card==0)return card;var cardsVal={c0:"2",c1:"3",c2:"4",c3:"5",c4:"6",c5:"7",c6:"8",c7:"9",c8:"10",c9:"J",c10:"Q",c11:"K",c12:"A",c13:"2",c14:"3",c15:"4",c16:"5",c17:"6",c18:"7",c19:"8",c20:"9",c21:"10",c22:"J",c23:"Q",c24:"K",c25:"A",c26:"2",c27:"3",c28:"4",c29:"5",c30:"6",c31:"7",c32:"8",c33:"9",c34:"10",c35:"J",c36:"Q",c37:"K",c38:"A",c39:"2",c40:"3",c41:"4",c42:"5",c43:"6",c44:"7",c45:"8",c46:"9",c47:"10",c48:"J",c49:"Q",c50:"K",c51:"A"}
return cardsVal[card];}
function getSum(hand){var sum=0;for(var i=0;i<hand.length;i++){var card=getCardVal(hand[i]);if(card==0)continue;if(card>=2&&card<=10){sum+=parseInt(card);}else if(card!='A'){sum+=10;}}
for(var i=0;i<hand.length;i++){var card=getCardVal(hand[i]);if(card==0)continue;if(card=='A'){if(sum>10){sum+=1;}else{sum+=11;}}}
return sum;}
function getCardsStyles(cards){console.log('getCardsStyles('+cards+')');var html='';for(var i=0;i<cards.length;i++){html+='<div class="card '+cards[i]+' stack'+i+'"></div>';}
return html;}