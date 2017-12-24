// import iOS3rdParty from './3rdParty';

// import Network from './Network';
// import RunLoop, { Runloop } from './RunLoop';

const iOS3rdParty = require('./3rdParty.json');
const AboutSystem = require('./AboutSystem.json');
const DesignPatterns = require('./DesignPatterns.json');
const ExcellentApps = require('./ExcellentApps.json');
const Frameworks = require('./Framework.json');
const Handbook = require('./Handbook.json');
const Layout = require('./Layout.json');
const Network = require('./Network.json');
const Optimization = require('./Optimization.json');
const RunLoop = require('./RunLoop.json');
const Runtime = require('./Runtime.json');
const Syntax = require('./Syntax.json');
const Tutorial = require('./Tutorial.json');
const UtilsUsage = require('./UtilsUsage.json');

const iOS = {
  title: 'iOS',
  catelogs: [],
  categories: [
    iOS3rdParty,
    Network,
    RunLoop,
    AboutSystem,
    DesignPatterns,
    ExcellentApps,
    Frameworks,
    Handbook,
    Layout,
    Optimization,
    Runtime,
    Syntax,
    Tutorial,
    UtilsUsage,
  ],
};

module.exports = iOS;
