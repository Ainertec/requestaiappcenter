var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

export class Shop {
    private static open = null;

    public static setOpen(open: Boolean): void {
        this.open = open;
        localStorage.setItem('open', `${open}`);
    }

    public static getOpen() {
        if (this.open == null) {
            this.open = Boolean(localStorage.getItem('open') == 'true')
        }
        return this.open;
    }

}