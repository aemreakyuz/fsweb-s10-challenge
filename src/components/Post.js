import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import Swal from "sweetalert2";
import { notSilAPI } from "../store/actions/actions";
import { useDispatch } from "react-redux";

export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleSil() {
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
    Swal.fire({
      title: "Silmek istediğinizden emin misiniz?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sil",
      denyButtonText: `Silme`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(notSilAPI(item.id));
        Swal.fire("Siliniyor!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Peki", "", "info");
      }
    });
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 mt-4 underline"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}
