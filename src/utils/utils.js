
const utils = 
{
    toMoney : function(money){
        return 'R$ ' + (money / 100).toFixed(2).toString().replace('.', ',')
    },
    formatProduct: function(word){
        const str = word.split(" ").join(" ").toLowerCase()
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
export default utils
