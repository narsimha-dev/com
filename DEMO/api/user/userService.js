const {con}=require('../../db/db');

module.exports={

    userlogin:(name,response)=>{
      con.query('select * from user where name=?',[name],
        (error, row, fileds)=>{
            if(error){
                return(error);
            }
            return response(null, row[0]);
        })
    },
    create:(data,response)=>{
                con.query('insert into user(name,password) values(?,?)',
                [data.name,data.password],
                (error, results, fileds)=>{
                             if(error){
                                     console.log("query error: ", error);
                                     return response(error);
                                 }
                                 console.log("creart user: ", results)
                                     return response(null, results);
                                }
                                     )},
                                     
    getUsers:response=>{
        con.query('select * from user',
                  [],
                  (error,rows,fileds)=>{
                    if(error){
                        console.log("fetching user records errors");
                        return response(error);
                    }
                    response(null,rows);
                });
    },
    getUserById:(id,response)=>{
        con.query('select id,name from user where id=?',
                   [id],
                   (error,rows,fileds)=>{
                       if(error){
                           console.log("getUserById getting error");
                           return response(error);
                       }
                       return response(null, rows[0]);
                   });
    },
    updateUserById:(data, response)=>{
        con.query('update user set name=? where id=?',
                     [data.name, data.id],
                     (error,result,fileds)=>{
                         if(error){
                             console.log("updateUserById error");
                             return response(error);
                         }
                         return response(null, result);
                     });
    },
    deleteUserById:(id,response)=>{
        console.log("deleted id: ", id);
        con.query('delete from user where id=?',[id],
                 (error,row,fileds)=>{
                     if(error){                      
                         if(error.errno){                     
                         return response("Can't delete user, because of product object associated...");
                         }
                         return response(error);
                     }
                     return response(null, row);
                 });
    }
    }