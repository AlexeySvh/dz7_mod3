    let clients = [
        {
            firstName: "Александр",
            lastName: "Иванчук",
            date: "11-29-1990",
            phone: '8 (929) 988-90-09',
            amounts: [2546, 2098, 764, 7266]
        },
        {
            firstName: "Анатолий",
            lastName: "Стаценко",
            date: "02-12-1987",
            phone: null,
            amounts: [563, 8287, 889]
        },
        {
            firstName: "Марина",
            lastName: "Петрова",
            date: "07-26-1997",
            phone: '8 (899) 546-09-08',
            amounts: [6525, 837, 1283, 392]
        },
        {
            firstName: "Иван",
            lastName: "Караванов",
            date: "09-12-1999",
            phone: null,
            amounts: [7634, 283, 9823, 3902]
        },
        {
            firstName: "Оксана",
            lastName: "Абрамова",
            date: "01-24-2002",
            phone: '8 (952) 746-99-22',
            amounts: [342, 766, 362]
        }
    ];

    let  newClient = {};

    newClient.firstName = prompt("Введите ваше имя: ");
    newClient.lastName = prompt("Введите вашу фамилию: ");
    newClient.date = prompt("Введите вашу дату рождения (ММ-ДД-ГГГГ): ");
    newClient.phone = prompt("Введите ваш номер телефона: ");
    newClient.amounts = [];

    while (confirm("Добавить покупку для клиента " +  newClient.firstName + "?")) {
        let price = Number(prompt("Введите сумму покупки:"));
        newClient.amounts.push(price);
    }
    clients.push(newClient);

    function fullName(object){
        return object.firstName + " " + object.lastName;
    }
    function getBirthday(date){
        let birthDate = new Date(date);
        let today = new Date();
        let formattedDate = birthDate.toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });
        if(birthDate.getMonth() === today.getMonth() && birthDate.getDate() === today.getDate()){
            formattedDate += " (сегодня)";
        }
        return formattedDate;
    }
    function getAllAmount(amounts){
        let sum=0;
        for(let i = 0; i<amounts.length; i++){
            sum += amounts[i];
        }
        return sum;
    }


    function getAverageAmount(amounts){
        let avarage = getAllAmount(amounts)/amounts.length;
        return avarage.toFixed(1);
    }

    let showClients = (clients) => {
        let message;
        for(let i = 0; i<clients.length; i++){
            message = "Клиент " + fullName(clients[i]) +" имеет среднюю сумму чека " + getAverageAmount(clients[i].amounts) + ". День рождения клиента: " + getBirthday((clients[i].date))+".";
            console.log(message);
        }
    }
    showClients(clients);

    try {
        showClients();
    } catch (error) {
        console.log("Вызвана функция без параметров");
        console.log(error.message);
    }

    let bestClients = [

        {
            firstName: "Владимир",
            lastName: "Сенцов",
            date: "03-18-1980",
            phone: '8 (899) 546-09-08',
            amounts: [6425, 7832, 2245, 4492]
        },
        {
            firstName: "Даниил",
            lastName: "Карпов",
            date: "02-02-1992",
            phone: '8 (823) 324-98-39',
            amounts: [7634, 2283, 9923, 5902]
        },
        {
            firstName: "Анна",
            lastName: "Шевцова",
            date: "11-19-2000",
            phone: '8 (962) 746-98-12',
            amounts: [5342, 4766, 8362]
        }
    ]

    setTimeout(()=>{
        showClients(bestClients);
    }, 3000);

    function whoSpentMore(clients){
        let moreAmount = 0;
        let moreAmountClient
        for(let i = 0; i<clients.length; i++){
            if(getAllAmount(clients[i].amounts) > moreAmount){
                moreAmount = getAllAmount(clients[i].amounts);
                moreAmountClient = fullName(clients[i]);
            }
        }
        console.log("Больше всех потратил " + moreAmountClient + ". Сумма покупок: " + moreAmount + ".");
    }
    whoSpentMore(clients);
    whoSpentMore(bestClients);
