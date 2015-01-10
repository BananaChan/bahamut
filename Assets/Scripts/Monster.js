#pragma strict

var hp : float = 200;
var speed : float = 8.0f;
var atk : int = 1;
var award : int = 0;
var opponent : GameObject;
var isAttacking : boolean = false;

function Update () {
	if(hp <= 0) { // monster dead
		// add energy award to player
		if(gameObject.tag == "EnemyMon") {
			GameObject.Find("Energy").GetComponent(Energy).AddEnergy(award);
		}
		Destroy(gameObject);
	}
	else { // monster alive
		// have opponent
		if(opponent != null) {
			// attack
			opponent.SendMessage("Damage", atk);
		}
		else {
			// no attack
			isAttacking = false;
		}
		
		// if attacking
		if(isAttacking == false) {
			// freeze
			rigidbody2D.velocity = new Vector2(speed, 0);
		}
		else {
			// keep moving
			rigidbody2D.velocity = Vector2.zero;
		}
	}
}

function Damage (dmg : int) {
	hp -= dmg;
}

function OnTriggerStay2D (other : Collider2D) {
	if(
		(other.tag == "EnemyMon" && gameObject.tag == "MyMon") ||
		(other.tag == "MyMon" && gameObject.tag == "EnemyMon") ||
		other.tag == "EnemyTower" ||
		other.tag == "MyTower"
	) {
		isAttacking = true;
		opponent = other.gameObject;
	}
}