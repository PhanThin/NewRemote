import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	listImage: any;

	constructor( private imageService: ImageService ) { }

	ngOnInit() {

	}

	onClick() {
this.imageService.getData().subscribe(next => this.listImage = next);
	}
}
