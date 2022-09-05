function send(i)
        {
            x=document.getElementById("i1")
            switch(i){
                case 1:x.value +=1; break;
                case 2:x.value +=2; break;
                case 3:x.value +=3; break;
                case 4:x.value +=4; break;
                case 5:x.value +=5; break;
                case 6:x.value +=6; break;
                case 7:x.value +=7; break;
                case 8:x.value +=8; break;
                case 9:x.value +=9; break;
                case 0:x.value +=0; break;   
                
                case '+':x.value +='+'; break;
                case '-':x.value +='-'; break;
                case '*':x.value +='*'; break;
                case '/':x.value +='/'; break;
                case '.':x.value +='.'; break;
                case 'C':x.value =' '; break;
                case 'Del':x.value =x.value.slice(0,-1); break;

                case '=':result=eval(x.value);
                x.value=result;
                break;

                case 'log' : result=eval(Math.log10(x.value));
                x.value=result;
                break;

                case 'sin' : result=eval(Math.sin(x.value));
                x.value=result;
                break;

                case 'cos' : result=eval(Math.cos(x.value));
                x.value=result;
                break;

                case 'tan' : result=eval(Math.tan(x.value));
                x.value=result;
                break;

                case '√' : result=eval(Math.sqrt(x.value));
                x.value=result;
                break;

                case '3√' : result=eval(Math.cbrt(x.value));
                x.value=result;
                break;
                   
                case 'x<sup>2</sup>' : result= Math.pow(x.value,2);
                x.value=result;
                break;

                case 'x<sup>3</sup>' : result= Math.pow(x.value,3);
                x.value=result;
                break;
                   
            }
        }