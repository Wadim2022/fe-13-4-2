const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const resultDiv = document.getElementById('result')



searchBtn.addEventListener('click', ()=>{
    const seachValue = searchInput.value.trim();

    if(!isNaN(seachValue)&& seachValue <= 10){
        fetch(`https:jsonplaceholder.typicode.com/users/${seachValue}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then((data)=>{
            resultDiv.innerHTML= `
            
            <h2>Вывод</h2>
            <p>Id: ${data.id}</p>
            <p>Name: ${data.name}</p>
            <p>Id: ${data.phone}</p>
            <p>Id: ${data.username}</p>
            <p>Id: ${data.email}</p>
            `
        })
        .catch((error)=>{
            resultDiv.innerHTML = `
            <h2>Ошибочка</h2>
            <p>${error.message}</p>
            `;
        })

    }else{
        resultDiv.innerHTML = `
        <h2>Ошибка</h2>
        <p> Введите корректные данные</p>`
    }
})