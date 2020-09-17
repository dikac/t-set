import Jasmine from 'jasmine'

const jasmine = new Jasmine({})
jasmine.loadConfigFile(__dirname + '../../jasmine.json')

if(process.argv[2] !== undefined) {

    jasmine.specFiles = ['/../'+ process.argv[2]];

}
export default jasmine;
