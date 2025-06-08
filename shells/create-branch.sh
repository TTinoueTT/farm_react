#!/usr/bin/env bash
set -euo pipefail

# サポートするプレフィックス一覧
PREFIXES=(
    feature
    bugfix
    hotfix
    release
    chore
    docs
    test
    refactor
    perf
    ci
    build
)

# 引数チェック
if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <branch-suffix>"
    echo "例) $0 add-login-api"
    exit 1
fi

SUFFIX=$1

# 対話的にプレフィックスを選択
echo "=== Select branch prefix ==="
PS3="番号を入力してください> "
select PREFIX in "${PREFIXES[@]}"; do
    if [[ -n $PREFIX ]]; then
        echo "選択されたプレフィックス: $PREFIX/"
        break
    else
        echo "無効な選択です。再度入力してください。"
    fi
done

# ブランチ名組み立て
BRANCH_NAME="${PREFIX}/${SUFFIX}"

# ブランチ作成
echo "Creating branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME"

echo "Done."
