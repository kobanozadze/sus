//
function Motxovnis_Gamotvla_Sasurveli(arr_Mosatxov_info, Sn) {
  const SasMog_total_ = parseFloat(arr_Mosatxov_info.SasMog_total);
  const SasMog_birja_ = parseFloat(arr_Mosatxov_info.SasMog_birja);
  let Proc_ = parseFloat(arr_Mosatxov_info.Proc);
  const Fsoni_ = parseFloat(arr_Mosatxov_info.Fsoni);
  const TotKushi_ = parseFloat(arr_Mosatxov_info.TotKushi);
  const BirKushi_ = parseFloat(arr_Mosatxov_info.BirKushi);
  const Witeli_ = parseFloat(arr_Mosatxov_info.Witeli) || 0;
  const Mwvane_ = parseFloat(arr_Mosatxov_info.Mwvane) || 0;
  const Bp = BirAgebuliProc(Sn);
  const Witeli_Proc_ = parseFloat(Bp.ProcWiteli) || 0;
  const Mwvane_Proc_ = parseFloat(Bp.ProcMwvane) || 0;
  let arrayMosatxovi;
  //------------
  if (TotKushi_ > 0 && Fsoni_ > 0 && BirKushi_ > 1) {
    // start
    let Mosatxovi_ = 0;
    let Valdebuleba_ = 0;
    // ----
    const SufMog_ = Fsoni_ * (TotKushi_ - 1);
    if (Proc_ === 0) {
      Mosatxovi_ =
        (SufMog_ -
          (Witeli_ - Witeli_Proc_) -
          (Mwvane_ - Mwvane_Proc_ - Fsoni_)) /
        BirKushi_;
      Valdebuleba_ = Mosatxovi_ * (BirKushi_ - 1);
    } else {
      const Proc__ = 100 / parseFloat(Proc_);
      let v1 =
        Proc__ *
        (SufMog_ -
          (Witeli_ - Witeli_Proc_) -
          (Mwvane_ - Mwvane_Proc_ - Fsoni_));
      Mosatxovi_ = v1 / (Proc__ * BirKushi_ - 1);
      Valdebuleba_ = Mosatxovi_ * (BirKushi_ - 1);
    }
    //----
    arrayMosatxovi = {
      Mosatxovi: parseFloat(Mosatxovi_.toFixed(2)),
      Valdebuleba: parseFloat(Valdebuleba_.toFixed(2)),
    };
    // end
    //--------------------------
    if (isNaN(SasMog_total_) === false || isNaN(SasMog_birja_) === false) {
      let SasMosatxovi = 0;
      let Valdebuleba_ = 0;
      let SasMog_total_jami = 0;
      let SasMog_birja_jami = 0;
      const SufMog_ = Fsoni_ * (TotKushi_ - 1);
      const m_bk = arrayMosatxovi.Mosatxovi * (BirKushi_ - 1);
      //
      if (isNaN(SasMog_total_) === false) {
        SasMog_total_jami =
          arrayMosatxovi.Mosatxovi +
          (SufMog_ - m_bk - Witeli_ + (0 - SasMog_total_)) / (BirKushi_ - 1);
      } else {
        SasMog_total_jami = 0;
        if (isNaN(SasMog_birja_) === false) {
          const SasMog_birja_jami1 =
            Fsoni_ -
            arrayMosatxovi.Mosatxovi -
            Mwvane_ +
            (Proc_ === 0 ? Proc_ : Mwvane_Proc_) +
            SasMog_birja_;
          const SasMog_birja_jami2 =
            ((SasMog_birja_jami1 + arrayMosatxovi.Mosatxovi) / 100) * Proc_;
          const SasMog_birja_jami3 = (SasMog_birja_jami2 / 100) * Proc_;
          //
          SasMog_birja_jami =
            arrayMosatxovi.Mosatxovi +
            SasMog_total_jami +
            SasMog_birja_jami1 +
            SasMog_birja_jami2 +
            SasMog_birja_jami3;
        }
      }
      //-----------
      SasMosatxovi = SasMog_total_jami + SasMog_birja_jami;
      Valdebuleba_ = SasMosatxovi * (BirKushi_ - 1);

      arrayMosatxovi = {
        Mosatxovi: parseFloat(SasMosatxovi.toFixed(2)),
        Valdebuleba: parseFloat(Valdebuleba_.toFixed(2)),
      };
      return arrayMosatxovi;
    }
    return arrayMosatxovi;
  }
  arrayMosatxovi = {
    Mosatxovi: "",
    Valdebuleba: "",
  };
  return arrayMosatxovi;
}

