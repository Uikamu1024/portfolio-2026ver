---
title: "pyenvでMacのPython環境を構築した話"
date: "2025-04-01"
tags: ["Python", "pyenv", "Mac", "環境構築"]
summary: "MacにpyenvでPythonをインストールする手順をまとめました。"
---

## はじめに

大学でPythonを使うことになり、Mac上で環境構築をしました。
`pyenv` を使うと複数バージョンのPythonを切り替えられて便利です。

## インストール手順

まずHomebrewでpyenvをインストール：

```bash
brew install pyenv
```

次に `~/.zshrc` に設定を追記：

```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Pythonをインストール：

```bash
pyenv install 3.12.0
pyenv global 3.12.0
```

## 確認

```bash
python --version
# Python 3.12.0
```

これで完了です！次はAtCoderでPythonを使ってみます。
