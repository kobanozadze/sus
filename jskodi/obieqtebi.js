//
const Bazrebi = {
  // Dz_1x2 = Dz ძირითადი 1 x 2
  Dz_1x2: {
    name: "ძირ: 1 2 X",
    name_vrclad: "ძირითადი 1 2 X  [ x2 x1 12 ]",
    poz_za: ["1", "2", "X"],
    poz_pro: ["x2", "x1", "12"],
    mog_poz: {
      dz1_m_dz2: ["Dz_1x2", "1", "x1", "12"],
      dz1_n_dz2: ["Dz_1x2", "2", "x2", "12"],
      dz1_t_dz2: ["Dz_1x2", "X", "x1", "x2"],
    },
  },
  // Tp_1x2 = Tp ტაიმი პირველი  1 x 2
  Tp_1x2: {
    name: "ტპ: 1 X 2",
    name_vrclad: "პირველი ტაიმი 1 X 2",
    poz_za: ["1", "2", "X"],
    poz_pro: ["x1", "12", "x2"],
    mog_poz: {
      t1_m_t2: ["Tp_1x2", "1", "x1", "12"],
      t1_n_t2: ["Tp_1x2", "2", "x2", "12"],
      t1_t_t2: ["Tp_1x2", "X", "x1", "x2"],
    },
  },
  // Tm_1x2 = Tm ტაიმი მეორე  1 x 2
  Tm_1x2: {
    name: "ტმ: 1 X 2",
    name_vrclad: "მეორე ტაიმი 1 X 2",
    poz_za: ["1", "2", "X"],
    poz_pro: ["x1", "12", "x2"],
    mog_poz: {
      dz1_g_t1_m_dz2_g_t2: ["Tm_1x2", "1", "x1", "12"],
      dz1_g_t1_n_dz2_g_t2: ["Tm_1x2", "2", "x2", "12"],
      dz1_g_t1_t_dz2_g_t2: ["Tm_1x2", "X", "x1", "x2"],
    },
  },
  // T_match = ტაიმ/მატჩი
  T_match: {
    name: "ტაიმ/მატჩი",
    name_vrclad: "ტაიმ/მატჩი",
    poz_za: ["1-1", "1-x", "1-2", "x-1", "x-x", "x-2", "2-1", "2-x", "2-2"],
    poz_pro: [""],
    mog_poz: {
      t1_m_t2_da_dz1_m_dz2: ["T_match", "1-1"],
      t1_m_t2_da_dz1_t_dz2: ["T_match", "1-x"],
      t1_m_t2_da_dz1_n_dz2: ["T_match", "1-2"],
      t1_t_t2_da_dz1_m_dz2: ["T_match", "x-1"],
      t1_t_t2_da_dz1_t_dz2: ["T_match", "x-x"],
      t1_t_t2_da_dz1_n_dz2: ["T_match", "x-2"],
      t1_n_t2_da_dz1_m_dz2: ["T_match", "2-1"],
      t1_n_t2_da_dz1_t_dz2: ["T_match", "2-x"],
      t1_n_t2_da_dz1_n_dz2: ["T_match", "2-2"],
    },
  },
  // Tp_ki_ara =  ტაიმი პირველი  კი/არა
  Tp_ki_ara: {
    name: "ტპ: კი/არა",
    name_vrclad: "პირველი ტაიმი: კი/არა",
    poz_za: ["კი", "არა"],
    poz_pro: [""],
    mog_poz: {
      t1_m_0_da_t2_m_0: ["Tp_ki_ara", "კი"],
      t1_t_0_an_t2_t_0: ["Tp_ki_ara", "არა"],
    },
  },
  // Tm_ki_ara =  ტაიმი მეორე  კი/არა
  Tm_ki_ara: {
    name: "ტმ: კი/არა",
    name_vrclad: "მეორე ტაიმი: კი/არა",
    poz_za: ["კი", "არა"],
    poz_pro: [""],
    mog_poz: {
      dz1_g_t1_m_0_da_dz2_g_t2_m_0: ["Tm_ki_ara", "კი"],
      dz1_g_t1_t_0_an_dz2_g_t2_t_0: ["Tm_ki_ara", "არა"],
    },
  },
  // Dz_ki_ara =  ძირითადი  კი/არა
  Dz_ki_ara: {
    name: "ძირ: კი/არა",
    name_vrclad: "ძირითადი: კი/არა",
    poz_za: ["კი", "არა"],
    poz_pro: [""],
    mog_poz: {
      dz1_m_0_da_dz2_m_0: ["Dz_ki_ara", "კი"],
      dz1_t_0_an_dz2_t_0: ["Dz_ki_ara", "არა"],
    },
  },
  // Tp_zusti = ტაიმი პირველი ზუსტი ანგარიში
  Tp_zusti: {
    name: "ტპ: ანგარიშები",
    name_vrclad: "პირველი ტაიმი:  ზუსტი ანგარიში",
    poz_za: [
      "0-0",
      "1-1",
      "2-2",
      "1-0",
      "2-0",
      "2-1",
      "0-1",
      "0-2",
      "1-2",
      "< >",
    ],
    poz_pro: [""],
    mog_poz: {
      t1_t_0_da_t2_t_0: ["Tp_zusti", "0-0"],
      t1_t_1_da_t2_t_1: ["Tp_zusti", "1-1"],
      t1_t_2_da_t2_t_2: ["Tp_zusti", "2-2"],
      t1_t_1_da_t2_t_0: ["Tp_zusti", "1-0"],
      t1_t_2_da_t2_t_0: ["Tp_zusti", "2-0"],
      t1_t_2_da_t2_t_1: ["Tp_zusti", "2-1"],
      t1_t_0_da_t2_t_1: ["Tp_zusti", "0-1"],
      t1_t_0_da_t2_t_2: ["Tp_zusti", "0-2"],
      t1_t_1_da_t2_t_2: ["Tp_zusti", "1-2"],
      t1_m_2_an_t2_m_2: ["Tp_zusti", "< >"],
    },
  },
  // Tm_zusti = ტაიმი მეორე ზუსტი ანგარიში
  Tm_zusti: {
    name: "ტმ: ანგარიშები",
    name_vrclad: "მეორე ტაიმი:  ზუსტი ანგარიში",
    poz_za: [
      "0-0",
      "1-1",
      "2-2",
      "1-0",
      "2-0",
      "2-1",
      "0-1",
      "0-2",
      "1-2",
      "< >",
    ],
    poz_pro: [""],
    mog_poz: {
      dz1_g_t1_t_0_da_dz2_g_t2_t_0: ["Tm_zusti", "0-0"],
      dz1_g_t1_t_1_da_dz2_g_t2_t_1: ["Tm_zusti", "1-1"],
      dz1_g_t1_t_2_da_dz2_g_t2_t_2: ["Tm_zusti", "2-2"],
      dz1_g_t1_t_1_da_dz2_g_t2_t_0: ["Tm_zusti", "1-0"],
      dz1_g_t1_t_2_da_dz2_g_t2_t_0: ["Tm_zusti", "2-0"],
      dz1_g_t1_t_2_da_dz2_g_t2_t_1: ["Tm_zusti", "2-1"],
      dz1_g_t1_t_0_da_dz2_g_t2_t_1: ["Tm_zusti", "0-1"],
      dz1_g_t1_t_0_da_dz2_g_t2_t_2: ["Tm_zusti", "0-2"],
      dz1_g_t1_t_1_da_dz2_g_t2_t_2: ["Tm_zusti", "1-2"],
      dz1_g_t1_m_2_an_dz2_g_t2_m_2: ["Tm_zusti", "< >"],
    },
  },
  // Dz_zusti = ძირითადი ზუსტი ანგარიში
  Dz_zusti: {
    name: "ძირ: ანგარიშები",
    name_vrclad: "ძირითადი:  ზუსტი ანგარიში",
    poz_za: [
      "0-0",
      "0-1",
      "0-2",
      "0-3",
      "1-0",
      "1-1",
      "1-2",
      "1-3",
      "2-0",
      "2-1",
      "2-2",
      "2-3",
      "3-0",
      "3-1",
      "3-2",
      "3-3",
      ">",
      "<",
      "X-X",
    ],
    poz_pro: [""],
    mog_poz: {
      dz1_t_0_da_dz2_t_0: ["Dz_zusti", "0-0"],
      dz1_t_0_da_dz2_t_1: ["Dz_zusti", "0-1"],
      dz1_t_0_da_dz2_t_2: ["Dz_zusti", "0-2"],
      dz1_t_0_da_dz2_t_3: ["Dz_zusti", "0-3"],
      dz1_t_1_da_dz2_t_0: ["Dz_zusti", "1-0"],
      dz1_t_1_da_dz2_t_1: ["Dz_zusti", "1-1"],
      dz1_t_1_da_dz2_t_2: ["Dz_zusti", "1-2"],
      dz1_t_1_da_dz2_t_3: ["Dz_zusti", "1-3"],
      dz1_t_2_da_dz2_t_0: ["Dz_zusti", "2-0"],
      dz1_t_2_da_dz2_t_1: ["Dz_zusti", "2-1"],
      dz1_t_2_da_dz2_t_2: ["Dz_zusti", "2-2"],
      dz1_t_2_da_dz2_t_3: ["Dz_zusti", "2-3"],
      dz1_t_3_da_dz2_t_0: ["Dz_zusti", "3-0"],
      dz1_t_3_da_dz2_t_1: ["Dz_zusti", "3-1"],
      dz1_t_3_da_dz2_t_2: ["Dz_zusti", "3-2"],
      dz1_t_3_da_dz2_t_3: ["Dz_zusti", "3-3"],
      dz1_m_3: ["Dz_zusti", ">"],
      dz2_m_3: ["Dz_zusti", "<"],
      dz1_t_dz2_da_dz1_m_3_da_dz2_m_3: ["Dz_zusti", "X-X"],
    },
  },
  // Dz_Golebi = ძირითადი  გოლები
  Dz_Golebi: {
    name: "ძირ: გოლები",
    name_vrclad: "ძირითადი: გოლები",
    poz_za: ["ნაკ", "მეტ"],
    poz_pro: [""],
    mog_poz: {
      dz1_mim_dz2_nt_0: ["Dz_Golebi_0_5", "ნაკ"], // 0.5 გოლი
      dz1_mim_dz2_m_0: ["Dz_Golebi_0_5", "მეტ"], // 0.5 გოლი
      dz1_mim_dz2_nt_1: ["Dz_Golebi_1_5", "ნაკ"], // 1.5 გოლი
      dz1_mim_dz2_m_1: ["Dz_Golebi_1_5", "მეტ"], // 1.5 გოლი
      dz1_mim_dz2_nt_2: ["Dz_Golebi_2_5", "ნაკ"], // 2.5 გოლი
      dz1_mim_dz2_m_2: ["Dz_Golebi_2_5", "მეტ"], // 2.5 გოლი
      dz1_mim_dz2_nt_3: ["Dz_Golebi_3_5", "ნაკ"], // 3.5 გოლი
      dz1_mim_dz2_m_3: ["Dz_Golebi_3_5", "მეტ"], // 3.5 გოლი
      dz1_mim_dz2_nt_4: ["Dz_Golebi_4_5", "ნაკ"], // 4.5 გოლი
      dz1_mim_dz2_m_4: ["Dz_Golebi_4_5", "მეტ"], // 4.5 გოლი
      dz1_mim_dz2_nt_5: ["Dz_Golebi_5_5", "ნაკ"], // 5.5 გოლი
      dz1_mim_dz2_m_5: ["Dz_Golebi_5_5", "მეტ"], // 5.5 გოლი
      dz1_mim_dz2_nt_6: ["Dz_Golebi_6_5", "ნაკ"], // 6.5 გოლი
      dz1_mim_dz2_m_6: ["Dz_Golebi_6_5", "მეტ"], // 6.5 გოლი
      dz1_mim_dz2_nt_7: ["Dz_Golebi_7_5", "ნაკ"], // 7.5 გოლი
      dz1_mim_dz2_m_7: ["Dz_Golebi_7_5", "მეტ"], // 7.5 გოლი
      dz1_mim_dz2_nt_8: ["Dz_Golebi_8_5", "ნაკ"], // 8.5 გოლი
      dz1_mim_dz2_m_8: ["Dz_Golebi_8_5", "მეტ"], // 8.5 გოლი
      dz1_mim_dz2_nt_9: ["Dz_Golebi_9_5", "ნაკ"], // 9.5 გოლი
      dz1_mim_dz2_m_9: ["Dz_Golebi_9_5", "მეტ"], // 9.5 გოლი
    },
  },
  // Tp_Golebi = ტაიმი პირველი  გოლები
  Tp_Golebi: {
    name: "ტპ: გოლები",
    name_vrclad: "პირველი ტაიმი: გოლები",
    poz_za: ["ნაკ", "მეტ"],
    poz_pro: [""],
    mog_poz: {
      t1_mim_t2_nt_0: ["Tp_Golebi_0_5", "ნაკ"], // 0.5 გოლი
      t1_mim_t2_m_0: ["Tp_Golebi_0_5", "მეტ"], // 0.5 გოლი
      t1_mim_t2_nt_1: ["Tp_Golebi_1_5", "ნაკ"], // 1.5 გოლი
      t1_mim_t2_m_1: ["Tp_Golebi_1_5", "მეტ"], // 1.5 გოლი
      t1_mim_t2_nt_2: ["Tp_Golebi_2_5", "ნაკ"], // 2.5 გოლი
      t1_mim_t2_m_2: ["Tp_Golebi_2_5", "მეტ"], // 2.5 გოლი
      t1_mim_t2_nt_3: ["Tp_Golebi_3_5", "ნაკ"], // 3.5 გოლი
      t1_mim_t2_m_3: ["Tp_Golebi_3_5", "მეტ"], // 3.5 გოლი
      t1_mim_t2_nt_4: ["Tp_Golebi_4_5", "ნაკ"], // 4.5 გოლი
      t1_mim_t2_m_4: ["Tp_Golebi_4_5", "მეტ"], // 4.5 გოლი
      t1_mim_t2_nt_5: ["Tp_Golebi_5_5", "ნაკ"], // 5.5 გოლი
      t1_mim_t2_m_5: ["Tp_Golebi_5_5", "მეტ"], // 5.5 გოლი
      t1_mim_t2_nt_6: ["Tp_Golebi_6_5", "ნაკ"], // 6.5 გოლი
      t1_mim_t2_m_6: ["Tp_Golebi_6_5", "მეტ"], // 6.5 გოლი
      t1_mim_t2_nt_7: ["Tp_Golebi_7_5", "ნაკ"], // 7.5 გოლი
      t1_mim_t2_m_7: ["Tp_Golebi_7_5", "მეტ"], // 7.5 გოლი
      t1_mim_t2_nt_8: ["Tp_Golebi_8_5", "ნაკ"], // 8.5 გოლი
      t1_mim_t2_m_8: ["Tp_Golebi_8_5", "მეტ"], // 8.5 გოლი
      t1_mim_t2_nt_9: ["Tp_Golebi_9_5", "ნაკ"], // 9.5 გოლი
      t1_mim_t2_m_9: ["Tp_Golebi_9_5", "მეტ"], // 9.5 გოლი
    },
  },
  // Tm_Golebi = ტაიმი მეორე  გოლები
  Tm_Golebi: {
    name: "ტმ: გოლები",
    name_vrclad: "მეორე ტაიმი: გოლები",
    poz_za: ["ნაკ", "მეტ"],
    poz_pro: [""],
    mog_poz: {
      dz1_gam_t1_mim_dz2_gam_t2_nt_0: ["Tm_Golebi_0_5", "ნაკ"], // 0.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_0: ["Tm_Golebi_0_5", "მეტ"], // 0.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_1: ["Tm_Golebi_1_5", "ნაკ"], // 1.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_1: ["Tm_Golebi_1_5", "მეტ"], // 1.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_2: ["Tm_Golebi_2_5", "ნაკ"], // 2.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_2: ["Tm_Golebi_2_5", "მეტ"], // 2.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_3: ["Tm_Golebi_3_5", "ნაკ"], // 3.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_3: ["Tm_Golebi_3_5", "მეტ"], // 3.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_4: ["Tm_Golebi_4_5", "ნაკ"], // 4.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_4: ["Tm_Golebi_4_5", "მეტ"], // 4.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_5: ["Tm_Golebi_5_5", "ნაკ"], // 5.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_5: ["Tm_Golebi_5_5", "მეტ"], // 5.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_6: ["Tm_Golebi_6_5", "ნაკ"], // 6.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_6: ["Tm_Golebi_6_5", "მეტ"], // 6.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_7: ["Tm_Golebi_7_5", "ნაკ"], // 7.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_7: ["Tm_Golebi_7_5", "მეტ"], // 7.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_8: ["Tm_Golebi_8_5", "ნაკ"], // 8.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_8: ["Tm_Golebi_8_5", "მეტ"], // 8.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_nt_9: ["Tm_Golebi_9_5", "ნაკ"], // 9.5 გოლი
      dz1_gam_t1_mim_dz2_gam_t2_m_9: ["Tm_Golebi_9_5", "მეტ"], // 9.5 გოლი
    },
  },
  // 
};