function BirAgebuliProc(Sn) {
  let sumW_proc = 0;
  let sumM_proc = 0;
  const Sumwiteli = [
    ...document.querySelectorAll("." + Sn + " .gamotvla .witeli"),
  ];
  const Summwvane = [
    ...document.querySelectorAll("." + Sn + " .gamotvla .mwvane"),
  ];
  const Proc_obj = document.querySelector(
    "." + Sn + " .gamotvla .proc-options"
  );
  //--------
  for (let i = 0; i < Sumwiteli.length; i++) {
    let Sw = Sumwiteli[i].value;
    let Sm = Summwvane[i].value;
    if (Sw != "" && Sm != "") {
      if (parseFloat(Sw) < 0) {
        sumW_proc += (parseFloat(Sw) / 100) * Proc_obj.value;
      } else {
        sumW_proc += 0;
      }
      if (parseFloat(Sm) > 0) {
        sumM_proc += (parseFloat(Sm) / 100) * Proc_obj.value;
      } else {
        sumM_proc += 0;
      }
    }
  }
  const BirAgebuliProc_ = {
    ProcWiteli: sumW_proc,
    ProcMwvane: sumM_proc,
  };
  return BirAgebuliProc_;
}

function MogebisGamotvla(Sn, ev) {
  if (Sn.substring(0, 3) === "sus") {
    const TotaliFsoni_obj = document.querySelector(
      "." + Sn + " .gamotvla .fsoni_kalk"
    );
    const TotaliMogeba_obj = document.querySelector(
      "." + Sn + " .gamotvla .suf_mog_kalk"
    );
    const BirjaMosagebi_obj = document.querySelector(
      "." + Sn + " .gamotvla .mosatx"
    );
    const BirjaWasagebi_obj = document.querySelector(
      "." + Sn + " .gamotvla .valdeb"
    );
    const BirjaWiteli_obj = document.querySelector(
      "." + Sn + " .gamotvla .witeli-jami"
    );
    const BirjaMwvane_obj = document.querySelector(
      "." + Sn + " .gamotvla .mwvane-jami"
    );
    const MogTotal_obj = document.querySelector(
      "." + Sn + " .gamotvla .mog_total"
    );
    const MogBirja_obj = document.querySelector(
      "." + Sn + " .gamotvla .mog_birja"
    );
    const S_MogTotal_obj = document.querySelector(
      "." + Sn + " .gamotvla .s_mog_total"
    );
    const S_MogBirja_obj = document.querySelector(
      "." + Sn + " .gamotvla .s_mog_birja"
    );
    const Proc_obj = document.querySelector(
      "." + Sn + " .gamotvla .proc-options"
    );

    const TotaliFsoni_val = parseFloat(TotaliFsoni_obj.value) || 0;
    const TotaliMogeba_val = parseFloat(TotaliMogeba_obj.value) || 0;
    const BirjaMosagebi_val = parseFloat(BirjaMosagebi_obj.value) || 0;
    const BirjaWasagebi_val = parseFloat(BirjaWasagebi_obj.value) || 0;
    const BirjaWiteli_val = parseFloat(BirjaWiteli_obj.value) || 0;
    const BirjaMwvane_val = parseFloat(BirjaMwvane_obj.value) || 0;
    const Proc_val = parseFloat(Proc_obj.value);
    const Mwvane_Proc__ =
      BirjaMosagebi_val > 0 ? (BirjaMosagebi_val / 100) * Proc_val : 0;
    let Mwvane_Proc_ = 0;
    let Witeli_Proc_ = 0;
    let MogebaTotalshi;
    let MogebaBirjaze;
    let S_MogebaTotalshi;
    let S_MogebaBirjaze;

    const OldVal_aray = [
      MogTotal_obj.innerHTML,
      MogBirja_obj.innerHTML,
      S_MogTotal_obj.innerHTML,
      S_MogBirja_obj.innerHTML,
    ];

    if (BirjaMwvane_val === 0) {
      MogebaTotalshi =
        TotaliMogeba_val -
        (BirjaWasagebi_val > 0
          ? BirjaWasagebi_val
          : BirjaWasagebi_val - (BirjaWasagebi_val / 100) * Proc_val);
      MogebaBirjaze = BirjaMosagebi_val - Mwvane_Proc__ - TotaliFsoni_val;
      S_MogTotal_obj.innerHTML = "0.00";
      S_MogBirja_obj.innerHTML = "0.00";
    } else if (BirjaMwvane_val !== 0) {
      //
      const JamiBir_w = BirjaWiteli_val + BirjaWasagebi_val;
      const JamiBir_m = BirjaMwvane_val + BirjaMosagebi_val;
      const JamiBir_w_Proc = JamiBir_w < 0 ? (JamiBir_w / 100) * Proc_val : 0;
      const JamiBir_m_Proc = JamiBir_m > 0 ? (JamiBir_m / 100) * Proc_val : 0;
      S_MogebaTotalshi = TotaliMogeba_val - JamiBir_w - JamiBir_w_Proc;
      S_MogebaBirjaze = JamiBir_m - JamiBir_m_Proc - TotaliFsoni_val;
      S_MogTotal_obj.innerHTML = S_MogebaTotalshi.toFixed(2) || 0;
      S_MogBirja_obj.innerHTML = S_MogebaBirjaze.toFixed(2) || 0;
      if (parseFloat(S_MogebaTotalshi) > 0) {
        S_MogTotal_obj.classList.remove("mog_shavi");
        S_MogTotal_obj.classList.remove("mog_witeli");
        S_MogTotal_obj.classList.add("mog_mwvane");
      } else if (parseFloat(S_MogebaTotalshi) < 0) {
        S_MogTotal_obj.classList.remove("mog_shavi");
        S_MogTotal_obj.classList.remove("mog_mwvane");
        S_MogTotal_obj.classList.add("mog_witeli");
      } else {
        S_MogTotal_obj.classList.remove("mog_witeli");
        S_MogTotal_obj.classList.remove("mog_mwvane");
        S_MogTotal_obj.classList.add("mog_shavi");
      }
      //
      if (parseFloat(S_MogebaBirjaze) > 0) {
        S_MogBirja_obj.classList.remove("mog_shavi");
        S_MogBirja_obj.classList.remove("mog_witeli");
        S_MogBirja_obj.classList.add("mog_mwvane");
      } else if (parseFloat(S_MogebaBirjaze) < 0) {
        S_MogBirja_obj.classList.remove("mog_shavi");
        S_MogBirja_obj.classList.remove("mog_mwvane");
        S_MogBirja_obj.classList.add("mog_witeli");
      } else {
        S_MogBirja_obj.classList.remove("mog_witeli");
        S_MogBirja_obj.classList.remove("mog_mwvane");
        S_MogBirja_obj.classList.add("mog_shavi");
      }
      //
      const Bp = BirAgebuliProc(Sn);
      Witeli_Proc_ = parseFloat(Bp.ProcWiteli) || 0;
      Mwvane_Proc_ = parseFloat(Bp.ProcMwvane) || 0;
      MogebaTotalshi = TotaliMogeba_val - (BirjaWiteli_val - Witeli_Proc_);
      MogebaBirjaze = BirjaMwvane_val - Mwvane_Proc_ - TotaliFsoni_val;
    }
    MogTotal_obj.innerHTML = MogebaTotalshi.toFixed(2);
    MogBirja_obj.innerHTML = MogebaBirjaze.toFixed(2);
    if (parseFloat(MogebaTotalshi) > 0) {
      MogTotal_obj.classList.remove("mog_shavi");
      MogTotal_obj.classList.remove("mog_witeli");
      MogTotal_obj.classList.add("mog_mwvane");
    } else if (parseFloat(MogebaTotalshi) < 0) {
      MogTotal_obj.classList.remove("mog_shavi");
      MogTotal_obj.classList.remove("mog_mwvane");
      MogTotal_obj.classList.add("mog_witeli");
    } else {
      MogTotal_obj.classList.remove("mog_witeli");
      MogTotal_obj.classList.remove("mog_mwvane");
      MogTotal_obj.classList.add("mog_shavi");
    }
    //
    if (parseFloat(MogebaBirjaze) > 0) {
      MogBirja_obj.classList.remove("mog_shavi");
      MogBirja_obj.classList.remove("mog_witeli");
      MogBirja_obj.classList.add("mog_mwvane");
    } else if (parseFloat(MogebaBirjaze) < 0) {
      MogBirja_obj.classList.remove("mog_shavi");
      MogBirja_obj.classList.remove("mog_mwvane");
      MogBirja_obj.classList.add("mog_witeli");
    } else {
      MogBirja_obj.classList.remove("mog_witeli");
      MogBirja_obj.classList.remove("mog_mwvane");
      MogBirja_obj.classList.add("mog_shavi");
    }
    const NewVal_aray = [
      MogTotal_obj.innerHTML,
      MogBirja_obj.innerHTML,
      S_MogTotal_obj.innerHTML,
      S_MogBirja_obj.innerHTML,
    ];

    const fokusinput = document.querySelector("input:focus") || "";
    const fokusinput_id = fokusinput.id;
    if (fokusinput_id !== "gs") {
     const arai_no_fk = ["kushi_kalk", "fsoni_kalk", "mosatx", "valdeb"];
     for (let i = 0; i < NewVal_aray.length; i++) {
      const j = parseFloat(NewVal_aray[i]) - parseFloat(OldVal_aray[i]);
      if (j !== 0 && arai_no_fk.indexOf(ev.target.classList[0]) === -1) {
        document
          .querySelector("." + Sn + " #but-damaxsovreba")
          .classList.add("but_");
        break;
      }
    } 
    }
     
  }
}

