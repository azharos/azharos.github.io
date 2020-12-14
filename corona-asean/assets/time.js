const hari = document.getElementById('hr');
const tanggal = document.getElementById('tgl');
const bln = document.getElementById('bln');
const tahun = document.getElementById('thn');
const jam = document.getElementById('jam');
const menit = document.getElementById('menit');
const detik = document.getElementById('detik');

const m = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const h = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
const d = new Date().getDay();

hari.innerHTML = h[d];
tanggal.innerHTML = new Date().getDate();
bln.innerHTML = m[new Date().getMonth()];
tahun.innerHTML = new Date().getFullYear();


setInterval(() => {
    h2 = new Date().getHours();
    mnt = new Date().getMinutes();
    s = new Date().getSeconds();

    h2 = (h2 < 10) ? "0" + h2: h2;
    mnt = (mnt < 10) ? "0" + mnt: mnt;
    s = (s < 10) ? "0" + s: s;

    jam.innerHTML = h2;
    menit.innerHTML = mnt;
    detik.innerHTML = s;
},1000)