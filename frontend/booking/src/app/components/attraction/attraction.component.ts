import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AttractionsService} from '../../services/attractions.service';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {
  searchFormGroup: FormGroup;
  attractions: any = [];
  fetching = true;
  searchValue = '';
  innerLoader = false;
  constructor( private fb: FormBuilder,
               private attractionsService: AttractionsService) { }

  setUpForm(): void {
    this.searchFormGroup = this.fb.group({
      search: new FormControl('', []),
    });
  }

  ngOnInit(): void {
    this.setUpForm();
    this.fetchAll();
  }

  fetchAll(): void {
    this.fetching = true;
    this.attractionsService.index().subscribe((data => {

      this.fetching = false;
      if (data.success) {
        this.attractions = data.data;
      }

    }), error => {
      this.fetching = false;
    });
  }



  search(value): void {
      this.fetching = true;
      this.attractionsService.search(value).subscribe((data => {
        this.fetching = false;
        if (data.success) {
          this.attractions = data.data;
        }

      }), error => {
        this.fetching = false;
      });
  }


  // doSearch(): void {
  //   this.search();
  // }

  onKey(event: any): void {
    this.searchValue = event.target.value;
    if (this.searchValue) {
      this.search(this.searchValue);
    } else {
      this.fetchAll();
    }
  }
}
