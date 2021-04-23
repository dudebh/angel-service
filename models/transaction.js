'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      
    }

    getDays(){
      let Difference_In_Time = this.end_date.getTime() - this.start_date.getTime();
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      return Difference_In_Days
    }

    getPrice(){
      let price = this.getDays() * 150000
      let formatedMoney = Transaction.moneyFormater(price)
      return formatedMoney;
    }

    static moneyFormater(number){
      let tempArr = number.toString().split('').reverse()
      let newArr = []
      tempArr.forEach((e, i)=>{
          newArr.push(e)
          if((i+1) % 3 === 0){
              newArr.push('.')
          }
      })
      return `Rp ${newArr.reverse().join('')},00`
    }
  };
  Transaction.init({
    start_date: {
      type: DataTypes.DATE,
      validate :{
        notEmpty:{msg: 'Start Date tidak boleh kosong'}
      }
    },
    end_date: {
      type: DataTypes.DATE,
      validate :{
        notEmpty:{msg: 'End Date tidak boleh kosong'}
      }
    },
    UserId: DataTypes.INTEGER,
    DogId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};