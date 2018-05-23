# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).















database replace (../backend/whalewaching.sql)
regpropertyadmin.component.html => username ????? // add new 
regpropertyadmin.component.html => Registred Date default value // 
regpropertyadmin.component.html => Poastal Code err ????? // speling ??
regpropertyadmin.component.html => telephone number  ????? // add new 


/////////////////////////////
property_owner validation
property_owner validation shouldBeUnique check by serve



















/////////////////////////////
t.p validator reg 

^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$

^\+(?:[0-9]●?){6,14}[0-9]$




/////////////////////
email validetor reg

----- example email  for check ----

    Abc@example.com                                (English, ASCII)
    Abc.123@example.com                            (English, ASCII)
    user+mailbox/department=shipping@example.com   (English, ASCII)
    !#$%&'*+-/=?^_`.{|}~@example.com               (English, ASCII)
    "Abc@def"@example.com                          (English, ASCII)
    "Fred Bloggs"@example.com                      (English, ASCII)
    "Joe.\\Blow"@example.com                       (English, ASCII)

    用户@例子.广告                   (Chinese, Unicode)
    अजय@डाटा.भारत                    (Hindi, Unicode)
    квіточка@пошта.укр             (Ukrainian, Unicode)
    θσερ@εχαμπλε.ψομ               (Greek, Unicode)
    Dörte@Sörensen.example.com     (German, Unicode)
    аджай@экзампл.рус              (Russian, Unicode)

////////////////////////////////////
name validate regex


///////////////////////////////////
username

1
^[a-zA-Z0-9.\-_$@*!]{3,30}$

2
^[-\w\.\$@\*\!]{1,30}$

3*
^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$

----- test example ------
A                                   : false // currnt true  
Reshan                              : true
D.L.A. Reshan Pubudu                : true
D.L.A Reshan Pubudu                 : true
D. L. A. Reshan Pubudu              : true
D. L. A Reshan Pubudu               : true
D. L.A. Reshan Pubudu               : true
D. L.A. Reshan O'Pubudu             : true
D. L.A Reshan Pubudu                : true
Jon Doe                             : true
Jonathan Taylor Thomas              : true
Pat O'Brien                         : true
Julia Louis-Dreyfus                 : false
Jean-Paul Sartre                    : false
Þór Eldon                           : false
Marcus Wells-O'Shaugnessy           : false
Stephen Wells-O'Shaugnessy Marcus   : false
This-Is-A-Crazy-Name Jones          : false
---- --------                       : false
'''' ''''''''                       : false
'-'- -'-'-'-'                       : false
a-'- b'-'-'-'                       : false
'-'c -'-'-'-d                       : false
e-'f g'-'-'-h                       : false
'ij- -klmnop'                       : false




///////////////////
    unamePattern = "^[a-z0-9_-]{8,15}$";
    pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
    mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";