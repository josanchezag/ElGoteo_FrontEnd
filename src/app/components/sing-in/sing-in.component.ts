import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  private token:string='';
  formSingIn: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor (private formBuilder:FormBuilder,private authenticationService:AuthenticationService){

  }
  ngOnInit():void{
    this.formSingIn=this.formBuilder.group({
      userName:['',
      [
        Validators.required
      ]
    ],
      password:['',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ]
    });
  }

  public authentication():Observable<any>{
    let body={
      userName:this.formSingIn.value.userName,
      password:this.formSingIn.value.password
    }
    this.authenticationService.auth('http://localhost:8090/login',body)
    .subscribe(
      article => {
        console.log(article);
        console.log(article.headers.get('Authorization'));
      },
      err => {
        console.log(err);
      })
    
    return new Observable();
  }

  public isPresentToken():boolean{
    if(this.token.trim()===''|| this.token===null){
      return false;
    }
    return true;
  }
  
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
