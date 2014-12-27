#pragma strict

var amount : int;
var prefab : GameObject;

function SummonMonster () {
	if(GameObject.Find("Energy").GetComponent(energy).SpendEnergy(amount)){
	
	Instantiate(prefab, GameObject.Find("MySpawnPoint").transform.position, Quaternion.identity);
	}
}