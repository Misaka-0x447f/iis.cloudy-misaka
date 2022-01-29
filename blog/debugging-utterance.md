---
title: 选择博客评论系统解决方案和解决 Utterance 评论系统无法正确安装的问题
published: true
tags: utterance, gitalk
date_published: "2022-01-02"
---

新博客第一水。这博客是用[gridsome](https://gridsome.org/)搭起来的。别问为啥选这个，除了记得我需要对自己博客的 Vue 级别的完全控制以外早就忘了。
对于一个博客来说评论系统怎么说也得有吧，但是翻了一下现有解决方案，Disqus 这种我肯定不会考虑，又重又收费又需要用户自己注册。然后想起了微软和 github。那就找吧。
## [gitalk](https://github.com/gitalk/gitalk/)
不可接受，要给一篇文章评论需要作者先给这个文章开个 issue，不然就显示"请联系作者开启 issue"。
## [Vssue](https://vssue.js.org/demo/github.html)
国人项目，作者报告灵感来自 [gitment](https://github.com/imsun/gitment) 和 [gitalk](https://github.com/gitalk/gitalk/)，没黑色主题但是能自己写主题，由 [gridsome](gridsome.org/) 推荐，下次搭博客再试试吧。
## [utterance](https://utteranc.es) ~~我不会拼，长大后再学习~~
Vanilla JS，使用 github 机器人实现，有官方服务端，主题很多，可以强行接到 Vue 里，有坑。
适配 Vue 的代码见 (https://github.com/Misaka-0x447f/iis.cloudy-misaka/blob/f280eb6ae4f1f63aa28d4b0031e167754e204f1b/src/components/UtterancesVue.vue)[]

...

这篇文章已经是一个月前写的了，现在根本不记得要干嘛。摸了。有问题有人想接入的话私聊。
