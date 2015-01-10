#pragma strict

var oriHP : float;
var nowHP : float;
var maxScale : float;

function Start () {
	oriHP = GetComponentInParent(Tower).hp;
}

function Update () {
	
	nowHP = GetComponentInParent(Tower).hp;
	
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
	transform.localScale.x = rate * maxScale;
}