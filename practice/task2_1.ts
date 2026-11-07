// Задание 2.1 (Разминка: условия и функции в task2_1.ts ):
// 1. Напиши функцию checkAgeBoundary(age: number): string , которая проверяет возраст
// для кредита (от 18 до 60 лет включительно): если меньше 18 — возвращает строку
// "Отказ: слишком молод" , если от 18 до 60 — "Кредит одобрен" , если больше 60 —
// "Отказ: пенсионный возраст" .
// 2. Проверь свою функцию по технике Граничных значений (BVA), вызвав её в console.log
// для всех 6 граничных точек: 17, 18, 19, 59, 60, 61 .
console.log("Задание 2.1")
function checkAgeBoundary(age: number): string {
    if (age < 18) {
        return "Отказ: слишком молод"
    } else if (age >= 18 && age <= 60) {
        return "Одобрено"
    } else { return "Отказ: пенсионный возраст"}
};
console.log(checkAgeBoundary(17));
console.log(checkAgeBoundary(18));
console.log(checkAgeBoundary(19));
console.log(checkAgeBoundary(59));
console.log(checkAgeBoundary(60));
console.log(checkAgeBoundary(61));

// Задание 2.2 (Мостик из Модуля 1: Decision Table в коде в task2_1.ts ): Возьми массив
// заказов и правил доставки интернет-магазина. По правилам бизнеса бесплатная доставка
// ( 0 рублей) даётся, если у клиента есть подписка isVip: true ИЛИ сумма заказа sum >=
// 3000 рублей. Во всех остальных случаях доставка стоит 400 рублей.
// 1. Напиши функцию getDeliveryCost(isVip: boolean, sum: number): number , которая
// возвращает 0 или 400 .
// 2. Создай массив decisionTable из 4 объектов (все 4 комбинации Да/Нет для `isVip` и
// `sum`, как в Таблице принятия решений) с ожидаемой стоимостью доставки
// expectedCost .
// 3. Прогони этот массив через цикл for...of и выведи в консоль результат сверки
// каждой строки!
console.log("Задание 2.2")
function getDeliveryCost(isVip: boolean, sum: number): number {
    if (isVip === true || sum >= 3000) {
        return 0
    } else {
        return 400
    }
};

const decisionTable = [ 
    { isVip: true, sum: 3040, expectedCost: 0 },
    { isVip: true, sum: 1000, expectedCost: 0 },
    { isVip: false, sum: 4000, expectedCost: 0 },
    { isVip: false, sum: 1000, expectedCost: 400 }
];

for ( const res of decisionTable ) {
    console.log(getDeliveryCost(res.isVip, res.sum), `.руб стоимость доставки, ожидали ${res.expectedCost} руб.`)
};

// Задание 2.3 (Шесть методов массива и Set в task2_1.ts ): Дан список заказов,
// пришедший с сервера:
console.log("Задание 2.3")
const orders = [
{ id: 101, sum: 1500, paid: true },
{ id: 102, sum: 800, paid: false },
{ id: 103, sum: 3200, paid: true },
{ id: 104, sum: 400, paid: false },
];
// Используя методы массивов, выведи в консоль:
// 1. Массив только из номеров id всех заказов (через .map ).
// 2. Массив только неоплаченных заказов paid === false (через .filter ).
// 3. Один объект заказа с номером id === 103 (через .find ).
// 4. Общую сумму всех четырёх заказов (через .reduce — должно получиться 5900 ).
// 5. Ответ true/false : есть ли хотя бы один неоплаченный заказ ( .some ) и все ли заказы
// оплачены ( .every ).
// 6. Проверь с помощью new Set(...) , нет ли дубликатов в массиве номеров [101, 102,
// 102, 103, 104] (сравни .length массива и .size у Set).
const ids = orders.map(item => item.id);
console.log("№1", ids);

const paids = orders.filter(item => item.paid === false);
console.log("№2", paids);

const oneObj = orders.find(item => item.id === 103);
console.log("№3", oneObj);

const sums = orders.reduce((acc, item) => acc + item.sum, 0);
console.log("№4", sums);

const unPay = orders.some(item => item.paid === false) 
const allPay = orders.every(item => item.paid === true);
console.log("№5", unPay, "/", allPay);

const nums = [101, 102, 102, 103, 104]
const single  = new Set(nums)
let check = single.size === nums.length
console.log(`№6 ${check}`)

// Задание 2.4 (Ловушка ссылочного копирования и сборка URL в task2_1.ts ):
// 1. Создай базовый объект пользователя const defaultUser = { login: "test_user",
// role: "viewer", isActive: true }; .
// 2. Сделай из него безопасную независимую копию blockedAdmin с помощью оператора
// ... , изменив в копии role на "admin" и isActive на false . Выведи оба объекта в
// консоль и докажи, что defaultUser не пострадал.
// 3. С помощью цикла for...of и Object.entries() собери из объекта параметров {
// text: "Playwright", area: 113, page: 0 } готовую строку
// "text=Playwright&area=113&page=0" .
console.log(`Задание 2.4`)
const defaultUser = { login: "test_user", role: "viewer", isActive: true };
const safeUser = { ...defaultUser, role: "admin", isActive: false };
console.log(defaultUser, safeUser)

const urlParams = { text: "Playwright", area: 113, page: 0 }
const queryParts: string[] = []
for ( const [a, b] of Object.entries(urlParams) ) {
    queryParts.push(`${a}=${b}`)
}
console.log(queryParts.join("&"))