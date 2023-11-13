const FinancialGoal = require('../models/FinancialGoals');
const mongoose = require('mongoose');

/**
 * GET
 * Goal Dashboard
 */
exports.financialgoal = async(req, res) => {


    /**try {
        await FinancialGoal.insertMany([
            {
                user: "",
                tittle: "",
                body: "",
                createdAT: "",
                updatedAt: ""
            },
            {
                user: "",
                tittle: "",
                body: "",
                createdAT: "",
                updatedAt: ""
            },
            {
                user: "",
                tittle: "",
                body: "",
                createdAT: "",
                updatedAt: ""
            }
        ])
    } catch (erro) {
        console.log("err", +error);
    }**/

    const locals = {
        title: "Financial Goal - Budgeteer",
        description: "Modify your financial goal.",
    }

    try {
        const financialgoals = await FinancialGoal.find({});
        console.log(financialgoals);
    } catch (error) {
        
    }
 
    res.render('financialgoal/index', {
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/financialgoal'
    });
}