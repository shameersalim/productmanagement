import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router:Router) {
    }

    ngOnInit():void {
        let id = + this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack():void {
        this._router.navigate(['/products']);
    }

}