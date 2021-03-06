/* eslint-disable */
import factory, {SequelizeAdapter} from 'factory-girl';
factory.setAdapter(new SequelizeAdapter());

const areas = require('./area')(factory);
const subareas = require('./subarea')(factory);
const regions = require('./region')(factory);
const subregions = require('./subregion')(factory);
const authors = require('./author')(factory);
const books = require('./book')(factory);
const climbs = require('./climb')(factory);
const users = require('./user')(factory);
const userClimbs = require('./userClimb')(factory);
const userClimbStatuses = require('./userClimbStatus')(factory);
const userBooks = require('./userBook')(factory);
const userBookStatuses = require('./userBookStatus')(factory);
const bookClimbs = require('./bookClimb')(factory);
const authorBooks = require('./authorBook')(factory);

export default factory;
