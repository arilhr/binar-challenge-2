function getTotalPenjualan(datas) {
  let totalPenjualan = 0;

  datas.forEach((data) => {
    totalPenjualan += data.hargaSatuan * data.totalTerjual;
  });

  return totalPenjualan;
}
