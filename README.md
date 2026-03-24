# chance design studio

独立个人官网项目（Next.js App Router），已内置：
- 双语切换（中文 / English）
- 商业导向首页（Hero、Team、Work、Services、Process、FAQ、Contact）
- 案例详情页 `work/[slug]`

## 本地启动

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 质量检查

```bash
npm run lint
npm run build
```

## 推荐部署（Vercel）

这是当前最省心方案，适合 Next.js：

1. 把仓库推到 GitHub
2. 登录 [Vercel](https://vercel.com/)
3. `Add New Project`，选择这个仓库
4. Framework 选 Next.js（通常会自动识别）
5. 直接点 Deploy

部署完成后你会得到一个线上域名（可再绑定你自己的自定义域名）。

## 微信二维码替换

把你的真实二维码覆盖这个文件即可：

`public/assets/chance-wechat-qr.svg`

如果你给我 png/jpg，我也可以直接帮你改成图片版。
