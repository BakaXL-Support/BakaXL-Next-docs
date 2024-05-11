# BakXL 下一代用户帮助文档

**本文档为 BakaXL 4.0 打造，在后续会将 3.0 文档并入至该库中**


##### 部署/测试帮助

> 运行要求: node
> 请确保 node 与 npm 已配置在您的计算机环境变量重
> 诊断方法为在 PowerShell 或 CMD 中输入 `node -v` 与 `npm -v` 为您安装的 node 版本号


在这里我们推荐使用 node 22 

```bash
corepack enable
```

而后打开您本地的仓库文件夹，在里面打开终端，输入

```bash
pnpm install
```

在安装完成后您输入

```bash
pnpm docs:dev
```

即可在您本地上查看文档，在浏览器中输入 vite 在 Local 行给出的 ip 即可访问您的测试环境
