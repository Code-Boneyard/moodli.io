import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'team-historical',
  templateUrl: './historical.component.html',
})
export class HistoricalComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'SFO Terminal 3 West Modernization'},
    {value: 'pizza-1', viewValue: 'SF Crime Lab'},
    {value: 'tacos-2', viewValue: 'Facebook MPK 61 & 62'}
  ];
  totaltitle = 'Cost Per Square Foot: Total Cost';
  totaltype = 'ScatterChart';
  totaldata = [
     [15, 10],
     [17, 9],
     [15, 12.8],
     [7.2, 8.5],
     [6.5, 6.2],
     [.8, 0.7],
     [12, 10],
     [14, 9.5],
     [15.5, 11.8],
     [12.2, 8.5],
     [5.5, 6.8],
     [3, 4] 
  ];
  totalcolumnNames = ['Total Cost', 'Square Footage'];
  totaloptions = {    
  };
  totalwidth = 450;
  totalheight = 320;


  electricaltitle = 'Cost Per Square Foot: Electrical Systems';
  electricaltype = 'ScatterChart';
  electricaldata = [
     [15, 10],
     [17, 9],
     [15, 12.8],
     [7.2, 8.5],
     [6.5, 6.2],
     [.8, 0.7],
     [12, 10],
     [14, 9.5],
     [15.5, 11.8],
     [12.2, 8.5],
     [5.5, 6.8],
     [3, 4] 
  ];
  electricalcolumnNames = ['Total Cost', 'Square Footage'];
  electricaloptions = {    
  };
  electricalwidth = 450;
  electricalheight = 320;

  plumbingtitle = 'Cost Per Square Foot: Plumbing Systems';
  plumbingtype = 'ScatterChart';
  plumbingdata = [
     [15, 10],
     [17, 9],
     [15, 12.8],
     [7.2, 8.5],
     [6.5, 6.2],
     [.8, 0.7],
     [12, 10],
     [14, 9.5],
     [15.5, 11.8],
     [12.2, 8.5],
     [5.5, 6.8],
     [3, 4] 
  ];
  plumbingcolumnNames = ['Total Cost', 'Square Footage'];
  plumbingoptions = {    
  };
  plumbingwidth = 450;
  plumbingheight = 320;

  firealarmtitle = 'Cost Per Square Foot: Fire Alarm Systems';
  firealarmtype = 'ScatterChart';
  firealarmdata = [
     [15, 10],
     [17, 9],
     [15, 12.8],
     [7.2, 8.5],
     [6.5, 6.2],
     [.8, 0.7],
     [12, 10],
     [14, 9.5],
     [15.5, 11.8],
     [12.2, 8.5],
     [5.5, 6.8],
     [3, 4] 
  ];
  firealarmcolumnNames = ['Total Cost', 'Square Footage'];
  firealarmoptions = {    
  };
  firealarmwidth = 450;
  firealarmheight = 320;

  mechanicaltitle = 'Cost Per Square Foot: Mechanical Systems';
  mechanicaltype = 'ScatterChart';
  mechanicaldata = [
     [15, 10],
     [17, 9],
     [15, 12.8],
     [7.2, 8.5],
     [6.5, 6.2],
     [.8, 0.7],
     [12, 10],
     [14, 9.5],
     [15.5, 11.8],
     [12.2, 8.5],
     [5.5, 6.8],
     [3, 4] 
  ];
  mechanicalcolumnNames = ['Total Cost', 'Square Footage'];
  mechanicaloptions = {    
  };
  mechanicalwidth = 450;
  mechanicalheight = 320;
  
}

