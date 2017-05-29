import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternshipModel } from "../../models/internship.model";
import { NgForm } from "@angular/forms";
import { InternshipsService } from "../../services/internships.service";

@IonicPage()
@Component({
  selector: 'page-internship-data',
  templateUrl: 'internship-data.html',
})
export class InternshipData {

  internship:InternshipModel;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private internServ: InternshipsService) {
  }

  ngOnInit(){
    this.internship=new InternshipModel();
  }

  onSubmit(f: NgForm){
    //console.log(f.value);
    //console.log(this.internship);
    
    this.internServ.saveInternship(this.internship).then(tata=>{
      f.resetForm();
      this.goBack();
    });
  }

  goBack(){
    this.navCtrl.setRoot('Internships');
  }

}
