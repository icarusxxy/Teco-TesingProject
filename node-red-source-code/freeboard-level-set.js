//HCHO level
var level = datasources["e3"]["HCHO"]
if(level < 0.08){
    return 0;
}
else if(level < 0.1){
    return 1;
}
else{
    return 2;
}


//TVOC level
var level = datasources["e3"]["TVOC"];
if(level < 0.5){
    return 0;
}
else if(level < 0.56){
    return 1;
}
else{
    return 2;
}


//PM10 level
var level = datasources["e3"]["PM10"];
if(level < 60){
    return 0;
}
else if(level < 75){
    return 1;
}
else{
    return 2;
}


//temp level
var temp = = datasources["e3"]["temp"];
if(temp > 0 && temp < 34){
    return 0;
}
else if (temp < 37){
    return 1;
}
else{
    return 2;
}

//CO2 level
var level = datasources["e3"]["CO2"];
if(level < 800){
    return 0;
}
else if(level < 1000){
    return 1;
}
else{
    return 2;
}


//all the criteria
var HCHO = datasources["e3"]["HCHO"]
var TVOC = datasources["e3"]["TVOC"]
var temp = datasources["e3"]["temp"]
var PM10 = datasources["e3"]["PM10"]
var CO2 = datasources["e3"]["CO2"]

if(CO2>1000 || PM10>75 || temp>37 || TVOC>0.56 || HCHO>0.1){
    return 2;
}
else if(CO2>800 || PM10>60 || temp>34 || TVOC>0.5 || HCHO>0.08){
    return 1;
}
else{
    return 0;
}