let gamebox = document.getElementById("canvas");
let context = gamebox.getContext("2d");

let grass = document.getElementById("grass");
let ground = document.getElementById("ground");
let m = document.getElementById("mountain");
let m0 = document.getElementById("mountain0");
let m1 = document.getElementById("mountain1");
let birdX = 50;
let birdY = -10;
let birdFrontBack = 10;
let birdsSpeed = 2;
let birds = document.getElementById("birds");
let about = document.getElementById("aboutTree");
let lv1 = document.getElementById("lv1");
let abt = document.getElementById("abt");
let collg = document.getElementById("collg")
let school = document.getElementById("school");
let schoolNameBoard = document.getElementById("schoolNameBoard");
let longTree = document.getElementById("longTree");
let dwarfTree = document.getElementById("dwarfTree")
let about1 = document.getElementById("about");
let hero1 = document.getElementById("hero1");
let hero2 = document.getElementById("hero2");
let hero3 = document.getElementById("hero3");
let hometown = document.getElementById("hometown");
let coco = document.getElementById("coco");
let intres = document.getElementById("intres");
let coins = document.getElementById("coins");
let fullstack = document.getElementById("fullstack")
let bug = document.getElementById("bug");
let brick = document.getElementById("brick");
let goldbrick = document.getElementById("goldbrick");
let pipe = document.getElementById("pipe");
let bugrev = document.getElementById("bugrev");
let htmllogo = document.getElementById("htmllogo");
let csslogo = document.getElementById("csslogo");
let jslogo = document.getElementById("jslogo")
let quesbox = document.getElementById("quesbox")
let explosion = document.getElementById("explosion")
let blueWater = document.getElementById("blueWater")
let blueWaterRev = document.getElementById("blueWaterRev");
let motorBoat = document.getElementById("motorBoat");
let cvd = document.getElementById("cvd");
let tex = document.getElementById("tex");
let pro0 = document.getElementById("pro0");
let pro1 = document.getElementById("pro1");
let cup = document.getElementById("cup");
let cn = document.getElementById("cn");
let zeal = document.getElementById("zeal")
let snackdown = document.getElementById("snackdown")
let banTree = document.getElementById("banTree")
let cld = document.getElementById("cld")
let sun = document.getElementById("sun")
let manLogo = document.getElementById("manLogo")
let hut1 = document.getElementById("hut1")
let hut2 = document.getElementById("hut2")
let hut3 = document.getElementById("hut3")
let clgNew = document.getElementById("clgNew");
let ufo = document.getElementById("ufo");
let mark = document.getElementById("mark");

let inst1 = document.getElementById("inst1");
let inst2 = document.getElementById("inst2");
inst1.innerHTML = "USE ARROW KEYS TO MOVE";

let marksheet = document.getElementById("marksheet");
let seacreatures = document.getElementById("seacreatures")
let seacreaturesRev = document.getElementById("seacreaturesRev")
let bls = document.getElementById("bls");

let curHero = hero1;
let heroX = 250;
let heroY = 320;
let move = 0;
let plv = 40;
let coinsCount = 0;

function birdMove(){
	if (birdY>70) {
		if (birdsSpeed>0) {
			birdsSpeed *=(-1);
		}
	}else if(birdY<=0){
		if (birdsSpeed < 0) {
			birdsSpeed *=(-1)
		}
	}
	birdY +=birdsSpeed;
	context.drawImage(birds,birdX,birdY,200,150)
}
let heroH = 200;
function live(heroH){
	if (curHero == hero2 || curHero == hero_2) {
		context.drawImage(curHero,heroX,heroY,175,heroH);
	}else{
		context.drawImage(curHero,heroX,heroY,130,heroH);
	}
}

function shPlayerRight(){
	if (plv < 0) {
		plv = -plv;
	}
	heroX +=plv;
	if (move==0) {
		curHero = hero1
		context.drawImage(curHero,heroX,heroY,130,200);
		curHero = hero2;
		move +=1
	}else if(move==1){
		curHero = hero2
		context.drawImage(curHero,heroX,heroY,130,200);
		curHero = hero3
		move +=1
	}
	if (move == 2) {move = 0};
}
function shPlayerLeft(){
	if(plv > 0){
		plv = -plv;
	}
	heroX +=plv;
	if (move==0) {
		curHero = hero_1
		context.drawImage(curHero,heroX,heroY,130,200);
		curHero = hero_2;
		move +=1
	}else if(move==1){
		curHero = hero_2
		context.drawImage(curHero,heroX,heroY,130,200);
		move +=1
		curHero = hero_3
	}
	if (move == 2) {move = 0};
}

