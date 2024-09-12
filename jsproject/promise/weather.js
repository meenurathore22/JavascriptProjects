let key="aee1045382f4e2a05a39735d89481e80"

    let div=document.getElementById('box')
    async function getData(){
        let city=document.getElementById("city").value;
        let resolve=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        //console.log(resolve)
        let data=await resolve.json();
        console.log(data);
        
        Display(data);
    }

    const Display = (data) =>{

      div.innerHTML="  "
      let Name=document.createElement('p')
      Name.innerText=`City-Name : ${data.name}`  

      div.appendChild(Name);

    }

    