// function Motxovnis_Gamotvla_Sasurveli(arrasoc, Ss, OfOn) {
//   const SasMog_total_ = parseFloat(arrasoc.SasMog_total);
//   const SasMog_birja_ = parseFloat(arrasoc.SasMog_birja);
//   let Proc_ = parseFloat(arrasoc.Proc);
//   const Fsoni_ = parseFloat(arrasoc.Fsoni);
//   const TotKushi_ = parseFloat(arrasoc.TotKushi);
//   const BirKushi_ = parseFloat(arrasoc.BirKushi);
//   const Witeli_ = parseFloat(arrasoc.Witeli) || 0;
//   const Mwvane_ = parseFloat(arrasoc.Mwvane) || 0;
//   const BirAgebuliProc_ = parseFloat(arrasoc.BirAgebuliProc) || 0;

//   // console.log(
//   //   SasMog_total_,
//   //   SasMog_birja_,
//   //   Proc_,
//   //   Fsoni_,
//   //   TotKushi_,
//   //   BirKushi_,
//   //   Witeli_,
//   //   Mwvane_,
//   //   BirAgebuliProc_
//   // );

//   // ფუნქცია

//   const Mosatxovi_ = parseFloat(
//     Motxovnis_Gamotvla(
//       Proc_,
//       Fsoni_,
//       TotKushi_,
//       BirKushi_,
//       Witeli_,
//       Mwvane_,
//       BirAgebuliProc_,
//       Ss,
//       "on"
//     )
//   );

