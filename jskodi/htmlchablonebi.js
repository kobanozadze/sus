function HtmlShabloni_pozsusAdd(q) {
  const shabloni_pozsus =
    `<section class="pozsus-` +
    q +
    ` sus-float pozsus_Count">
      <div class="pozsus_tavi">

                    <div id="id_grid_pozsus_tavi"> 
                                             
                        <label class="gundsaxeli">გუნდის სახელი</label> 
                        <label class="taimi">ტაიმი</label>
                        <label class="dziritadi">ძირითადი</label>
                        <label class="pozadd">ბაზრები</label>
                        <label class="sab_mog">მოგება</label>
                        <label class="sab_mog_val">0.00</label>
                        <label class="prc">%</label>

                        <input class="gundsaxeli_val" type="text">
                        <input class="taimi1_val" type="number" step="1" value="0">
                        <input class="taimi2_val" type="number" step="1" value="0">
                        <input class="dziritadi1_val" type="number" step="1" value="0">
                        <input class="dziritadi2_val" type="number" step="1" value="0">

                        <button class="but_pozsus_damaxsovreba but">დამახსოვრება</button>
                        <button class="but_pozsus_gasuftaveba but">გასუფთავება</button>
                        
                        <div class="all_poz_akecva"></div>

                        <select class="pozsus_proc-options" tabIndex="-1">
                            <option value="3" selected>3</option>
                            <option>0</option>
                            <option>5</option>
                        </select>

                        <img class="img_pozsus_clear" src="img/Clear.png" alt="წაშლა">

                        <select class="pozadd_val" tabIndex="-1">
                            
                        </select>

                    </div>
                </div>
                <!--  -->
                <div class="pozsus_contenti">

                </div>
   </section>`;
  return shabloni_pozsus;
}

function HtmlShabloni_bazarebis_qudi(
  PozSusName,
  BazrisSaxelivalue,
  BazrisSaxeliclass
) {
  const AllBazari =
    `<button id="` +
    BazrisSaxeliclass +
    `" class="accordion">
    <img class="img_pozsus_bazari_clear bazrisshedegi" src="img/bazari_clear.ico" alt="წაშლა">
    <label class="bazrisshedegi"></label>
    <label class="accord">` +
    BazrisSaxelivalue +
    `</label>
    </button>
   <div id="` +
    BazrisSaxeliclass +
    `" class="panel">
    ` +
    HtmlShabloni_Pozsus_Sawyisi_Shabloni(PozSusName, BazrisSaxeliclass) +
    `
   </div>`;
  return AllBazari;
}

function HtmlShabloni_bazarebis_qudi_Golebi(bazariName, BazrisSaxeliclass) {
  const GolebisBzariQudi =
    `<button id="` +
    BazrisSaxeliclass +
    `" class="accordion">
    <img class="img_pozsus_bazari_clear bazrisshedegi" src="img/bazari_clear.ico" alt="წაშლა">
    <label class="bazrisshedegi"></label>
    <label class="accord">` +
    bazariName +
    `"</label>
    <select class="GolebisPoziciebi" tabindex="-1">
                            <option value="" selected=""></option>
                            <option>0.5</option>
                            <option>1.5</option>
                            <option>2.5</option>
                            <option>3.5</option>
                            <option>4.5</option>
                            <option>5.5</option>
                            <option>6.5</option>
                            <option>7.5</option>
                            <option>8.5</option>
                            <option>9.5</option>
                        </select>
    </button>
   <div id="` +
    BazrisSaxeliclass +
    `" class="panel"></div>`;
  return GolebisBzariQudi;
}

function HtmlShabloni_TotalFsoniJmai(pozsus_name, all_poz_name, poz_name) {
  const TotalFsoniJmai =
    `<div class="flexsi_" data-parent_pozname="` +
    poz_name +
    `">
  <div id="poz_name" class="pozname_jami">` +
    poz_name +
    `</div>
  <input type="text" class="kushi-jami" data-poz_name="` +
    poz_name +
    `" tabIndex="-1"
      placeholder="კუში" readonly>
  <input type="text" class="fsoni-jami" data-poz_name="` +
    poz_name +
    `" tabIndex="-1"
      placeholder="ფსონი" readonly>
  <input type="text" class="suf_mog-jami" data-poz_name="` +
    poz_name +
    `" tabIndex="-1"
      placeholder="სუფ მოგება" readonly>
  <input type="text" class="mtl_mog-jami" data-poz_name="` +
    poz_name +
    `" tabIndex="-1"
      placeholder="მთლ მოგება" readonly>
</div>`;
  const pozsus_name_obj = document.querySelector(
    "." + pozsus_name + " div#" + all_poz_name + " .fsonebi_jami"
  );
  pozsus_name_obj.insertAdjacentHTML("beforeend", TotalFsoniJmai);
  return TotalFsoniJmai;
}

