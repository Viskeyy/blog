---
title: url 的查询参数
date: '2024-01-29'
tags: ['url', 'code', 'JavaScript']
draft: false
summary: 如何使用 url 的查询参数
---

在进行前端开发的过程中, 有时会需要进行携带数据的跨页面跳转操作. 对于一些简单的数据来说, 可以将数据作为 url 的查询参数, 在新页面中获取 url 的查询参数从而进行数据处理.

## url 查询参数是什么

url 的查询参数的示例为 `https://www.example.com/page?name=John`, 其中 `https` 为协议 (Protocol), `www.example.com` 为主机名 (Host), `/page` 为路径 (Path), `?name=John` 就是查询参数 (Query Parameters).

查询参数通过 `?` 引入, 表示其后内容都为 url 查询参数.

一般情况下, url 的查询参数格式为键值对, 即 `key=value`. 如果需要设置多个查询参数, 则通过 `&` 将键值对区分开.

有时会有这样的 url: `https://www.example.com/page?date`, 这个例子中查询参数并不是键值对格式, 它表示一个 `value`, 理解为 `[key=data, value=data]`, 但有时可能会出现一些 bug.

## 如何使用 url 查询参数

### JavaScript

在原生 JavaScript 中, 可以通过 `window` 对象的 `location` 中的 `href` 属性获取当前页面的 url. 然后使用 `URL()` 构造函数返回一个 `URL` 对象, 从而获取 url 的参数.

以 `https://example.com/?name=Jonathan&age=18` 为例:

```js
const url = window.location.href
const URL = new URL(url)
const parameters = URL.searchParams
const name = parameters.name
const age = parameters.age
```

### React

在 React 中, 除了可以使用类似于原生 JavaScript 的方式获取 url 的查询参数, 也可以使用 React Router 的 `useSearchParams` hook 获取.

以 `https://example.com/?name=Jonathan&age=18` 为例:

```js
import { useSearchParams } from 'react-router-dom'

const [parameters] = useSearchParams();
const name = parameters.get('name');
const age = parameters.get('age');
```

### Next.js

除了可以使用上面的两种方式外, 还可以使用 `next/router` 中的 `useRouter` 获取查询参数.

以 `https://example.com/?name=Jonathan&age=18` 为例:

```js
import { useRouter } from 'next/router'

const router = useRouter();
const queryParams = router.query;
const name = queryParams.name;
const age = queryParams.age;
```
