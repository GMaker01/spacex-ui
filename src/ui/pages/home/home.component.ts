import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/http';
import { IFilter } from 'src/core/model/IFilter';
import { IResponse } from 'src/core/model/IResponse';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    launchData: Array<IResponse> = [];
    collapedSideBar: boolean;

    constructor(
        private api: ApiService
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    recieveFilters(event: IFilter): void {
        this.getData(event);
    }

    getData(event: IFilter = {} as IFilter): void {
        this.api.get('launches', { ...event, limit: 100 }).subscribe((data: Array<IResponse>) => {
            this.launchData = data;
        }, error => {
            console.error('error', error);
        });
    }

    isLandSuccessful(data: IResponse): boolean {
        if (data.rocket && data.rocket.first_stage && data.rocket.first_stage.cores && data.rocket.first_stage.cores.length) {
            return data.rocket.first_stage.cores.some(x => x.land_success);
        }
        return false;
    }

}
