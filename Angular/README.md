# Angular

## Project Structure
- every application has at least 1 module and 1 component
- uses TypeScript
- Module: container for a group of related components
- Component: should consist of a class

## Data Binding
https://angular.io/guide/binding-syntax

1. Interpolation / Angular Expression : {{}}
Eg:
```
  // js code
  let title = "My Title";
  // html
  <h1>{{title}}</h1> // will render a title in the DOM "My Title"
```
2. Attribute Binding: []
Eg:
```
  // js code
  let html_type = "text";
  let html_value = "Name:";
  // html
  <input [type]="html_type" [value]="html_value" /> // attributes are type and value
```
3. Event Binding: ()
  - for calling event functions
```
  // js code
  buttonFunction() {
    console.log('buttonFunction() called');
  }
  // html
  <button class="some-button-class" (click)="buttonFunction()">Run</button>
```
4. Two Way Binding: [()]
  - Use two-way binding to listen for events and update values simultaneously between parent and child components
  Eg.
  // example - https://angular.io/generated/live-examples/two-way-binding/stackblitz.html
```
  // js code
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor() { }
    fontSizePx = 16;
  }
  // html - when "fontSizePx" changes via the input box, the text on the screen will change in real time
  <h1 id="two-way">Two-way Binding</h1>
  <div id="two-way-1">
    <app-sizer [(size)]="fontSizePx"></app-sizer>
    <div [style.font-size.px]="fontSizePx">Resizable Text</div>
    <label>FontSize (px): <input [(ngModel)]="fontSizePx"></label>
  </div>
  <br>
  <div id="two-way-2">
    <h2>De-sugared two-way binding</h2>
    <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
  </div>
```

## Solved Bugs
- was trying to pass an array of objects to a child component and the array of objects was being cast to a string. I wasn't using the proper data binding type when passing the array to the child component in the HTML
  - I was doing this:
  ```
  <app-device-table view={{tab}} deviceTableHeading={{deviceTableHeading}} deviceTableColumnHeaders={{deviceTableColumnHeaders}} deviceTableData={{deviceTableData}}></app-device-table>
  ```
  when I should have been doing this:
  ```
  <app-device-table [view]="tab" [deviceTableHeading]="deviceTableHeading" [deviceTableColumnHeaders]="deviceTableColumnHeaders" [deviceTableData]="deviceTableData"></app-device-table>
  ```
- mat-expansion-panel form select values were not updating properly after creating form. Put a `this.cdr.detectChanges();` after creating the form.
