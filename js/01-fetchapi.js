const URL_API = "data/campers.json";
//Consumir JSON con Fetch API (Objeto)

//Cargar referencia a un boton

//Agregar listener

//-------------------------------------
function loadData(){
    fetch(URL_API)
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            viewHTML(data);
            console.log(data);
        })
}
function viewHTML(myData){
    const {id,nombre,edad,ingles} = myData;
    //Mostrar los datos en el html

}