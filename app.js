let elements = document.getElementsByClassName('paragraphe');


for (let i = 0; i < elements.length; i++) {


    if((i + 1)%2 === 0 ){
        continue;
    }
    else if( i === elements.length )
    {
        break;

    }
    else{
        elements[i].innerHTML = i + 1;
    }
    console.log(i);
}
