"use strict";
import Rai from 'raiblocks-js';

const rai = new Rai();
const blockCount = rai.blocks.count();
blockCount.then(
    res => console.log(res)
);