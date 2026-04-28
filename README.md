# 👕 Open Source Shirts (OSS) v1.0

> **"Clothing is Code."**
> 
> 私たちは、ファッションをブラックボックスから解放します。
> `Open Source Shirts` は、Brooks Brothersのレギュラーカラーシャツをベースに、コミュニティ全員の知見を集約してアップデートし続ける、進化型のシャツ・レポジトリです。

---

## 💡 コンセプト
これまでの衣料品は、ブランドが決めたものを消費者が買うだけのものでした。
このプロジェクトでは、**形状（Pattern）**、**生地（Fabric）**、**仕様（Tech Pack）**をすべてGitHub上で公開し、誰でもプルリクエストを送れるようにします。

* **Base Architecture:** Brooks Brothers Regular Collar (The Gold Standard)
* **Infrastructure:** 85-Store (Distribution & Manufacturing)
* **Pricing:** 3,000 JPY ~ (Pay what you want)

---

## 🛠 プレビューと調整 (Shirt as Code)
本リポジトリでは、シャツの構成要素を `specs.json` で管理しています。

1.  **Fork** このリポジトリをフォークします。
2.  **Preview** [85-Store Previewer](https://85-store.com/preview) （※URLは仮）で、スライダーを動かして理想のシルエットを調整。
3.  **Commit** 調整された `specs.json` をコミット。
4.  **Pull Request** 「襟の長さを3mm伸ばして、よりクラシックにしたい」といった提案をPR。

### specs.json の例
```json
{
  "version": "1.0.0",
  "base": "Brooks_Brothers_RC",
  "measurements": {
    "neck_cm": 40.0,
    "chest_width_cm": 56.5,
    "cuff_width_cm": 9.5
  },
  "fabric": "85-Store_Standard_Oxford_White"
}
```

---

## 💰 価格決定メカニズム
85-Storeでは、**「製造原価の完全開示」**と**「自由価格制」**を採用しています。

* **最低価格 (Base Price): 3,000円**
    * これは、持続可能な製造と最低限の運営に必要なコストです。
* **コントリビューション (Contribution): 3,000円〜∞**
    * 3,000円を超える支払いは、次期バージョン（v2.0）の開発資金、またはリポジトリのメンテナーへの支援として充てられます。

---

## 🚀 参加方法 (How to Contribute)
1.  **Issueを立てる:** 「今の生地だとアイロンがけが大変」「もっとポケットを大きくしてほしい」などの改善案を投稿してください。
2.  **Discussionsに参加:** 85-StoreのDiscussionsタブで、次のシーズンの標準生地について議論しましょう。
3.  **PRを送る:** 実際に数値をいじった `specs.json` を提出してください。

---

## ⚖️ License
This project is licensed under the **Open Garment License (OGL)**.
（※型紙や仕様書の私的使用・改変・商用利用に関するライセンスをここに定義）

---

## 🏢 Maintainer
* **85-Store** (@85-Store) - *Distributing the future of clothing.*