var bugX =  6050;
var bugHeight = 45;
let bugFlag = 0;
function bugMovement(){
	context.drawImage(bug,bugX,456,50,bugHeight)
	bugX -=1;
}


let coinY = 145;
let extra = 520;
let coinH = 50;
let coinW = 50;
let arr = [[0,0,50,50,5902+extra,coinY,coinW,coinH],[50,0,50,50,5910+extra,coinY,coinW,coinH],[100,0,40,50,5912+extra,coinY,coinW,coinH],[150,0,40,50,5920+extra,coinY,coinW,coinH],[197,0,40,50,5925+extra,coinY,coinW,coinH],[250,0,50,50,5890+extra,coinY,coinW,coinH],[300,0,50,50,5895+extra,coinY,coinW,coinH],[350,0,50,50,5900+extra,coinY,coinW,coinH],[400,0,50,50,5905+extra,coinY,coinW,coinH]]
function flippingCoins(){
	context.drawImage(coins,arr[coinsCount][0],arr[coinsCount][1],arr[coinsCount][2],arr[coinsCount][3],arr[coinsCount][4],arr[coinsCount][5],arr[coinsCount][6],arr[coinsCount][7])
	coinsCount += 1;
	if (coinsCount == 9) {
		coinsCount = 0;
	}
}

let blastCoordinates = [[1110,22],[910,22],[708,22]]
let exploar = [[0,0,100,100,8020,220,100,100],[100,0,150,109,8040,224,150,100],[155,0,160,120,8018,223,150,110],[228,0,130,125,8009,222,130-5,110],[320,0,150,130,8020,220,150,120],[400,0,130,120,8018,220,130,110],[570,0,130-5,120,8030,220,125,105],[650,0,130-5,120,8030,220,125,105],[720,0,130-5,120,8020,220,125,105],[820-10,0,130-5,120,8020+10,220,125,105],[920-30,0,130-5,120,8020+13,220,125,105],[1020-45,0,130-5,120,8020+15,220,125,105],[1120-60,0,130-5,120,8020+20,220,125,105],[1220-80,0,130-5,120,8020+20,220,125,105]];
let cntrx = 0;
let cntr = 0;
let expoX;
let expoY;
function explode(expoX,expoY){
	if (cntrx == 14) {
		cntrx = 14
	}else{
		context.drawImage(explosion,exploar[cntrx][0],exploar[cntrx][1],exploar[cntrx][2],exploar[cntrx][3],exploar[cntrx][4]+expoX,exploar[cntrx][5]+expoY,exploar[cntrx][6],exploar[cntrx][7])
		if (cntr%3 == 2) {
			cntrx +=1
			cntr = 0
		}else{
			cntr +=1
		}
	}
}

let expoA;
let expoB;
let cntrA = 0;
let ctrA = 0;
function explodeA(expoA,expoB){
	if (cntrA == 14) {
		cntrx = 14
	}else{
		context.drawImage(explosion,exploar[cntrA][0],exploar[cntrA][1],exploar[cntrA][2],exploar[cntrA][3],exploar[cntrA][4]+expoA,exploar[cntrA][5]+expoB,exploar[cntrA][6],exploar[cntrA][7])
		if (ctrA%3 == 2) {
			cntrA +=1
			ctrA = 0
		}else{
			ctrA +=1
		}
	}
}

let expoP;
let expoQ;
let cntrP = 0;
let ctrP = 0;
function explodeP(expoP,expoQ){
	if (cntrP == 14) {
		cntrP = 14
	}else{
		context.drawImage(explosion,exploar[cntrP][0],exploar[cntrP][1],exploar[cntrP][2],exploar[cntrP][3],exploar[cntrP][4]+expoP,exploar[cntrP][5]+expoQ,exploar[cntrP][6],exploar[cntrP][7])
		if (ctrP%3 == 2) {
			cntrP +=1
			ctrP = 0
		}else{
			ctrP +=1
		}
	}
}

