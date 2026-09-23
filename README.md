# yuki-sato-0402.github.io

> **Yuki Sato Portfolio - Music × Technology**  
> 音楽大学出身の視点と音響信号処理（DSP）・機械学習・プラグイン開発（C++ / JUCE / RNBO）の技術を融合させた、個人開発オーディオソフトウェアの就活用ポートフォリオサイトです。

🌐 **Live Website**: [https://yuki-sato-0402.github.io/](https://yuki-sato-0402.github.io/)

---

## 📌 サイトの構成と特徴

1. **日本語 / 英語のバイリンガル対応（Bilingual Switcher）**:
   - ヘッダー右上の `JP / EN` トグルにより、ページ全体を瞬時に言語切り替え可能。
   - プロジェクトの概要、実装のポイントや直面した課題、技術スタック、自己紹介まで全編の日英翻訳を完備。
   - 選択言語は `localStorage` に保持されます。

2. **クリーン＆カジュアルなUIデザイン**:
   - 雑貨店やアパレルブランドを思わせる、オフホワイト基調のミニマルで余白を意識したデザイン。
   - テック感を前面に出しすぎず、読みやすさと心地よさを重視したタイポグラフィとレイアウト。

3. **Recruiter's Guide（私が作れるもの・技術的強み）**:
   - **Max/MSP(gen~) → C++ プラグイン開発**: 音声を止めることなく即座に音に反映されるgen~環境で高速に試行錯誤し、RNBOによりC++エクスポートしてプラグイン化する開発フロー。
   - **数理モデルの着想 & 音楽的直感**: 数式原理を独自のアイデアとしてシステムに応用しつつ、音楽専攻出身としての直感的な音の心地よさや音楽的必然性を大切にする姿勢。
   - **音響合成・解析への機械学習の応用**: 従来のDSP処理と機械学習の役割を整理し、入力に対して非線形な出力が得られる創発的表現や高精度な解析が求められる領域にフォーカス。

4. **インタラクティブ技術タグフィルター**:
   - `[ All Projects ]` `[ ⭐️ Featured ]` `[ DSP ]` `[ JUCE(C++) ]` `[ Machine Learning ]` `[ Max Msp(RNBO) ]` `[ Python ]` `[ Hardware ]`
   - 各プロジェクトに付与された技術タグをクリックすることで、該当する作品をリアルタイムに絞り込み可能。

5. **Featured Projects (代表作4選)**:
   - [RAVE for MIDI Synthesizer](https://github.com/yuki-sato-0402/RAVE_for_MIDISynthesizer) — IRCAMのニューラル音響モデル「RAVE」を内蔵発振器で駆動し単体MIDI音源化（anira統合 / VST3 / AU）
   - [RNBO Sinusoidal Resynthesis](https://github.com/yuki-sato-0402/RNBO_SinusoidalResynthesis) — 入力音声の上位15ピークをリアルタイム追従し正弦波加算合成（N平均律スナップ / ノイズ実験デモあり）
   - [GANSynth for MIDI Synthesizer](https://github.com/yuki-sato-0402/GANSynth_for_MIDISynthesizer) — TensorFlowモデルをONNX変換し、Mel-to-Linear逆変換をハイブリッド実装したオンデマンド音響生成シンセ
   - [Trading Fours with LSTM](https://github.com/yuki-sato-0402/TradingFours_withLSTM) — 和声度数を埋め込み、DAWと4小節交代でジャズ即興セッションを行うLSTMモデル

6. **All Works (全16プロジェクト アーカイブ)**:
   - 88鍵Constant-Qフィルタバンク、Raspberry Pi Pico連携SysExコントローラー、フーリエ級数展開シンセ、変拍子メトリックモジュレーション入力ツール、非対称オーバードライブ、リングモジュレーター、シュレーダーリバーブ、CNNピッチ分類器など、多彩な16作品を網羅。

7. **インライン動画モーダル**:
   - 外部サイトへ離脱することなく、サイト内でYouTubeの動作デモや数理実装動画（FIRフィルタ、マクローリン展開）を直接視聴可能。

8. **Contact & Links**:
   - メール（`yuki.sato.2001@gmail.com`）、Linktree、GitHub Profileへのダイレクトリンクを設置。

---

## 📂 ディレクトリ構成

- `index.html` — セマンティックなHTMLマークアップと各セクション構造
- `style.css` — オフホワイト基調のクリーン・ライフスタイルUIスタイルシート
- `projects.js` — 全16プロジェクトのメタデータ（日本語 / 英語データ完全対応）
- `translations.js` — サイト全体の文言を管理する日英国際化辞書
- `script.js` — 言語切り替え、技術タグフィルター、YouTube動画モーダル等の動的制御
