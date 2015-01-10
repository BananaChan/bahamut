#pragma strict

var hp : int = 1000;

function Damage (dmg : int) {
	if(hp - dmg >= 0) {
		hp -= dmg;
	}
	else {
		hp = 0;
	}
}
function Update (){
	if(hp<=0){
	Destroy(gameObject);
	}
}