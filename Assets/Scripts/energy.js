#pragma strict

import UnityEngine.UI;
var nowEnergy : int = 0;
var maxEnergy : int = 20;

function Update () {
	GetComponent(Text).text = nowEnergy.ToString();
}

function AddEnergy (amount : int) {
	if(nowEnergy + amount < maxEnergy) {
		nowEnergy += amount;
	}
	else{
		nowEnergy = maxEnergy;
	}
}	

function SpendEnergy (amount : int) {
	if(nowEnergy - amount >= 0) {
	nowEnergy -= amount;
	return true;
	}
	else {
		Debug.Log("not enough energy!");
	return false;
	}
}