
// rendo costante l'endpoint

const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'

// eminem'
// metallica'
// queen'

// Inizializzo la fetch che in get deve popolare il div di eminem


/*function getTracks() {
    return fetch(baseEndpoint)
        .then(response => response.json())
        .then(data => {
            data.data
            console.log(data.data)})
}*/

function getTracks (url) {
    return fetch(url)
    .then (response => response.json())
    .then(data => data.data)
}

function initTrack(){
getTracks (baseEndpoint)
.then(tracksList => renderTrack(tracksList))
        .catch(err => {
            console.log(err)
            alert(err)
        }
        )
    }

/*function openModal() {
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    modal.style.display = 'none'
    modal.style.position = 'fixed'
    modal.classList.add('modal')
    body.appendChild(modal)

    const albumListWrapper = document.createElement('ol')
    modal.appendChild(ol)

    for (const album of albumList) {
        const newAlbum = document.createElement('li')
        newAlbum.innerText = album.album?.title
        albumListWrapper.appendChild(newAlbum)
    }

}*/

function renderTrack(tracks) {
    
    //rendo visibile il div

    const eminemDiv = document.getElementById('eminem')
    eminemDiv.classList.remove('d-none')
    eminemDiv.innerHTML = ""  //ripulisco il div ad ogni nuova inclusione

    // creo la card orizzontale

    for (const track of tracks) {

        const trackCard = document.createElement('div')
        trackCard.classList.add('card', 'mb-3', 'flex-row')
        eminemDiv.appendChild(trackCard)                            // Appendo la card alla sezione

        const trackCover = document.createElement('img')
        trackCover.classList.add('card-img-top', 'img-fluid')
        trackCover.src = track.album?.cover
        trackCard.appendChild(trackCover)                           // Appendo l'immagine alla card

        const trackBody = document.createElement('div')
        trackBody.classList.add('card-body')
        trackCard.appendChild(trackBody)                             // Appendo il body alla card 

        const trackTitle = document.createElement('h5')
        trackTitle.classList.add('card-title')
        trackTitle.text = track.title
        trackTitle.style.color = "black"
        trackBody.appendChild(trackTitle)                               // Appendo il titolo al body

        const trackSubtitle = document.createElement('h6')
        trackSubtitle.classList.add('card-subtitle')
        trackSubtitle.innerText = track.album?.title
        trackSubtitle.style.color = "black"
        trackBody.appendChild(trackSubtitle)                            // Appendo il sottotitoll al body

        const trackButton = document.createElement('button')
        trackButton.type = "button"
        trackButton.classList.add('btn-primary')
        trackButton.innerText = "Crea lista"
        trackBody.appendChild(trackButton)                              //Appendo il bottone
        //trackButton.addEventListener('click', openModal())

    }
}

//inizializzo e richiamo la fetch che mi prende tutti i risultati dell'endpoint e li renderizza

initTrack()

/*function initTrack() {
    getTracks()
        .then(tracksList => renderTrack(tracksList))
        .catch(err => {
            console.log(err)
            alert('Non riesco a renderizzare la traccia' + err)
        }
        )
}

*/



// inizializzo la funzione 