function HtmlShabloni_BazrisPozicia(pozsus_name, all_poz_name, poz_name) {
  const BazrisPozicia =
    `<div class="flexsi_bazari" data-parent_pozname="` +
    poz_name +
    `">
  <div id="poz_name" class="pozname_bazari">` +
    poz_name +
    `</div>
  <input type="number" onfocus="this.select()" class="bazari_realoba" data-poz_name="` +
    poz_name +
    `">
  <input type="number" step="0.50" onfocus="this.select()" class="kushi_bazari" tabIndex="-1">
  <input type="number" onfocus="this.select()" class="vitxovt_bazari" tabIndex="1">
  <input type="number" onfocus="this.select()" class="valdeb_bazari" tabIndex="1">
</div>`;
  const pozsus_name_obj = document.querySelector(
    "." + pozsus_name + " div#" + all_poz_name + " .bazari"
  );
  pozsus_name_obj.insertAdjacentHTML("beforeend", BazrisPozicia);
  return BazrisPozicia;
}

function HtmlShabloni_TotalFsonebi(pozsus_name, all_poz_name, nom) {
  const TotalFsonebi =
    `<div id="pozsus_tf-` +
    nom +
    `" class="tf-pozsus" data-pozsusname="` +
    pozsus_name +
    `" data-bazariname="` +
    all_poz_name +
    `">
  <button class="but-clear_pozsus" tabIndex="-1">&times</button>
  <input type="text" class="pozsus_poz_list" onfocus="this.select()"
      list="` +
    all_poz_name +
    `_" placeholder="პოზიცია" />
  <input type="number" step="0.1" onfocus="this.select()" class="pozsus_kushi"
      tabIndex="0" placeholder="კუში">
  <input type="number" step="0.50" onfocus="this.select()" class="pozsus_fsoni"
      tabIndex="0" placeholder="ფსონი">
  <input type="text" class="pozsus_suf_mog" tabIndex="-1" placeholder="სუფ მოგება"
      readonly>
  <input type="text" class="pozsus_bukmker" tabIndex="-1" onfocus="this.select()"
      list="pozsus_bukmker" placeholder="ბუკმეკერი" />
</div>`;
  const pozsus_name_obj = document.querySelector(
    "." + pozsus_name + " div#" + all_poz_name + " .pozsus_fsonebi .centrireba"
  );
  pozsus_name_obj.insertAdjacentHTML("beforeend", TotalFsonebi);
  return TotalFsonebi;
}

function HtmlShabloni_Pozsus_Sawyisi_Shabloni(pozsus_name, BazrisSaxeliclass) {
  const Pozsus_Sawyisi_Shabloni =
    `<div id="bazrebi_grid">

  <div class="bazariDAjami">
      <div class="fsonebi_jami baz_jam">
          <div class="tf">
              <label class="bazrisshedegi"></label>
              <label>ტოტალ ფსონების ჯამი</label>
          </div>
          <!-- name -->
          <div class="pozsus_jami_label_name flexsi_">
              <label class="p">პოზ</label>
              <label class="k">კუში</label>
              <label class="f">ფსონი</label>
              <label class="sm">სუფ მოგება</label>
              <label class="mm">მთლ მოგება</label>
          </div>  
      </div>

      <div class="bazari baz_jam">
          <div class="tf">
              <label class="bazrisshedegi"></label>
              <label>რეალობა ბირჟაზე (უნდა ემთხვეოდეს)</label>
          </div>
          <!-- name -->
          <div class="pozsus_bazari_label_name flexsi_bazari">
              <label class="p p_">პოზ</label>
              <label class="r r_">რეალობა</label>
              <label class="k k_">კუში</label>
              <label class="vt vt_">ვითხოვთ</label>
              <label class="vl vl_">ვალდ..</label>
          </div>
          <!-- 1 -->
          
      </div>
  </div>
  <hr>
  <div class="pozsus_fsonebi">

      <div class="centrireba">
          <!-- 1 -->
          <h4>ტოტალ ფსონები</h4>
          <!-- 2 row -->

          <div id="pozsus_tf-1" class="tf-pozsus" data-pozsusname="` +
    pozsus_name +
    `" data-bazariname="` +
    BazrisSaxeliclass +
    `">
              <button class="but-clear_pozsus" tabIndex="-1">&times</button>
              <input type="text" class="pozsus_poz_list" onfocus="this.select()"
                  list="` +
    BazrisSaxeliclass +
    `_" placeholder="პოზიცია" />
              <input type="number" step="0.1" onfocus="this.select()" class="pozsus_kushi"
                 tabIndex="0" placeholder="კუში">
              <input type="number" step="0.50" onfocus="this.select()" class="pozsus_fsoni"
                  tabIndex="0" placeholder="ფსონი">
              <input type="text" class="pozsus_suf_mog" tabIndex="-1" placeholder="სუფ მოგება"
                  readonly>
              <input type="text" class="pozsus_bukmker" tabIndex="-1" onfocus="this.select()"
                  list="pozsus_bukmker" placeholder="ბუკმეკერი" />
          </div>

      </div>

      <datalist id="` +
    BazrisSaxeliclass +
    `_">
          
      </datalist>
      
  </div>

</div>`;
  return Pozsus_Sawyisi_Shabloni;
}

