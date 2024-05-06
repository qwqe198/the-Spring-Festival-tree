let modInfo = {
	name: "2024 春节树ng+",
	id: "HappyNewYear2024",
	author: "QqQe308 and 22222",
	pointsName: "春节点",
	modFiles: ["layers.js", "tree.js","someUselessFunctions_QqQe308.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "虫眼(?)",
	name: "春节快乐",
}

let changelog = `1<br>
好消息!好消息!<br>
春节树 全新更新<br>
 凌日潮汐  凌日潮汐 全新登场啦<br>
全场特价<br>
全场特价<br>
全场特价<br>
全场特价<br>
全场特价<br>
玩了不会撞时间墙，不会塔中重聚<br>
快来体验全新凌日潮汐吧！
<br>
<br>
2<br>
`

let winText = `春节快乐!!!!!!!!!!!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if(hasUpgrade('d',11)) gain=gain.add(tmp.d.drEff1)
	if(hasUpgrade('d',12)) gain=gain.times(tmp.d.drEff2)
	if(hasUpgrade('d',13)) gain=gain.pow(tmp.d.drEff3)
	if(buyableEffect('y',11).gt(1)) gain=gain.times(buyableEffect('y',11))
  if(hasUpgrade('c',12)) gain=gain.mul(player.c.points.add(2))
  if(hasUpgrade('d',41)) gain=gain.mul(player.d.points.add(2).log(10))
  if(hasUpgrade('d',43)) gain=gain.pow(player.d.points.add(2).log(10).add(2).log(10).add(2).pow(0.419))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 devSpeed: new Decimal(1),
 realTime: new Decimal(0)
}}

// Display extra things at the top of the page
var displayThings = [
function() {return "你已经游玩了 "+formatTime(player.realTime)+" ！（现实时间）" },
	function(){return "所有的÷0.00和underfined都不是bug"},
	function(){return "作者QQ 2960729702"},
]

// Determines when the game "ends"
function isEndgame() {
	return hasMilestone('h',114514)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}