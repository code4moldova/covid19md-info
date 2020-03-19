var data = [{"data": "09/03/2020", "ora": "17:00", "infectate": 1, "suspecte": 6, "fise epidemologice": "-", "monitorzare": 5563, "intrate in tara": "-", "linia_verde": 30, "decedati": 0, "vindecati": 0}, 
 {"data": "10/03/2020", "ora": "10:00", "infectate": 1, "suspecte": 12, "fise epidemologice": "-", "monitorzare": 6100, "intrate in tara": 18232, "linia_verde": 25, "decedati": 0, "vindecati": 0}, 
 {"data": "10/03/2020", "ora": "16:30", "infectate": 3, "suspecte": 13, "fise epidemologice": "-", "monitorzare": 6100, "intrate in tara": 18232, "linia_verde": 25, "decedati": 0, "vindecati": 0}, 
 {"data": "11/03/2020", "ora": "10:00", "infectate": 3, "suspecte": 22, "fise epidemologice": 3398, "monitorzare": 3395, "intrate in tara": 19700, "linia_verde": 40, "decedati": 0, "vindecati": 0}, 
 {"data": "11/03/2020", "ora": "16:30", "infectate": 3, "suspecte": 13, "fise epidemologice": 3398, "monitorzare": 3395, "intrate in tara": 19700, "linia_verde": 40, "decedati": 0, "vindecati": 0}, 
 {"data": "12/03/2020", "ora": "10:00", "infectate": 4, "suspecte": 30, "fise epidemologice": 2772, "monitorzare": 6357, "intrate in tara": 18186, "linia_verde": 65, "decedati": 0, "vindecati": 0}, 
 {"data": "12/03/2020", "ora": "18:00", "infectate": 6, "suspecte": 8, "fise epidemologice": 2772, "monitorzare": 6357, "intrate in tara": 18186, "linia_verde": 65, "decedati": 0, "vindecati": 0}, 
 {"data": "13/03/2020", "ora": "10:00", "infectate": 6, "suspecte": 39, "fise epidemologice": 2681, "monitorzare": 7314, "intrate in tara": 17697, "linia_verde": 110, "decedati": 0, "vindecati": 0}, 
 {"data": "13/03/2020", "ora": "18:00", "infectate": 8, "suspecte": 20, "fise epidemologice": 2681, "monitorzare": 7314, "intrate in tara": 17697, "linia_verde": 110, "decedati": 0, "vindecati": 0}, 
 {"data": "14/03/2020", "ora": "10:00", "infectate": 8, "suspecte": 46, "fise epidemologice": 2813, "monitorzare": 7106, "intrate in tara": 17218, "linia_verde": 130, "decedati": 0, "vindecati": 0},
 {"data": "14/03/2020", "ora": "18:00", "infectate": 12, "suspecte": 25, "fise epidemologice": 2813, "monitorzare": 7106, "intrate in tara": 17218, "linia_verde": 130, "decedati": 0, "vindecati": 0},
 {"data": "15/03/2020", "ora": "10:00", "infectate": 12, "suspecte": 27, "fise epidemologice": 5651, "monitorzare": 8158, "intrate in tara": 16648, "linia_verde": 70, "decedati": 0, "vindecati": 0},
 {"data": "15/03/2020", "ora": "18:00", "infectate": 23, "suspecte": 11, "fise epidemologice": 5651, "monitorzare": 8158, "intrate in tara": 16648, "linia_verde": 70, "decedati": 0, "vindecati": 0},
 {"data": "16/03/2020", "ora": "10:00", "infectate": 23, "suspecte": 27, "fise epidemologice": 4400, "monitorzare": 9193, "intrate in tara": 14651, "linia_verde": 95, "decedati": 0, "vindecati": 0},
 {"data": "16/03/2020", "ora": "18:00", "infectate": 29, "suspecte": 20, "fise epidemologice": 4400, "monitorzare": 9193, "intrate in tara": 14651, "linia_verde": 95, "decedati": 0, "vindecati": 1},
 {"data": "17/03/2020", "ora": "10:00", "infectate": 29, "suspecte": 43, "fise epidemologice": 3378, "monitorzare": 11238, "intrate in tara": 7990, "linia_verde": 150, "decedati": 0, "vindecati": 1},
 {"data": "17/03/2020", "ora": "18:00", "infectate": 30, "suspecte": 40, "fise epidemologice": 3378, "monitorzare": 11238, "intrate in tara": 7990, "linia_verde": 150, "decedati": 0, "vindecati": 1},
 {"data": "18/03/2020", "ora": "10:00", "infectate": 30, "suspecte": 76, "fise epidemologice": 1193, "monitorzare": 13409, "intrate in tara": 3041, "linia_verde": 170, "decedati": 1, "vindecati": 1},
 {"data": "18/03/2020", "ora": "18:00", "infectate": 36, "suspecte": 76, "fise epidemologice": 1193, "monitorzare": 13409, "intrate in tara": 3041, "linia_verde": 170, "decedati": 1, "vindecati": 1},
 {"data": "19/03/2020", "ora": "10:00", "infectate": 36, "suspecte": 107, "fise epidemologice": 2604, "monitorzare": 17375, "intrate in tara": 2604, "linia_verde": 240, "decedati": 1, "vindecati": 1},
 {"data": "19/03/2020", "ora": "17:00", "infectate": 49, "suspecte": 107, "fise epidemologice": 2604, "monitorzare": 17375, "intrate in tara": 2604, "linia_verde": 240, "decedati": 1, "vindecati": 1}
]
var lastUpdate = "19/03/2020(17:00)";

var intervalAni  = ['0-9','10-19','20-29','30-39','40-49','50-59','60-69'],
	infectatiAni = [1,      2,     4,     7,       5,      8,      9 ];
var cazuriImportate = 21, infectariLocale = 15;
