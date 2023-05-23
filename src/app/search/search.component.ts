import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  searchTerm:String = ""
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm']
      }
      
    })
  }
  search():void{ //This function returns nothing
    if(this.searchTerm){
      this.router.navigateByUrl('/search/'+this.searchTerm)
    }
  }
}
