window.onload = function () {
  sus_ShenaxuliGundebi();
};
//---------------------------------------------------
document.addEventListener("click", function (event) {
  let click_name_parentNode = "";
  try {
    click_name_parentNode = event.target.parentNode.classList.value;
  } catch (error) {
    click_name_parentNode = "";
  }
  const but_name = event.target.classList.value;
  const but_name_id = event.target.id;
  const addstandart_sus = but_name.substring(9, 24);
  const sm_name = [...event.composedPath()][0].classList.value;
  //
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  let ff = document.querySelector(".col-center .sigane");
  ff.innerHTML = screenWidth + " - " + screenHeight;
  //
  // ერთზე დაკლიკებით მეორე სას მოგება იშლება
  if (sm_name === "sasmog_total" || sm_name === "sasmog_birja") {
    const S_Name = SectionName(event);
    const SasMog_path_Obj =
      sm_name === "sasmog_total"
        ? document.querySelector("." + S_Name + " .gamotvla .sasmog_birja")
        : document.querySelector("." + S_Name + " .gamotvla .sasmog_total");
    SasMog_path_Obj.value = "";
    SumSufMog_Motx_Mog(event, "");
  }
  // start თუ დაუკლიკეთ სტროფის დამატების კნოპკას
  if (but_name.substring(0, 7) === "but_add") {
    const Sn = SectionName(event);
    const tot_wm = but_name.substring(8, 14);
    let Sufmog_Or_BirKush_obj = "";
    let i = 0;

    if (tot_wm === "but_fs") {
      Sufmog_Or_BirKush_obj = document.querySelectorAll(
        "." + Sn + " #fsonebi #suf_mog"
      );
      Sufmog_Or_BirKush_obj.forEach((e) => (e.value.length === 0 ? i++ : ""));
      i === 1 ? Tf_Veli_sus_Add(Sn, "off") : "";
    } else if (tot_wm === "but_wm") {
      Sufmog_Or_BirKush_obj = document.querySelectorAll(
        "." + Sn + " #gamotvla .kushi_bir"
      );
      Sufmog_Or_BirKush_obj.forEach((e) => (e.value.length === 0 ? i++ : ""));
      i === 1 ? Bf_Veli_sus_Add(Sn, "off") : "";
    }
  } // end თუ დაუკლიკეთ სტროფის დამატების კნოპკას
  // start თუ დაუკლიკეთ სტროფის წაშლას კნოპკას
  if (but_name.substring(0, 9) === "but-clear") {
    event.target.parentNode.remove();
    SumSufMog_Motx_Mog(event, "");
  }
  // end თუ დაუკლიკეთ სტროფის წაშლას კნოპკას
  // start SUS - ების დამატება
  if (addstandart_sus === "standartuli_sus") {
    SusAdd("", event);
  }
  // end SUS - ების დამატება
  // start SUS - გასუფთავება
  if (but_name_id === "but-allclear") {
    const FokusElementi_obj = event.target;
    const FokusElementi_value = FokusElementi_obj.innerHTML;
    const Sn = SectionName(event);
    const input_all_obj = document.querySelectorAll("." + Sn + " input");
    const ButSave_obj = document.querySelector("." + Sn + " #but-damaxsovreba");

    if (ButSave_obj.classList.value !== "but but_") {
      if (FokusElementi_value === "გასუფთავება") {
        for (const iterator of input_all_obj) {
          iterator.value = "";
        }
      } else {
        for (const iterator of input_all_obj) {
          if (iterator.classList.value !== "bukmker gs") {
            iterator.value = "";
          }
        }
      }

      SumSufMog_Motx_Mog(event, "");
      const tf_obj = document.querySelectorAll("." + Sn + " .tf-sus");
      for (const iterator_tf of tf_obj) {
        if (iterator_tf.id !== "tf-0") {
          iterator_tf.remove();
        }
      }

      const bf_obj = document.querySelectorAll("." + Sn + " .bf-sus");
      for (const iterator_bf of bf_obj) {
        if (iterator_bf.id !== "bf-0") {
          iterator_bf.remove();
        }
      }

      document.querySelector("." + Sn + " .proc-options").value = "3";

      if (FokusElementi_value === "გასუფთავება") {
        Tf_Veli_sus_Add(Sn, "off");
        Bf_Veli_sus_Add(Sn, "off");
      }
      document
        .querySelector("." + SectionName(event) + " #but-damaxsovreba")
        .classList.remove("but_");

      sus_obj = document.querySelector("." + Sn + " .gs");
      sus_obj.disabled = false;
      sus_obj.classList.remove("fk");
      GundebisShemseba();

      document.querySelector("." + Sn + " #gs").focus();
    } else {
      Toastmesijebi(
        "info",
        "error.svg",
        "გუნდი დასამახსოვრებელია",
        "ჯერ დაიმახსოვრეთ შემდეგ გაასუფთავეთ",
        5000
      );
    }
  }
  // end SUS - გასუფთავება
  // start SUS- წაშლა
  if (but_name_id === "but-susdelete") {
    const Sn = SectionName(event);
    const GundName_value = document.querySelector("." + Sn + " .gs").value;
    if (GundName_value.length > 0) {
      cuteAlert({
        type: "question",
        title: "გუნდი: " + GundName_value + " თანხმობის შემთხვევაში",
        message: "თუ გუნდი დამახსოვრებულია წაიშლება მეხსიერებიდანაც",
        img: "img/error.svg",
      }).then((e) => {
        if (e === "confirm") {
          const SusWashla_obj = document.getElementsByClassName(Sn);
          [...SusWashla_obj][0].remove();
          localStorage.removeItem(GundName_value);
          sus_ShenaxuliGundebi();
          GundebisShemseba();
        }
      });
    } else {
      const SusWashla_obj = document.getElementsByClassName(Sn);
      [...SusWashla_obj][0].remove();
      localStorage.removeItem(GundName_value);
      sus_ShenaxuliGundebi();
      GundebisShemseba();
    }
  }
  // end SUS- წაშლა
  // start SUS- დამახსოვრება
  if (but_name_id === "but-damaxsovreba") {
    let sus_obj = "";
    const Sn = SectionName(event);
    const GundName_value = document.querySelector("." + Sn + " .gs").value;
    const KushiJami_value = document.querySelector(
      "." + Sn + " #fsonebi .kushi-jami"
    ).value;
    if (GundName_value !== "" && KushiJami_value !== "") {
      const Array_susAll_Monacemebi = [];
      //
      const BirKushi = document.querySelector(
        "." + Sn + " #gamotvla #grid-gamotvla-birja .bir_kushi"
      ).value;
      const Procenti = document.querySelector(
        "." + Sn + " #gamotvla #grid-gamotvla-birja .proc-options"
      ).value;
      const SasMog_total = document.querySelector(
        "." + Sn + " #gamotvla #grid-gamotvla-totali .sasmog_total"
      ).value;
      const SasMog_birja = document.querySelector(
        "." + Sn + " #gamotvla #grid-gamotvla-birja .sasmog_birja"
      ).value;
      Array_susAll_Monacemebi.push([
        GundName_value,
        BirKushi,
        Procenti,
        SasMog_total,
        SasMog_birja,
        Sn,
      ]);
      //
      const Array_susFsonebi = [];
      const Tfsus_obj = [...document.querySelectorAll("." + Sn + " .tf-sus")];
      for (let i = 1; i < Tfsus_obj.length; i++) {
        const sus_Fs_nomeri = Tfsus_obj[i].id;
        const sus_Fs_Monacemebi = Tfsus_obj[i].children;
        Array_susFsonebi.push([
          sus_Fs_nomeri,
          sus_Fs_Monacemebi[1].value,
          sus_Fs_Monacemebi[2].value,
          sus_Fs_Monacemebi[3].value,
          sus_Fs_Monacemebi[4].value,
        ]);
      }
      Array_susAll_Monacemebi.push(Array_susFsonebi);
      //
      const Array_susWm = [];
      const Bfsus_obj = [...document.querySelectorAll("." + Sn + " .bf-sus")];
      for (let i = 1; i < Bfsus_obj.length; i++) {
        const sus_WM_nomeri = Bfsus_obj[i].id;
        const sus_WM_Monacemebi = Bfsus_obj[i].children;
        Array_susWm.push([
          sus_WM_nomeri,
          sus_WM_Monacemebi[1].value,
          sus_WM_Monacemebi[2].value,
          sus_WM_Monacemebi[3].value,
          sus_WM_Monacemebi[4].value,
        ]);
      }
      Array_susAll_Monacemebi.push(Array_susWm);

      const textaray_sus = JSON.stringify([...Array_susAll_Monacemebi]);
      localStorage.setItem(GundName_value, textaray_sus);
      sus_ShenaxuliGundebi();
      document
        .querySelector("." + SectionName(event) + " #but-damaxsovreba")
        .classList.remove("but_");
      RemoveClaslist_Select(event, "off");
      sus_obj = document.querySelector("." + Sn + " .gs");
      sus_obj.disabled = true;
      sus_obj.setAttribute("name", Sn);
      Toastmesijebi(
        "error",
        "info.svg",
        GundName_value,
        "გუნდი დამახსოვრებულია",
        5000
      );
    } else {
      // alert("არასაკმარისი მონაცემები");
      Toastmesijebi(
        "warning",
        "info.svg",
        GundName_value,
        "არასაკმარისი მონაცემები: საჭიროა გუნდის სახელი და ერთი ფსონი მაინც",
        5000
      );
    }
  }
  // end SUS- დამახსოვრება
  // start გუნდზე დაკლიკებით ახალი sus - ჩასმა და შევსება
  if (click_name_parentNode === "sus_ShenaxuliGundebi") {
    let sus_nomeri = "";
    let sus_obj = "";
    const Gundis_Nomeri = klik_susSearch(but_name_id);
    if (Gundis_Nomeri === -1) {
      sus_nomeri = SusAdd(but_name_id, event);
      sus_obj = document.querySelector("." + sus_nomeri + " .gs");
      sus_obj.scrollIntoView({ block: "center", behavior: "smooth" });
      sus_obj.disabled = true;
    } else {
      const susAll_name_obj = [...document.querySelectorAll(".gs")];
      for (let i = 1; i < susAll_name_obj.length; i++) {
        if (susAll_name_obj[i].value === but_name_id) {
          sus_nomeri = susAll_name_obj[i].getAttribute("name");
          break;
        }
      }
      sus_obj = document.querySelector("." + sus_nomeri + " .gs");
      sus_obj.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
  // end გუნდზე დაკლიკებით ახალი sus - ჩასმა და შევსება
}); // end klik
//------------
//------------------
document.addEventListener("input", function (event) {
  // ChenjKontroli_BukBirja(event);
  // RemoveClaslist_Select(event);
  //  ChenjKontroli_GundName(event);
  // const fokusinput = document.querySelector("input:focus");
  // const fokusinput_id = fokusinput.id;
  // console.log(fokusinput_id);
});

// --------------
document.addEventListener("change", function (event) {
  ShenaxulisChasma(event, "off", "", "");
  Suf_Mog_Gamotvla(event);
  SumSufMog_Motx_Mog(event, "");

  ChenjKontroli_BukBirja(event);
  RemoveClaslist_Select(event, "on");
});
// ______________________________________________________________
// function  --------------------------------------------------
function SectionName(ev) {
  let SectName = "";
  const composedPath = ev.composedPath();
  if (composedPath.length === 10) {
    SectName = composedPath[3].classList.value;
  } else if (composedPath.length === 12) {
    SectName = composedPath[5].classList.value;
  }
  const position = parseInt(SectName.search(" "));
  SectName = SectName.substring(0, position);
  return SectName;
}
// =================================================
function SumSufMog_Motx_Mog(event, Sn) {
  const S_Name = Sn.length > 0 ? Sn : SectionName(event);
  SumFsonOrSufmog(S_Name, event, "off"); // ?
  const arrayMosatxoviMonacemebi = MosatxoviMonacemebisAgeba(S_Name);
  const araiMosVal = Motxovnis_Gamotvla_Sasurveli(
    arrayMosatxoviMonacemebi,
    S_Name
  );
  const Mosatx_Obj = document.querySelector("." + S_Name + " .mosatx");
  const Valdeb_Obj = document.querySelector("." + S_Name + " .valdeb");
  const bir_kushi = arrayMosatxoviMonacemebi.BirKushi;

  if (
    Mosatx_Obj === document.activeElement ||
    Valdeb_Obj === document.activeElement
  ) {
    if (Mosatx_Obj === document.activeElement) {
      Valdeb_Obj.value = (Mosatx_Obj.value * (bir_kushi - 1)).toFixed(2);
    }
    if (Valdeb_Obj === document.activeElement) {
      Mosatx_Obj.value = (Valdeb_Obj.value / (bir_kushi - 1)).toFixed(2);
    }
  } else {
    Mosatx_Obj.value = araiMosVal.Mosatxovi;
    Valdeb_Obj.value = araiMosVal.Valdebuleba;
  }

  MogebisGamotvla(S_Name);
}
// =================================================
function Suf_Mog_Gamotvla(event) {
  const Sn = SectionName(event);
  const arry = [...event.target.parentNode.children];
  const S_IdName_ = event.target.parentNode.id;
  //-----------
  if (
    S_IdName_.substring(0, 2) === "tf" ||
    S_IdName_.substring(0, 2) === "mg"
  ) {
    const kushi = arry[1].value;
    const fsoni = arry[2].value;
    //------
    if (kushi > 0 && fsoni > 0) {
      let jam_s = parseFloat(fsoni) * parseFloat(kushi - 1);
      let jam_mm = parseFloat(fsoni) * parseFloat(kushi);
      let sm = document.querySelector(
        "." + Sn + " #" + S_IdName_ + " .suf_mog"
      );
      sm.value = jam_s.toFixed(2);
      //
      if (S_IdName_.substring(0, 2) === "mg") {
        let mm = document.querySelector(
          "." + Sn + " #" + S_IdName_ + " .mtl_mog"
        );
        mm.value = jam_mm.toFixed(2);
      }
    }
  } else if (S_IdName_.substring(0, 2) === "bf") {
    const witeli = arry[2].value;
    const mwvane = arry[3].value;
    //------
    if (witeli !== "" && mwvane !== "") {
      let jam_kushi = parseFloat(witeli) / parseFloat(mwvane) + 1;
      let sm = document.querySelector(
        "." + Sn + " .gamotvla .fsoni-wm #" + S_IdName_ + " .kushi_bir"
      );
      sm.value = jam_kushi.toFixed(3);
    }
  } else if (S_IdName_ === "grid-gamotvla-totali") {
    const kushi = arry[5].value;
    const fsoni = arry[6].value;
    //------
    if (kushi > 0 && fsoni > 0) {
      let jam_s = parseFloat(fsoni) * parseFloat(kushi - 1);
      let jam_mm = parseFloat(fsoni) * parseFloat(kushi);
      let sm = document.querySelector(
        "." + Sn + " #" + S_IdName_ + " .suf_mog_kalk"
      );
      let mm = document.querySelector(
        "." + Sn + " #" + S_IdName_ + " .mtl_mog_kalk"
      );
      sm.value = jam_s.toFixed(2);
      mm.value = jam_mm.toFixed(2);
    }
  }
}
// =================================================
function SumFsonOrSufmog(Sn, event, tfbf) {
  const S_IdName_ = event.target.parentNode.id;
  //-----------
  if (S_IdName_.substring(0, 2) === "tf" || tfbf === "tf") {
    let sumF = 0;
    let sumM = 0;
    const Sumfsoni = [
      ...document.querySelectorAll("." + Sn + " .fsonebi .fsoni"),
    ];
    const Sumsuf_mog = [
      ...document.querySelectorAll("." + Sn + " .fsonebi .suf_mog"),
    ];

    for (let i = 0; i < Sumfsoni.length; i++) {
      if (Sumfsoni[i].value != "" && Sumsuf_mog[i].value != "") {
        sumF += parseFloat(Sumfsoni[i].value);
        sumM += parseFloat(Sumsuf_mog[i].value);
      }
    }
    //
    const sashkushi = document.querySelector(
      "." + Sn + " .fsonebi .kushi-jami"
    );
    const fs_j = document.querySelector("." + Sn + " .fsonebi .fsoni-jami");
    const sm_j = document.querySelector("." + Sn + " .fsonebi .suf_mog-jami");
    //
    if (sumF != "" && sumM != "") {
      const sashkushi_kalk = document.querySelector(
        "." + Sn + " .gamotvla .kushi_kalk"
      );
      const fs_j_kalk = document.querySelector(
        "." + Sn + " .gamotvla .fsoni_kalk"
      );
      const sm_j_kalk = document.querySelector(
        "." + Sn + " .gamotvla .suf_mog_kalk"
      );
      const mm_j_kalk = document.querySelector(
        "." + Sn + " .gamotvla .mtl_mog_kalk"
      );

      fs_j.value = sumF.toFixed(2);
      sm_j.value = sumM.toFixed(2);
      sashkushi.value = (sumM / sumF + 1).toFixed(3);
      //
      fs_j_kalk.value = sumF.toFixed(2);
      sm_j_kalk.value = sumM.toFixed(2);
      mm_j_kalk.value = (sumM + sumF).toFixed(2);
      sashkushi_kalk.value = (sumM / sumF + 1).toFixed(3);
    } else if (Sumfsoni.length === 1) {
      fs_j.value = "";
      sm_j.value = "";
      sashkushi.value = "";
    }
  } else if (S_IdName_.substring(0, 2) === "bf" || tfbf === "bf") {
    let sumW = 0;
    let sumM = 0;

    const Sumwiteli = [
      ...document.querySelectorAll("." + Sn + " .gamotvla .witeli"),
    ];
    const Summwvane = [
      ...document.querySelectorAll("." + Sn + " .gamotvla .mwvane"),
    ];

    for (let i = 0; i < Sumwiteli.length; i++) {
      let Sw = Sumwiteli[i].value;
      let Sm = Summwvane[i].value;
      if (Sw != "" && Sm != "") {
        sumW += parseFloat(Sw);
        sumM += parseFloat(Sm);
      }
    }

    const sashkushi = document.querySelector(
      "." + Sn + " .gamotvla .kushi-jami_bir"
    );
    const witeli_j = document.querySelector(
      "." + Sn + " .gamotvla .witeli-jami"
    );
    const mwvane_j = document.querySelector(
      "." + Sn + " .gamotvla .mwvane-jami"
    );

    if (sumW != "" && sumM != "") {
      witeli_j.value = sumW.toFixed(2);
      mwvane_j.value = sumM.toFixed(2);
      sashkushi.value = (sumW / sumM + 1).toFixed(3);
    } else if (Sumwiteli.length === 1) {
      witeli_j.value = "";
      mwvane_j.value = "";
      sashkushi.value = "";
    }
  }
}

function MosatxoviMonacemebisAgeba(Sn) {
  const SasMog_total_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-totali .sasmog_total"
  );
  const SasMog_birja_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-birja .sasmog_birja"
  );
  const Proc_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-birja .proc-options"
  );
  const Fsoni_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-totali .fsoni_kalk"
  );
  const TotKushi_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-totali .kushi_kalk"
  );
  const BirKushi_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-gamotvla-birja .bir_kushi"
  );
  const Witeli_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-witelimwvane_jami .witeli-jami"
  );
  const Mwvane_ = document.querySelector(
    "." + Sn + " .gamotvla #grid-witelimwvane_jami .mwvane-jami"
  );
  // const BirAgebuliProc_ =
  //   (parseFloat(Mwvane_.value) / 100) * parseFloat(Proc_.value);

  const arrayMosatxovi = {
    SasMog_total: parseFloat(SasMog_total_.value),
    SasMog_birja: parseFloat(SasMog_birja_.value),
    Proc: parseFloat(Proc_.value),
    Fsoni: parseFloat(Fsoni_.value),
    TotKushi: parseFloat(TotKushi_.value),
    BirKushi: parseFloat(BirKushi_.value),
    Witeli: parseFloat(Witeli_.value),
    Mwvane: parseFloat(Mwvane_.value),
    // BirAgebuliProc: BirAgebuliProc_,
  };
  return arrayMosatxovi;
}

