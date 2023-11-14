// Get mainpage

exports.mainPage = async (req, res) => {
    const locals = {
        title: 'Budgeteer',
        description: 'App for savings and budgeting',
    }
        
    res.render('index', locals);
}

//Get HomePage
exports.homePage = async(req,res)=>{
    const locals ={
        title:'Home',   
        description:'Welcome to Budgeteer'  
    }

    res.render('homePage', locals);
}
// Get LoginPage

exports.login = async (req, res) => {
    const locals = {
        title: 'LogIn - Budgeteer',
        description: 'Login to get started with account',
    }
        
    res.render('login', locals);
}

//Get sign up page
exports.register = async (req, res) => {
    const locals = {
        title: 'Get Started - Budgeteer',
        description: 'Register to create an account',
    }
        
    res.render('register', locals);
}



