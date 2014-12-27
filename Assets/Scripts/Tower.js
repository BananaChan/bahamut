#pragma strict

import UnityEngine.UI;

var hp : int = 100;

function Update () {
	GetComponent(Text).text = hp.ToString();
}