function ShenaxulisChasma(ev, s, Gv, Sn_) {
  const chenj_obj_name = ev.target.classList.value;
  if (chenj_obj_name === "bukmker gs" || s === "on") {
    const Sn = Sn_.length > 0 ? Sn_ : SectionName(ev);
    const GundName_value = s === "on" ? Gv : ev.target.value;
    const ShenaxulisAmogeba = JSON.parse(localStorage.getItem(GundName_value));
    if (ShenaxulisAmogeba !== null) {
      const GundisSaxel_nameAdd_obj = document.querySelector("." + Sn + " #gs");

      if (s === "off") {
        document.querySelector("." + Sn + " #fsonebi #tf-1").remove();
        document.querySelector("." + Sn + " #gamotvla #bf-1").remove();
        GundisSaxel_nameAdd_obj.disabled = true;
      }

      GundisSaxel_nameAdd_obj.setAttribute("name", Sn);

      const Tfsus_zoma = ShenaxulisAmogeba[1].length;
      const Bfsus_zoma = ShenaxulisAmogeba[2].length;

      for (let i = 0; i < Tfsus_zoma; i++) {
        const aray_fs = Tf_Veli_sus_Add(Sn, "on");
        const ff_fs = ShenaxulisAmogeba[1][i];
        aray_fs[0].value = ff_fs[1];
        aray_fs[1].value = ff_fs[2];
        aray_fs[2].value = ff_fs[3];
        aray_fs[3].value = ff_fs[4];
      }

      SumFsonOrSufmog(Sn, ev, "tf");

      for (let i = 0; i < Bfsus_zoma; i++) {
        const aray_wm = Bf_Veli_sus_Add(Sn, "on");
        const ff_wm = ShenaxulisAmogeba[2][i];
        aray_wm[0].value = ff_wm[1];
        aray_wm[1].value = ff_wm[2];
        aray_wm[2].value = ff_wm[3];
        aray_wm[3].value = ff_wm[4];
      }
      SumFsonOrSufmog(Sn, ev, "bf");

      const BirKushi_obj = document.querySelector(
        "." + Sn + " #grid-gamotvla-birja .bir_kushi"
      );
      const Procenti_obj = document.querySelector(
        "." + Sn + " #grid-gamotvla-birja .proc-options"
      );
      const SasMog_total_obj = document.querySelector(
        "." + Sn + " #grid-gamotvla-totali .sasmog_total"
      );
      const SasMog_birja_obj = document.querySelector(
        "." + Sn + " #grid-gamotvla-birja .sasmog_birja"
      );

      const ff_kalk = ShenaxulisAmogeba[0];
      BirKushi_obj.value = ff_kalk[1];
      Procenti_obj.value = ff_kalk[2];
      ff_kalk[3] !== ""
        ? (SasMog_total_obj.value = ff_kalk[3])
        : (SasMog_birja_obj.value = ff_kalk[4]);
    } else {
      // const TfJami_val = document.querySelector(
      //   "." + Sn + " #grid-fsonebi .gs"
      // ).value;
      // const BfJami_val = document.querySelector(
      //   "." + Sn + " #grid-gamotvla-all #grid-witelimwvane_jami .kushi-jami_bir"
      // ).value;
      // if (TfJami_val  BfJami_val) {
      //   document.querySelector('.'+Sn+' #but-allclear').click();
      //   Tf_Veli_sus_Add(ev, "off");
      //   Bf_Veli_sus_Add(ev, "off");
      // }
    }
  }
}