let bug1X = 6290;
let bug1direc = 1;
let bug2X = 6240;
let bug2direc =1;
function bugRevMovement(){
	if (bug1X >= 6350) {
		if (bug1direc>0) {
			bug1direc *=(-1)
			bug2direc *=(-1)
		}
	}
	if (bug1X <= 6290) {
		if (bug1direc<0) {
			bug1direc *=(-1)
			bug2direc *=(-1)
		}
	}
	bug1X +=(bug1direc)
	bug2X +=(bug2direc)
	context.drawImage(bugrev,bug1X,432,70,70)
	context.drawImage(bugrev,bug2X,452,50,50)
}

let q1h = 100
let flq1 = 0;
function showHtml(){
	context.drawImage(htmllogo,6900,100,100,100)
}

let q2h = 100
let flq2 = 0;
function showCss(){
	context.drawImage(csslogo,7100,100,100,100)
}

let q3h = 100
let flq3 = 0;
function showJs(){
	context.drawImage(jslogo,7300,100,100,100)
}
let expofl1 = 0;
let expofl2 = 0;
let expofl3 = 0;

let waterCnt = 0;
let waterFlag = 0;
function waterMovement(){
	if (waterCnt%30 == 0) {
		waterFlag ^=1
	}

	if (waterFlag%2 == 0) {
		context.drawImage(blueWater,0,0,100,100,7600,500,300,100)
		context.drawImage(blueWater,0,0,100,100,7900-1,500,300,100)
		context.drawImage(blueWater,0,0,100,100,8200-2,500,300,100)
		context.drawImage(blueWater,0,0,100,100,7600,580,300,100)
		context.drawImage(blueWater,0,0,100,100,7900-1,580,300,100)
		context.drawImage(blueWater,0,0,100,100,8200-2,580,300,100)
		context.drawImage(blueWater,0,0,100,100,7600,660,300,100)
		context.drawImage(blueWater,0,0,100,100,7900-1,660,300,100)
		context.drawImage(blueWater,0,0,100,100,8200-2,660,300,100)
	}else{
		context.drawImage(blueWaterRev,0,0,100,100,7600,500,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,7900-1,500,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,8200-2,500,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,7600,580,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,7900-1,580,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,8200-2,580,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,7600,660,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,7900-1,660,300,100)
		context.drawImage(blueWaterRev,0,0,100,100,8200-2,660,300,100)

	}
	waterCnt +=1
}
let boatDirec = -5;
let boatHero = 600;
let boatX = 7574;
let boyX = 7610;
let boyH = 100;
function boyMovement(){
	if (boatHero == 400) {
		context.drawImage(hero1,boyX,boatHero,70,boyH)
	}else{
		context.drawImage(hero1,boyX,boatHero,70,boyH)
		boatHero +=boatDirec
	}
};

function boyBoatMovement(){
	if (boatX < 8250) {
		boyX +=1
		boatX +=1
		heroX +=(1.5)
	}
}

function boyDown(){
	if (boatHero<=600) {
		boatHero +=1;
	}
}

function boyDown(){
	boyH = 0
	context.drawImage(hero1,boyX,boatHero,70,boyH)
}
let liveFlag = 0;


resX = 500;
function showResult(){
	if (resX!=200) {
		resX -=10
	}
	context.drawImage(marksheet,4650,resX,150,200)
}

let variable = 8600;
var inc = 50;


var octoArr = [[345,215,50,80,8300,0,58,84],[230,115,50,60,8300-2,0.5,57+1,63],[573,730,80,73,8300-5,3,89+2,77-1],[344,915,54,60,8300-7,2,60+2,65]]
let octCnt = 0;
let dumOct = 0;
let octDirec = 1;
let octY = 650;
let octYDirec = -1;
function octopusMovement(){
	if (dumOct%7 == 6) {
		octCnt +=octDirec;
		if (octCnt == 4) {
			octCnt = 2
			if (octDirec > 0) {
				octDirec *=(-1)
			}
		}
		if (octCnt == -1) {
			octCnt = 1
			if (octDirec < 0) {
				octDirec *=(-1)
			}
		}
	}
	if (octY > 650) {
		if (octYDirec > 0) {
			octYDirec *=(-1)
		}
	}
	if (octY < 550) {
		if (octYDirec < 0) {
			octYDirec *=(-1)
		}
	}
	octY += octYDirec;
	context.drawImage(seacreatures,octoArr[octCnt][0],octoArr[octCnt][1],octoArr[octCnt][2],octoArr[octCnt][3],octoArr[octCnt][4],octY+octoArr[octCnt][5],octoArr[octCnt][6],octoArr[octCnt][7]);
	dumOct ++;
	dumOct %=(7);
}

