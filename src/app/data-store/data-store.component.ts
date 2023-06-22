import { Component } from '@angular/core';
const data : any[] = [
  {
    title : "Passenger Booking",

    records : "2345",

    fields : "10",

    lastModified : "10 hours ago",

    modifiedBy : "Auto update",

    description : "This dataset contains the passenger booking data",

    path : "assets/statics.png"

  },

  {

    title : "Ticketing",

    records : "2345",

    fields : "10",

    lastModified : "8 hours ago",

    modifiedBy : "Auto update",

    description : "This dataset contains the passenger booking data",

    path : "assets/statics.png"

  },

  {

    title : "Customer Order",

    records : "2345",

    fields : "10",

    lastModified : "7 hours ago",

    modifiedBy : "Auto update",

    description : "This dataset contains the passenger booking data",

    path : "assets/statics.png"

  },

  {  

    title : "Baggage",

    records : "2345",

    fields : "10",

    lastModified : "1 hours ago",

    modifiedBy : "Auto update",

    description : "This dataset contains the passenger booking data",

    path : "assets/dbpic.jpg"

  }, {

    title : "Baggage",

    records : "2345",

    fields : "10",

    lastModified : "10 hours ago",

    modifiedBy : "Auto update",

    description : "This dataset contains the passenger booking data",

    path : "assets/dbpic.jpg"

  }

]
@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.scss']
})
export class DataStoreComponent {

  data1 : any[]= data;

  sort(){
    this.data1 = [
      {
        title : "Passenger Booking",
    
        records : "2345",
    
        fields : "10",
    
        lastModified : "10 hours ago",
    
        modifiedBy : "Auto update",
    
        description : "This dataset contains the passenger booking data",
    
        path : "assets/statics.png"
    
      }]
  }

}
