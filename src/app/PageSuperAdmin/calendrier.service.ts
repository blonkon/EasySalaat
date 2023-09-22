import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  list_radio: any =[
    {name: 'Ashura ', dateislamique:
    '10 Muḥarram', dateFransais: '27 Juillet',
     description: "Achoura, est un événement religieux en islam, qui a lieu le 10ᵉ jour de mouharram, le premier mois de l'année dans le calendrier musulman."},
    {name: 'Mawlid al-Nabi ', dateislamique:
    '12 Rabīʿ al-awwal', dateFransais: '26 September', description: "Le Mawlid, de son appellation complète al-Mawlid al-nabawi, littéralement « la naissance du prophète », est une fête musulmane, commémorant la naissance de Mahomet, prophète de l'islam, généralement célébrée le 12 Rabi-el-aouel dans les pays musulmans."},
    {name: 'Lailat-ul-Miraj ', dateislamique:
    '27 Rajab', dateFransais: '17 Février',
     description: "Lailat al Miraj est une fête musulmane importante. Elle célèbre le voyage nocturne du prophète Mohammed de la Mecque jusqu'à la mosquée de Jérusalem puis au paradis."},
    {name: "Lailat-ul-Bara'at ", dateislamique:
    '15 Shaʿbān', dateFransais:'07 March', 
    description: "Lailat Al-Bara'ah ou Layla Al-Barâ’a est « la nuit du pardon » ou « la nuit du destin », précédant le Ramadan de quelques jours, les musulmans se pardonnent mutuellement leur faute afin de se préparer au Ramadan."},
    {name: '1er jour du Ramadan ', dateislamique:
    '1 Ramaḍān', dateFransais: '22 Mars', 
    description: "Le début du Ramadan (Sounkalo)"},
    {name: 'Lailat-ul-Qadr ', dateislamique:
    '21 Ramaḍān', dateFransais: '11 Avril',
     description: "Laylat al-Qadr ou Nuit du Destin est l'une des nuits de la fin du mois du Ramadan durant laquelle, selon l'interprétation classique, les premiers versets du Coran ont été envoyés par Dieu aux hommes."},
    {name: 'Lailat-ul-Qadr ', dateislamique:
    '23 Ramaḍān', dateFransais: '13 Avril', 
    description: "Laylat al-Qadr ou Nuit du Destin est l'une des nuits de la fin du mois du Ramadan durant laquelle, selon l'interprétation classique, les premiers versets du Coran ont été envoyés par Dieu aux hommes."},
    {name: 'Lailat-ul-Qadr ', dateislamique:
    '25 Ramaḍān', dateFransais: '15 Avril', 
    description: "Laylat al-Qadr ou Nuit du Destin est l'une des nuits de la fin du mois du Ramadan durant laquelle, selon l'interprétation classique, les premiers versets du Coran ont été envoyés par Dieu aux hommes."},
    {name: 'Lailat-ul-Qadr ', dateislamique:
    '27 Ramaḍān', dateFransais: '17 Avril',
     description: "Laylat al-Qadr ou Nuit du Destin est l'une des nuits de la fin du mois du Ramadan durant laquelle, selon l'interprétation classique, les premiers versets du Coran ont été envoyés par Dieu aux hommes."},
    {name: 'Lailat-ul-Qadr ', dateislamique:
    '29 Ramaḍān', dateFransais: '19 Avril', 
    description: "Laylat al-Qadr ou Nuit du Destin est l'une des nuits de la fin du mois du Ramadan durant laquelle, selon l'interprétation classique, les premiers versets du Coran ont été envoyés par Dieu aux hommes."},
    {name: 'Eid-ul-Fitr ', dateislamique:
    '1 Shawwāl', dateFransais: '21 Avril', 
    description: "Aïd al-Fitr est la fête musulmane marquant la rupture du jeûne du mois de ramadan. Elle est célébrée le premier jour du mois de chawwal."},
    {name: 'Hajj ', dateislamique:
    '8 Dhū al-Ḥijjah', dateFransais: '26 Juin',
     description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
     {name: 'Hajj ', dateislamique:
     '9 Dhū al-Ḥijjah', dateFransais: '27 Juin',
      description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
      {name: 'Arafa ', dateislamique:
      '9 Dhū al-Ḥijjah', dateFransais: '27 Juin',
       description: "Le jour d'Arafat est un jour saint de l'Islam, dans lequel le dernier verset du Coran aurait été révélé, ce qui explique que l'on dise que la religion y avait été parachevée. Ce jour coïncide avec le 9ᵉ jour de Dhou al-hijja, douzième mois du calendrier lunaire islamique."},
       {name: 'Eid-ul-Adha ', dateislamique:
       '10 Dhū al-Ḥijjah', dateFransais: '28 Juin',
        description: "L'Aïd al-Adha ou Aïd el-Kebir, est la plus importante des fêtes musulmanes. Elle est appelée Tabaski dans les pays d'Afrique de l'Ouest et d'Afrique Centrale et appelée Ghorban en Iran et en Afghanistan."},
        {name: 'Hajj ', dateislamique:
       '10 Dhū al-Ḥijjah', dateFransais: '28 Juin',
        description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
       {name: 'Hajj ', dateislamique:
        '11 Dhū al-Ḥijjah', dateFransais: '29 Juin',
         description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
         {name: 'Hajj ', dateislamique:
         '12 Dhū al-Ḥijjah', dateFransais: '30 Juin',
          description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
          {name: 'Hajj ', dateislamique:
          '13 Dhū al-Ḥijjah', dateFransais: '01 Juillet',
           description: "Le hajj est le pèlerinage que font les musulmans aux lieux saints de la ville de La Mecque, en Arabie saoudite."},
                         
  ];

  constructor() { }

  getradioList(): Observable<any> {
    return this.list_radio;
  }

  deleteradio(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_radio.splice(id);
  }
  
  // Méthode pour mettre à jour une mesure existante
  modifyradio(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_radio.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) { 
      this.list_radio[index] = data;
    }
  }
}
