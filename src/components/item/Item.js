import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Item extends Lightning.Component{
    static _template(){
        return {
            alpha: 0.4,
            Image: {

            },
            Title: {
                y: 310, x: 0,
                text: {fontFace: "SourceSansPro-Bold", fontSize: 24, wordWrapWidth: 200}
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */
    _focus() {
        this.setSmooth('alpha', 1);
    }

    _unfocus() {
        this.setSmooth('alpha', 0.4);
    }

    set item(v){
        // @todo: patch the correct image and title
        this._item = v;
        this.patch({
            Image: { src: `https://image.tmdb.org/t/p/w200/${v.poster_path}` },
            Title: { text: { text: v.title } }
        });
    }

    get item() {
        return this._item;
    }
}
