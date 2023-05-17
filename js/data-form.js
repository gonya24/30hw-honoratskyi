const control = [
    {
        element: 'input',
        allowTitle: true,
        label: 'Прізвище',
        labelFor: "lastName",
        attributes: [
            { type: "text" },
            { id: "lastName" },
        ],
        required: true,
    },
    {
        element: 'input',
        allowTitle: true,
        label: 'Ім\`я',
        labelFor: "firstName",
        attributes: [
            { type: "text" },
            { id: "firstName" },
        ],
        required: true,
    },
    {
        element: 'input',
        allowTitle: true,
        label: 'По-батькові',
        labelFor: "surname",
        attributes: [
            { type: 'text' },
            { id: "surname" }, ,
        ],
        required: false,



    },
    {
        element: 'select',
        allowTitle: true,
        label: 'Місто отримання',
        labelFor: "city",
        attributes: [
            { id: "city" },

        ],
        required: false,
        child: true,
        childItem: [
            {
                element: 'option',
                allowTitle: false,
                isChild: true,
                required: false,
                subText: true,
                innerText: 'Миколаїв',
                attributes: [
                    { value: "0" },
                ],


            },
            {
                element: 'option',
                required: false,
                isChild: true,
                allowTitle: false,
                subText: true,
                innerText: 'Київ',
                attributes: [
                    { value: "1" },
                ],


            },
            {
                element: 'option',
                allowTitle: false,
                isChild: true,
                required: false,
                subText: true,
                innerText: 'Одеса',
                attributes: [
                    { value: "2" },
                ],


            },
        ]

    },
    {
        element: 'select',
        attributes: [
            { id: "post" },

        ],
        required: false,
        allowTitle: true,
        label: 'Відділення Нової пошти',
        labelFor: "post",
        child: true,
        childItem: [
            {
                element: 'option',
                isChild: true,
                allowTitle: false,
                subText: true,
                innerText: '№1',
                attributes: [
                    { value: "0" },
                ],
                required: false,


            },
            {
                element: 'option',
                allowTitle: false,
                isChild: true,
                subText: true,
                innerText: '№2',
                attributes: [
                    { value: "1" },
                ],
                required: false,


            },
            {
                element: 'option',
                allowTitle: false,
                isChild: true,
                subText: true,
                innerText: '№3',
                attributes: [
                    { value: "2" },
                ],
                required: false,


            },
        ]

    },
    {
        element: 'input',
        allowTitle: true,
        label: 'Оплата картою',
        labelFor: "card",
        attributes: [
            { type: "radio" },
            { name: "payment" },
            { id: "card" },
            { value: "Оплата картою" }
        ],
        required: true,

    },
    {
        element: 'input',
        allowTitle: true,
        label: 'Післяоплата',
        labelFor: "cash",
        attributes: [
            { type: "radio" },
            { name: "payment" },
            { id: "cash" },
            { value: "Післяоплата" },
        ],
        required: false,

    },
    {
        element: 'input',
        required: true,
        attributes: [
            { type: "number" },
            { id: "count" },
        ],
        allowTitle: true,
        label: 'Кількість товару',
        labelFor: "count",


    },
    {
        element: 'textarea',
        attributes: [
            { id: "comment" },
        ],
        required: false,
        allowTitle: true,
        label: 'Коментарій до замовлення',
        labelFor: "comment",


    },
    {
        element: 'input',
        required: false,
        attributes: [
            { type: "button" },
            { value: "Order" },
            { id: "btnOrder" },
            { class: "btn-order" },
        ],
        allowTitle: false,



    },

]