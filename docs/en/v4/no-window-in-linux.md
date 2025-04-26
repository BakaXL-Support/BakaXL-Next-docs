# BakaXL 4.0 Window Not Displaying on Linux

> Running BakaXL 4.0 on Linux with Nvidia graphics cards or in virtual machines might cause the window not to display.

You can try running the following command in the terminal to solve this issue:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1
```
