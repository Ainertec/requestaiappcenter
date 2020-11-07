import fs from 'fs';
import path from 'path';

export class Shop {
    private static open = null;

    public static setOpen(open: Boolean): void {
        this.open = open;
        try {
            fs.writeFile(path.resolve(__dirname, 'config.txt'), `${open}`, { flag: 'w' }, function (err) {
                if (err) console.log(err);
            });
        } catch (error) { }
    }

    public static getOpen() {
        if (this.open == null) {
            try {
                fs.readFile(path.resolve(__dirname, 'config.txt'), 'utf-8', function (err, data) {
                    if (err) console.log(err);
                    else {
                        data = JSON.parse(data)
                        this.open = Boolean(data == 'true');
                    }
                });
            } catch (error) { }
        }
        return this.open;
    }

}