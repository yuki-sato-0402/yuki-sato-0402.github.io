const featuredProjects = [
  {
    id: "rave-synthesizer",
    title: "RAVE for MIDI Synthesizer",
    subtitle: "リアルタイム RAVE ニューラル MIDI シンセサイザー",
    category: ["featured", "juce", "cpp", "ai", "dsp"],
    tags: ["JUCE", "C++", "DSP", "Deep Learning", "TorchScript", "anira"],
    github: "https://github.com/yuki-sato-0402/RAVE_for_MIDISynthesizer",
    youtube: "https://youtu.be/ORYQNKNKJjU",
    image: "https://github.com/user-attachments/assets/970bc822-9339-4915-863a-82c8aad51d12",
    format: "VST3 / AU / Standalone",
    badge: "Featured #1",
    whatIsIt: "IRCAMの高速ニューラル音響モデル「RAVE (TorchScript)」をJUCEプラグインに組み込み、MIDIキーボードから超低遅延で演奏可能にした次世代シンセサイザー。",
    whySpecial: "従来のRAVEは外部マイク入力が必要でしたが、本プロジェクトではMIDI入力から内部発振器（Sine / Square）を駆動し、倍音豊かな励起信号を自律生成することで単体MIDI音源としての実用演奏を可能にしました。",
    highlights: [
      "DAWのオーディオスレッドを阻害しない anira ライブラリを用いた超低遅延ニューラル推論",
      "最大4音ポリフォニック（和音）演奏への対応",
      "8次元の潜在変数（Latent Vector）のスケール/バイアスをUIスライダーでリアルタイムモーフィング",
      "実行時にカスタムの学習済みモデル（.ts）を動的ロード・切り替え可能"
    ]
  },
  {
    id: "rnbo-sinusoidal",
    title: "RNBO Sinusoidal Resynthesis",
    subtitle: "リアルタイム ピーク追従型 正弦波再合成プラグイン",
    category: ["featured", "rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "FFT", "Additive Synth"],
    github: "https://github.com/yuki-sato-0402/RNBO_SinusoidalResynthesis",
    youtube: "https://youtu.be/aMNIJJ8orLw",
    image: "https://github.com/user-attachments/assets/9e236648-5970-4087-a645-6de2fe0ff68e",
    format: "VST3 / AU / Standalone",
    badge: "Featured #2",
    whatIsIt: "入力音声をリアルタイムにFFT解析し、振幅の大きい上位15本のピーク周波数成分を動的追従して、15本の独立正弦波で音響を加算合成（Additive Synthesis）するスペクトルエフェクト。",
    whySpecial: "Max/MSP RNBOの `gen~` でDSP数理アルゴリズムを構築し、C++エクスポートを経てJUCEプラグインへ昇華。グラフィックEQのように各ピークのゲインを直感的にスカルプトできます。",
    highlights: [
      "上位15本の支配的周波数をリアルタイムに動的トラッキングして加算合成",
      "マイクロトーナル対応：ピーク周波数を任意のN平均律（N-tone Equal Temperament）へ動的にスナップ",
      "JUCE AudioProcessorValueTreeState による完全なDAWパラメータオートメーション",
      "倍音構成のリアルタイム可視化スペクトラムUI"
    ]
  },
  {
    id: "gansynth-synthesizer",
    title: "GANSynth for MIDI Synthesizer",
    subtitle: "ONNX × JUCE ハイブリッド ニューラル MIDI シンセサイザー",
    category: ["featured", "juce", "cpp", "ai", "dsp"],
    tags: ["JUCE", "C++", "DSP", "ONNX Runtime", "TensorFlow", "Python"],
    github: "https://github.com/yuki-sato-0402/GANSynth_for_MIDISynthesizer",
    youtube: "https://youtu.be/9UzeLMI8VBs",
    image: "https://github.com/user-attachments/assets/46580627-8ba0-4043-9eba-1a44296c30ff",
    format: "VST3 / AU / Standalone",
    badge: "Featured #3",
    whatIsIt: "Google Magenta開発の「GANSynth」を、TensorFlowからONNXへ変換し、JUCE/C++プラグインとしてリアルタイム駆動させたニューラルMIDIシンセサイザー。",
    whySpecial: "ONNX変換時に課題となる「複素数演算・逆FFT（iFFT）の未対応」を解決するため、Mel-to-Linear変換行列（1024×1025）をPythonで事前計算してCSV化し、C++側で高速行列演算と時間領域再構成を行うハイブリッド設計を実現。",
    highlights: [
      "深層学習フレームワークの制約をDSP数学と事前計算の工夫で乗り越えたアーキテクチャ",
      "TensorFlow → Freeze Graph → ONNX変換パイプラインの自作",
      "anira / ONNX Runtime C++ API を活用したネイティブプラグイン統合",
      "MIDIノート番号・音高に応じた潜在空間からの直接音響スペクトログラム生成"
    ]
  },
  {
    id: "trading-fours-lstm",
    title: "Trading Fours with LSTM",
    subtitle: "ジャズ即興対話型 メロディ予測・自動共創システム",
    category: ["featured", "python", "ai"],
    tags: ["Python", "PyTorch", "LSTM", "Music AI", "MIDI / DAW", "Music Theory"],
    github: "https://github.com/yuki-sato-0402/TradingFours_withLSTM",
    youtube: "https://youtu.be/k6nYuojO6Ow",
    image: "https://github.com/user-attachments/assets/002714f4-0090-4125-8676-333621eef59a",
    format: "Python App / DAW Sync",
    badge: "Featured #4",
    whatIsIt: "コード進行の「和声度数（ディグリー）」を条件付け情報として埋め込み、ジャズの即興演奏のようにコードに調和したメロディを予測・生成するLSTMモデル。",
    whySpecial: "ジャズの演奏スタイル「Trading Fours（4小節交代）」に着想を得て、DAWと同期して人間4小節 → AIが4小節即興応答するインタラクティブな演奏セッションループを構築しました。",
    highlights: [
      "音楽理論（機能和声）の応用：絶対音高ではなくコード内での相対的度数をEmbeddingし音楽的文脈を学習",
      "DAWリアルタイム同期による人間とAIのインタラクティブなセッションモード",
      "Temperatureパラメータによる determinism と創造性の連続的コントロール",
      "MusicXMLからのジャズスタンダード楽曲解析・データセット自作"
    ]
  }
];

const otherProjects = [
  {
    id: "constant-q-filterbank",
    title: "RNBO Real-time Constant-Q Filterbank",
    subtitle: "88鍵対応 リアルタイム・ポリフォニック基本周波数(F0)検出",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "Pitch Detection"],
    github: "https://github.com/yuki-sato-0402/RNBO_Real-time_Constant-Q_Filterbank",
    youtube: "https://youtu.be/WEppLL6FAo8",
    image: "https://github.com/user-attachments/assets/50fd372b-4811-49fc-be41-fe5e8bf1d8b8",
    format: "VST3 / AU / Standalone",
    summary: "ピアノ全88鍵（A0〜C8）に対応したConstant-QフィルタバンクをRNBO `gen~`（Goertzel型相関フィルタ）で実装。低域から高域まで音楽的に自然な解像度で和音・単音の基本周波数をリアルタイム検出。"
  },
  {
    id: "juce-pico-bridge",
    title: "JUCE Pico Bridge",
    subtitle: "JUCE プラグイン × Raspberry Pi Pico 双方向SysEx通信",
    category: ["juce", "cpp", "hardware"],
    tags: ["JUCE", "C++", "Raspberry Pi Pico", "Hardware", "SysEx"],
    github: "https://github.com/yuki-sato-0402/JUCE_Pico_Bridge",
    youtube: "https://youtu.be/knff6aJJ__c",
    image: "https://github.com/user-attachments/assets/f8623ca4-c7dc-4664-b96a-895a89e069d7",
    format: "C++ / Hardware Controller",
    summary: "JUCE製プラグインのパラメータ名・現在値文字列・範囲情報をSysExでRaspberry Pi Picoへ送信し、実機ノブとプラグインUIを双方向リアルタイム同期。ハードウェアとDAWの融合を実現。"
  },
  {
    id: "juce-audioprocessorgraph",
    title: "JUCE AudioProcessorGraph Test",
    subtitle: "D&Dでエフェクト順を動的再構成できるモジュラーラック",
    category: ["juce", "cpp", "dsp"],
    tags: ["JUCE", "C++", "DSP", "Architecture"],
    github: "https://github.com/yuki-sato-0402/JUCE_AudioProcessorGraph_Test",
    youtube: "https://youtu.be/x_wckmZKYtE",
    image: "https://github.com/user-attachments/assets/dfc0973a-52e4-422d-8632-7ecf138f19c3",
    format: "JUCE App",
    summary: "JUCEの`AudioProcessorGraph`を活用し、FIRフィルタ、ディレイ、リバーブ、コンプレッサーのDSPスロットをドラッグ＆ドロップで自在に並び替え・ルーティング可能な柔軟なアーキテクチャ。"
  },
  {
    id: "rnbo-fourier-expansion",
    title: "RNBO Fourier Expansion Synth",
    subtitle: "フーリエ級数展開の次数・非対称性を可変制御する加算合成シンセ",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "Additive Synth"],
    github: "https://github.com/yuki-sato-0402/RNBO_FourierSeriesExpansionSynthesizer",
    youtube: "https://youtu.be/pF7NdjODk2U",
    image: "https://github.com/user-attachments/assets/d86b4108-d3ca-4d50-aa24-77cbcaf8cde5",
    format: "VST3 / AU / Standalone",
    summary: "矩形波・三角波・ノコギリ波のフーリエ級数近似式に基づき、合成に用いる正弦波の項数を連続可変。正負の半波でパラメータを独立制御し、独自の非対称波形と倍音を創出。"
  },
  {
    id: "juce-ringmod-sidechain",
    title: "JUCE RingMod Sidechain Plus",
    subtitle: "サイドチェーン入力＆フィードバックフィルタ搭載リングモジュレーター",
    category: ["juce", "cpp", "dsp"],
    tags: ["JUCE", "C++", "DSP", "Audio Plugin"],
    github: "https://github.com/yuki-sato-0402/JUCE_RingModSidechain_plus",
    youtube: "https://youtu.be/vp6g_kOnx8Y",
    image: "https://github.com/user-attachments/assets/3195d5af-96ba-4db5-9a66-fdd2502d9490",
    format: "VST3 / AU / Standalone",
    summary: "外部サイドチェーントラック信号と入力信号の乗算に加え、クリッピング振幅制御や1ポールフィルタのフィードバック係数を調整可能にした実験的リングモジュレーションエフェクト。"
  },
  {
    id: "rnbo-comb-grain",
    title: "RNBO Comb Grain",
    subtitle: "グラニュラー合成 × フィードバックディレイ ハイブリッド音響生成",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "Granular Synth"],
    github: "https://github.com/yuki-sato-0402/RNBO_CombGrain",
    youtube: "https://youtu.be/6N8od3bVpZA",
    image: "https://github.com/user-attachments/assets/91930cce-f179-4618-b5ac-eff9e88445af",
    format: "VST3 / AU / Standalone",
    summary: "細分化されたグレインをリングバッファとフィードバックディレイラインへ通過させ、メタリックな共鳴や複雑に揺らめくアンビエント音響テクスチャをリアルタイム生成。"
  },
  {
    id: "rnbo-asymmetric-overdrive",
    title: "RNBO Asymmetric Overdrive",
    subtitle: "磁気ヒステリシスとWavefoldingを備えた非対称オーバードライブ",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "Analog Modeling"],
    github: "https://github.com/yuki-sato-0402/RNBO_AsymmetricOverdrive",
    youtube: "https://youtu.be/4reykwLRvfs",
    image: "https://github.com/user-attachments/assets/d727217b-1541-4b56-9b4c-9379fdf80ad6",
    format: "VST3 / AU / Standalone",
    summary: "tanh~/atan~による非対称クリッピング、閾値超過成分を折り返すWavefolding、磁気テープ特有の方向依存記憶（ヒステリシス）を組み込んだ有機的サチュレーション。"
  },
  {
    id: "rnbo-schroeder-reverb",
    title: "RNBO Schroeder Reverb",
    subtitle: "歴史的音響理論に基づくシュレーダー・リバーブ・プラグイン",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "Acoustics"],
    github: "https://github.com/yuki-sato-0402/RNBO_SchroederReverb",
    youtube: "https://youtu.be/FGrxxtUx-4M",
    image: "https://github.com/user-attachments/assets/86647976-46d6-43e5-8b9b-91dd0a3a5f7f",
    format: "VST3 / AU / Standalone",
    summary: "4基の並列コムフィルタと2基の直列オールパスフィルタからなる伝統的リバーブアルゴリズムをRNBO/JUCEで忠実に再構築。初期反射と密度の高い拡散音響をシミュレート。"
  },
  {
    id: "rnbo-fft-modulation",
    title: "RNBO FFT Modulation Filter",
    subtitle: "スペクトル領域で窓関数を変調するリアルタイムFFTフィルター",
    category: ["rnbo", "juce", "cpp", "dsp"],
    tags: ["RNBO", "JUCE", "C++", "DSP", "FFT"],
    github: "https://github.com/yuki-sato-0402/RNBO_FFT_ModulationFilter",
    youtube: "https://youtube.com/shorts/zf1GzuQChmU",
    image: "https://github.com/user-attachments/assets/f92c8238-1696-46d4-83ca-5d71eb8bde5c",
    format: "VST3 / AU / Standalone",
    summary: "FFTの1フレーム（1024サンプル）に対応する周波数窓（86Hz）を三角波やノコギリ波でスペクトル乗算・変調。周波数軸上での形状スカルプトによる前衛的な倍音変調。"
  },
  {
    id: "juce-metric-tap",
    title: "JUCE MetricTap App",
    subtitle: "変拍子・メトリックモジュレーション DAWステップ入力ツール",
    category: ["juce", "cpp"],
    tags: ["JUCE", "C++", "MIDI", "Rhythm Theory"],
    github: "https://github.com/yuki-sato-0402/JUCE_MetricTap_app",
    youtube: "https://youtu.be/oC1avGWmFBY",
    image: "https://github.com/user-attachments/assets/6cfdbf88-8dbc-4be4-b5bb-69644283e416",
    format: "Standalone Application",
    summary: "現代音楽やプログレッシブ音楽で用いられるメトリック・モジュレーション（比率リズム）をDAWへ直感的にステップ入力できるMIDIリズムジェネレーター。"
  },
  {
    id: "dcgan-synthesizer",
    title: "DCGAN Synthesizer",
    subtitle: "GM音源を学習素材とするDCGANベースの音響生成システム",
    category: ["python", "ai"],
    tags: ["Python", "PyTorch", "GAN", "STFT / Mel", "Deep Learning"],
    github: "https://github.com/yuki-sato-0402/DCGAN_Synthesizer",
    youtube: "https://youtube.com/shorts/72vGfT8hXHk",
    image: "https://github.com/user-attachments/assets/dcc74c1a-2c92-4906-9de2-a45b780e1364",
    format: "PyTorch / CLI",
    summary: "General MIDI音源からSTFT位相差表現およびメルスペクトログラムを抽出し、敵対的生成ネットワーク（DCGAN）によって潜在ベクトルから直接音響スペクトログラムを合成・波形復元。"
  },
  {
    id: "cnn-melody-classifier",
    title: "CNN Melody Classifier",
    subtitle: "単音メロディ音声を88音高クラスへ自動分類・MIDI採譜するCNN",
    category: ["python", "ai"],
    tags: ["Python", "PyTorch", "CNN", "Audio Analysis", "MIR"],
    github: "https://github.com/yuki-sato-0402/CNN_Melody_Classifier",
    youtube: null,
    colab: "https://colab.research.google.com/github/yuki-sato-0402/CNN_Melody_Classifier/blob/main/88midiClassification.ipynb",
    image: "https://github.com/user-attachments/assets/cab47308-7033-4dbc-a25b-cdf88b3e16ac",
    format: "Colab / PyTorch",
    summary: "SoundFontとFluidSynthで訓練用サックス音声を自動合成。単音メロディ音声の音高を88鍵（MIDI 21〜108）へフレーム単位で推論分類し、MIDIデータへ自動採譜・変換。"
  }
];

// All 16 projects combined
const allProjects = [...featuredProjects, ...otherProjects];
