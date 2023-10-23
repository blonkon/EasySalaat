import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LectureRadioPage } from '../lecture-radio/lecture-radio.page';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  radios = [
    {
      id : 1,
      nom : ' Radio Klédu ',
      fr : '101.2 MHz',
      desc:'Fréquence',
      lien : 'https://stream-156.zeno.fm/yerp85sughwtv?zs=7FxpPMDdT42TnIODrMz8-w'
      
    },
    {
      id : 2,
      nom : 'Joliba FM ',
      fr : '105.0 MHz',
      desc:'Fréquence',
      lien : 'https://stream-158.zeno.fm/bux0vqx79zquv?zs=DeQjmnBzQs2gTrjZd2s7xA'
    },
    {
      id : 3,
      nom : 'Radio Nieta ',
      fr : '103.3 MHz',
      desc:'Fréquence',
      lien:'https://worldradiomap.com/ml/play/nieta'
    },
    {
      id : 4,
      nom : 'ORTM Radio Nationale ',
      fr : '92.0 MHz',
      desc:'Fréquence',
      lien: 'https://www.ortm.ml/radiomali'
    },
    {
      id : 5,
      nom : 'IKA FM ',
      fr : '93.5 MHz',
      desc:'Fréquence',
      lien : 'https://stream-149.zeno.fm/x5t7h686xreuv?zs=dOEsWl_xSO2p6H-KvsXx7g'
    },
    {
      id : 6,
      nom : ' Radio Rabwah FM ',
      fr : '102.8 MHz',
      desc:'Fréquence',
      lien : 'https://stream-151.zeno.fm/qtz96dn4p0quv?zs=uqC-ldkYTveAb1qmCqZNsw'
    },
    {
      id : 7,
      nom : ' Radio Islamique  ',
      fr : '106.0 MHz',
      desc:'Fréquence',
      lien : 'embed/islam-webradio-448188'
    },
    
    {
      id : 8,
      nom : ' Radio Islamique de Bamako  ',
      fr : '107.4 MHz',
      desc:'Fréquence',
      lien : 'https://worldradiomap.com/ml/play/islamique-bamako'
    },
  ]
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openRadio(objet : any){
    const ref = this.dialog.open(LectureRadioPage,{
      width:'500px',height:'55%',
      data: objet
    })
    ref.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
    console.log(objet);
  }
  
}