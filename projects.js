const featuredProjects = [
  {
    id: "rave-synthesizer",
    title: "RAVE for MIDI Synthesizer",
    subtitle: "RAVE ニューラル MIDI シンセサイザー",
    subtitle_en: "RAVE Neural MIDI Synthesizer",
    tags: ["JUCE(C++)", "Machine Learning", "DSP"],
    github: "https://github.com/yuki-sato-0402/RAVE_for_MIDISynthesizer",
    youtube: "https://youtu.be/ORYQNKNKJjU",
    download: "https://github.com/yuki-sato-0402/RAVE_for_MIDISynthesizer/releases/tag/v1.0.0-beta",
    image: "https://github.com/user-attachments/assets/970bc822-9339-4915-863a-82c8aad51d12",
    format: "VST3 / AU / Standalone",
    badge: "Featured #1",
    whatIsIt: "IRCAMのニューラル音響モデル「RAVE (TorchScript)」をJUCEプラグインに組み込み、MIDIキーボードから演奏可能にしたシンセサイザー。",
    whatIsIt_en: "A standalone/VST3/AU synthesizer integrating IRCAM's neural audio model 'RAVE (TorchScript)' into JUCE, enabling real-time performance directly from a MIDI keyboard.",
    whySpecial: "従来のRAVEは外部マイク入力が必要でしたが、本プロジェクトではMIDI入力から内部発振器（Sine / Square）を駆動し、自律的に励起信号を生成することで単体MIDI音源化を実現しました。サイン波と矩形波を動的にブレンドすることで、モデル内部に潜在する多様な音響特徴を自在に引き出す狙いがあります。",
    whySpecial_en: "While standard RAVE models require live microphone input, this project generates its own internal excitation signals (Sine / Square oscillators) driven by incoming MIDI messages, making it an autonomous MIDI instrument. Dynamically blending sine and square waves allows players to stimulate and extract diverse acoustic latent features embedded within the neural model.",
    highlights: [
      "サイン波 × 矩形波オシレーターの動的ブレンド：励起信号の倍音を変化させ、RAVEモデルの多彩な音響特徴を励振・抽出",
      "最大4音ポリフォニック（和音）演奏 & 8次元の潜在変数（Latent Vector）をUIスライダーから操作可能",
      "aniraライブラリを活用したプラグイン統合と、実行時のモデル動的ロード（.ts切り替え）",
      "【現状の課題】推論負荷が高く、現状は軽量なv1モデルでないとCore Audioが止まってしまうリスクがあるため、さらなる高速化・負荷低減が課題"
    ],
    highlights_en: [
      "Dynamic Sine × Square oscillator blending: Modulating harmonics in excitation signals to stimulate and uncover rich acoustic features in RAVE",
      "Up to 4-voice polyphony & real-time control of an 8-dimensional latent vector via GUI sliders",
      "Plugin integration powered by the anira library, supporting dynamic model hot-swapping (.ts files) at runtime",
      "[Current Challenge] High inference load: currently requiring the lighter v1 architecture to prevent Core Audio dropouts, making further performance optimization an ongoing goal"
    ]
  },
  {
    id: "rnbo-sinusoidal",
    title: "RNBO Sinusoidal Resynthesis",
    subtitle: "リアルタイム ピーク追従型 正弦波再合成プラグイン",
    subtitle_en: "Real-time Peak-Tracking Sinusoidal Resynthesis Plugin",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_SinusoidalResynthesis",
    youtube: "https://youtu.be/aMNIJJ8orLw",
    download: "https://github.com/yuki-sato-0402/RNBO_SinusoidalResynthesis/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/9e236648-5970-4087-a645-6de2fe0ff68e",
    format: "VST3 / AU / Standalone",
    badge: "Featured #2",
    whatIsIt: "入力音声をリアルタイムにFFT解析し、振幅の大きい上位15本のピーク周波数成分を動的追従して、15本の独立正弦波で音響を加算合成（Additive Synthesis）するスペクトルエフェクト。",
    whatIsIt_en: "A spectral effect that performs real-time FFT analysis on incoming audio, dynamically tracking the 15 strongest spectral peaks to reconstruct sound using 15 independent sine oscillators via additive synthesis.",
    whySpecial: "Max Msp(RNBO) の gen~ でDSP数理アルゴリズムを構築し、C++エクスポートを経てJUCEプラグインへ昇華。グラフィックEQのように各ピークのゲインを直感的にスカルプトできます。また、実験としてドラムやノイズ（非周期信号）を入力したところ、通常の楽音とは異なる非常に面白い再合成サウンドが得られました。",
    whySpecial_en: "Engineered from mathematical DSP algorithms prototyped in Max/MSP (RNBO) gen~ and exported to C++ for JUCE integration. Users can sculpt individual peak gains intuitively like a graphic EQ. Interestingly, feeding non-periodic signals such as drums or noise yields fascinating, organic synthetic textures far beyond typical pitched sounds.",
    highlights: [
      "上位15本の支配的周波数をリアルタイムに動的トラッキングして加算合成",
      "マイクロトーナル対応：ピーク周波数を任意のN平均律（N-tone Equal Temperament）へ動的にスナップ",
      '非周期信号の実験：ドラムやノイズを入力することで、予測不能で有機的な音響テクスチャを創出（<a href="https://www.youtube.com/watch?v=t7Bpu4GDaww" target="_blank" rel="noopener noreferrer" style="color: var(--accent-warm, #8c7355); text-decoration: underline; font-weight: 500;" onclick="event.preventDefault(); openVideoModal(\'https://www.youtube.com/watch?v=t7Bpu4GDaww\', \'RNBO Sinusoidal Resynthesis (ドラム/ノイズ実験デモ)\');">デモ動画あり</a>）',
      "倍音構成のリアルタイム可視化スペクトラムUI"
    ],
    highlights_en: [
      "Real-time dynamic tracking and additive synthesis of top 15 dominant harmonic peaks",
      "Microtonal quantization: Dynamically snaps tracked frequencies to user-defined N-tone Equal Temperament (N-TET)",
      'Non-periodic signal experimentation: Injecting drums and noise produces unpredictable, organic acoustic textures (<a href="https://www.youtube.com/watch?v=t7Bpu4GDaww" target="_blank" rel="noopener noreferrer" style="color: var(--accent-warm, #8c7355); text-decoration: underline; font-weight: 500;" onclick="event.preventDefault(); openVideoModal(\'https://www.youtube.com/watch?v=t7Bpu4GDaww\', \'RNBO Sinusoidal Resynthesis (Drum/Noise Experiment Demo)\');">Demo video available</a>)',
      "Interactive spectrum visualizer displaying real-time harmonic distribution"
    ]
  },
  {
    id: "gansynth-synthesizer",
    title: "GANSynth for MIDI Synthesizer",
    subtitle: "ONNX × JUCE ハイブリッド ニューラル MIDI シンセサイザー",
    subtitle_en: "ONNX × JUCE Hybrid Neural MIDI Synthesizer",
    tags: ["JUCE(C++)", "Machine Learning", "DSP", "Python"],
    github: "https://github.com/yuki-sato-0402/GANSynth_for_MIDISynthesizer",
    youtube: "https://youtu.be/9UzeLMI8VBs",
    download: "https://github.com/yuki-sato-0402/GANSynth_for_MIDISynthesizer/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/46580627-8ba0-4043-9eba-1a44296c30ff",
    format: "VST3 / AU / Standalone",
    badge: "Featured #3",
    whatIsIt: "Google Magenta開発の「GANSynth」をTensorFlowからONNXへ変換し、JUCE/C++プラグイン上でGenerateボタンによりサンプルを生成・バッファへセットして演奏可能にしたニューラルMIDIシンセサイザー。",
    whatIsIt_en: "A neural MIDI synthesizer porting Google Magenta's 'GANSynth' from TensorFlow to ONNX, generating fresh audio samples on-demand and loading them into memory buffers for real-time keyboard playback.",
    whySpecial: "ONNX規格自体が複素数（Complex型）をサポートしていなかったため、逆FFT（iFFT）による時間波形復元をプラグイン側で行う必要がありました。そこで、分布マッピング（各Melビンのどの程度の重みがどのリニアビンに割り当てられるか）をPython側で事前に計算しておき、C++側で高速な行列積とiFFTを実行するハイブリッド設計で課題を克服しました。",
    whySpecial_en: "Because standard ONNX did not support complex numbers, time-domain waveform reconstruction via inverse FFT (iFFT) had to be handled inside the plugin. To solve this, the Mel-to-linear distribution matrix was precomputed in Python, enabling the C++ plugin to execute ultra-fast matrix multiplication and iFFT reconstruction in a hybrid architecture.",
    highlights: [
      "ONNXの複素数未対応の克服：MelからLinearへの分布マッピングを事前計算し、C++側でiFFTを行うハイブリッド波形復元",
      "負荷軽減のための補完設計：処理負荷を減らすため6半音ごとに推論を行い、その間はピッチシフトで補完する効率的なシステム設計",
      "TensorFlow → Freeze Graph → ONNX変換パイプラインの自作",
      "Generateボタン押下によるオンデマンドなサンプル生成とオーディオバッファ展開"
    ],
    highlights_en: [
      "Overcoming ONNX complex number limitations: Precomputing Mel-to-linear mapping matrices and performing iFFT inside C++",
      "Computational optimization: Inferring only every 6 semitones with pitch-shifting interpolation in between to minimize CPU load",
      "Custom export pipeline from TensorFlow freeze-graph to optimized ONNX format",
      "On-demand sample synthesis on 'Generate' button click with seamless audio buffer deployment"
    ]
  },
  {
    id: "trading-fours-lstm",
    title: "Trading Fours with LSTM",
    subtitle: "ジャズ対話型 メロディ予測・自動共創システム",
    subtitle_en: "Interactive Jazz Melody Prediction & Co-Creation System",
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/yuki-sato-0402/TradingFours_withLSTM",
    youtube: "https://youtu.be/k6nYuojO6Ow",
    image: "https://github.com/user-attachments/assets/002714f4-0090-4125-8676-333621eef59a",
    format: "Python App / DAW Sync",
    badge: "Featured #4",
    whatIsIt: "コード進行の「和声度数（ディグリー）」を条件付け情報として埋め込み、ジャズの即興演奏のようにコードに調和したメロディを予測・生成するLSTMモデル。",
    whatIsIt_en: "An LSTM neural network conditioned on harmonic degrees (chord scale degrees) to predict and improvise melodic lines in musical harmony with jazz chord progressions.",
    whySpecial: "ジャズの演奏スタイル「Trading Fours（4小節交代）」に着想を得て、DAWと同期して人間4小節 → AIが4小節即興応答するインタラクティブな演奏セッションループを構築しました。",
    whySpecial_en: "Inspired by the classic jazz performance format 'Trading Fours', the system synchronizes with a DAW in real-time, alternating 4-bar improvisations between a human musician and the AI in an interactive performance loop.",
    highlights: [
      "音楽理論（機能和声）の応用：絶対音高ではなくコード内での相対的度数をEmbeddingし音楽的文脈を学習",
      "DAWリアルタイム同期による人間とAIのインタラクティブなセッションモード（4小節交代演奏）",
      "Temperatureパラメータによる determinism と創造性の連続的コントロール",
      "【現状の課題】データセットを自作する必要があり、十分な学習データ量を確保することが難しいため、現状はまだ高い予測精度を発揮しきれていない点が課題"
    ],
    highlights_en: [
      "Music theory application: Embedding relative harmonic scale degrees rather than raw absolute pitches to capture functional jazz context",
      "Real-time DAW synchronization enabling an interactive human-AI jam session (4 bars alternating)",
      "Continuous control over predictability vs. creativity via sampling temperature adjustment",
      "[Current Challenge] Dataset limitation: handcrafted training data volume is currently modest, making higher prediction accuracy an active area for enhancement"
    ]
  }
];

