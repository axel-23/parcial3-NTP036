import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionChips = ['All', 'Dance', 'Rock', 'Art', 'Latin Pop', 'Music', 'Tools', 'Draw', 'Comedy', 'Football', 'Live'];

  videos = [
    {
      miniature: 'https://i.ytimg.com/vi_webp/IsjgcDHwT_4/sddefault.webp',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLTKad9pGs0PVoXD-lNTo3kNw3oZl4xiSNEtdEyDNw=s68-c-k-c0x00ffffff-no-rj',
      title: 'Rápido tutorial de Caligrafía',
      user: 'Lourdes Caligrafía',
      views: '827,514 vistas',
      uploaded: 'hace 1 año'
    },
    {
      miniature: 'https://i.ytimg.com/vi/5l1GvUqwXGw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBezYKYMrnm_dKFsqeqLTC2zbLgnQ',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLQsRV0GGEJgaMa2IRIODvg1bCeQNgCmy-Z4boJglw=s68-c-k-c0x00ffffff-no-rj',
      title: '9 Errores que Te Hacen Perder el Tiempo • ESCAPA de las TrampasRápido tutorial de Caligrafía',
      user: 'Full Perception',
      views: '1.3 M de vistas',
      uploaded: 'hace 7 meses'
    },
    {
      miniature: 'https://i.ytimg.com/vi/OScQdDhzgp0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIPJwLofvOiumbBsm2HtxUyIpU9A',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLT6IhL7hfi_SbDWswX9S97g0eiljleLZVazPS79=s68-c-k-c0x00ffffff-no-rj',
      title: 'Tres peligrosos encuentros de Frank con animales en el Amazonas | Wild Frank | Animal Planet',
      user: 'Animal Planet Latinoamérica',
      views: '293,743 vistas',
      uploaded: 'hace 1 semana'
    },
    {
      miniature: 'https://i.ytimg.com/vi/IOm3A83oZI4/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpuWSvb6QIaUrpHyS76pUaW7usdw',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLT9PBBP8o2H9Hc6QoYMLZ8sCj63EcCF_mSZXJLNA-E=s68-c-k-c0x00ffffff-no-rj',
      title: 'Si La Casa de Papel Fuera en Latinoamérica | enchufetv',
      user: 'enchufetv',
      views: '4 M de vistas',
      uploaded: 'hace 1 mes'
    },
    {
      miniature: 'https://i.ytimg.com/vi/9ZHJjAKiUMM/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2vLQlHAL3vBL-UeiL2UFX7iX2oQ',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLSayjGWAaLClERJCJLeUu6OSEomgDjNfeIRA5tIsA=s68-c-k-c0x00ffffff-no-rj',
      title: 'Técnicas de recolección de datos. LA ENTREVISTA.',
      user: 'Armando Sánchez Trabajando',
      views: '1,118 vistas',
      uploaded: 'hace 1 año'
    },
    {
      miniature: 'https://i.ytimg.com/vi/6v0o1rP51CQ/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD78E23HqkkEUBn94DifP1TKISkzQ',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLSt0-LiGJ_CB6pC0PWtV6AFsxWG0j-EQGt6NdJGPw=s68-c-k-c0x00ffffff-no-rj',
      title: 'THE FLASH Tráiler (2022)',
      user: 'SensaCine TRAILERS',
      views: '271,105 vistas',
      uploaded: 'hace 3 días'
    },
    {
      miniature: 'https://i.ytimg.com/vi/srZ85Kpc1cc/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5spocrUvOaP_GBSP8j1x__yu65Q',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLSCeQrcGq8q1UF8rKB1HiZi7kQDy9vs5JX1heWuzg=s68-c-k-c0x00ffffff-no-rj',
      title: 'Subimos un VOLCÁN ACTIVO Ft. Fernanfloo | El Salvador #2 🌋🇸🇻',
      user: 'Luisito Comunica',
      views: '11 M de vistas',
      uploaded: 'hace 7 meses'
    },
    {
      miniature: 'https://i.ytimg.com/vi/feaVaOdNyzY/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4LmO1TjtMp9cQautItfAbXR1JAA',
      profile: 'https://yt3.ggpht.com/wOLvZOUz6OYQO4v5UvvBkKmtXjBpD3rvUhJHcrr1WDKqRC0y_SkWLfeBOOemtcF-362XuK_dag=s68-c-k-c0x00ffffff-no-rj',
      title: 'Plantamos 20,000,000 de Árboles | Mi Proyecto Más Grande',
      user: 'MrBeast en Español',
      views: '9.1 M de vistas',
      uploaded: 'hace 1 semana'
    },
    {
      miniature: 'https://i.ytimg.com/vi/VpXLX0xF2rM/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm3wtKqhu3w_j0AWgavCF3dbt0Rw',
      profile: 'https://yt3.ggpht.com/ytc/AKedOLTK0y25C0RJiEngT1ae9mrZLXIortPD-DKQxOlRkw=s68-c-k-c0x00ffffff-no-rj',
      title: 'Damn, Apple.',
      user: 'Linus Tech Tips',
      views: '1.1 M de vistas',
      uploaded: 'hace 13 horas'
    },
    {
      miniature: 'https://i.ytimg.com/vi/aTtQIpgQZjM/sddefault.jpg',
      profile: 'https://yt3.ggpht.com/9YOc6Agnvlba_bIISqIVvNFoIpHPbU3i6BFsg1hohZ5Y0LLs_523pBZFht6q9t5pol32c-QYJw=s68-c-k-c0x00ffffff-no-rj',
      title: 'Las alertas marítimas de Manfred Fritz Bajorat',
      user: 'DrossRotzank',
      views: '355,662 vistas',
      uploaded: 'hace 6 horas'
    }
  ];

  constructor(private menu: MenuController, private alertController: AlertController) {}

  openMenu() {
    this.menu.open('end');
  }

  AlertClick() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'ion-text-left',
      inputs: [  
        {  
          name: 'radio 1',  
          type: 'radio',  
          label: 'No me interesa',  
          value: 'green',  
          checked: true,  
        },  
        {  
          name: 'radio 2',  
          type: 'radio',  
          label: 'Ver más tarde',  
          value: 'black',  
        }  
      ],  
      buttons: [  
        {  
          text: 'Cancelar' 
        },  
        {  
          text: 'Guardar'
        }  
      ]  
    });

    await alert.present();
  }

  ngOnInit() { }

}
