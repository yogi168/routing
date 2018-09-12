import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;
  arrName: string[];
  msg: string;

  constructor(private route: ActivatedRoute,private httpService: HttpClient) {}
  //constructor(private httpService: HttpClient) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 

       // In a real app: dispatch action to load the details here.
    });
    this.readCategory();
  }
   readCategory(){
      this.httpService.get('./assets/'+this.id+'.json').subscribe(
      data => {
        this.arrName = data as string [];
      },
      (err: HttpErrorResponse) => {
          
        this.msg = "FIle not found";
      }   
    );
  }
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  }