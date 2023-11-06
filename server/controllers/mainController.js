// Get mainpage

exports.mainPage = async (req, res) => {
    const locals = {
        title: 'Budgeteer',
        description: 'App for savings and budgeting',
    }
        
    res.render('index', locals);
}
// Get LoginPage

exports.login = async (req, res) => {
    const locals = {
        title: 'LogIn - Budgeteer',
        description: 'Login to get started with account',
    }
        
    res.render('login', locals);
}



