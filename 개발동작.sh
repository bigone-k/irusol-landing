#!/bin/bash

# 프로젝트 빌드
echo "🔨 Building project..."
npm run build

# 빌드 성공 여부 확인
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Starting development server..."
    npm run dev
else
    echo "❌ Build failed!"
    exit 1
fi
