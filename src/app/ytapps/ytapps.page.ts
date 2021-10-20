import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ytapps',
  templateUrl: './ytapps.page.html',
  styleUrls: ['./ytapps.page.scss'],
})
export class YtappsPage implements OnInit {

  apps = [
    {
      img: 'https://yt3.ggpht.com/9OFmTb0K1ltYfSsDGtzm0QnrFUARMMZZKEBag3k6PtUMnarIVbXmE1ML7fYO5ymGT7vrIKI=s176-nd',
      name: 'ID de Activision'
    },
    {
      img: 'https://yt3.ggpht.com/Iey47VziUp7kfElO_kZQfT4HkjuxM_Sq2MG6M5_PfXBhUKI90pcweCJrTEqEdHeG4QjdPvw=s176-nd',
      name: 'Battle.net'
    },
    {
      img: 'https://yt3.ggpht.com/2qhXXZm7rURHrwCBwuzUoe3lAVRWtq4D9fSj5A9PkJmCz8dBX5WsWdbWmQPsP0YI8_hOwk0=s176-nd',
      name: 'Epic Games'
    },
    {
      img: 'https://yt3.ggpht.com/qYwCY37vA51A2-m7OeWQKK-g3JJ1FoDBDzbp2mkA0oMfOf5pF3V7GXFE5m0kkrY5MMccep0=s176-nd',
      name: 'Garena'
    },
    {
      img: 'https://yt3.ggpht.com/mL4dB3T4SjBZZabdH6yutbfmNRzLAV4TDOc7u_OSRM6sDVlX2ZRJQu1gdagfmmyrnlcoNp0=s176-nd',
      name: 'MLBB'
    },
    {
      img: 'https://yt3.ggpht.com/7EabjEWAQXDfaJhXN4V2BMXY7sYVaNa3NVYNtqHkPTlKv0eU8r4SkbPeDIeXnBVaRKyZcug=s176-nd',
      name: 'PUBG'
    },
    {
      img: 'https://yt3.ggpht.com/H_o6753e7ipKV6dsizTyTUaj2VfGC-cUXza44qunmFNZY6bej8uZfOM4TXo75Dgcq1oVCsk=s176-nd',
      name: 'PUBG MOBILE'
    },
    {
      img: 'https://yt3.ggpht.com/AdwMGs3qF6SGNeFiMB7AwdSRe-MOu9Vf2IGluvCakJ3Fcy9DrJozeQfehihqzpAkTXNA4g=s176-nd',
      name: 'Riot Games'
    },
    {
      img: 'https://yt3.ggpht.com/o87hJbozgLcNjqoYv_6MP5DDtPKqypMRy5UP6qxoRnhl1QsedFCWz5AG0G6_Z787yOgeAOFD=s176-nd',
      name: 'ID de Supercell'
    },
    {
      img: 'https://yt3.ggpht.com/C1DoT4jX7xNwS-tT2fWb3920lFEu8oMb32GD6Ws4ofbi4_1xdawIHUsf-VmwEvdt2Bq5Ums=s176-nd',
      name: 'Cuenta de Ubisoft'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