var jellyArr = [[0,484,58,115,7650,600,60,100],[60,484,58,115,7650+3-0.5,600,60,100],[120-5,484,58,115+2,7650,600-3,60,100+1.5]]
let jellyCnt = 0;
let jellyGap = 0;
let jellyDirec = 1;
function jellyMovement(){
	if (jellyGap%5 == 4) {
		jellyCnt +=jellyDirec;
	}
	if (jellyCnt == 3) {
		jellyCnt = 1;
		if (jellyDirec > 0) {
			jellyDirec *=(-1)
		}
	}
	if (jellyCnt == -1) {
		jellyCnt = 1;
		if (jellyDirec < 0) {
			jellyDirec *=(-1)
		}
	}
	context.drawImage(seacreatures,jellyArr[jellyCnt][0],jellyArr[jellyCnt][1],jellyArr[jellyCnt][2],jellyArr[jellyCnt][3],jellyArr[jellyCnt][4],jellyArr[jellyCnt][5],jellyArr[jellyCnt][6],jellyArr[jellyCnt][7]);
	jellyGap ++;
}

let yellowFishX = 7990;
let purpleFishX = 7690;
let yellowFishDirec = 1;
let purpleFishDirec = 2;
function fishMovement(){
	if (yellowFishX <= 7620) {
		if (yellowFishDirec < 0) {
			yellowFishDirec *=(-1)
		}
	}
	if (yellowFishX >= 8400) {
		if (yellowFishDirec > 0) {
			yellowFishDirec *=(-1)
		}
	}
	if (purpleFishX <= 7690) {
		if (purpleFishDirec < 0) {
			purpleFishDirec *=(-1)
		}
	}
	if (purpleFishX >= 8000) {
		if (purpleFishDirec > 0) {
			purpleFishDirec *=(-1)
		}
	}
	yellowFishX +=yellowFishDirec;
	purpleFishX +=purpleFishDirec;
	if (yellowFishDirec < 0) {
		context.drawImage(seacreatures,390,215,100,102,yellowFishX,600,50,50);
	}else{
		context.drawImage(seacreaturesRev,100+50,205+10,100,102,yellowFishX,600,50,50);
	}
	if (purpleFishDirec < 0) {
		context.drawImage(seacreatures,245,487,100,60,purpleFishX,650,80,50);
	}else{
		context.drawImage(seacreaturesRev,295,487,100,60,purpleFishX,650,80,50);
	}

}

let bblSize = 50;
let bblX = 8000;
let bblY = 700;
let sby = 618;
let sby0 = bblY - 50;
let sby1 = bblY-150;
function bubbleMovement(){
	if (bblY <= 400) {
		bblY = 700;
	}
	if (sby <= 550) {
		sby = 618;
	}
	if (sby0 <= 400) {
		sby0 = 700-50;
	}
	if (sby1 <= 400) {
		sby1 = 700-150;
	}
	bblY -=1;
	sby -=1;
	sby0 -=2;
	sby1 -=1.5
	context.drawImage(bls,bblX,bblY,bblSize,bblSize);
	context.drawImage(bls,bblX-50,sby0,bblSize,bblSize);
	context.drawImage(bls,7630,sby,25,25);
	context.drawImage(bls,bblX,sby1,bblSize-10,bblSize-10);

	context.drawImage(bls,bblX-50+200,sby0,bblSize,bblSize);
	context.drawImage(bls,bblX+200,sby1,bblSize-10,bblSize-10);
	context.drawImage(bls,bblX-50+350,sby0-100,bblSize,bblSize);	
}



