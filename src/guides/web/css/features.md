---
outline: deep
---

# CSS新特性

## border-image

> 背景上添加一层半透明渐变，以保证文本清晰可见

- Demo: [https://codepen.io/t_afif/pen/gOBBeyz](https://codepen.io/t_afif/pen/gOBBeyz)

```css
.container {
  border-image:
    linear-gradient(#0003,#000) /* your gradient here */
    50%/50%; /* no need to touch this, we always want 50% of slice and border-width */
}
```

![0](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/0.png)
