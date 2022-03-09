const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(datas) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris = "";
  let jumlahProdukTerlaris = 0;
  let penulisTerlaris = "";
  let jumlahPenulisTerlaris = 0;

  datas.forEach((data) => {
    // hitung total keuntungan
    totalKeuntungan +=
      data.hargaJual * data.totalTerjual -
      data.hargaBeli * (data.sisaStok + data.totalTerjual);

    // hitung total modal
    totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);

    // cek produk terlaris
    if (data.totalTerjual > jumlahProdukTerlaris) {
      produkTerlaris = data.namaProduk;
      jumlahProdukTerlaris = data.totalTerjual;
    }

    // cek penulis terlaris
    let banyakProdukPenulisTerjual = 0;
    datas
      .filter((item) => {
        return item.penulis === data.penulis;
      })
      .forEach((item) => {
        banyakProdukPenulisTerjual += item.totalTerjual;
      });

    if (banyakProdukPenulisTerjual > jumlahPenulisTerlaris) {
      penulisTerlaris = data.penulis;
      jumlahPenulisTerlaris = banyakProdukPenulisTerjual;
    }
  });

  return {
    totalKeuntungan: Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalKeuntungan),
    totalModal: Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalModal),
    persentaseKeuntungan: (totalKeuntungan / totalModal) * 100 + "%",
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisTerlaris,
  };
}

// TESTING
console.log(getInfoPenjualan(dataPenjualanNovel));