function Tf_Veli_sus_Add(Sn, onoff) {
  const fsonebipatch = document.querySelector("." + Sn + " .fsonebi");
  const fsonebikopi = fsonebipatch.querySelector(".tf-sus");
  const fsonebiBoloEl = fsonebipatch.lastElementChild.id;
  const fsoniBoloEl_nomeri = parseInt(fsonebiBoloEl.substring(3, 9)) + 1;
  const fsoniklone = fsonebikopi.cloneNode(true);
  fsoniklone.id = "tf-" + fsoniBoloEl_nomeri;
  fsoniklone.classList.remove("damalva");
  fsonebipatch.appendChild(fsoniklone);

  if (onoff === "on") {
    const kushi_obj = fsoniklone.querySelector(".kushi");
    const fsoni_obj = fsoniklone.querySelector(".fsoni");
    const suf_mog_obj = fsoniklone.querySelector(".suf_mog");
    const bukmker_obj = fsoniklone.querySelector(".bukmker");

    return (fs = [kushi_obj, fsoni_obj, suf_mog_obj, bukmker_obj]);
  }
  return (fs = []);
}

function Bf_Veli_sus_Add(Sn, onoff) {
  const birja_wm_patch = document.querySelector(
    "." + Sn + " .gamotvla .fsoni-wm"
  );
  const wm_kopi = birja_wm_patch.querySelector(".bf-sus");
  const wm_BoloEl = birja_wm_patch.lastElementChild.id;
  const wm_BoloEl_nomeri = parseInt(wm_BoloEl.substring(3, 9)) + 1;
  const wm_klone = wm_kopi.cloneNode(true);
  wm_klone.id = "bf-" + wm_BoloEl_nomeri;
  wm_klone.classList.remove("damalva");
  birja_wm_patch.appendChild(wm_klone);

  if (onoff === "on") {
    const kushi_bir_obj = wm_klone.querySelector(".kushi_bir");
    const witeli_obj = wm_klone.querySelector(".witeli");
    const mwvane_obj = wm_klone.querySelector(".mwvane");
    const chamketibirja_obj = wm_klone.querySelector(".chamketibirja");
    return (wm = [kushi_bir_obj, witeli_obj, mwvane_obj, chamketibirja_obj]);
  }
  return (wm = []);
}