//   if (isNaN(Mosatxovi_) === true) {
//     return;
//   }

//   //------------
//   if (
//     TotKushi_ > 0 &&
//     Fsoni_ > 0 &&
//     BirKushi_ > 1 &&
//     isNaN(Mosatxovi_) === false &&
//     (isNaN(SasMog_total_) === false || isNaN(SasMog_birja_) === false)
//   ) {
//     let SasMosatxovi = 0;
//     let Valdebuleba = 0;
//     let SasMog_total_jami = 0;
//     let SasMog_birja_jami = 0;
//     const SufMog_ = Fsoni_ * (TotKushi_ - 1);
//     const m_bk = Mosatxovi_ * (BirKushi_ - 1);
//     //
//     if (isNaN(SasMog_total_) === false) {
//       SasMog_total_jami =
//         Mosatxovi_ +
//         (SufMog_ - m_bk - Witeli_ + (0 - SasMog_total_)) / (BirKushi_ - 1);
//     } else {
//       SasMog_total_jami = 0;
//       if (isNaN(SasMog_birja_) === false) {
//         const SasMog_birja_jami1 =
//           Fsoni_ -
//           Mosatxovi_ -
//           Mwvane_ +
//           (Proc_ === 0 ? Proc_ : BirAgebuliProc_) +
//           SasMog_birja_;
//         const SasMog_birja_jami2 =
//           ((SasMog_birja_jami1 + Mosatxovi_) / 100) * Proc_;
//         const SasMog_birja_jami3 = (SasMog_birja_jami2 / 100) * Proc_;
//         //
//         SasMog_birja_jami =
//           Mosatxovi_ +
//           SasMog_total_jami +
//           SasMog_birja_jami1 +
//           SasMog_birja_jami2 +
//           SasMog_birja_jami3;
//       }
//     }
//     //-----------
//     SasMosatxovi = SasMog_total_jami + SasMog_birja_jami;
//     Valdebuleba = SasMosatxovi * (BirKushi_ - 1);

