import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFilter } from 'src/core/model/IFilter';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    successfulLaunchOrLanding = [true, false];

    filters: IFilter;

    @Output() filterChangeEvent = new EventEmitter<IFilter>();

    constructor() { }

    ngOnInit(): void {
    }

    onFilterChange(type: string, data: string): void {
        this.filters = { ...this.filters, [type]: data };
        this.filterChangeEvent.emit(this.filters);
    }

}