function sus_ShenaxuliGundebi() {
  let arai_sus = "";
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    arai_sus += `<div onmousedown="return false" id="` + element + `">` + element + `</div>`;
  }
  document.querySelector(".sus_ShenaxuliGundebi").innerHTML = arai_sus;
}

function GundebisShemseba() {
  let arai_sus = "";
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    arai_sus += `<option value="` + element + `"/>`;
  }
  document.querySelector("#GundisSaxel").innerHTML = arai_sus;
}

function SusAdd(gund_name, ev) {
  const sus_chasasmeli_patch = document.querySelector(".col-center");
  const sus_dasakopirebeli_patch = document.querySelector(".sus-float");
  const susBoloElementi = sus_chasasmeli_patch.lastElementChild.classList;
  const susBoloElementi_nomeri =
    parseInt(susBoloElementi.item(0).substring(4, 9)) + 1;

  const sus_nomeri_obj = document.querySelector(".sus_nomeri");
  sus_nomeri_obj.innerHTML = "sus-" + susBoloElementi_nomeri;

  const sus_dakopirebuli = sus_dasakopirebeli_patch.cloneNode(true);
  const susNomeri = "sus-" + susBoloElementi_nomeri;
  sus_dakopirebuli.classList = susNomeri + " sus-float";
  sus_chasasmeli_patch.appendChild(sus_dakopirebuli);
  let sus_nomeri = "";
  if (gund_name.length > 1) {
    const w = sus_dakopirebuli.querySelector("#grid-fsonebi .gs");
    w.value = gund_name;
    w.setAttribute("name", susNomeri);

    sus_dakopirebuli.querySelector("#tf-1").remove();
    sus_dakopirebuli.querySelector("#bf-1").remove();

    ShenaxulisChasma(ev, "on", gund_name, susNomeri);
    SumSufMog_Motx_Mog(ev, susNomeri);
    sus_nomeri = susNomeri;
    document
      .querySelector("." + susNomeri + " #but-damaxsovreba")
      .classList.remove("but_");
  } else {
    const ww = sus_dakopirebuli.querySelector("#grid-fsonebi .gs");
    ww.scrollIntoView({ block: "center", behavior: "smooth" });
    GundebisShemseba();
  }
  // sus_ShenaxuliGundebi();
  // GundebisShemseba();
  return sus_nomeri;
}

