
let services = document.getElementById('services');

cardServices.forEach(function(element) {
    for (i = 0; i < element.tray.length; i++) {
        let newSelect ="";

        for (data in element.tray[i].detail){
            newSelect +=`<li> ${element.tray[i].detail[data]}</li>`
        }


    services.innerHTML += `
            <div class="card m-2 mb-4" style="width: 15rem; height: auto;">
              
                <div class="card-body">
                    <h3 class="card-title text-center border-bottom border-5 ">${element.tray[i].title}</h3>
                    <ul>
                        ${newSelect}
                    </ul>
                </div>
            </div>`
    }
})

