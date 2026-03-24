# 免费发布（不备案）- 国内可访问增强方案

目标：不买服务器、不备案、尽量提高国内可访问性（无法保证 100% 全网稳定）。

## 方案

1. 主站：Cloudflare Pages（免费）
2. 备用：GitHub Pages（免费）

建议同时保留两个地址，主站打不开时用备用地址。

## 项目已完成的配置

- 已支持静态导出：
  - `npm run build:static`
- 产物目录：
  - `out/`

## A. 发布到 Cloudflare Pages（主站）

1. 先执行：

```bash
npm install
npm run build:static
```

2. 打开 Cloudflare Pages，新建项目（Connect to Git）。
3. 选择仓库后，Build 配置填写：
   - Framework preset: `Next.js (Static HTML Export)` 或 `None`
   - Build command: `npm run build:static`
   - Build output directory: `out`
4. 点 Deploy，拿到 `xxx.pages.dev` 链接。

## B. 发布到 GitHub Pages（备用）

1. 在 GitHub 仓库 Settings -> Pages 打开 Pages。
2. 方式选 GitHub Actions。
3. 使用官方静态站点部署模板，核心是上传 `out/`。
4. 每次更新前执行：

```bash
npm run build:static
```

## 日常更新流程

```bash
npm install
npm run lint
npm run build:static
```

然后推送代码，Cloudflare/GitHub 会自动更新。

## 注意

- 不备案情况下，国内访问稳定性取决于运营商与网络环境。
- 因此保留双入口最稳妥：`pages.dev`（主）+ `github.io`（备）。
