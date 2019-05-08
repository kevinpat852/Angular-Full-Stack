import { ArtistsService } from './artists.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, AfterViewInit {
  public artistArr:any;
  public eminem:any;
  public ariana:any;
  public drake:any;
  public halsey: any;
  constructor(public artists: ArtistsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.artists.getArtists()
    .subscribe((data) => {
      this.artistArr = data.input;
      console.log(this.artistArr);
      this.eminem = this.artistArr[0];
      this.ariana = this.artistArr[1];
      this.drake = this.artistArr[2];
      this.halsey = this.artistArr[3];
      console.log(this.eminem);
      console.log(this.ariana);
      console.log(this.drake);
      console.log(this.halsey);

      let eminem = document.getElementById('aboutEminem');
      eminem.innerHTML +=
      `<p id='eminemArticle' style="width:250px; color:whitesmoke; margin:0px;">
        This is Marshal Mathers, better known by his stage name, ${this.eminem.stageName}.
        He currently produces under a several labels, one of them being
        his own label, ${this.eminem.currentLabel}. Eminem has been
        producing records from ${this.eminem.yearsActive}. His top songs
        are ${this.eminem.topSongs}; to name a few. If you'd like to know
        more about Eminem, please visit his wikipedia page for more
        information:
        <a href='${this.eminem.wikiLink}'>Eminem's Wiki</a>
      </p>`;

      let ariana = document.getElementById('aboutAriana');
      ariana.innerHTML +=
      `<p id='arianaArticle' style="width:250px; color:whitesmoke; margin:0px;">
        This is ${this.ariana.stageName}. She currently produces under a
        several labels, one of them being, ${this.ariana.currentLabel}.
        Ariana has been producing records from ${this.ariana.yearsActive}. Her top songs
        are ${this.ariana.topSongs}; to name a few. If you'd like to know
        more about Ariana, please visit his wikipedia page for more
        information:
        <a href='${this.ariana.wikiLink}'>Ariana's Wiki</a>
      </p>`;

      let drake = document.getElementById('aboutDrake');
      drake.innerHTML +=
      `<p id='drakeArticle' style="width:250px; color:whitesmoke; margin:0px;">
        This is Aubrey Drake Graham, better known by his stage name, ${this.drake.stageName}.
        He currently produces under a several labels, one of them being ${this.drake.currentLabel}.
        Drake has been producing records from ${this.drake.yearsActive}.
        His top songs are ${this.drake.topSongs}; to name a few. If you'd
        like to know more about Drake, please visit his wikipedia page
        for more information: <br /><a href='${this.drake.wikiLink}'>Drake's Wiki</a>
      </p>`;

      let halsey = document.getElementById('aboutHalsey');
      halsey.innerHTML +=
      `<p id='halseyArticle' style="width:250px; color:whitesmoke; margin:0px;">
        This is Ashley Nicolette Frangipane, better known by her stage name,
        ${this.halsey.stageName}. She currently produces under a several
        labels, one of them being, ${this.halsey.currentLabel}. Halsey has
        been producing records from ${this.halsey.yearsActive}. Her top songs
        are ${this.halsey.topSongs}; to name a few. If you'd like to know
        more about Halsey, please visit his wikipedia page for more
        information:
        <a href='${this.halsey.wikiLink}'>Halsey's Wiki</a>
      </p>`;
    });
  }

  toggleEminem() {
    $('#aboutEminem').toggleClass('hidden');
  }
  toggleAriana() {
    $('#aboutAriana').toggleClass('hidden');
  }
  toggleDrake() {
    $('#aboutDrake').toggleClass('hidden');
  }
  toggleHalsey() {
    $('#aboutHalsey').toggleClass('hidden');
  }

}
