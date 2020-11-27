AOS.init();
const quran = document.getElementById("quran");
fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
.then(res => res.json())
.then(datas => {
    let card = "";
    datas.forEach(data => {
        card += `<div class="col-lg-4 mt-3" data-aos="fade-up" data-aos-delay="200">
                    <div class="card text-body">
                        <div class="card-body">
                            <h5 class="card-title">${data.nama} (${data.ayat})</h5>
                            <p class="card-text">Surah ke-${data.nomor} | Diturunkan di ${data.type}</p>
                            <a href="${data.audio}"
                                class="btn btn-info" target="_blank">Audio</a>
                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal${data.nomor}">Keterangan</a>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal${data.nomor}" tabindex="-1" aria-labelledby="modal${data.nomor}Label" aria-hidden="true">
                    <div class="modal-dialog text-body">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal${data.nomor}Label">${data.nama} - ${data.asma}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-justify">
                                ${data.keterangan}
                            </div>
                            <div class=" modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    quran.innerHTML = card;
})