const songs = [
  {
    id: 1,
    title: "よるのゆめ",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 2,
    title: "アルカリ成人",
    releaseDate: "2014-03-21",
    album: "Wonder Word"
  },
  {
    id: 3,
    title: "線香花火",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 4,
    title: "ヘロウメロウ",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 5,
    title: "蜃気楼",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 6,
    title: "またあした",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 7,
    title: "夜を超えろ",
    releaseDate: "2014-08-17",
    album: "Wonder Word"
  },
  {
    id: 8,
    title: "名前も知らないあなたに恋をした",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 9,
    title: "Round Robin",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 10,
    title: "右に曲ガール",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 11,
    title: "不完全な処遇 album ver",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 12,
    title: "反対車線",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 13,
    title: "フォーリンマイワールド",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 14,
    title: "メルファクトリー",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 15,
    title: "新宿シック",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 16,
    title: "いかないで album ver",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 17,
    title: "グッバイデイ",
    releaseDate: "2015-08-16",
    album: "Round Robin"
  },
  {
    id: 18,
    title: "どうしようもないくらいに君が好き",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 19,
    title: "キャラバン",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 20,
    title: "惑星ループ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 21,
    title: "デーモンダンストーキョー",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 22,
    title: "浮遊感",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 23,
    title: "ショートアンブレラ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 24,
    title: "ラビットグレイ",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 25,
    title: "パーフェクト生命",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 26,
    title: "メルファクトリー(リアレンジver)",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 27,
    title: "sister(リアレンジver)",
    releaseDate: "2016-10-19",
    album: "OFFICIAL NUMBER"
  },
  {
    id: 28,
    title: "fanfare (instrumental)",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 29,
    title: "ナンセンス文学",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 30,
    title: "ドラマツルギー",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 31,
    title: "ホームシック",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 32,
    title: "あの娘シークレット",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 33,
    title: "会心劇",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 34,
    title: "ふりをした。",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 35,
    title: "羊を数えて",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 36,
    title: "お気に召すまま",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 37,
    title: "paradigm (instrumental)",
    releaseDate: "2017-12-13",
    album: "文化"
  },
  {
    id: 38,
    title: "slumber",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 39,
    title: "トーキョーゲットー",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 40,
    title: "アウトサイダー",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 41,
    title: "迷い子",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 42,
    title: "やどりぎ",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 43,
    title: "アンビバレント",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 44,
    title: "楓",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 45,
    title: "ラストダンス",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 46,
    title: "僕らまだアンダーグラウンド",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 47,
    title: "君に世界",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 48,
    title: "dawn",
    releaseDate: "2019-02-06",
    album: "おとぎ"
  },
  {
    id: 49,
    title: "doublet",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 50,
    title: "LEO",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 51,
    title: "レーゾンデートル",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 52,
    title: "虚の記憶",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 53,
    title: "いのちの食べ方",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 54,
    title: "闇夜",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 55,
    title: "朝が降る",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 56,
    title: "心予報",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 57,
    title: "白銀",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 58,
    title: "バウムクーヘンエンド",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 59,
    title: "mellow",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 60,
    title: "ognanje",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 61,
    title: "胡乱な食卓",
    releaseDate: "2020-02-12",
    album: "Smile"
  },
  {
    id: 62,
    title: "廻人 (instrumental)",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 63,
    title: "廻廻奇譚",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 64,
    title: "夜は仄か",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 65,
    title: "遊生夢死",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 66,
    title: "暴徒",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 67,
    title: "平行線",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 68,
    title: "YOKU",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 69,
    title: "蒼のワルツ",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 70,
    title: "心海",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 71,
    title: "群青讃歌",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 72,
    title: "言の葉",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 73,
    title: "藍才",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 74,
    title: "退屈を再演しないで",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 75,
    title: "アヴァン",
    releaseDate: "2022-03-16",
    album: "廻人"
  },
  {
    id: 76,
    title: "lazy cat",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 77,
    title: "ティーンエイジブルー",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 78,
    title: "逃避行",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 79,
    title: "虎狼来",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 80,
    title: "ファイトソング",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 81,
    title: "花星",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 82,
    title: "冒険録",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 83,
    title: "Byme",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 84,
    title: "巻物語",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 85,
    title: "インソムニア",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 86,
    title: "Bubble feat. Uta",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 87,
    title: "スイートメモリー",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 88,
    title: "白雪",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 89,
    title: "Midnight Runway",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 90,
    title: "ぼくらの",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 91,
    title: "花嵐",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 92,
    title: "さよならエンドロール",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 93,
    title: "Under Blue",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 94,
    title: "夢に逢えたら",
    releaseDate: "2024-11-27",
    album: "Under Blue"
  },
  {
    id: 95,
    title: "Underdog",
    releaseDate: "2025-11-28",
    album: "-"
  }
];