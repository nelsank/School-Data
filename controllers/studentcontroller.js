const student = require('../modals/students');

module.exports= ((app)=>{
    return {
        getStudentInfo: async function(req,res){
            try{
                let students = await student.find({});
                res.send(students)
            }
            catch(e){
                res.send(e)
            }


        }
    }
})();