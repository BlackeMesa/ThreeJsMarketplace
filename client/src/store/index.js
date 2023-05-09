import { proxy } from 'valtio';

const state = proxy({

    intro: true,
    color: '#EFBD4E',
    isLogoTetxture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.pg'

});

export default state;