//2. use the rest countries api and display the country flags.
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function result(){
    const countries=xhr.response;
    console.log(countries);
    for (var i in countries){
        console.log(countries[i].flags);
}
}

//3.use the rest countries api and display the country names,regions,sub-region and population
const names=new XMLHttpRequest();
names.open("GET","https://restcountries.com/v3.1/all");
names.send();
names.responseType="json";
names.onload=function result(){
    const countries=names.response;
    for (var i in countries){
        console.log(countries[i].name.common);
}
}

// region
const region=new XMLHttpRequest();
region.open("GET","https://restcountries.com/v3.1/all");
region.send();
region.responseType="json";
region.onload=function result(){
    const countries=region.response;
    for (var i in countries){
        console.log(countries[i].region);
}
}

// sub-region
const subregion=new XMLHttpRequest();
subregion.open("GET","https://restcountries.com/v3.1/all");
subregion.send();
subregion.responseType="json";
subregion.onload=function result(){
    const countries=subregion.response;
    console.log(countries)
    for (var i in countries){
        console.log(countries[i].subregion);
}
}

// population
const population=new XMLHttpRequest();
population.open("GET","https://restcountries.com/v3.1/all");
population.send();
population.responseType="json";
population.onload=function result(){
    const countries=population.response;
    console.log(countries)
    for (var i in countries){
        console.log(countries[i].population);
}
}