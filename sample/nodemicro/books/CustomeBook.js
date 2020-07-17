exports.customeFileds={
           publishDate:()=> {
                   const date=new Date();
                    const day=date.getDate();
                    const month=date.getMonth();
                    const year=date.getFullYear();
                    if(day<10){
                        return `${year}-${month}-0${day}`
                    }if(month<10){
                        return `${year}-0${month}-${day}`;
                    }else{
                   return `${year}-${month}-${day}`;
                           }
                                        }
}