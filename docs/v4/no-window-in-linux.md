# 在 Linux 中运行 BakaXL 4.0 时不显示窗体

> Linux 下使用 Nvidia 显卡或在虚拟机中运行可能导致 BakaXL 4.0 不显示窗体

你可以尝试在终端中运行以下命令解决该问题:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1
```
