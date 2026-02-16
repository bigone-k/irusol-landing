#!/bin/bash

# 현재 날짜를 yyyyMMdd 형식으로 가져오기
DATE=$(date +%Y%m%d)

# Git 명령어 실행
git add .
git commit -am "push ${DATE}"
git push origin main
