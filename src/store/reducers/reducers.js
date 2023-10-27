const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem("s10ch", JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem("s10ch"));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem("s10ch");

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

function noteReducer() {
  return <div>reducers</div>;
}

export default noteReducer;
