import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/shared/services';
import { IFilter } from 'src/shared/model/IFilter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  collapedSideBar: boolean;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  recieveFilters(event: IFilter): void {
    this.getData(event);
  }

  getData(event: IFilter = {} as IFilter): void {
    // this.data = [];
    // if (reset) {
    //     this.pageIndex = 1;
    //     this.strSearch = '';
    // }
    // this.loading = true;
    // const query = {
    //     order: [
    //         [`${this.sortKey || 'id'}`, `${this.sortValue === 'ascend' ? 'ASC' : 'DESC'}`],
    //     ],
    //     limit: this.pageSize,
    //     offset: (this.pageIndex - 1) * this.pageSize,
    // };
    // if (this.strSearch) {
    //     Object.assign(query, {
    //         where: {
    //             title: {
    //                 $like: `%${this.strSearch.trim()}%`,
    //             },
    //         }
    //     });
    // }
    this.api.get('launches', { ...event, limit: 100 }).subscribe((data: any) => {
      console.log(data);

      this.data = data;
      // data.forEach(element => {
      //   console.log(element.land_success);
      // });
    }, error => {
      console.log('error', error);
    });
  }

}
