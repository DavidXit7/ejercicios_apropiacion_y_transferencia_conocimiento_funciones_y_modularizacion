export const contar = (numero) =>{
    if(numero > 0)
    {
        for(let i = 1; i <= numero; i++)
        {
            alert(`numero ${i}`);
        }
        return true;
    }
    else{
        return false;
    }
}