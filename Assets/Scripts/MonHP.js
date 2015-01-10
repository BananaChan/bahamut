#pragma strict

var scalex : float;
var oriHP : float;
var nowHP : float;

function Start () {
	oriHP = GetComponentInParent(Monster).hp;
}

function Update () {
	nowHP = GetComponentInParent(Monster).hp;
	
	var rate = nowHP / oriHP;
	if(rate < .3) {
		GetComponent(SpriteRenderer).color = Color.red;
	}
	else if(rate < .5) {
		GetComponent(SpriteRenderer).color = Color.yellow;
	}
	else {
		GetComponent(SpriteRenderer).color = Color.green;
	}
	transform.localScale.x =scalex * rate;
}