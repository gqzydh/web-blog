---
title: css中的一些黑科技 
date: 2017-10-17 14:51:01
tags:
- css 
categories: 
- css 
---


# css中的一些黑科技


- **简单的文字模糊效果**
- **实现页面编辑CSS**
- **实现多重边框**

-------------------

## 简单的文字模糊效果

```
*{ 
    color: transparent;
    text-shadow: #111 0 0 5px;
}
```

## 实现页面编辑CSS

```
<!DOCTYPE html>
<html>
    <body>
        <style style="display:block" contentEditable>
            body { color: blue }
        </style>
    </body>
</html>
```

## 实现多重边框

```
.div {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 50px auto;
    width: 400px
}
```


