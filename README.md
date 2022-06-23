# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:3000` with nodemon

**Production**

`npm run start:prod`

* App served @ `http://localhost:3000` without nodemon

---

**All commands**

Command | Description
--- | ---
1) На стрелки ↑ ↓ ← → можно двигать курсор на заданный шаг. 
Чтобы задать шаг , в поле Mouse control offset (px): необходимо ввести какое-то число. 
По дефолту шаг 10 px.

2) По нажатию клавиши (английская раскладка) курсор может рисовать следующие фигуры:
C - circle (круг) -> значение задаётся в поле Figure width or radius (px). (по дефолту 100)
R - rectangle (прямоугольник);
S - square (квадрат);

3) По нажатию на клавиши LCtrl + P отображается скриншот.
размер скриншота - 200px/200pх.
Скриншот выполняется вокруг курсора на 100px;