//     if (OfOn === "on") {
//       let Mosatx_Obj = document.querySelector(
//         "." + Ss + " .gamotvla .kalk-birja .mosatx"
//       );
//       let Valdeb_Obj = document.querySelector(
//         "." + Ss + " .gamotvla .kalk-birja .valdeb"
//       );
//       Mosatx_Obj.value = SasMosatxovi.toFixed(2);
//       Valdeb_Obj.value = Valdebuleba.toFixed(2);
//     }
//   }
// }

//
// document.addEventListener("change", function (event) {
//   // დაკლიკებისას რომელ კლასსზე მოვხვდით
//   const S_ClassName_ = event.target.parentNode.classList.value;
//   // ამ კლასის ყველა შვილ შეგვყავს მასივში S_Masivi_Children
//   let S_Masivi_Children = [...event.target.parentNode.children];
//   // კლასს ნომერს ვაცლით
//   let S_ClassName = S_ClassName_.substring(0, 3);
//   // აქტიური ელემენტი
//   const ActElement = document.activeElement.classList.value;
//   // ვამოწმებთ თუ სასურველ კლასსზე ვდგევართ
//   // გაუშვებთ შესაბამის ფუნქციას

//   //SufMtl_Mog_Gamotvla(Array, S_ClassName_);

//   // let g = document.querySelector("." + S_ClassName_).nextSibling;
//   // console.log(g);
// });

// function SelectMasivi(masivi) {
//   let arr = [];
//   for (let index = 0; index < masivi.length; index++) {
//     if (masivi[index].tagName != "BR") {
//       arr.push(masivi[index].value);
//     }
//   }
//   return arr;
// }

// function SufMtl_Mog_Gamotvla(arr, sus) {
//   const kushi = arr[0];
//   const fsoni = arr[1];
//   if (kushi > 0 && fsoni > 0) {
//     let jam_s = parseFloat(fsoni) * parseFloat(kushi - 1);
//     let jam_m = parseFloat(fsoni) * parseFloat(kushi);
//     let sm = document.querySelector("." + sus + " .suf_mog");
//     let mm = document.querySelector("." + sus + " .mtl_mog");
//     sm.value = jam_s.toFixed(2);
//     mm.value = jam_m.toFixed(2);
//   }
// }

// function Motxovnis_Gamotvla(
//   Proc,
//   Fsoni,
//   TotKushi,
//   BirKushi,
//   Witeli,
//   Mwvane,
//   BirAgebuliProc,
//   Ss,
//   OfOn
// ) {
//   let Proc_ = parseFloat(Proc);
//   const Fsoni_ = parseFloat(Fsoni);
//   const TotKushi_ = parseFloat(TotKushi);
//   const BirKushi_ = parseFloat(BirKushi);
//   const Witeli_ = parseFloat(Witeli) || 0;
//   const Mwvane_ = parseFloat(Mwvane) || 0;
//   const BirAgebuliProc_ = parseFloat(BirAgebuliProc) || 0;
//   //------------

