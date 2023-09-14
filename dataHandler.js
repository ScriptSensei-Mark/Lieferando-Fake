let restaurants = [

    {
        'name': 'Lausebengel',
        'image': './img/re-speisenauswahl3.jpg',
        'rating': 4.5,
        'logo': './img/lausebengel-logo.png',
        'reviews': 739,
        'deliveryTime': 'Lieferung in 30-45 min',
        'minPurchase': 'Min. 25.00 €',
        'minValue': 25,
        'shipping': 'Kostenlos',
        'shipCost': 0,
        'menu': {

            'Happen': [

                {
                    'name': 'Blutwurstkroketten',
                    'description': 'Panierte Blutwurst, vom Blutwurstritter Benser aus Neukölln, auf geräuchertem Apfelmuss.',
                    'img': "./img/dishes/blutwurst-happen.png",
                    'amount': 1,
                    'price': 7.90,
                },
                {
                    'name': 'Kartoffelsalat',
                    'description': 'Kartoffelsalat mit Essig und Öl, frischen Kräutern, Senfsaat und hausgemachtem Lauchöl.',
                    'img': "./img/dishes/kartoffelsalat-happen.png",
                    'amount': 1,
                    'price': 6.90,
                },
                {
                    'name': 'Matjes',
                    'description': 'Saftiger Matjes mit Apfel-Sellerie-Chutney, Crème fraîche und eingelegten Zwiebeln.',
                    'img': "./img/dishes/matjes-happen.png",
                    'amount': 1,
                    'price': 7.90,
                },
                {
                    'name': 'Senfei',
                    'description': 'Weichgekochte Eier mit hausgemachter, leicht pikanter Senfsoße und knusprigem Kartoffelstroh.',
                    'img': "./img/dishes/senfei-happen.png",
                    'amount': 1,
                    'price': 7.40,
                },
            ],

            'Stullen': [

                {
                    'name': 'Blutwurst Stulle',
                    'description': 'Blutwurstkroketten mit geräuchertem Apfelmuss und knusprigem Kartoffelstroh auf Sauerkraut.',
                    'img': "./img/dishes/blutwurst-stulle.png",
                    'amount': 1,
                    'price': 11.90,
                },
                {
                    'name': 'Hummus Stulle',
                    'description': 'Panierte Auberginen mit knackigem, mariniertem Rotkohl auf einer Hummuscreme.',
                    'img': "./img/dishes/hummus-stulle.png",
                    'amount': 1,
                    'price': 10.90,
                },
                {
                    'name': 'Matjes Stulle',
                    'description': 'Saftiger Matjes mit Apfel-Sellerie-Chutney, Crème fraîche und eingelegten Zwiebeln.',
                    'img': "./img/dishes/matjes-stulle.png",
                    'amount': 1,
                    'price': 11.90,
                },
                {
                    'name': 'Senfei Stulle',
                    'description': 'Weichgekochte Eier mit hausgemachter, leicht pikanter Senfsoße und knusprigem Kartoffelstroh auf frischem Kartoffelsalat.',
                    'img': "./img/dishes/senfei-stulle.png",
                    'amount': 1,
                    'price': 10.90,
                },
            ],

            'Hauptgänge': [

                {
                    'name': 'Forelle Müllerin Art',
                    'description': 'Ganze Forelle, in knuspriger Panade gebacken, mit frischen Kräutern, frittierten Kapern und gerösteten Nüssen.',
                    'img': "./img/dishes/forelle-muellerin.png",
                    'amount': 1,
                    'price': 17.90,
                },
                {
                    'name': 'Fischstäbchen',
                    'description': 'Hausgemachte Fischstäbchen vom Kabeljau mit cremigem Kartoffelpüree und Erbsen in Rahmsoße.',
                    'img': "./img/dishes/lausebengel-main.png",
                    'amount': 1,
                    'price': 15.90,
                },
                {
                    'name': 'Currywurst',
                    'description': 'Currywürste aus der Blutwurstmanufaktur und fruchtig-frische Currysoße mit Ananas, dazu knuspriges Kartoffelstroh.',
                    'img': "./img/dishes/currywurst-main.png",
                    'amount': 1,
                    'price': 14.90,
                },
            ]
        }
    }

];


let cart = {
    amounts: [],
    dishes: [],
    notes: [],
    prices: [],
};