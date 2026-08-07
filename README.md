制作開始 2026/7/27 ～完成 2026/8/3 職業訓練 EC サイト制作
※本サイトは架空のアパレルブランドのECサイトを想定して制作したWebデザイン作品です。掲載されている情報はフィクションです。
制作目的
架空のアパレルブランド「latte.」のECサイトとして、ブランドの世界観や商品の魅力を伝え、ブランドへの興味や共感を深めてもらうことを目的に制作しました。ナチュラルでやさしい雰囲気が伝わるデザインと、PC・スマートフォンのどちらでも快適に閲覧できるレスポンシブデザインを意識しています。

使用技術（HTML / CSS / JavaScript / jQuery / Lightbox/slick）

工夫した点
　ブランドコンセプトである「ラテのように、毎日に少しだけ甘さとやさしさ。」を表現するため、淡い色合いや余白を活かしたデザインを意識しました。配色・フォント・写真のテイストに統一感を持たせ、ブランドの世界観が伝わるよう工夫しています。また、レスポンシブ対応やハンバーガーメニューを実装し、デバイスを問わず快適に閲覧できるよう制作しました。
　また、商品画像をホバーしたときに着用イメージに変化するようにしました。
ハンバーガーメニューをクリックしたときに出てくるナビの背景に、illustratorで自主制作したレースを使用しました。
デザインカンプにはPhotoshopを使用し、学んだ事をいかせていると感じています。


:root {
--header-height: 83px;
/_ ===================
latte. Color Palette
===================_/
/_ Background _/
--latte-header: rgba(255, 249, 245, 0.92);
--latte-bg: #fff9f5;
--latte-section: #f7eee9;
--latte-footer: #f3dcd7;
--latte-card: #ffffff;
--latte-res-nav: #f5e9e4;
--latte-overlay: rgba(255, 249, 245, 0.18);

/_ Text _/
--latte-text: #5b4a42;
--latte-heading: #7a6254;
--latte-subtext: #8b7a72;
--latte-eng: #b89a82;
--latte-link: #a88468;

/_ Brand _/
--latte-brand: #b8a78f;
--latte-button: #c8a98e;
--latte-button-hover: #b79374;

/_ Shadow _/
--latte-shadow: rgba(91, 74, 66, 0.08);

/_ Border _/
--latte-border: #e9ddd5;
}

□ デザインカンプ 7/28
・Photoshop
・Illustrator(ハンバーガーメニューから降りてくるナビの背景画像に使用)

□ HTML
・index.html
・shop.html
・about.html

□ CSS
・reset.css
・common.css
・index.css
・shop.css
・about.css

□ JS
・common.js

更新履歴
v1.0
・8/4 class 名修正
・8/5 nav 修正
v1.1
・8/6 レスポンシブ対応
v1.2
・8/7 ファビコン修正