//   let Mosatxovi = 0;
//   let Valdebuleba = 0;
//   if (TotKushi_ > 0 && Fsoni_ > 0 && BirKushi_ > 1) {
//     const SufMog_ = Fsoni_ * (TotKushi_ - 1);
//     if (Proc_ === 0) {
//       Mosatxovi =
//         (SufMog_ - Witeli_ - (Mwvane_ - BirAgebuliProc_ - Fsoni_)) / BirKushi_;
//       Valdebuleba = Mosatxovi * (BirKushi_ - 1);
//     } else {
//       Proc_ = 100 / parseFloat(Proc);
//       Mosatxovi =
//         (Proc_ * (SufMog_ - Witeli_ - (Mwvane_ - BirAgebuliProc_ - Fsoni_))) /
//         (Proc_ * BirKushi_ - 1);
//       Valdebuleba = Mosatxovi * (BirKushi_ - 1);
//     }
//     if (OfOn === "on") {
//       let Mosatx_Obj = document.querySelector(
//         "." + Ss + " .gamotvla .kalk-birja .mosatx"
//       );
//       let Valdeb_Obj = document.querySelector(
//         "." + Ss + " .gamotvla .kalk-birja .valdeb"
//       );
//       Mosatx_Obj.value = Mosatxovi.toFixed(2);
//       Valdeb_Obj.value = Valdebuleba.toFixed(2);
//     }
//     return Mosatxovi.toFixed(2);
//   }
// }

// let klik = document.querySelectorAll("section");
// klik.forEach(function (element) {
//   element.onclick = ddd;
// });
// var r4 = document.querySelector('.mtl_mog').closest(":not(input)");
//console.log(r4.children().nodeValue);
//console.log(event.target.parentNode.classList.value);
// let ch = event.target.getAttribute("type");

// document.addEventListener("click", function (event) {
//    console.log(event.composedPath());
//    let ed = event.composedPath();
//    let edd = ed[2].children;
//    console.log(edd[1].innerText);
// });

// function Motxovnis_Gamotvla(arr_Mosatxov_info) {
//   const SasMog_total_ = parseFloat(arr_Mosatxov_info.SasMog_total);
//   const SasMog_birja_ = parseFloat(arr_Mosatxov_info.SasMog_birja);
//   let Proc_ = parseFloat(arr_Mosatxov_info.Proc);
//   const Fsoni_ = parseFloat(arr_Mosatxov_info.Fsoni);
//   const TotKushi_ = parseFloat(arr_Mosatxov_info.TotKushi);
//   const BirKushi_ = parseFloat(arr_Mosatxov_info.BirKushi);
//   const Witeli_ = parseFloat(arr_Mosatxov_info.Witeli) || 0;
//   const Mwvane_ = parseFloat(arr_Mosatxov_info.Mwvane) || 0;
//   const BirAgebuliProc_ = parseFloat(arr_Mosatxov_info.BirAgebuliProc) || 0;
//   //------------
//   let Mosatxovi_ = 0;
//   let Valdebuleba_ = 0;
//   if (TotKushi_ > 0 && Fsoni_ > 0 && BirKushi_ > 1) {
//     const SufMog_ = Fsoni_ * (TotKushi_ - 1);
//     if (Proc_ === 0) {
//       Mosatxovi_ =
//         (SufMog_ - Witeli_ - (Mwvane_ - BirAgebuliProc_ - Fsoni_)) / BirKushi_;
//       Valdebuleba_ = Mosatxovi_ * (BirKushi_ - 1);
//     } else {
//       Proc_ = 100 / parseFloat(Proc_);
//       Mosatxovi_ =
//         (Proc_ * (SufMog_ - Witeli_ - (Mwvane_ - BirAgebuliProc_ - Fsoni_))) /
//         (Proc_ * BirKushi_ - 1);
//       Valdebuleba_ = Mosatxovi_ * (BirKushi_ - 1);
//     }
//     //----
//     const arrayMosatxovi = {
//       Mosatxovi: parseFloat(Mosatxovi_.toFixed(2)),
//       Valdebuleba: parseFloat(Valdebuleba_.toFixed(2)),
//     };
//     return arrayMosatxovi;
//   } else {
//     const arrayMosatxovi = {
//       Mosatxovi: NaN,
//       Valdebuleba: NaN,
//     };
//     return arrayMosatxovi;
//   }
// }
