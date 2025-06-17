#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'gachi-app';
const templateDir = path.join(__dirname, 'template');
const targetPath = path.resolve(process.cwd(), projectName);
console.log('🎆 Уже создаём структуру вашего ебучего приложения!')

fs.cpSync(templateDir, targetPath, { recursive: true });
console.log('Всё нахуй скопировал, ща ещё надо эту хуйню добавить:')


console.log('\n📦 Устанавливаем зависимые жопы:');
execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

console.log("✅ Все зависимые вставились в йопта приложение. ")
console.log(`\n ☢ Next Yopta App установлен, йопта: ${targetPath}`);
console.log(`\n😲 Начни создавать production-ready приложение с этих команд:`);
console.log(`cd ${projectName}`);
console.log(`npm run dev`);
