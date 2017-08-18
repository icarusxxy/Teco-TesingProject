// get data from MQTT, find MACaddress & data & timestamp's index
var MACindex = msg.payload.indexOf('address');
var dataindex = msg.payload.indexOf('data');
var timeindex = msg.payload.indexOf('time');

// use index to find MAC & data & timestamp's content, all 3 are in msg's payload
var MACaddr = msg.payload.slice(MACindex+10,MACindex+26);
var datacode = msg.payload.slice(dataindex+7,dataindex+29);
var timestamp = msg.payload.slice(timeindex+7,timeindex+26);

//in datacode, there're 4 keys are shared by all devices: MACaddr, equipID, opCode and timestamp
var equipID = msg.payload.slice(dataindex+7,dataindex+8);
var opCode = msg.payload.slice(dataindex+8,dataindex+9);


if (equipID == '1'){
	var power = msg.payload.slice(dataindex+9,dataindex+10);
	var mode = msg.payload.slice(dataindex+10,dataindex+11);
	var wind_spd = msg.payload.slice(dataindex+11,dataindex+12);
	var wind_dir = msg.payload.slice(dataindex+12,dataindex+13);
	var set_temp = parseInt(msg.payload.slice(dataindex+13,dataindex+15).toString(),16);
	var temp = parseInt(msg.payload.slice(dataindex+15,dataindex+17).toString(),16);
	var elec = parseInt(msg.payload.slice(dataindex+17,dataindex+19).toString(),16);
	var errorCode = parseInt(msg.payload.slice(dataindex+19,dataindex+21).toString(),16);
	var remain = msg.payload.slice(dataindex+21,dataindex+29);	
	
	var RAG;
	var signText;
	if(temp >= 37){
		RAG = '2';
		signText = 'Danger!';
	}
	else if (temp >=34){
		RAG = '1';
		signText = 'Aware.';
	}
	else{
		RAG = '0';
		signText = 'Functional.';
	}

	if (power =='0'){	
		signText = 'Power Down!';
	}

	// Create MQTT message in JSON
	msg.payload = {
		"address" : MACaddr,
		"equipID" : equipID,
		"opCode" : opCode,
		"power" : power,
		"mode" : mode,
		"wind_spd": wind_spd,
		"wind_dir": wind_dir,
		"set_temp": set_temp,
		"temp": temp,
		"elec": elec,
		"errorCode": errorCode,
		"RAG": RAG,
		"signText": signText,
		//"remain": remain,
		"timestamp":timestamp
	};
	 return msg;
}
else if (equipID == '2'){
	var power = msg.payload.slice(dataindex+9,dataindex+10);
	var mode = msg.payload.slice(dataindex+10,dataindex+11);
	var wind_spd = msg.payload.slice(dataindex+11,dataindex+12);
	// var wind_dir = msg.payload.slice(dataindex+12,dataindex+13);
	// var set_temp = msg.payload.slice(dataindex+13,dataindex+15);
	// var temp = msg.payload.slice(dataindex+15,dataindex+17);
	// var elec = msg.payload.slice(dataindex+17,dataindex+19);
	var errorCode = parseInt(msg.payload.slice(dataindex+19,dataindex+21).toString(),16);
	var remain = msg.payload.slice(dataindex+21,dataindex+29);
	// Create MQTT message in JSON
	msg.payload = {
		"address" : MACaddr,
		"equipID" : equipID,
		"opCode" : opCode,
		//"payloadUnparsed":datacode,
		"power" : power,
		"mode" : mode,
		"wind_spd": wind_spd,
		// "wind_dir": wind_dir,
		// "set_temp": set_temp,
		// "temp": temp,
		// "elec": elec,
		"errorCode": errorCode,
		//"remain": remain,
		"timestamp":timestamp
	};
	return msg;
}
else if (equipID == '3'){
	var HCHO = parseInt((msg.payload.slice(dataindex+9,dataindex+13)).toString(),16)*0.01;
	var CO2 = parseInt((msg.payload.slice(dataindex+13,dataindex+17)).toString(),16);
	var temp = parseInt((msg.payload.slice(dataindex+17,dataindex+21)).toString(),16)*0.01;
	var PM10 = parseInt((msg.payload.slice(dataindex+21,dataindex+25)).toString(),16)*0.1;
	var TVOC = parseInt((msg.payload.slice(dataindex+25,dataindex+29)).toString(),16)*0.01;
	// Create MQTT message in JSON
	msg.payload = {
		"address" : MACaddr,
		"equipID" : equipID,
		"opCode" : opCode,
		"HCHO" : HCHO,
		"CO2" : CO2,
		"temp" : temp,
		"PM10" : PM10,
		"TVOC" : TVOC,
		"timestamp":timestamp
	};
	 return msg;
}
else if (equipID == '4'){
	var deviceTemp = parseInt(msg.payload.slice(dataindex+9,dataindex+11).toString(),16);
	var maxTemp = parseInt(msg.payload.slice(dataindex+11,dataindex+13).toString(),16);
	var avgTemp = parseInt(msg.payload.slice(dataindex+13,dataindex+15).toString(),16);
	var deltaTemp = parseInt(msg.payload.slice(dataindex+15,dataindex+16).toString(),16);
	var CO2 = parseInt(msg.payload.slice(dataindex+16,dataindex+20).toString(),16);
	var TVOC = parseInt(msg.payload.slice(dataindex+20,dataindex+24).toString(),16);
	
	// Create MQTT message in JSON
	msg.payload = {
		"address" : MACaddr,
		"equipID" : equipID,
		"opCode" : opCode,
		"deviceTemp" : deviceTemp,
		"maxTemp": maxTemp,
		"avgTemp": avgTemp,
		"deltaTemp": deltaTemp,
		"CO2": CO2,
		"TVOC": TVOC,
		"timestamp":timestamp
	};
	return msg;
}
else if (equipID == '5'){
	var power = msg.payload.slice(dataindex+9,dataindex+10);
	var mode = msg.payload.slice(dataindex+10,dataindex+11);
	var wind_spd = msg.payload.slice(dataindex+11,dataindex+12);
	var errorCode = parseInt(msg.payload.slice(dataindex+19,dataindex+21).toString(),16);
	var remain = msg.payload.slice(dataindex+21,dataindex+29);
	// Create MQTT message in JSON
	msg.payload = {
		"address" : MACaddr,
		"equipID" : equipID,
		"opCode" : opCode,
		//"payloadUnparsed":datacode,
		"power" : power,
		"mode" : mode,
		"wind_spd": wind_spd,
		"errorCode": errorCode,
		//"remain": remain,
		"timestamp":timestamp
	};
	return msg;
}
