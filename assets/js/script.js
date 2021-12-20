//creamos la variable
let her = document.querySelector('.her');
//creando grafico
function creargrafico(heroe){
    let misdatas = []

    misdatas.push({
       label:"Inteligencia", 
       y:heroe.powerstats.intelligence
    })
    misdatas.push({
       label:"Fuerza", 
       y:heroe.powerstats.strength
    })
    misdatas.push({
       label:"Rapidez", 
       y:heroe.powerstats.speed
    })
    misdatas.push({
        label:"Resistencia", 
        y:heroe.powerstats.durability
        })
    misdatas.push({
        label:"Poder", 
        y:heroe.powerstats.power
        })
    misdatas.push({
       label:"Combate", 
       y:heroe.powerstats.combat
    })


   
    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: `Estadisticas de Poder de ${heroe.name}`
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0",
            indexLabel: "{label} {y}",
            dataPoints: misdatas
        }]
    });
    //dibuja el grafico
    chart.render();
}
// evitar que la pagina se recargue
$('form').on('submit', function(ev) {
    ev.preventDefault()
// valoramos la informacion
    let hero = her.value;
// solicitamos informacion a la apis  
    $.get(`https://superheroapi.com/api.php/244331457823844/${hero}`, function(heroe){
       // cargamos el datos
        $('#nombre-heroe').html(heroe.name);
        $('.conexiones-heroe').html(heroe.connections.relatives);
        $('.publicado-heroe').html(heroe.biography.publisher);
        $('.ocupacion-heroe').html(heroe.work.occupation);
        $('.primera-heroe').html(heroe.biography['first-appearance']);
        $('.estatura-heroe').html(heroe.appearance.height[0]+ "-"+ heroe.appearance.height[1]);
        $('.peso-heroe').html(heroe.appearance.weight[0]+ "-"+ heroe.appearance.weight[1]);
        $('.alianzas-heroe').html(heroe.biography.aliases[0]+ "-"+ heroe.biography.aliases[1]);
        $('.foto-heroe').attr("src",heroe.image.url);
        $('#nCard-heroe').html(heroe.name);

        // // se limpia la url de tipos
        $('#tipo').html('');


        
        //iniciar grafico
        creargrafico(heroe);
    });

});

function estudiante (nombre, lugar){
    this.nombre = nombre;
    this.alto = alto;

    this.getNombre = function(){
        return this.nombre;
    }
    this.getLugar = function (){
        return this.lugar
    }

}
const ver = new estudiante(nelson, temuco);
console.log(ver)
