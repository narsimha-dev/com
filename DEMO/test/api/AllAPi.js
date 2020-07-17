const expect=require('chai').expect;
const request=require('supertest');
const app=require('../../app.js');
const {con}=require('../../db/db.js');
// const { delete } = require('../../api/user/userRouter.js');

describe('POST /user',()=>{
    //  this.timeout(2000);
    before(()=>{
        con
        // .then((res)=>done(res))
        // .catch(error=>done(error))
        // done();
    });
// it('OK, creating a new user', ()=>{
//     // this.timeout(2000);
//      //setTimeout(done,2000);
//     request(app).post('/api/users/add')
//                 .send({name:"Mahesh",password:"a1234"})
//                 .then(res=>{
//                     const body=res.body;
//                     console.log('body=======: ',body);
//                     expect(body).to.contain.property('name');
//                     expect(body).to.contain.property('password');
//                     // done();             
//                  });
// });
it('OK, get all existing users', ()=>{
    request(app).get('/api/users/')
                .then(res=>{
                    const data=res.body;
                        // console.log(typeof data,",", data);   
                             expect(data).to.have.property('users').with.lengthOf(19);
                 });
});
it('OK, get userById existing user', ()=>{
    const id=6;
    request(app).get(`/api/users/${id}`)
                .then(res=>{
                     const getUser=res.body;
                     console.log(typeof getUser, 'userId=======: ',getUser)
                        // expect(getUser).to.have.property('user').with.lengthOf(1);
                        expect(getUser.user.name).equal('Anish');
                        
                 });
});
// it('OK, delete userById existing user', ()=>{
//     const id=17;
//     request(app).delete(`/api/users/${id}`)
//                 .then(res=>{
//                      const deleteUser=res.body.message;
//                      console.log(typeof uId, 'userId=======: ',uId)
//                         expect(deleteUser).to.be.a('string');
                        
//                  });
// });
});