function klik_susSearch(na) {
  const SusRaodenoba_obj = [
    ...document.querySelectorAll(".sus-float #grid-fsonebi .gs"),
  ];
  let aray_g = [];
  for (let i = 1; i < SusRaodenoba_obj.length; i++) {
    aray_g.push(SusRaodenoba_obj[i].value);
  }
  const search_sus_nomeri = aray_g.indexOf(na);
  return search_sus_nomeri;
}

function Toastmesijebi(tipi, logo, satauri, mesigi, dro) {
  // 'success' 'info', 'error', 'warning'
  cuteToast({
    type: tipi,
    img: "img/" + logo,
    title: satauri,
    message: mesigi,
    timer: dro,
  }); //.then((e) => {
  // alert(e);
  //});
}
// დასამახსოვრებელი კნოპკის ანთება
function ChenjKontroli_BukBirja(ev) {
  const Ac_el_Clasval = ev.target.classList.value;
  if (Ac_el_Clasval === "bukmker" || Ac_el_Clasval === "chamketibirja") {
    const Sn = SectionName(ev);
    document
      .querySelector("." + Sn + " #but-damaxsovreba")
      .classList.add("but_");
  }
}
// ბოლოს სად მოხდა ცვლილება
function RemoveClaslist_Select(ev, onoff) {
  const Sn = SectionName(ev);
  const FokusAddColor = document.querySelectorAll("." + Sn + " input");
  for (const iterator of FokusAddColor) {
    iterator.classList.remove("fk");
  }
  const procClear_clas = document.querySelector("." + Sn + " .proc-options");
  procClear_clas.classList.remove("fk");
  //
  if (onoff === "on") {
    ev.target.classList.add("fk");
  }
}

