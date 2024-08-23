var myHeaders = new Headers();
myHeaders.append("key", "6e6829bd18564df0b3484222243007");
function changeElement(id,val){
	document.getElementById(id).innerHTML=val;
}
function getdetails(city){
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&lang=us-en`, requestOptions)
  .then(response => response.text())
  .then(result => {
	
	let res = JSON.parse(result);
	console.log(res.location);
	tempc=res.current.temp_c;
	tempf=res.current.temp_f;
	prec=res.current.precip_mm
	wind=res.current.wind_kph;
	cond=res.current.condition.text;
	humidity=res.current.humidity;
	winddeg=res.current.wind_degree;
	winddir=res.current.wind_dir;
	uv=res.current.uv;
	windchill=res.current.windchill_c;
	feelslike=res.current.feelslike_c;
	feelslikef=res.current.feelslike_f;
	heatindex=res.current.heatindex_c;
	heatindexf=res.current.heatindex_f;
	document.getElementById("icon").setAttribute("src",res.current.condition.icon);
	changeElement("winddeg",winddeg);
	changeElement("winddir",winddir)
	changeElement("uv",uv)
	changeElement("place",city);
	changeElement("sun",cond);
	changeElement("temp",tempc);
	changeElement("feelslike",feelslike);
	changeElement("windchill",windchill);
	changeElement("heatindex",heatindex);
	changeElement("prec",prec);
	changeElement("humidity",humidity);
	changeElement("wind",wind);
	changers=document.getElementById("changer");
	flag='c';
	changers.addEventListener('click',(e)=>{
		e.preventDefault();
		if(flag==='c'){
			changers.innerHTML="Temp Info in Celsius";
			changeElement("temp",tempf)
			changeElement("feelslike",feelslikef);
			changeElement("heatindex",heatindexf);
			symbol="&degF";
			changeElement("symbol",symbol);
			changeElement("symbol1",symbol);
			changeElement("symbol2",symbol);
			flag='f';

		}
		else{
			changers.innerHTML="Temp Info in Fahrenhiet";
			changeElement("temp",tempc);
			changeElement("feelslike",feelslike);
			changeElement("heatindex",heatindex);
			smbol="&degC";
			changeElement("symbol",smbol);
			changeElement("symbol1",smbol);
			changeElement("symbol2",smbol);
			flag='c';
		}
	})
})
  .catch(error => console.log('error', error));
}

let city
inp=document.getElementById("inp");
submit=document.getElementById("butn");
submit.addEventListener('click',(e)=>{
	e.preventDefault()
city=inp.value;
console.log(city)
getdetails(city);
})
getdetails("Delhi");

