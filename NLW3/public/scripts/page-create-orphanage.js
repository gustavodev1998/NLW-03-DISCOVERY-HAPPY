
/* Create map */
const map = L.map('mapid').setView([-27.2185292,-49.6466788], 15)


/* Create and add titleLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

/* Create and add marker */

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    /* Remove icon */
    marker && map.removeLayer(marker)


    /* Add icon layer */
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})


/* Photos upload */

function addPhotoField() {
    /* Pegar o container de fotos #images */
    const container = document.querySelector('#images')

    /* Pegar o container para duplicar .new-image */
    const fieldsContainer = document.querySelectorAll('.new-upload')

    /* Realizar o clone da ultima imagem adicionada */
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    /* Verificar se o campo está vazio, se sim, não adicionar ao container de imagens */
    const input = newFieldContainer.children[0]

    if ( input.value == ""){
        return 
    }

    /* Limpar o campo antes de adicionar ao container de imagens */
    input.value = ""

    /* Adicionar o clone ao container de #images */
    container.appendChild(newFieldContainer)

}


function deleteField(event) {
    
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        /* Limpar o campo */
        span.parentNode.children[0].value = ""
        return
    }

    /* Deletar o campos */
    span.parentNode.remove()
}


/* Selecionar sim ou nao */
function toggleSelect(event) {

    /* Retirar a class .active (dos buttons) */
    document.querySelectorAll('.button-select button').forEach(function(button) {
        button.classList.remove('active')
    })

    /* Colocar a class .active nesse botao clicado */

    const button = event.currentTarget
    button.classList.add('active')

    /* Atualizar o meu input hiddent com o valor selecionado */
    const input = document.querySelector('[name="open_on_weekends]')

    /* Verificar se sim ou não */

    input.value = button.dataset.value

}

function validate(event) {

    /* Validar se lat e lng estão preenchidos */

  
    const needsLat = document.querySelector('[name="lat]')
    const needsLng = document.querySelector('[name="lng]')

    if ( (needsLat && needsLng) == "") {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }

}