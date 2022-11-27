import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  text_moi = "";
  constructor(
    private activatedRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.getTextMoi();
  }
  getTextMoi(){
    this.text_moi = this.activatedRouter.snapshot.params['textmoi']
  }
}