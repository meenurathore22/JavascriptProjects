const myform = document.querySelector('form')
console.log(myform)
const array=[]

myform.addEventListener('submit',myfun)

function myfun(event){
event.preventDefault()

let Name = document.getElementById('name').value

let Id = document.getElementById('ID').value

let select = document.getElementById('department').value

let ex = document.getElementById('experience').value

let email = document.getElementById('email').value

let number = document.getElementById('number').value

let data = {
    Ename : Name,
    Eid : Id,
    Edepartment :select,
    Eexperience : ex,
    Eemail : email,
    Enumber : number

}
//console.log(data)

array.push(data)
console.log(array)

display(array);
}

function display(array){
    document.querySelector('tbody').innerText=""

    array.forEach(function(data){
        let tr= document.createElement('tr')
        
        let Name = document.createElement('td')
        Name.innerText=data.Ename;

        let Id = document.createElement('td')
        Id.innerText=data.Eid;

        let select = document.createElement('td')
        select.innerText=data.Edepartment ;

        let ex = document.createElement('td')
        ex.innerText=data.Eexperience;

        let email = document.createElement('td')
        email.innerText=data.Eemail;

        let number = document.createElement('td')
        number.innerText=data.Enumber

        let role = document.createElement('td')
        let roletext=giverole(data.Eexperience)
        role.innerText=roletext
        role.id='role'

        let DeleteElement = document.createElement('td')
        DeleteElement.innerText='Delete'
        DeleteElement.style.cursor='pointer'
        DeleteElement.id='delete'

        DeleteElement.addEventListener("click",function(event){
        event.target.parentNode.remove()
        })


        tr.append(Name,Id,select,ex,email,number,role,DeleteElement)
        document.querySelector("tbody").append(tr)

    })

}

function giverole(Eexperience){
    if(Eexperience>5){
        return 'Senior'
    }
    else if(Eexperience>=2 && Eexperience<=5)
    {
        return 'Junior'
    }
    else if(Eexperience<2)
    {
        return 'fresher'
    }
}



