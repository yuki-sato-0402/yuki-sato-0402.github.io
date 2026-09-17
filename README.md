# yuki-sato-0402.github.io

> **Yuki Sato - Audio Software & Neural Audio Portfolio**  
> 「音楽 × 先端技術（音響信号処理 DSP・深層学習・オーディオプラグイン開発 C++/JUCE/RNBO）」を一貫したテーマとする制作ポートフォリオサイトです。

🌐 **Live Website**: [https://yuki-sato-0402.github.io/](https://yuki-sato-0402.github.io/)

---

## 📌 サイトの構成と特徴

採用担当者や技術面接官が**「10秒で凄さが伝わり、3分で技術の深さが分かる」**ことを目標に設計されています。

1. **Recruiter's Guide（採用担当者向けサマリー）**:
   - C++ / JUCE によるDAWプラグイン実装力（VST3 / AU / Standalone）
   - 最先端ニューラル音響モデル（RAVE, GANSynth, LSTM）のリアルタイム推論統合
   - 音響物理・信号処理（DSP）の数理アルゴリズム設計とハードウェア連携（Raspberry Pi Pico）
2. **インタラクティブ技術タグフィルター**:
   - `[ All ]` `[ Featured ]` `[ DSP ]` `[ JUCE ]` `[ C++ ]` `[ Deep Learning / AI ]` `[ RNBO ]` `[ Python ]` `[ Hardware ]`
   - ワンクリックで目的の技術領域に絞り込んで閲覧可能。
3. **Featured Projects (代表作4選)**:
   - [RAVE_for_MIDISynthesizer](https://github.com/yuki-sato-0402/RAVE_for_MIDISynthesizer)
   - [RNBO_SinusoidalResynthesis](https://github.com/yuki-sato-0402/RNBO_SinusoidalResynthesis)
   - [GANSynth_for_MIDISynthesizer](https://github.com/yuki-sato-0402/GANSynth_for_MIDISynthesizer)
   - [TradingFours_withLSTM](https://github.com/yuki-sato-0402/TradingFours_withLSTM)
4. **All Works (全16プロジェクトアーカイブ)**:
   - 「View all 16 projects →」から、これまでの全リポジトリと実験作を俯瞰。
5. **デモ動画モーダル**:
   - サイト内で離脱せず直接YouTubeデモ動画を視聴可能。

---

## 🛠️ ローカルでの起動・プレビュー方法

外部パッケージやビルドツールへの依存はなく、標準的な静的ファイル（HTML / CSS / JavaScript）のみで構築されています。

```bash
# Pythonの簡易サーバーを起動
python3 -m http.server 8000

# ブラウザでアクセス
open http://localhost:8000
```

---

## 🚀 GitHub Pages への公開手順

本リポジトリを GitHub へ Push した後：

1. GitHub リポジトリの **Settings** > **Pages** を開く。
2. **Build and deployment** の Source で **Deploy from a branch** を選択。
3. Branch を `main`、フォルダを `/ (root)` に設定して **Save**。
4. 数分後、`https://yuki-sato-0402.github.io/` にてポートフォリオが世界中に公開されます。
