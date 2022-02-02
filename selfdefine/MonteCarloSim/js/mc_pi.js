
function WaitCalc()
{
	document.getElementById("MonteCarloCalcPiDemo").innerHTML="等待撒点统计中。。。";
}

function MonteCarloCalcPi()
{
	var totalNum = document.getElementById("MonteCarloCalcPiDemo_TotalNum").value;
	var in_count = 0
	// plot figure
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.arc(0,0,500,0,0.5*Math.PI);
	ctx.stroke();
	// for each point
	point_r = Math.ceil(200/totalNum);
	// ctx.beginPath();
	// ctx.fillStyle = 'rgba(192, 80, 77, 0.7)';
	// ctx.arc(70, 45, point_r, 0, Math.PI*2, false);
	// ctx.fill();
	for (var i=0;i<totalNum;i++)
	{ 
		x = Math.random()
		y = Math.random()
		dis = Math.pow(Math.pow(x,2) + Math.pow(y,2), 0.5)
		// console.log(dis)
		ctx.beginPath();
		if(dis < 1){
			ctx.fillStyle = "red";
			in_count++
		}
		else{
			ctx.fillStyle = "blue";
		}
		ctx.arc(x*500, y*500, point_r, 0, Math.PI*2, false);
		ctx.fill();
	}
	var out_count = totalNum - in_count;
	document.getElementById("MonteCarloCalcPiDemo").innerHTML="撒点"+totalNum+"次，1/4圆内点数为:" + in_count + "个, 1/4圆外点数为:"+out_count+"个, 得到π是" + 4*in_count/totalNum + "<br>";
}

function LoadArc(){
	// plot figure
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.arc(0,0,500,0,0.5*Math.PI);
	ctx.stroke();
}

