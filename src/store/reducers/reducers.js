import { NOT_EKLE, NOT_SIL, GET_FROM_LOCAL_STORAGE } from "../actions/actions";

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
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

const noteReducer = (state = baslangicDegerleri, action) => {
  switch (action.type) {
    case NOT_EKLE:
      const newNote = {
        ...state,
        notlar: [action.payload, ...state.notlar],
      };
      localStorageStateYaz(s10chLocalStorageKey, newNote);
      return newNote;

    case NOT_SIL:
      const newState = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, newState);
      return { newState };

    case GET_FROM_LOCAL_STORAGE:
      return baslangicNotlariniGetir(s10chLocalStorageKey);

    default:
      return state;
  }
};

export default noteReducer;