let modeFlag = 0;
function main(){
	context.clearRect(0,0,gamebox.width, gamebox.height);
	gamebox.height = window.innerHeight;
	gamebox.style.background = 'url(https://i.ibb.co/VjSG0Wy/night.jpg)';
	//gamebox.style.backgroundcolor = '#66ccff';
	if (heroX >= 4300) {
		showResult()
	}
	context.drawImage(clgNew,4105,75,500,450)
	context.drawImage(mark,1400,390,170,110)
	context.drawImage(ufo,950,57,170,170)
	context.drawImage(collg,500,0,500,450)
	context.drawImage(about,variable,100,300,400)
	context.drawImage(about,variable+2100,100,300,400)
	context.drawImage(about,variable+5500,100,300,400)
	context.drawImage(intres,350,187,870,320)
	context.drawImage(coco,5200,300,200,300)
	context.drawImage(coco,5400,240,200,300)
	context.drawImage(brick,6300,200,100,100)
	context.drawImage(goldbrick,6400,200,100,100)
	context.drawImage(brick,6500,200,100,100)
	context.drawImage(pipe,6400,401,100,100)
	context.drawImage(brick,6800,200,100,100)
	context.drawImage(longTree,6900,325,100,200)
	context.drawImage(longTree,7100,325,100,200)
	context.drawImage(longTree,7300,325,100,200)
	context.drawImage(cvd,variable+400,200,450,300)
	context.drawImage(tex,variable+270,50,450,250)
	context.drawImage(dwarfTree,variable+2020-150,250,150,300)
	context.drawImage(about,1250,100,300,400)
	context.drawImage(about,4800,100,300,400)
	
	if (heroX >= (6900-1)) {
		flq1 = 1;
	}
	if (heroX >= (7100-1)) {
		flq2 = 1;
	}
	if (heroX >= (7300-1)) {
		flq3 = 1;
	}
	if(flq1 == 1){
		showHtml()
		expofl1 = 1;
		q1h = 0;
	}
	context.drawImage(quesbox,6900,200,100,q1h)

	if (expofl1 == 1) {
		explode(-blastCoordinates[0][0],-blastCoordinates[0][1])
	}
	if (flq2 == 1) {
		showCss()
		expofl2 = 1;
		q2h = 0;
	}
	context.drawImage(quesbox,7100,200,100,q2h)
	if (expofl2 == 1) {
		explodeA(-blastCoordinates[1][0],-blastCoordinates[1][1])
	}
	if (flq3 == 1) {
		showJs()
		expofl3 = 1
		q3h = 0;
	}
	context.drawImage(quesbox,7300,200,100,q3h)
	if (expofl3 == 1) {
		explodeP(-blastCoordinates[2][0],-blastCoordinates[2][1])
	}
	context.drawImage(brick,7000,200,100,100)
	context.drawImage(brick,7200,200,100,100)
	context.drawImage(brick,7400,200,100,100)
	flippingCoins()
	bugRevMovement()
	if (heroX >= (5200 + 5400)/2) {
		if(bugFlag == 0){
			bugMovement()
		}
	}
	if ((bugX <= heroX)) {
		bugFlag = 1
		bugHeight = 1;
	}
	if (bugFlag == 1) {
		context.drawImage(bug,bugX,499,50,bugHeight-25)
	}
	context.drawImage(fullstack,5900,300,350,200)
	context.drawImage(dwarfTree,3085,250,170,250)
	context.drawImage(m,1250+1650,300,300,200)
	context.drawImage(m0,1500+1650,220,400,280)
	context.drawImage(m1,1850+1650,120,500,380)
	context.drawImage(hometown,1590,270,500,350)
	context.drawImage(dwarfTree,variable+5400,250,170,250)
	lv1.innerHTML = "Level 1";
	abt.innerHTML = "About>>"
	let dum = 0;
	let inf = 1;
	for (let i = 0; i <inf; i++){
		context.drawImage(ground, 0+dum, 520+7,100,70);
		dum +=100;
		if (dum>=gamebox.width) {
			break;
		}
		inf +=1;
	}
	var cd = 0;
	var cdis = 2000 + 1100 - 50 + 150;
	var d = 0;
	var ct = 0;
	for(let x = 0; x < 500; x++){
		context.drawImage(ground, 0+d, 590+7,100,70);
		if (ct%2 == 0) {
			context.drawImage(cloud0,cdis-500,-20,130,130);
		}
		ct +=1
		cdis +=(1100 - 200)
		d +=100;
	}
	var d = 0;
	for(let x = 0; x < 500; x++){
		context.drawImage(ground, 0+d, 660+7,100,70);
		d +=100;
	}
	if (heroX <= 0) {
		heroX = 10
	}
	var d = 0;
	for(let x = 0; x < 500; x++){
		context.drawImage(grass, 0+d, 500,100,70);
		d +=100;
	}
	context.drawImage(coco,5600,200,200,300)
	//context.drawImage(about,variable,100,300,400)
	context.drawImage(pro0,variable+1100,200,600,300)
	context.drawImage(seacreatures,344,915,54,60,variable+820,150,60+2,65)
	context.drawImage(pro1,variable+1580,400,200,100)
	context.drawImage(longTree,variable+2000,200,150,300)
	//context.drawImage(about,variable+2100,100,300,400)
	context.drawImage(cup,variable+2500,150,250,350)
	context.drawImage(cn,variable+2750,200,200,100)
	context.drawImage(cup,variable+3100,150,250,350)
	context.drawImage(cup,variable+3700,250,200,250)
	context.drawImage(zeal,variable+4400,300,600,200)
	context.drawImage(snackdown,variable+5200,400,300,100)
	context.drawImage(banTree,variable+6000,15,400,500)
	context.drawImage(longTree,variable+5900-100,100,200,400)
	//context.drawImage(about,variable+5500,100,300,400)
	context.drawImage(sun,variable+6400-250-20,-10+120+20,150,150)
	context.drawImage(manLogo,variable+6423-250-20,7+120+20,100,100)
	context.drawImage(hut1,variable+3350,155,250,350)
	context.drawImage(hut2,variable-8590,155,250,350)
	context.drawImage(hut3,variable+6800,155,250,350)

	if (heroX >= 7550) {
		if (boatX<8250) {
			liveFlag = 1;
			boyMovement();
			boyBoatMovement();
			live(0);
		}else{
			boyDown();
			liveFlag = 0;
			live(200);
		}
	}
	if (heroX < 7570) {
		live(200);
	}
	waterMovement();
	fishMovement();
	octopusMovement();
	jellyMovement();
	bubbleMovement();
	context.drawImage(motorBoat,boatX,380,300,200)
	
	if (heroX >= (variable + 6800)) {
		heroX = variable + 6800;
	}
	context.drawImage(school,2250,105,700,400)
	birdMove()
	window.requestAnimationFrame(main);
}
document.addEventListener('keydown', function(event) {	
	if (event.keyCode == 39) {
		if (heroX < gamebox.width) {
			if ((heroX<7574 && boatX<=7574) || (heroX>8250 && boatX==8250)) {
				shPlayerRight()
			}
		}else{
			live();
		}
	}else if(event.keyCode == 37){
		if (heroX > 0) {
			if ((heroX<7574 && boatX<=7574) || (heroX>8250 && boatX==8250 && (heroX>(boatX + 500)))) {
				shPlayerLeft();
			}
		}else{
			live();
		}
	}
});

