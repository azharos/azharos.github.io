const thailand = document.getElementById("thailand");
const singapore = document.getElementById("singapore");
const indonesia = document.getElementById("indonesia");
const malaysia = document.getElementById("malaysia");
const vietnam = document.getElementById("vietnam");
const laos = document.getElementById("laos");
const kamboja = document.getElementById("kamboja");
const brunei = document.getElementById("brunei");
const timorleste = document.getElementById("timorleste");
const filipina = document.getElementById("filipina");

const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Thailand
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[143]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item  bg-dark-primary text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    thailand.innerHTML = teks;
})

// Singapore
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[82]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item  bg-dark-1 text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    singapore.innerHTML = teks;
})

// Indonesia
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[20]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-6 text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    indonesia.innerHTML = teks;
})

// Malaysia
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[83]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item  bg-5 text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    malaysia.innerHTML = teks;
})

// Vietnam
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[158]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item  bg-5 text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    vietnam.innerHTML = teks;
})

// Laos
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[184]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-red text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    laos.innerHTML = teks;
})

// Cambodia
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[172]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-4 text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    kamboja.innerHTML = teks;
})

// Brunei
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[176]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-red text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    brunei.innerHTML = teks;
})

// Timor Leste
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[182]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-info text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    timorleste.innerHTML = teks;
})

// Filipina
fetch("https://api.kawalcorona.com/")
.then(res => res.json())
.then(datas => {
    const data = datas[26]["attributes"];
    const waktu = data["Last_Update"];
    const update = new Date(waktu);
    const tanggal = update.getDate();
    const m = update.getMonth();
    const tahun = update.getFullYear();

    const teks = `<div class="col-md-6 text-white">
                    <h1 class="font-weight-bold mb-3">${data.Country_Region}</h1>
                    <hr class="bg-light">
                    <p class="lead">Update Information :</p>
                    <p class="lead">${tanggal} ${bulan[m]} ${tahun}</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item bg-success text-white">ASIA TENGGARA</li>
                        <li class="list-group-item"><i class="fas fa-user-check"></i>&nbsp;Dikonfirmasi : ${data.Confirmed}</li>
                        <li class="list-group-item"><i class="fas fa-check"></i>&nbsp;Positif : ${data.Active}</li>
                        <li class="list-group-item"><i class="far fa-smile"></i>&nbsp;Sembuh : ${data.Recovered}</li>
                        <li class="list-group-item"><i class="far fa-frown-open"></i>&nbsp;Meninggal : ${data.Deaths}</li>
                    </ul>
                </div>
    `
    filipina.innerHTML = teks;
})