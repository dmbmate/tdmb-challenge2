import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        return {
            // scale:0.5,
            List: {
                x: 100, y: 560, zIndex: 3,
                type: List
            },
            // @todo: add logo
            Logo: {
                x: 100, y: 100, zIndex: 2,
                src: Utils.asset('images/logo.png')
            }
        };
    }

    _init() {
        this._index = 0; 
    }

    _focus() {

    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */
    set movies(movies) {
        // this.tag('List').label = 'Popular';
        this.tag('List').movies = movies.results;
    }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        // @todo: delegate focus to List child
        return this.tag('List')._getFocused();
    }

}