let cc = document.getElementById("cc")
let linkdin = document.getElementById("linkdin")
let github = document.getElementById("github")
let leetcode = document.getElementById("leetcode")
let hackerrank = document.getElementById("hackerrank")
let scaler = document.getElementById("scaler")
let gmail = document.getElementById("emailLogo")
let resumeLogo = document.getElementById("resumeLogo")

let codeChefURL = 'https://www.codechef.com/users/npawankr_123';
let githubURL = 'https://github.com/npawankr1';
let hackerrankURL = 'https://www.hackerrank.com/pkr3933?hr_r=1';
let leetcodeURL = 'https://leetcode.com/npawankr1/';
let scalerURL = 'https://www.scaler.com/academy/profile';
let linkdinURL = 'https://www.linkedin.com/in/n-pawan-kumar-5170761b9';
let resumeLogoURL = 'https://drive.google.com/file/d/1weruudafxaWNUZGGqX9zvgHYJAVpee_A/view?usp=sharing';


window.onload = ()=>{
    cc.onclick = ()=>{
        window.open(codeChefURL);
    };
    linkdin.onclick = ()=>{
        window.open(linkdinURL);
    };
    github.onclick = ()=>{
    	window.open(githubURL);
    };
    leetcode.onclick = ()=>{
    	window.open(leetcodeURL);
    };
    hackerrank.onclick = ()=>{
    	window.open(hackerrankURL);
    };
    scaler.onclick = ()=>{
    	window.open(scalerURL);
    };
    gmail.onclick = ()=>{
    	window.open('mailto: pkr3933@gmail.com');
    };
    resumeLogo.onclick = ()=>{
    	window.open(resumeLogoURL);
    };
};
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
main()
