import {Lightning} from "wpe-lightning-sdk";
import Item from "../item/Item";

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'SourceSansPro-Bold'}
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
        // @todo: update index and call setIndex
        const len = this.items.length;
        this.setIndex((this._index + len - 1) % len);
    }

    _handleRight() {
        // @todo: update index and call setIndex
        const len = this.items.length;
        this.setIndex((this._index + 1) % len);
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
        this._index = index;
        this.tag('Movies').setSmooth('x', index * -250);
        this.label = this.items[this._index].item.title;
    }

    set label(v) {
        // @todo: update list title
        this.tag('Label').text = v;
    }

    set movies(v) {
        // we add an array of object with type: Item
        // this.tag("Levels").children = v.map((el, idx)=>{
        //     return {
        //         type: Item
        //     };
        // });
        this.tag('Movies').children = v.map((movie, index) => {
            return {
                x: index * 250, item: movie,
                type: Item
            };
        });
        console.log(this.tag('Movies').children);
    }

    get items() {
        return this.tag("Movies").children;
    }

    get activeItem() {
        // @todo: return selected item
        return this.items[this._index];
    }

    _getFocused() {
        // @todo:
        // return activeItem
        return this.activeItem;
    }

    _active() {
        this.setIndex(0);
        //KOH: I am not sure why "_getFocused()" above doesn't make the initially active item focused.
        //KOH: Instead, the code below is to manually make the item focused.
        this.activeItem._focus();
    }
}
