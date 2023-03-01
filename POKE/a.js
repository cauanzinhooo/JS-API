function loadapk(){
    let apk = 'https://pokeapi.co/api/v2/pokemon/202'
    fetch(apk)
     .then( res => res.json())
     .then((data) =>{
        document.getElementById('nome').innerHTML = data['name']
        let img = data['sprites']['front_default']
        let img1 = data['sprites']['front_shiny']
        document.getElementById('pic').setAttribute('src', img)
        document.getElementById('pic2').setAttribute('src',img1)
        document.getElementById('type').innerHTML = data['id']
     })


}
document.getElementById('btn3').onclick = loadapk;