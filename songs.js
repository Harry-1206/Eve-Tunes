const songs = [
  {
    id: 1,
    title: "よるのゆめ",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://www.nicovideo.jp/watch/sm24698807"
  },
  {
    id: 2,
    title: "アルカリ成人",
    releaseDate: "2014-03-21",
    album: "Wonder Word",
    youtubeUrl: "https://www.youtube.com/watch?v=xxtyNlWKuLY"
  },
  {
    id: 3,
    title: "線香花火",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://music.apple.com/jp/song/%E7%B7%9A%E9%A6%99%E8%8A%B1%E7%81%AB/1017657816"
  },
  {
    id: 4,
    title: "ヘロウメロウ",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://music.apple.com/jp/song/%E3%83%98%E3%83%AD%E3%82%A6%E3%83%A1%E3%83%AD%E3%82%A6/1017657817"
  },
  {
    id: 5,
    title: "蜃気楼",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://music.apple.com/jp/song/%E8%9C%83%E6%B0%97%E6%A5%BC/1017657818"
  },
  {
    id: 6,
    title: "またあした",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://music.apple.com/jp/song/%E3%81%BE%E3%81%9F%E3%81%82%E3%81%97%E3%81%9F/1017657819"
  },
  {
    id: 7,
    title: "夜を超えろ",
    releaseDate: "2014-08-17",
    album: "Wonder Word",
    youtubeUrl: "https://music.apple.com/jp/song/%E5%A4%9C%E3%82%92%E8%B6%85%E3%81%88%E3%82%8D/1017657820"
  },
  {
    id: 8,
    title: "名前も知らないあなたに恋をした",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://music.apple.com/jp/song/%E5%90%8D%E5%89%8D%E3%82%82%E7%9F%A5%E3%82%89%E3%81%AA%E3%81%84%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AB%E6%81%8B%E3%82%92%E3%81%97%E3%81%9F/1036722436"
  },
  {
    id: 9,
    title: "Round Robin",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://music.apple.com/jp/album/round-robin/1036722430"
  },
  {
    id: 10,
    title: "右に曲ガール",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://www.youtube.com/watch?v=EULmzmfBE4E"
  },
  {
    id: 11,
    title: "不完全な処遇",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://www.youtube.com/watch?v=qhaBv9RS7ys"
  },
  {
    id: 12,
    title: "反対車線",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://music.apple.com/jp/song/%E5%8F%8D%E5%AF%BE%E8%BB%8A%E7%B7%9A/1036722444"
  },
  {
    id: 13,
    title: "フォーリンマイワールド",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://music.apple.com/jp/song/%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AA%E3%83%B3%E3%83%9E%E3%82%A4%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89/1036722445"
  },
  {
    id: 14,
    title: "メルファクトリー",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://www.youtube.com/watch?v=XyFWHKdgtDQ"
  },
  {
    id: 15,
    title: "新宿シック",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://www.youtube.com/watch?v=9xohNdXZdtM"
  },
  {
    id: 16,
    title: "いかないで",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://www.youtube.com/watch?v=xFbv40GfF2k"
  },
  {
    id: 17,
    title: "グッバイデイ",
    releaseDate: "2015-08-16",
    album: "Round Robin",
    youtubeUrl: "https://music.apple.com/jp/song/%E3%82%B0%E3%83%83%E3%83%90%E3%82%A4%E3%83%87%E3%82%A4/1036722449"
  },
  {
    id: 18,
    title: "どうしようもないくらいに君が好き",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=AJGHz79AQiE&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=2"
  },
  {
    id: 19,
    title: "キャラバン",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=j8wOrsD6Q24&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=2"
  },
  {
    id: 20,
    title: "惑星ループ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=Bmqg7naxfvo&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=3"
  },
  {
    id: 21,
    title: "デーモンダンストーキョー",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=BLgqyQMjd5s&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=4"
  },
  {
    id: 22,
    title: "浮遊感",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=L6oerXg-VlI&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=5"
  },
  {
    id: 23,
    title: "ショートアンブレラ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=7ThOnTuTbeE&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=6"
  },
  {
    id: 24,
    title: "ラビットグレイ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=bkTo7HKLfLw&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=7"
  },
  {
    id: 25,
    title: "パーフェクト生命",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=e3s2m2Nq1CM&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=8"
  },
  {
    id: 26,
    title: "メルファクトリー(リアレンジver)",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=XyFWHKdgtDQ&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=9"
  },
  {
    id: 27,
    title: "sister(リアレンジver)",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER",
    youtubeUrl: "https://www.youtube.com/watch?v=JhoK7chbpZ0&list=OLAK5uy_n8mDHspQfC0F74qmSY5UYFK152MSdf47I&index=10"
  },
  {
    id: 28,
    title: "fanfare (instrumental)",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=Gc3K-y_KW6U&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL"
  },
  {
    id: 29,
    title: "ナンセンス文学",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=OskXF3s0UT8&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=2"
  },
  {
    id: 30,
    title: "ドラマツルギー",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=jJzw1h5CR-I&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=3"
  },
  {
    id: 31,
    title: "ホームシック",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=chjrVswBFCE&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=5"
  },
  {
    id: 32,
    title: "あの娘シークレット",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=sgdPlDG1-8k&list=RDsgdPlDG1-8k&start_radio=1"
  },
  {
    id: 33,
    title: "会心劇",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=4Lh3o914ztk&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=4"
  },
  {
    id: 34,
    title: "ふりをした。",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=8RGpI8I9upE&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=6"
  },
  {
    id: 35,
    title: "羊を数えて",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=WqPKStYOL0s&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=7"
  },
  {
    id: 36,
    title: "お気に召すまま",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=nROvY9uiYYk&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=8"
  },
  {
    id: 37,
    title: "paradigm (instrumental)",
    releaseDate: "2017-12-13",
    album: "文化",
    youtubeUrl: "https://www.youtube.com/watch?v=xCiw21OIoZU&list=PLpgHSXbzHk_NQ58DhL8VqnmEv2DuUdrSL&index=9"
  },
  {
    id: 38,
    title: "slumber",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=lB-a2gOt4V8&list=PLACnvbteH6NV3fA_axhtycAKJxLmEcJYz"
  },
  {
    id: 39,
    title: "トーキョーゲットー",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=PvzBWFGEz8M&list=RDPvzBWFGEz8M&start_radio=1"
  },
  {
    id: 40,
    title: "アウトサイダー",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=GMPjNA_fCj4&list=RDGMPjNA_fCj4&start_radio=1"
  },
  {
    id: 41,
    title: "迷い子",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=_MuyjI_e0NI&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=4"
  },
  {
    id: 42,
    title: "やどりぎ",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=t7_roQDeTPg&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=5"
  },
  {
    id: 43,
    title: "アンビバレント",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=vNa83RXmZdg&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=6"
  },
  {
    id: 44,
    title: "楓",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=334b85PGQuM&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=7"
  },
  {
    id: 45,
    title: "ラストダンス",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=CLdeykXCZX4&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=8"
  },
  {
    id: 46,
    title: "僕らまだアンダーグラウンド",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=nBteO-bU78Y&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=9"
  },
  {
    id: 47,
    title: "君に世界",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=B3vsRXOSBqc&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=10"
  },
  {
    id: 48,
    title: "dawn",
    releaseDate: "2019-02-06",
    album: "おとぎ",
    youtubeUrl: "https://www.youtube.com/watch?v=cFLXRpsAH_c&list=OLAK5uy_lxKO6_nxTMn6DHk3XmNHeHvxC8sXR6gus&index=11"
  },
  {
    id: 49,
    title: "doublet",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://www.youtube.com/watch?v=V9kPtkiLuks&list=PLhq8kArbJDjICa7cb27wIw32mtmIymCmm"
  },
  {
    id: 50,
    title: "LEO",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/J3K3V36mlLM?si=aXVo5KNNjOSAs0bz"
  },
  {
    id: 51,
    title: "レーゾンデートル",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/ulfY8WQE_HE?si=geOYZN8-pPsjdkFe"
  },
  {
    id: 52,
    title: "虚の記憶",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://www.youtube.com/watch?v=H6Ha_XFcZzA&list=PLhq8kArbJDjICa7cb27wIw32mtmIymCmm&index=4"
  },
  {
    id: 53,
    title: "いのちの食べ方",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/U7L-3VXAkSA?si=Ar3BKOa4TEa16JLP"
  },
  {
    id: 54,
    title: "闇夜",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/BEEFXAltoqo?si=nQnXv8MUsf0JDhHL"
  },
  {
    id: 55,
    title: "朝が降る",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://www.youtube.com/watch?v=urOAZLvT9tA&list=PLhq8kArbJDjICa7cb27wIw32mtmIymCmm&index=7"
  },
  {
    id: 56,
    title: "心予報",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/dJf4wCdLU18?si=2YZwyc5fdSA3s1Tv"
  },
  {
    id: 57,
    title: "白銀",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/X8TCB9s1kRs?si=S0-zj96x_TxWrRlj"
  },
  {
    id: 58,
    title: "バウムクーヘンエンド",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/D_v8oX5s51g?si=m9sdpzu97a-iSwe9"
  },
  {
    id: 59,
    title: "mellow",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/0-yLmhQcfcw?si=4mYDWIDfdqDU_X2x"
  },
  {
    id: 60,
    title: "ognanje",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/3B2YRTOiO-E?si=6O37qUwDo2NYwXHS"
  },
  {
    id: 61,
    title: "胡乱な食卓",
    releaseDate: "2020-02-12",
    album: "Smile",
    youtubeUrl: "https://youtu.be/grsARHSyp5w?si=6PL8_PQ4HFjcQ0-F"
  },
  {
    id: 62,
    title: "廻人 (instrumental)",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/Rd1kBrpED-I?si=GLG9Jo920269orBc"
  },
  {
    id: 63,
    title: "廻廻奇譚",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/1tk1pqwrOys?si=0cDUVzsT3txSDqA3"
  },
  {
    id: 64,
    title: "夜は仄か",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/9Y0_CVX1hok?si=BXjDfvczt8NuAuWB"
  },
  {
    id: 65,
    title: "遊生夢死",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/roh_p2l8DHo?si=bjrzZTLqAx57RolS"
  },
  {
    id: 66,
    title: "暴徒",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/8McISUEXb9g?si=lz2SINpYacGRf4Is"
  },
  {
    id: 67,
    title: "平行線",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/lxw4Y8qzq4w?si=-qN8WdLQDHl-FLOl"
  },
  {
    id: 68,
    title: "YOKU",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/w6G7Yfp1pVE?si=2YVU4M1yasivEMzt"
  },
  {
    id: 69,
    title: "蒼のワルツ",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/pyDCubgU57g?si=nDBjupS_l9tPSwns"
  },
  {
    id: 70,
    title: "心海",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/vRPCAAUBMms?si=n-CsBiLHbqn33Teq"
  },
  {
    id: 71,
    title: "群青讃歌",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/sgZjbk9eH6g?si=H7mNRQcox1iTdJs1"
  },
  {
    id: 72,
    title: "言の葉",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/GIxb3yiMGPM?si=MR4dEeGGkUTemcRM"
  },
  {
    id: 73,
    title: "藍才",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/lw51UR6Qoy8?si=TA6_G2LjKQoDdMVS"
  },
  {
    id: 74,
    title: "退屈を再演しないで",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/Pv56oBAfRhY?si=eCNP6EBa8Uf7zkUB"
  },
  {
    id: 75,
    title: "アヴァン",
    releaseDate: "2022-03-16",
    album: "廻人",
    youtubeUrl: "https://youtu.be/m6CFrfKw60w?si=fE8eeTNYBd-Nt6CH"
  },
  {
    id: 76,
    title: "lazy cat",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/I0jHbsidh1g?si=A8rCpir3a6AzRrc1"
  },
  {
    id: 77,
    title: "ティーンエイジブルー",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/PW7VH5bPdj4?si=S5sCKLCquHY3WVD2"
  },
  {
    id: 78,
    title: "逃避行",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/uWZ6VyQ-cMI?si=u2_BPSqKVMxZqXzB"
  },
  {
    id: 79,
    title: "虎狼来",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/Gw96jPDtoDQ?si=2QOskO8Xb4niz6xt"
  },
  {
    id: 80,
    title: "ファイトソング",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/2eOg5DoYuwU?si=mOfzQ-q49zGSuiiZ"
  },
  {
    id: 81,
    title: "花星",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/T96pY_Ul0s0?si=ftEm9Ce2jA80PIbX"
  },
  {
    id: 82,
    title: "冒険録",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/z9c5tlQHXWM?si=JBGCdo8rnEkTlNKg"
  },
  {
    id: 83,
    title: "Byme",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/d7fG9CemEOs?si=00NNvOJOj5tk87d8"
  },
  {
    id: 84,
    title: "巻物語",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/Dfj3HvZ-HnM?si=YJ8BlgpOZYbfj7bl"
  },
  {
    id: 85,
    title: "インソムニア",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/35nV_M3asRs?si=EJ2XVk2OK8_gGf_H"
  },
  {
    id: 86,
    title: "Bubble feat. Uta",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/Vao7eDMtrro?si=gqo2WjTbw7B_gTX9"
  },
  {
    id: 87,
    title: "スイートメモリー",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/CaW5teT0oLc?si=zFgLTXw_3WQuEb-y"
  },
  {
    id: 88,
    title: "白雪",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/Kvceyq9o0rY?si=6PNm1Wi4kPrw4Cjd"
  },
  {
    id: 89,
    title: "Midnight Runway",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/m2P8Mr7HVHA?si=yG3xwP7pi10DU8y5"
  },
  {
    id: 90,
    title: "ぼくらの",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/exOi_zsOHwM?si=rqP85HWkQsK3WwuM"
  },
  {
    id: 91,
    title: "花嵐",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/I3ZozsgDDqI?si=r6W9e585r1Zq4L_D"
  },
  {
    id: 92,
    title: "さよならエンドロール",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/VOChndxKi6U?si=RmmXf9jCW1t6t8FX"
  },
  {
    id: 93,
    title: "Under Blue",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/7V1NtlZ1xf8?si=77vxneuCXRzrKLVO"
  },
  {
    id: 94,
    title: "夢に逢えたら",
    releaseDate: "2024-11-27",
    album: "Under Blue",
    youtubeUrl: "https://youtu.be/WQWHKwzT-d8?si=XSleBJMLleTpdcmU"
  },
  {
    id: 95,
    title: "Underdog",
    releaseDate: "2025-11-28",
    album: "-",
    youtubeUrl: "https://youtu.be/UfTpKaKXbG4?si=ktHjZ41ljQJwhYfq"
  }
];