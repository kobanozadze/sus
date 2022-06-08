const addpozsus_obj = document.querySelector(".col-center");
//
document.addEventListener("click", function (event) {
  const Click_classList_value = event.target.classList.value;
  //
  if (
    Click_classList_value === "accordion active" ||
    Click_classList_value === "accordion" ||
    Click_classList_value === "accord" ||
    Click_classList_value === "accord activ"
  ) {
    if (
      Click_classList_value === "accord" ||
      Click_classList_value === "accord activ"
    ) {
      event.target.parentNode.classList.toggle("active");
      event.target.classList.toggle("activ");
    } else {
      event.target.classList.toggle("active");
      event.target.lastElementChild.classList.toggle("activ");
    }
    const panel =
      event.target.nextElementSibling ||
      event.target.parentNode.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      let PozSusName = event.target.parentNode.parentNode.classList.value;
      PozSusName = PozSusName.substring(0, PozSusName.indexOf(" "));
      Shedegi(PozSusName);
    }
  }
  //
  if (Click_classList_value === "img_pozsus_clear") {
    event.target.parentNode.parentNode.parentNode.remove();
  }
  if (Click_classList_value === "img_pozsus_bazari_clear bazrisshedegi") {
    const q = event.target.parentNode;
    const p = event.target.parentNode.nextElementSibling;
    let PozSusName = event.target.parentNode.parentNode.parentNode.classList.value;
    PozSusName = PozSusName.substring(0, PozSusName.indexOf(" "));
    q.remove();
    p.remove(); 
    SabolooMogebebisAmokrifvaBazrebidan(PozSusName);
  }

  
});
document.addEventListener("change", function (event) {
  const FindClicPozsus_tf_X = event.target.parentNode.id;
  const Aqtiuri_elementi_val = event.target.classList.value;
  if (FindClicPozsus_tf_X === "id_grid_pozsus_tavi") {
    const changeObj_classListval = Aqtiuri_elementi_val;
    const FindClicPozSusClassListval =
      event.target.parentNode.parentNode.parentNode.classList.value;
    const PozSusName = FindClicPozSusClassListval.substring(
      0,
      FindClicPozSusClassListval.indexOf(" ", 0)
    );
    // start change - შედეგებში
    if (
      changeObj_classListval !== "gundsaxeli_val" &&
      changeObj_classListval !== "pozadd_val"
    ) {
      Shedegi(PozSusName);
      SabolooMogeba_OriFunqcia(PozSusName);
    }
    // end change - შედეგებში
    // start change - ბაზრის დამატება
    if (changeObj_classListval === "pozadd_val") {
      const BazriSelect_obj = document.querySelector(
        "." + PozSusName + " .pozadd_val"
      );
      const BazrisSaxeli_class =
        BazriSelect_obj.options[BazriSelect_obj.selectedIndex].getAttribute(
          "class"
        );
      const BazrisSaxeli_value =
        BazriSelect_obj.options[BazriSelect_obj.selectedIndex].getAttribute(
          "value"
        );
      const SearchBazari = document.querySelector(
        "." + PozSusName + " .pozsus_contenti #" + BazrisSaxeli_class
      );

      if (!SearchBazari) {
        HtmlShabloni_BazrebiAdd(
          PozSusName,
          BazrisSaxeli_value,
          BazrisSaxeli_class
        );
      }
    }
    // end change - ბაზრის დამატება
  }
  // start ტოტალ ფსონებში კუში და ფსონის მოსემნა
  // შემდეგი სტროფის დასამატებლად
  if (
    Aqtiuri_elementi_val === "pozsus_kushi" ||
    Aqtiuri_elementi_val === "pozsus_fsoni"
  ) {
    const Poz_Val =
      event.target.parentNode.querySelector(".pozsus_poz_list").value;
    if (Poz_Val.length > 0) {
      const pzsus_n = event.target.parentNode.getAttribute("data-pozsusname");
      const pz_n = event.target.parentNode.getAttribute("data-bazariname");
      const nextElement = event.target.parentNode.nextElementSibling;
      if (!nextElement) {
        const tf_name = event.target.parentNode.id;
        const tf_nomeri =
          parseInt(tf_name.substring(tf_name.indexOf("-") + 1, 30)) + 1;

        const Search_element = document.querySelector(
          "." +
            pzsus_n +
            " .pozsus_contenti div#" +
            pz_n +
            " .fsonebi_jami [data-parent_pozname = '" +
            Poz_Val +
            "']"
        );
        HtmlShabloni_TotalFsonebi(pzsus_n, pz_n, tf_nomeri);
        !Search_element
          ? HtmlShabloni_TotalFsoniJmai(pzsus_n, pz_n, Poz_Val)
          : "";
        PanelisZomebi_Gasworeba(pzsus_n, pz_n, tf_nomeri);
        Shedegi(pzsus_n);
      }
      const Shejamdes = Suf_Mog_Gamotvla_pozsus(event, Poz_Val);
      Shejamdes === 1 ? Fsonebis_Shejameba(pzsus_n, pz_n) : "";
    }
  }
  // end ტოტალ ფსონებში კუში და ფსონის მოსემნა  flexsi_bazari
  // start ბირჯაზე რეალობის გაფერადება
  if (Aqtiuri_elementi_val.substring(0, 14) === "bazari_realoba") {
    if (parseFloat(event.target.value) >= 0) {
      event.target.classList.remove("shedegi_red_text");
      event.target.classList.add("shedegi_green_text");
    } else {
      event.target.classList.remove("shedegi_green_text");
      event.target.classList.add("shedegi_red_text");
    }
  }
  // end ბირჯაზე რეალობის გაფერადება
  // start ბირჟაზე რეალობის რედაქტირება
  if (Aqtiuri_elementi_val.indexOf("bazari_realoba") === 0) {
    let pzsus_n = event.composedPath()[7].classList.value;
    pzsus_n = pzsus_n.substring(0, pzsus_n.indexOf(" "));
    let pz_n = event.composedPath()[5].id;
    SabolooMogebaTotal_da_BirjisFsonebidan(1, pzsus_n, pz_n);
  }
  // end ბირჟაზე რეალობის რედაქტირება
});

