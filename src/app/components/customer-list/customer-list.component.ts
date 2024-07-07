import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public editabale : boolean = false;

  public edit : string = "EDITABLE";
  public approved : string = "APPROVED";
  public rejected : string = "REJECTED";
  public userdata:any
  public list : any = "";

  constructor(private service : ContactService){
  
  }
  ngOnInit(): void {
    this.editabale = true;
    this.list = this.edit;
    this.getList(this.edit);
  }
  onList(list : string){
    this.list = list;
    if(this.edit == list){
      this.editabale = true;
    }else{
      this.editabale = false;
    }
    this.getList(list);
  }
  customerAction(id:any, cstatus : string ){
    var customerAction = {
      customerId : id,
      status: cstatus
    }
    this.service.customerAction(customerAction).subscribe((data)=>{
      this.service.getList(this.list).subscribe((data)=>{
        this.userdata= data;
      })
    })
  }
  getList(list : string){
    this.service.getList(list).subscribe(( data)=>{
      this.userdata= data;
    })
  }





//needs optimization in next release
  onBackupDownload(){
this.service.getBackupfile().subscribe((data : any)=>{

  this.saveFile(data.file, "backup.xls")
})
  }

  onApprovedDownload(){

    this.service.getApprovedFile().subscribe((data : any)=>{

      this.saveFile(data.file, "approved.xls")
    })
  }

  // saveByteArray(bytes : any, filename : string) {
  //   var blob = new Blob([bytes]);
  //   var link = document.createElement('a');
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download =filename;
  //   link.click();
  // }
  saveFile(bytes : any, filename : string) {
  
    let newPdfWindow = window.open('', 'Print_' + Date.now());
  let content = encodeURIComponent(bytes);
  let iframeStart = "<iframe width='100%' height='100%' src='data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
  let iframeEnd = "'></iframe>";
  newPdfWindow!.document.write(iframeStart + content + iframeEnd);

 
  }

  
}