//
/*
 let ff
 console.log(but_name);
 console.log([...event.composedPath()]);
 var div_list = [...event.composedPath()];
 
 for (const iterator of div_list) {
 let ff = iterator.classList.value;
 if (ff.substring(0, 3) === "sus") {
   console.log(ff);
   return;
 }
 }
  */

//  console.log(sm_name);
//  div_list.forEach(element => ff = element.classList.value);
//  console.log(ff);

//  var div_array = Array.prototype.slice.call(div_list);
//  console.log(div_array);
// let f = document.querySelector('input');
// f.getAttribute
// console.log();
// let fff = document.getElementById("mg");
// let fff = document.querySelectorAll('input');
// let ff = fff.getElementsByClassName("fsoni");
// fff.appendChild(fsoniklone);
// let ff = document.querySelectorAll('#mg .fsoni');
// let ff = fff.getElementsByTagName("input");
// let f = ff.getElementById("mg");
//console.log(fff);

// const susall = document.querySelector('.'+SectionName);
// const susall_ = [...susall.childNodes];
// const susall_1 = [...susall_[5].childNodes];
// const susall_2 = [...susall_1[1].childNodes];
// const susall_3 = [...susall_2[1].childNodes];
// const susall_4 = [...susall_2[3].childNodes];
// const susall_5 = [...susall_2[5].childNodes];