// html - შაბლონის გამოძახება ჩასმა
document
  .getElementById("but_pozsus")
  .addEventListener("click", function (event) {
    let q = [...document.querySelectorAll(".pozsus_Count")].length;
    q === 0 ? (q = 1) : (q = PozSusBoloNomeri());
    addpozsus_obj.insertAdjacentHTML("beforeend", HtmlShabloni_pozsusAdd(q));
    BazrebitShevseba_option_is(q);
    const obj = document.querySelector(".pozsus-" + q);
    obj.scrollIntoView({ block: "center", behavior: "smooth" });
  });
// */
// ფუნქციები -------------------------------------------
function PozSusBoloNomeri() {
  const pozsus_Count_obj = [...document.querySelectorAll(".pozsus_Count")];
  const PozsusBoloelementi_classList =
    pozsus_Count_obj[pozsus_Count_obj.length - 1].classList.value;
  const k = PozsusBoloelementi_classList.indexOf(" ", 0);
  const pozsus_bolonomeri =
    parseInt(PozsusBoloelementi_classList.substring(7, k)) + 1;
  return pozsus_bolonomeri;
}
//
function HtmlShabloni_BazrebiAdd(
  PozSusName,
  BazrisSaxelivalue,
  BazrisSaxeliclass
) {
  if (BazrisSaxeliclass !== "carieli") {
    const PozSus_ParentNode_obj = document.querySelector(
      "." + PozSusName + " .pozsus_contenti"
    );
    PozSus_ParentNode_obj.insertAdjacentHTML(
      "beforeend",
      HtmlShabloni_bazarebis_qudi(
        PozSusName,
        BazrisSaxelivalue,
        BazrisSaxeliclass
      )
    );
    Poziciebit_da_Inputebit_Shevseba_Birjis(PozSusName, BazrisSaxeliclass);
    PoziciebitShevseba_option_is(PozSusName, BazrisSaxeliclass);
  }
}
//
function ShedegisFormireba(t1, dz1, t2, dz2, add_bazrebi_aray) {
  const aray_poz = [];
  // start Tp_1x2 = Tp ტაიმი პირველი  1 x 2
  if (add_bazrebi_aray.indexOf("Tp_1x2") !== -1) {
    t1 > t2
      ? aray_poz.push(
          Bazrebi?.Tp_1x2?.mog_poz?.t1_m_t2
            ? Bazrebi?.Tp_1x2?.mog_poz?.t1_m_t2
            : ""
        )
      : "";
    t1 < t2
      ? aray_poz.push(
          Bazrebi?.Tp_1x2?.mog_poz?.t1_n_t2
            ? Bazrebi?.Tp_1x2?.mog_poz?.t1_n_t2
            : ""
        )
      : "";
    t1 === t2
      ? aray_poz.push(
          Bazrebi?.Tp_1x2?.mog_poz?.t1_t_t2
            ? Bazrebi?.Tp_1x2?.mog_poz?.t1_t_t2
            : ""
        )
      : "";
  }
  // start Tm_1x2 = Tm ტაიმი მეორე  1 x 2
  if (add_bazrebi_aray.indexOf("Tm_1x2") !== -1) {
    dz1 - t1 > dz2 - t2
      ? aray_poz.push(
          Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_m_dz2_g_t2
            ? Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_m_dz2_g_t2
            : ""
        )
      : "";
    dz1 - t1 < dz2 - t2
      ? aray_poz.push(
          Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_n_dz2_g_t2
            ? Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_n_dz2_g_t2
            : ""
        )
      : "";
    dz1 - t1 === dz2 - t2
      ? aray_poz.push(
          Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_t_dz2_g_t2
            ? Bazrebi?.Tm_1x2?.mog_poz?.dz1_g_t1_t_dz2_g_t2
            : ""
        )
      : "";
  }
  // start Dz_1x2 = Dz ძირითადი 1 x 2
  if (add_bazrebi_aray.indexOf("Dz_1x2") !== -1) {
    dz1 > dz2
      ? aray_poz.push(
          Bazrebi?.Dz_1x2?.mog_poz?.dz1_m_dz2
            ? Bazrebi?.Dz_1x2?.mog_poz?.dz1_m_dz2
            : ""
        )
      : "";
    dz1 < dz2
      ? aray_poz.push(
          Bazrebi?.Dz_1x2?.mog_poz?.dz1_n_dz2
            ? Bazrebi?.Dz_1x2?.mog_poz?.dz1_n_dz2
            : ""
        )
      : "";
    dz1 === dz2
      ? aray_poz.push(
          Bazrebi?.Dz_1x2?.mog_poz?.dz1_t_dz2
            ? Bazrebi?.Dz_1x2?.mog_poz?.dz1_t_dz2
            : ""
        )
      : "";
  }
  // start T_match = ტაიმ/მატჩი
  if (add_bazrebi_aray.indexOf("T_match") !== -1) {
    t1 > t2 && dz1 > dz2 // 1-1
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_m_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_m_dz2
            : ""
        )
      : "";
    t1 > t2 && dz1 === dz2 // 1-x
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_t_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_t_dz2
            : ""
        )
      : "";
    t1 > t2 && dz1 < dz2 // 1-2
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_n_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_m_t2_da_dz1_n_dz2
            : ""
        )
      : "";
    t1 === t2 && dz1 > dz2 // x-1
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_m_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_m_dz2
            : ""
        )
      : "";
    t1 === t2 && dz1 === dz2 // x-x
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_t_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_t_dz2
            : ""
        )
      : "";
    t1 === t2 && dz1 < dz2 // x-2
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_n_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_t_t2_da_dz1_n_dz2
            : ""
        )
      : "";
    t1 < t2 && dz1 > dz2 // 2-1
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_m_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_m_dz2
            : ""
        )
      : "";
    t1 < t2 && dz1 === dz2 // 2-x
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_t_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_t_dz2
            : ""
        )
      : "";
    t1 < t2 && dz1 < dz2 // 2-2
      ? aray_poz.push(
          Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_n_dz2
            ? Bazrebi?.T_match?.mog_poz?.t1_n_t2_da_dz1_n_dz2
            : ""
        )
      : "";
  }
  // start Tp_ki_ara = ტაიმი პირველი  კი/არა
  if (add_bazrebi_aray.indexOf("Tp_ki_ara") !== -1) {
    t1 > 0 && t2 > 0 // ki
      ? aray_poz.push(
          Bazrebi?.Tp_ki_ara?.mog_poz?.t1_m_0_da_t2_m_0
            ? Bazrebi?.Tp_ki_ara?.mog_poz?.t1_m_0_da_t2_m_0
            : ""
        )
      : "";
    t1 === 0 || t2 === 0 // ara
      ? aray_poz.push(
          Bazrebi?.Tp_ki_ara?.mog_poz?.t1_t_0_an_t2_t_0
            ? Bazrebi?.Tp_ki_ara?.mog_poz?.t1_t_0_an_t2_t_0
            : ""
        )
      : "";
  }
  // start Tm_ki_ara = ტაიმი მეორე  კი/არა
  if (add_bazrebi_aray.indexOf("Tm_ki_ara") !== -1) {
    dz1 - t1 > 0 && dz2 - t2 > 0 // ki
      ? aray_poz.push(
          Bazrebi?.Tm_ki_ara?.mog_poz?.dz1_g_t1_m_0_da_dz2_g_t2_m_0
            ? Bazrebi?.Tm_ki_ara?.mog_poz?.dz1_g_t1_m_0_da_dz2_g_t2_m_0
            : ""
        )
      : "";
    dz1 - t1 === 0 || dz2 - t2 === 0 // ara
      ? aray_poz.push(
          Bazrebi?.Tm_ki_ara?.mog_poz?.dz1_g_t1_t_0_an_dz2_g_t2_t_0
            ? Bazrebi?.Tm_ki_ara?.mog_poz?.dz1_g_t1_t_0_an_dz2_g_t2_t_0
            : ""
        )
      : "";
  }
  // start Dz_ki_ara = ძირითადი  კი/არა
  if (add_bazrebi_aray.indexOf("Dz_ki_ara") !== -1) {
    dz1 > 0 && dz2 > 0 // ki
      ? aray_poz.push(
          Bazrebi?.Dz_ki_ara?.mog_poz?.dz1_m_0_da_dz2_m_0
            ? Bazrebi?.Dz_ki_ara?.mog_poz?.dz1_m_0_da_dz2_m_0
            : ""
        )
      : "";
    dz1 === 0 || dz2 === 0 // ara
      ? aray_poz.push(
          Bazrebi?.Dz_ki_ara?.mog_poz?.dz1_t_0_an_dz2_t_0
            ? Bazrebi?.Dz_ki_ara?.mog_poz?.dz1_t_0_an_dz2_t_0
            : ""
        )
      : "";
  }
  // start Tp_zusti = ტაიმი პირველი ზუსტი ანგარიში
  if (add_bazrebi_aray.indexOf("Tp_zusti") !== -1) {
    t1 === 0 && t2 === 0 // 0-0
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_0
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_0
            : ""
        )
      : "";
    t1 === 1 && t2 === 1 // 1-1
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_1
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_1
            : ""
        )
      : "";
    t1 === 2 && t2 === 2 // 2-2
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_2
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_2
            : ""
        )
      : "";
    t1 === 1 && t2 === 0 // 1-0
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_0
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_0
            : ""
        )
      : "";
    t1 === 2 && t2 === 0 // 2-0
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_0
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_0
            : ""
        )
      : "";
    t1 === 2 && t2 === 1 // 2-1
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_1
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_2_da_t2_t_1
            : ""
        )
      : "";
    t1 === 0 && t2 === 1 // 0-1
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_1
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_1
            : ""
        )
      : "";
    t1 === 0 && t2 === 2 // 0-2
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_2
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_0_da_t2_t_2
            : ""
        )
      : "";
    t1 === 1 && t2 === 2 // 1-2
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_2
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_t_1_da_t2_t_2
            : ""
        )
      : "";
    t1 > 2 || t2 > 2 // < >
      ? aray_poz.push(
          Bazrebi?.Tp_zusti?.mog_poz?.t1_m_2_an_t2_m_2
            ? Bazrebi?.Tp_zusti?.mog_poz?.t1_m_2_an_t2_m_2
            : ""
        )
      : "";
  }
  // start Tm_zusti = ტაიმი მეორე ზუსტი ანგარიში
  if (add_bazrebi_aray.indexOf("Tm_zusti") !== -1) {
    dz1 - t1 === 0 && dz2 - t2 === 0 // 0-0
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_0
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_0
            : ""
        )
      : "";
    dz1 - t1 === 1 && dz2 - t2 === 1 // 1-1
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_1
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_1
            : ""
        )
      : "";
    dz1 - t1 === 2 && dz2 - t2 === 2 // 2-2
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_2
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_2
            : ""
        )
      : "";
    dz1 - t1 === 1 && dz2 - t2 === 0 // 1-0
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_0
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_0
            : ""
        )
      : "";
    dz1 - t1 === 2 && dz2 - t2 === 0 // 2-0
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_0
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_0
            : ""
        )
      : "";
    dz1 - t1 === 2 && dz2 - t2 === 1 // 2-1
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_1
            ? Bazrebi?.Tp_zusti?.mog_poz?.dz1_g_t1_t_2_da_dz2_g_t2_t_1
            : ""
        )
      : "";
    dz1 - t1 === 0 && dz2 - t2 === 1 // 0-1
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_1
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_1
            : ""
        )
      : "";
    dz1 - t1 === 0 && dz2 - t2 === 2 // 0-2
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_2
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_0_da_dz2_g_t2_t_2
            : ""
        )
      : "";
    dz1 - t1 === 1 && dz2 - t2 === 2 // 1-2
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_2
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_t_1_da_dz2_g_t2_t_2
            : ""
        )
      : "";
    dz1 - t1 > 2 || dz2 - t2 > 2 // < >
      ? aray_poz.push(
          Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_m_2_an_dz2_g_t2_m_2
            ? Bazrebi?.Tm_zusti?.mog_poz?.dz1_g_t1_m_2_an_dz2_g_t2_m_2
            : ""
        )
      : "";
  }
  // start Dz_zusti = ძირითადი ზუსტი ანგარიში
  if (add_bazrebi_aray.indexOf("Dz_zusti") !== -1) {
    dz1 === 0 && dz2 === 0 // 0-0
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_0
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_0
            : ""
        )
      : "";
    dz1 === 0 && dz2 === 1 // 0-1
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_1
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_1
            : ""
        )
      : "";
    dz1 === 0 && dz2 === 2 // 0-2
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_2
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_2
            : ""
        )
      : "";
    dz1 === 0 && dz2 === 3 // 0-3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_0_da_dz2_t_3
            : ""
        )
      : "";
    dz1 === 1 && dz2 === 0 // 1-0
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_0
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_0
            : ""
        )
      : "";
    dz1 === 1 && dz2 === 1 // 1-1
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_1
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_1
            : ""
        )
      : "";
    dz1 === 1 && dz2 === 2 // 1-2
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_2
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_2
            : ""
        )
      : "";
    dz1 === 1 && dz2 === 3 // 1-3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_1_da_dz2_t_3
            : ""
        )
      : "";
    dz1 === 2 && dz2 === 0 // 2-0
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_0
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_0
            : ""
        )
      : "";
    dz1 === 2 && dz2 === 1 // 2-1
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_1
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_1
            : ""
        )
      : "";
    dz1 === 2 && dz2 === 2 // 2-2
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_2
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_2
            : ""
        )
      : "";
    dz1 === 2 && dz2 === 3 // 2-3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_2_da_dz2_t_3
            : ""
        )
      : "";
    dz1 === 3 && dz2 === 0 // 3-0
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_0
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_0
            : ""
        )
      : "";
    dz1 === 3 && dz2 === 1 // 3-1
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_1
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_1
            : ""
        )
      : "";
    dz1 === 3 && dz2 === 2 // 3-2
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_2
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_2
            : ""
        )
      : "";
    dz1 === 3 && dz2 === 3 // 3-3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_3_da_dz2_t_3
            : ""
        )
      : "";
    dz1 > 3 && dz1 > dz2 //  > 3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_m_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_m_3
            : ""
        )
      : "";
    dz2 > 3 && dz1 < dz2 // 3 <
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz2_m_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz2_m_3
            : ""
        )
      : "";
    dz1 === dz2 && dz1 > 3 && dz2 > 3 // 3-3
      ? aray_poz.push(
          Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_dz2_da_dz1_m_3_da_dz2_m_3
            ? Bazrebi?.Dz_zusti?.mog_poz?.dz1_t_dz2_da_dz1_m_3_da_dz2_m_3
            : ""
        )
      : "";
  }

  return aray_poz;
}
//
function BazrebitShevseba_option_is(pozsus_nomeri) {
  const Bazri_obj = document.querySelector(
    ".pozsus-" + pozsus_nomeri + " .pozadd_val"
  );

  let el = document.createElement("option");
  el.classList = "carieli";
  el.value = "indexseleqt";
  Bazri_obj.appendChild(el);

  for (const key in Bazrebi) {
    let el = document.createElement("option");
    el.classList = key;
    if (Bazrebi.hasOwnProperty.call(Bazrebi, key)) {
      const element = Bazrebi[key];
      el.value = element.name_vrclad;
      el.textContent = element.name;
    }
    Bazri_obj.appendChild(el);
  }
}
//
function ShedegebisAtrisovka(
  PozSusName,
  Mogebuli_poz_array,
  Actiuri_Bazrebi_val_array
) {
  const section__obj = document.querySelector("section." + PozSusName);

  for (let i = 0; i < Actiuri_Bazrebi_val_array.length; i++) {
    const Konkretuli_Bazris_saxeli = Actiuri_Bazrebi_val_array[i];

    for (const key in Mogebuli_poz_array) {
      const BazNmae = Mogebuli_poz_array[key];

      if (BazNmae[0] === Konkretuli_Bazris_saxeli) {
        const Konkretuli_Bazris_saxeli__obj = section__obj.querySelector(
          "div#" + Konkretuli_Bazris_saxeli + " .bazariDAjami"
        );
        const p = Konkretuli_Bazris_saxeli__obj.querySelectorAll("#poz_name");

        p.forEach(function (params) {
          if (BazNmae.indexOf(params.innerHTML) !== -1) {
            params.classList.remove("shedegi_red");
            params.classList.add("shedegi_green");
          } else {
            params.classList.remove("shedegi_green");
            params.classList.add("shedegi_red");
          }
        });
        break;
      }
    }
  }
}
//
function AqtiuriBazrebi_spisoki(PozSusName) {
  let Actiuri_Bazrebi_value_array = [];
  const Actiuri_Bazrebi_obj = document.querySelectorAll(
    "." + PozSusName + " button.accordion"
  );
  for (let i = 0; i < Actiuri_Bazrebi_obj.length; i++) {
    Actiuri_Bazrebi_value_array.push(Actiuri_Bazrebi_obj[i].id);
  }
  return Actiuri_Bazrebi_value_array;
}
//
function PoziciebitShevseba_option_is(PozSusName, BazrisSaxeliclass) {
  const Optioni_obj = document.querySelector(
    "." +
      PozSusName +
      " .pozsus_contenti div#" +
      BazrisSaxeliclass +
      " .pozsus_fsonebi #" +
      BazrisSaxeliclass +
      "_"
  );
  const Bazris_Poz_za_poziciebi = Bazrebi?.[BazrisSaxeliclass]?.poz_za;
  const Bazris_Poz_pro_poziciebi = Bazrebi?.[BazrisSaxeliclass]?.poz_pro;

  for (let i = 0; i < Bazris_Poz_za_poziciebi.length; i++) {
    const pzza = Bazris_Poz_za_poziciebi[i];
    let el = document.createElement("option");
    el.value = pzza;
    Optioni_obj.appendChild(el);
  }
  for (let i = 0; i < Bazris_Poz_pro_poziciebi.length; i++) {
    const pzpro = Bazris_Poz_pro_poziciebi[i];
    let el = document.createElement("option");
    el.value = pzpro;
    Optioni_obj.appendChild(el);
  }
}
//
function Poziciebit_da_Inputebit_Shevseba_Birjis(
  PozSusName,
  BazrisSaxeliclass
) {
  const Bazris_Poz_za_poziciebi = Bazrebi?.[BazrisSaxeliclass]?.poz_za;
  for (let i = 0; i < Bazris_Poz_za_poziciebi.length; i++) {
    const pzza = Bazris_Poz_za_poziciebi[i];
    HtmlShabloni_BazrisPozicia(PozSusName, BazrisSaxeliclass, pzza);
  }
}
//
function PanelisZomebi_Gasworeba(pzsus_n, pz_n, tf_nomeri) {
  const panel = document.querySelector(
    "." + pzsus_n + " .pozsus_contenti div#" + pz_n
  );
  panel.style.maxHeight = panel.scrollHeight + "px";
  const AxladDamatebuli_fsoni_strofi__obj = document.querySelector(
    "." +
      pzsus_n +
      " .pozsus_contenti div#" +
      pz_n +
      " #pozsus_tf-" +
      tf_nomeri +
      " .pozsus_kushi"
  );
  //  console.log(AxladDamatebuli_fsoni_strofi__obj);
  //  console.log(window.pageYOffset);
  // AxladDamatebuli_fsoni_strofi__obj.scrollIntoView(false);
  // let newDoc = new DOMParser().parseFromString(AxaliFsoni, "text/html");
  // let hh = newDoc.getElementsByTagName("div")[0];
  // console.log(hh);
  // console.log(newDoc);
  //  AxladDamatebuli_fsoni_strofi__obj.scrollIntoView({
  //   block: "end",
  //   behavior: "smooth",
  // });
  // window.pageYOffset = document.documentElement.scrollTop;
  // window.pageYOffset;
  // window.scrollTo(0,window.pageYOffset + 500);
  // console.log(document.scrollingElement || document.body);
  // var scrollingElement = (document.scrollingElement || document.body);
  // scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
function Shedegi(PozSusName) {
  const taimi1_obj = document.querySelector("." + PozSusName + " .taimi1_val");
  const taimi2_obj = document.querySelector("." + PozSusName + " .taimi2_val");
  const dziritadi1_obj = document.querySelector(
    "." + PozSusName + " .dziritadi1_val"
  );
  const dziritadi2_obj = document.querySelector(
    "." + PozSusName + " .dziritadi2_val"
  );

  const taimi1_val = parseInt(taimi1_obj.value);
  const dziritadi1_val = parseInt(dziritadi1_obj.value);
  const taimi2_val = parseInt(taimi2_obj.value);
  const dziritadi2_val = parseInt(dziritadi2_obj.value);

  taimi1_val >= dziritadi1_val ? (dziritadi1_obj.value = taimi1_val) : "";
  taimi2_val >= dziritadi2_val ? (dziritadi2_obj.value = taimi2_val) : "";
  const Actiuri_Bazrebi_val_array = AqtiuriBazrebi_spisoki(PozSusName);
  const Mogebuli_poz_array = ShedegisFormireba(
    parseInt(taimi1_val),
    parseInt(dziritadi1_obj.value),
    parseInt(taimi2_val),
    parseInt(dziritadi2_obj.value),
    Actiuri_Bazrebi_val_array
  );
  ShedegebisAtrisovka(
    PozSusName,
    Mogebuli_poz_array,
    Actiuri_Bazrebi_val_array
  );
}
//
function Suf_Mog_Gamotvla_pozsus(event, Poz_Val) {
  const Gamosatvleli_strofi__obj = event.target.parentNode;
  const PozSusSufmog_obj =
    Gamosatvleli_strofi__obj.querySelector(".pozsus_suf_mog");
  const PozSusFsoni_obj =
    Gamosatvleli_strofi__obj.querySelector(".pozsus_fsoni");

  const PozSusKushi_val = parseFloat(
    Gamosatvleli_strofi__obj.querySelector(".pozsus_kushi").value
  );
  const PozSusFsoni_val = parseFloat(PozSusFsoni_obj.value);
  const PozsusPozList_obj =
    Gamosatvleli_strofi__obj.querySelector(".pozsus_poz_list");

  if (PozSusKushi_val > 0 && PozSusFsoni_val > 0) {
    PozSusSufmog_obj.value = (PozSusFsoni_val * (PozSusKushi_val - 1)).toFixed(
      2
    );

    Gamosatvleli_strofi__obj.setAttribute("data-poz", Poz_Val);
    PozsusPozList_obj.disabled = true;
    return 1;
  } else {
    return 0;
  }
}
//
function Fsonebis_Shejameba(pzsus_n, pz_n) {
  const PozSus_Konkretuli_Bazari = document.querySelector(
    "." + pzsus_n + " .pozsus_contenti div#" + pz_n
  );

  const PozsusFsoniJamiPozicia_obj = PozSus_Konkretuli_Bazari.querySelectorAll(
    ".fsonebi_jami div[data-parent_pozname]"
  );

  PozsusFsoniJamiPozicia_obj.forEach((e) => {
    let f = 0;
    let m = 0;
    const pv = e.querySelector(".pozname_jami").innerHTML;
    const PozsusFsoni_array = PozSus_Konkretuli_Bazari.querySelectorAll(
      `.centrireba [data-poz="` + pv + `"]`
    );

    const inputArrai = e.querySelectorAll("input");
    let inputArrai_kushi_obj = inputArrai[0];
    let inputArrai_fsoni_obj = inputArrai[1];
    let inputArrai_sufmog_obj = inputArrai[2];
    let inputArrai_mtmog_obj = inputArrai[3];

    PozsusFsoni_array.forEach((v) => {
      let PozsusFsoni = v.querySelector(".pozsus_fsoni").value;
      let PozsusSufMog = v.querySelector(".pozsus_suf_mog").value;
      f = f + parseFloat(PozsusFsoni);
      m = m + parseFloat(PozsusSufMog);
    });

    inputArrai_kushi_obj.value = (m / f + 1).toFixed(3);
    inputArrai_fsoni_obj.value = f.toFixed(2);
    inputArrai_sufmog_obj.value = m.toFixed(2);
    inputArrai_mtmog_obj.value = (f + m).toFixed(2);
  });
  // ---
  SabolooMogebaTotal_da_BirjisFsonebidan(1, pzsus_n, pz_n);
}

function SabolooMogebaTotal_da_BirjisFsonebidan(o, pzsus_n, pz_n) {
  // მოგების ამოღება კონკრეტული ბაზრის ტოტალ ფსონებიდან
  let f = 0;
  let m = 0;
  const PozSus_Konkretuli_Bazari = document.querySelector(
    "." + pzsus_n + " .pozsus_contenti div#" + pz_n
  );
  let Shedegis_obj = PozSus_Konkretuli_Bazari.querySelector(
    ".fsonebi_jami .tf .bazrisshedegi"
  );

  const wag_obj = PozSus_Konkretuli_Bazari.querySelectorAll(
    ".fsonebi_jami .shedegi_red"
  );
  const mog_obj = PozSus_Konkretuli_Bazari.querySelectorAll(
    ".fsonebi_jami .shedegi_green"
  );

  wag_obj.forEach((v) => {
    const w_ = v.parentElement.querySelector(".fsoni-jami").value;
    f = f + parseFloat(w_);
  });

  mog_obj.forEach((v) => {
    const m_ = v.parentElement.querySelector(".suf_mog-jami").value;
    m = m + parseFloat(m_);
  });

  let fm_j = (m - f).toFixed(2);
  if (fm_j >= 0) {
    Shedegis_obj.classList.remove("shedegi_red_text");
    Shedegis_obj.classList.add("shedegi_green_text");
  } else if (fm_j < 0) {
    Shedegis_obj.classList.remove("shedegi_green_text");
    Shedegis_obj.classList.add("shedegi_red_text");
  } else {
    fm_j = 0;
  }
  Shedegis_obj.innerHTML = fm_j;
  // მოგების ამოღება კონკრეტული ბაზრის ბირჟიდან
  m = 0;
  Shedegis_obj = PozSus_Konkretuli_Bazari.querySelector(
    ".bazari .tf .bazrisshedegi"
  );
  const mp_nodelisti = PozSus_Konkretuli_Bazari.querySelectorAll(
    ".bazari .shedegi_green"
  );
  const procVal = document.querySelector(
    "." + pzsus_n + " #id_grid_pozsus_tavi .pozsus_proc-options"
  ).value;
  mp_nodelisti.forEach((e_) => {
    let n = parseFloat(e_.nextElementSibling.value);
    n > 0 ? (n = n - (n / 100) * procVal) : "";
    m = m + n;
  });

  if (m >= 0) {
    Shedegis_obj.classList.remove("shedegi_red_text");
    Shedegis_obj.classList.add("shedegi_green_text");
  } else if (m < 0) {
    Shedegis_obj.classList.remove("shedegi_green_text");
    Shedegis_obj.classList.add("shedegi_red_text");
  } else {
    m = 0;
  }
  Shedegis_obj.innerHTML = m.toFixed(2);
  // საბოლოო მოგების გამოთვლა კონკრეტული ბაზრიდან და ბაზრის ქუდში ჩაწერა
  const PozSus_Konkretuli_Bazari_Qudi_obj = document.querySelector(
    "." + pzsus_n + " .pozsus_contenti button#" + pz_n + " label.bazrisshedegi"
  );
  const j = parseFloat(fm_j) + parseFloat(m);
  if (j >= 0) {
    PozSus_Konkretuli_Bazari_Qudi_obj.classList.remove("shedegi_red_text");
    PozSus_Konkretuli_Bazari_Qudi_obj.classList.add("shedegi_green_text");
  } else if (j < 0) {
    PozSus_Konkretuli_Bazari_Qudi_obj.classList.remove("shedegi_green_text");
    PozSus_Konkretuli_Bazari_Qudi_obj.classList.add("shedegi_red_text");
  } else {
    j = 0;
  }
  PozSus_Konkretuli_Bazari_Qudi_obj.innerHTML = j.toFixed(2);
  //
  o === 1 ? SabolooMogebebisAmokrifvaBazrebidan(pzsus_n) : "";
}
//
function SabolooMogebebisAmokrifvaBazrebidan(pzsus_n) {
  let sum = 0;
  const allBazrebi_nodelist = document.querySelectorAll(
    "." + pzsus_n + " .pozsus_contenti > button > label.bazrisshedegi"
  );
  const SabMogValChasma_obj = document.querySelector(
    "." + pzsus_n + " #id_grid_pozsus_tavi .sab_mog_val"
  );
  allBazrebi_nodelist.forEach((e) => {
    sum = sum + parseFloat(e.innerHTML);
  });

  if (sum >= 0) {
    SabMogValChasma_obj.classList.remove("shedegi_red_text");
    SabMogValChasma_obj.classList.add("shedegi_green_text");
  } else if (sum < 0) {
    SabMogValChasma_obj.classList.remove("shedegi_green_text");
    SabMogValChasma_obj.classList.add("shedegi_red_text");
  } else {
    sum = 0;
  }

  Number.isInteger(sum) === true
    ? (sum = sum + ".00 ლ")
    : (sum = sum.toFixed(2) + " ლ");
  SabMogValChasma_obj.innerHTML = sum;
}
//
function SabolooMogeba_OriFunqcia(PozSusName) {
  const allBazrebi_nodelist = document.querySelectorAll(
    "." + PozSusName + " .pozsus_contenti > button"
  );
  allBazrebi_nodelist.forEach((e) => {
    const bazariName = e.getAttribute("id");
    SabolooMogebaTotal_da_BirjisFsonebidan(0, PozSusName, bazariName);
  });
  SabolooMogebebisAmokrifvaBazrebidan(PozSusName);
}
//

/*  
    const f = "Tp_1x2";
    const dd = "_1_1x_12";  
    const formula =   Bazrebi?.[f]?.mog_poz?.[dd];
    */