function HtmlShabloni_Pozsus_Sawyisi_Shabloni_Golebis(
  pozsus_name,
  BazrisSaxeliclass
) {
  const Pozsus_Sawyisi_Shabloni_gol =
    `<div id="bazrebi_grid">

    <div class="bazariDAjami">
        <div class="fsonebi_jami baz_jam">
            <div class="tf">
                <label class="bazrisshedegi"></label>
                <label>ტოტალ ფსონების ჯამი</label>
            </div>
            <!-- name -->
            <div class="pozsus_jami_label_name flexsi_">
                <label class="p">პოზ</label>
                <label class="k">კუში</label>
                <label class="f">ფსონი</label>
                <label class="sm">სუფ მოგება</label>
                <label class="mm">მთლ მოგება</label>
            </div>  
        </div>
  
        <div class="bazari baz_jam">
            <div class="tf">
                <label class="bazrisshedegi"></label>
                <label>რეალობა ბირჟაზე (უნდა ემთხვეოდეს)</label>
            </div>
            <!-- name -->
            <div class="pozsus_bazari_label_name flexsi_bazari">
                <label class="p p_">პოზ</label>
                <label class="r r_">რეალობა</label>
                <label class="k k_">კუში</label>
                <label class="vt vt_">ვითხოვთ</label>
                <label class="vl vl_">ვალდ..</label>
            </div>
            <!-- 1 -->
            
        <div class="flexsi_bazari" data-parent_pozname="ნაკ">
    <div id="poz_name" class="pozname_bazari shedegi_red">ნაკ</div>
    <input type="number" onfocus="this.select()" class="bazari_realoba" data-poz_name="ნაკ">
    <input type="number" step="0.50" onfocus="this.select()" class="kushi_bazari" tabindex="-1">
    <input type="number" onfocus="this.select()" class="vitxovt_bazari" tabindex="1">
    <input type="number" onfocus="this.select()" class="valdeb_bazari" tabindex="1">
  </div><div class="flexsi_bazari" data-parent_pozname="მეტ">
    <div id="poz_name" class="pozname_bazari shedegi_green">მეტ</div>
    <input type="number" onfocus="this.select()" class="bazari_realoba" data-poz_name="მეტ">
    <input type="number" step="0.50" onfocus="this.select()" class="kushi_bazari" tabindex="-1">
    <input type="number" onfocus="this.select()" class="vitxovt_bazari" tabindex="1">
    <input type="number" onfocus="this.select()" class="valdeb_bazari" tabindex="1">
  </div></div>
    </div>
    <hr>
    <div class="pozsus_fsonebi">
  
        <div class="centrireba">
            <!-- 1 -->
            <h4>ტოტალ ფსონები</h4>
            <!-- 2 row -->
  
            <div id="pozsus_tf-1" class="tf-pozsus" data-pozsusname="` +
    pozsus_name +
    `" data-bazariname="` +
    BazrisSaxeliclass +
    `">
                <button class="but-clear_pozsus" tabindex="-1">×</button>
                <input type="text" class="pozsus_poz_list" onfocus="this.select()" list="` +
    BazrisSaxeliclass +
    `_" placeholder="პოზიცია">
                <input type="number" step="0.1" onfocus="this.select()" class="pozsus_kushi" tabindex="0" placeholder="კუში">
                <input type="number" step="0.50" onfocus="this.select()" class="pozsus_fsoni" tabindex="0" placeholder="ფსონი">
                <input type="text" class="pozsus_suf_mog" tabindex="-1" placeholder="სუფ მოგება" readonly="">
                <input type="text" class="pozsus_bukmker" tabindex="-1" onfocus="this.select()" list="pozsus_bukmker" placeholder="ბუკმეკერი">
            </div>
  
        </div>
  
        <datalist id="` +
    BazrisSaxeliclass +
    `_">
            
        <option value="ნაკ"></option><option value="მეტ"></option><option value=""></option></datalist>
        
    </div>
  
  </div>`;
  return Pozsus_Sawyisi_Shabloni_gol;
}