const otherProjects = [
  {
    id: "constant-q-filterbank",
    title: "RNBO Real-time Constant-Q Filterbank",
    subtitle: "88鍵対応 リアルタイム・ポリフォニック基本周波数(F0)検出",
    subtitle_en: "Real-time 88-Key Polyphonic Fundamental Frequency (F0) Detector",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_Real-time_Constant-Q_Filterbank",
    youtube: "https://youtu.be/WEppLL6FAo8",
    download: "https://github.com/yuki-sato-0402/RNBO_Real-time_Constant-Q_Filterbank/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/50fd372b-4811-49fc-be41-fe5e8bf1d8b8",
    format: "VST3 / AU / Standalone",
    summary: "ピアノ全88鍵（A0〜C8）に対応したConstant-QフィルタバンクをMax Msp(RNBO) gen~（Goertzel型相関フィルタ）で実装。低域から高域まで音楽的に自然な解像度でエネルギーを検出。基音と倍音を分離する対策も仕掛けているものの、ポリフォニック検出においては各ピッチの基音と倍音を正確に識別するのが難しく、現在も精度向上を追求している課題作です。",
    summary_en: "Implemented a Constant-Q filterbank covering all 88 piano keys (A0–C8) using Goertzel-style correlation filters in Max/MSP (RNBO) gen~. Analyzes spectral energy with log-spaced, musically intuitive resolution. While baseline harmonic separation is implemented, precisely isolating fundamentals from overlapping overtones in polyphonic material remains a challenging ongoing research topic."
  },
  {
    id: "juce-pico-bridge",
    title: "JUCE Pico Bridge",
    subtitle: "JUCE プラグイン × Raspberry Pi Pico 双方向SysEx通信",
    subtitle_en: "JUCE Plugin × Raspberry Pi Pico Bidirectional SysEx Bridge",
    tags: ["JUCE(C++)", "Hardware"],
    github: "https://github.com/yuki-sato-0402/JUCE_Pico_Bridge",
    youtube: "https://youtu.be/knff6aJJ__c",
    image: "https://github.com/user-attachments/assets/f8623ca4-c7dc-4664-b96a-895a89e069d7",
    format: "C++ / Hardware Controller",
    summary: "JUCE製プラグインのパラメータ名・現在値文字列・範囲情報をSysExでRaspberry Pi Picoへ送信し、実機ノブとプラグインUIを双方向リアルタイム同期。ハードウェアとDAWの融合を実現。",
    summary_en: "Transmits plugin parameter names, formatted value strings, and ranges to a Raspberry Pi Pico via MIDI SysEx, achieving two-way real-time synchronization between physical hardware knobs and the plugin GUI."
  },
  {
    id: "rnbo-fourier-expansion",
    title: "RNBO Fourier Expansion Synth",
    subtitle: "矩形波・三角波・ノコギリ波のフーリエ級数展開シンセサイザー",
    subtitle_en: "Fourier Series Expansion Synthesizer (Square, Triangle, Sawtooth)",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_FourierSeriesExpansionSynthesizer",
    youtube: "https://youtu.be/pF7NdjODk2U",
    download: "https://github.com/yuki-sato-0402/RNBO_FourierSeriesExpansionSynthesizer/releases/tag/v1.0.1",
    image: "https://github.com/user-attachments/assets/d86b4108-d3ca-4d50-aa24-77cbcaf8cde5",
    format: "VST3 / AU / Standalone",
    summary: "矩形波・三角波・ノコギリ波のフーリエ級数展開に基づき、合成に用いる正弦波の項数を連続可変。正負の半波でパラメータを独立制御し、独自の非対称波形と倍音を創出。",
    summary_en: "Synthesizes square, triangle, and sawtooth waves based on their mathematical Fourier series expansions with continuously variable harmonic terms. Supports independent control of positive and negative half-cycles for asymmetric timbre creation."
  },
  {
    id: "juce-metric-tap",
    title: "JUCE MetricTap App",
    subtitle: "変拍子・メトリックモジュレーション DAWステップ入力ツール",
    subtitle_en: "Polyrhythmic & Metric Modulation DAW Step Input Tool",
    tags: ["JUCE(C++)"],
    github: "https://github.com/yuki-sato-0402/JUCE_MetricTap_app",
    youtube: "https://youtu.be/oC1avGWmFBY",
    download: "https://github.com/yuki-sato-0402/JUCE_MetricTap_app/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/6cfdbf88-8dbc-4be4-b5bb-69644283e416",
    format: "Standalone Application",
    summary: "現代音楽やプログレッシブ音楽で用いられるメトリック・モジュレーション（比率リズム）をDAWへ直感的にステップ入力できるMIDIリズムジェネレーター。",
    summary_en: "An intuitive MIDI rhythm utility for calculating and step-sequencing metric modulations (proportional polyrhythms) commonly used in contemporary classical and progressive music into DAWs."
  },
  {
    id: "rnbo-comb-grain",
    title: "RNBO Comb Grain",
    subtitle: "グラニュラー合成 × フィードバックディレイ ハイブリッド音響生成",
    subtitle_en: "Granular Synthesis × Feedback Delay Line Hybrid Processor",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_CombGrain",
    youtube: "https://youtu.be/6N8od3bVpZA",
    download: "https://github.com/yuki-sato-0402/RNBO_CombGrain/releases/tag/v1.0.1",
    image: "https://github.com/user-attachments/assets/91930cce-f179-4618-b5ac-eff9e88445af",
    format: "VST3 / AU / Standalone",
    summary: "細分化されたグレインをリングバッファとフィードバックディレイラインへ通過させ、メタリックな共鳴や複雑に揺らめくアンビエント音響テクスチャをリアルタイム生成。",
    summary_en: "Streams fragmented audio grains through circular buffers and feedback delay lines, generating shimmering metallic resonances and complex ambient soundscapes in real time."
  },
  {
    id: "rnbo-asymmetric-overdrive",
    title: "RNBO Asymmetric Overdrive",
    subtitle: "磁気ヒステリシスとWavefoldingを備えた非対称オーバードライブ",
    subtitle_en: "Asymmetric Overdrive with Magnetic Hysteresis & Wavefolding",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_AsymmetricOverdrive",
    youtube: "https://youtu.be/4reykwLRvfs",
    download: "https://github.com/yuki-sato-0402/RNBO_AsymmetricOverdrive/releases/tag/v1.0.1",
    image: "https://github.com/user-attachments/assets/d727217b-1541-4b56-9b4c-9379fdf80ad6",
    format: "VST3 / AU / Standalone",
    summary: "tanh~/atan~による非対称クリッピング、閾値超過成分を折り返すWavefolding、信号の上昇下降に応じたフィードバック係数の動的変化を組み込んだ有機的サチュレーション。",
    summary_en: "Features asymmetric soft-clipping via tanh~/atan~, threshold wavefolding, and dynamic feedback coefficient alteration based on signal slope direction for organic, analog-like saturation."
  },
  {
    id: "juce-ringmod-sidechain",
    title: "JUCE RingMod Sidechain Plus",
    subtitle: "サイドチェーン入力＆フィードバックフィルタ搭載リングモジュレーター",
    subtitle_en: "Ring Modulator with Sidechain Input & Filtered Feedback Loop",
    tags: ["JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/JUCE_RingModSidechain_plus",
    youtube: "https://youtu.be/vp6g_kOnx8Y",
    download: "https://github.com/yuki-sato-0402/JUCE_RingModSidechain_plus/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/3195d5af-96ba-4db5-9a66-fdd2502d9490",
    format: "VST3 / AU / Standalone",
    summary: "外部サイドチェーントラック信号と入力信号の乗算に加え、クリッピング振幅制御や1ポールフィルタのフィードバック係数を調整可能にした実験的リングモジュレーションエフェクト。",
    summary_en: "Multiplies audio with an external sidechain track while offering clipping ceiling control and a 1-pole low-pass feedback filter loop for creative and experimental modulation textures."
  },
  {
    id: "rnbo-schroeder-reverb",
    title: "RNBO Schroeder Reverb",
    subtitle: "歴史的音響理論に基づくシュレーダー・リバーブ・プラグイン",
    subtitle_en: "Schroeder Reverberator Based on Historical Acoustics Theory",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_SchroederReverb",
    youtube: "https://youtu.be/FGrxxtUx-4M",
    download: "https://github.com/yuki-sato-0402/RNBO_SchroederReverb/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/6f1dd2cc-c865-4232-b9e6-616ebaf1326f",
    format: "VST3 / AU / Standalone",
    summary: "4基の並列コムフィルタと2基の直列オールパスフィルタからなる伝統的リバーブアルゴリズムを、Max Msp(RNBO) の gen~ で忠実に再構築。初期反射と密度の高い拡散音響をシミュレート。",
    summary_en: "A faithful gen~ implementation in Max/MSP (RNBO) of Manfred Schroeder’s landmark reverberator architecture, combining 4 parallel feedback comb filters with 2 series all-pass filters for dense diffusion."
  },
  {
    id: "rnbo-fft-modulation",
    title: "RNBO FFT Modulation Filter",
    subtitle: "スペクトル領域で窓関数を変調するリアルタイムFFTフィルター",
    subtitle_en: "Real-time Spectral Window Modulation Filter via FFT",
    tags: ["Max Msp(RNBO)", "JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/RNBO_FFT_ModulationFilter",
    youtube: "https://youtube.com/shorts/zf1GzuQChmU",
    download: "https://github.com/yuki-sato-0402/RNBO_FFT_ModulationFilter/releases/tag/v1.0.0",
    image: "https://github.com/user-attachments/assets/f92c8238-1696-46d4-83ca-5d71eb8bde5c",
    format: "VST3 / AU / Standalone",
    summary: "FFTの1フレーム（1024サンプル）に対応する周波数窓（86Hz）を三角波やノコギリ波でスペクトル乗算・変調。ホワイトノイズのような比較的全帯域にエネルギーがある信号を入力すると効果的です。",
    summary_en: "Modulates and multiplies frequency bin windows (approx. 86Hz bins at 1024-sample FFT frames) with triangle and sawtooth waveforms in the frequency domain, excelling at sculpting broad-spectrum noise sources."
  },
  {
    id: "dcgan-synthesizer",
    title: "DCGAN Synthesizer",
    subtitle: "GM音源を学習素材とするDCGANベースの音響生成システム",
    subtitle_en: "DCGAN-Based Sound Generator Trained on General MIDI Instruments",
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/yuki-sato-0402/DCGAN_Synthesizer",
    youtube: "https://youtube.com/shorts/72vGfT8hXHk",
    image: "https://github.com/user-attachments/assets/dcc74c1a-2c92-4906-9de2-a45b780e1364",
    format: "PyTorch / CLI",
    summary: "General MIDI音源からSTFT位相差表現およびメルスペクトログラムを抽出し、敵対的生成ネットワーク（DCGAN）によって潜在ベクトルから直接音響スペクトログラムを合成・波形復元。",
    summary_en: "Extracts instantaneous STFT phase representations and Mel-spectrograms from General MIDI audio data, using a Deep Convolutional GAN to synthesize novel spectrograms and reconstruct audible waveforms."
  },
  {
    id: "cnn-melody-classifier",
    title: "CNN Melody Classifier",
    subtitle: "単音メロディ音声を88音高クラスへ自動分類・MIDI採譜するCNN",
    subtitle_en: "Audio Pitch Classifier & Automatic MIDI Transcriber for 88 Keys",
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/yuki-sato-0402/CNN_Melody_Classifier",
    youtube: null,
    colab: "https://colab.research.google.com/github/yuki-sato-0402/CNN_Melody_Classifier/blob/main/88midiClassification.ipynb",
    image: "https://github.com/user-attachments/assets/cab47308-7033-4dbc-a25b-cdf88b3e16ac",
    format: "Colab / PyTorch",
    summary: "SoundFontとFluidSynthを用い、サックスだけでなくGM音源の様々な音色で訓練用音声を自動合成。単音メロディ音声の音高を88鍵（MIDI 21〜108）へフレーム単位で推論分類し、MIDIデータへ自動採譜・変換。",
    summary_en: "Automatically synthesizes multi-instrument training data using SoundFonts and FluidSynth. Predicts monophonic pitch into 88 discrete key classes (MIDI 21–108) per time frame to automatically transcribe audio into MIDI."
  },
  {
    id: "juce-audioprocessorgraph",
    title: "JUCE AudioProcessorGraph Test",
    subtitle: "D&Dでエフェクト順を動的再構成できるモジュラーラック",
    subtitle_en: "Modular Audio Processing Rack with Drag & Drop Dynamic Routing",
    tags: ["JUCE(C++)", "DSP"],
    github: "https://github.com/yuki-sato-0402/JUCE_AudioProcessorGraph_Test",
    youtube: "https://youtu.be/x_wckmZKYtE",
    image: "https://github.com/user-attachments/assets/dfc0973a-52e4-422d-8632-7ecf138f19c3",
    format: "JUCE App",
    summary: "JUCEのAudioProcessorGraphを活用し、FIRフィルタ、ディレイ、リバーブ、コンプレッサーのDSPスロットをドラッグ＆ドロップで自在に並び替え・ルーティング可能な柔軟なアーキテクチャ。",
    summary_en: "Leverages JUCE’s AudioProcessorGraph to build a flexible modular rack where FIR filters, delays, reverbs, and compressors can be rearranged and rerouted dynamically via intuitive drag-and-drop."
  }
];

// All 16 projects combined
const allProjects = [...featuredProjects, ...otherProjects];