// console.log(susall_3);
// console.log(susall_4);
// console.log(susall_5);

//   let dd = document.activeElement.classList.value;
//  console.log(dd);
// console.log(composedPath[5].classList.value);
// const composedPath_ = composedPath[6] || composedPath[5];
// console.log(composedPath_);

// console.log(event.target.classList.value);

// დაკლიკებისას რომელ კლასსზე მოვხვდით
// const S_ClassName_ = event.target.parentNode.classList.value;

// console.log(S_ClassName_);

// console.log(event.composedPath());

//const edd = [...composedPath[3].children];
//return;

//console.log(composedPath[3].classList.value);
// const ss = edd.value;
// console.log(ss);

// console.log(composedPath[2].parentNode); //parentElement
// console.log(composedPath[2].children);

// const aa = [...event.target.parentNode.children];
// console.log(aa);
// console.log(aa[0].value);

//--------------------------------
/*
ელემენტის დინამიური დამატება
const sshg_obj = document.querySelector(".sus_ShenaxuliGundebi");
const upload = element("button", ["btn", "primary"], "ატვირთვა");
sshg_obj.insertAdjacentElement("beforebegin", upload);

const element = (tag, classes = [], content) => {
  const node = document.createElement(tag);
  if (classes.length) {
    node.classList.add(...classes);
  }

  if (content) {
    node.textContent = content;
  }
  return node;
};
*/
// document.querySelectorAll(".tf-sus").forEach(e => console.log(e));
// const ActElement = document.activeElement.parentNode.id;
// ელემენტზე (ობიექტზე) ფერის გაგება = ButSave_obj
// const ss = window.getComputedStyle(ButSave_obj, null).getPropertyValue("background-color");
// start მესიჯები შაბლონები
/*
    cuteAlert({
      type: "success",
      title: "Success Title",
      message: "Success Message",
      img: "img/success.svg",
      buttonText: "Okay"
    }).then((e) => {
      alert(e);
    });

    cuteAlert({
      type: "error",
      title: "Error Title",
      message: "Error Message",
      img: "img/error.svg",
      buttonText: "Okay",
    }).then((e) => {
      alert(e);
    });

    cuteAlert({
      type: "warning",
      title: "Warning Title",
      message: "Warning Message",
      img: "img/error.svg",
      buttonText: "Okay"
    }).then((e) => {
      alert(e);
    })

    cuteAlert({
      type: "info",
      title: "Info Title",
      message: "ინფორმაციული მესიჯი",
     img: "img/Info.svg",
      buttonText: "Okay"
    }).then((e) => {
      alert(e);
    })

    cuteAlert({
      type: "question",
      title: "Confirm Title",
      message: "Confirm Message",
      img: "img/error.svg",
      // confirmText: "Okay",
      // cancelText: "Cancel"
    }).then((e)=>{
      if ( e == ("Thanks")){
        alert("sdfsfs-  "+e);
    } else {
        alert(e);
      }
    })

    
    cuteToast({
      type: "warning", // or success 'info', 'error', 'warning'
      img: "img/error.svg",
      title: "მესიჯი",
      message: "Toast Message",
      timer: 5000,
    });

    https://www.jqueryscript.net/blog/Best-Toast-Notification-jQuery-Plugins.html
    */
//  end მესიჯები შაბლონები
