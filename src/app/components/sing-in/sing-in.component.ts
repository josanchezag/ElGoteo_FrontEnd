import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  private token:string='';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor (private formBuilder:FormBuilder,private authenticationService:AuthenticationService){

  }
  ngOnInit():void{
    this.form=this.formBuilder.group({
      userName:[],
      password:[]
    });
  }

  public authentication():Observable<any>{
    let body={
      userName:this.form.value.userName,
      password:this.form.value.password
    }
    this.authenticationService.auth('http://localhost:8090/login',body)
    .subscribe(respuesta =>{
      this.token=respuesta.toString();
      console.log(respuesta);
    })
    return new Observable();
  }
  
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
