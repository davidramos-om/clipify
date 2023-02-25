import slugify from "slugify";
import Swal from 'sweetalert2';

export function slugifyText(value: string) {

    return slugify(value, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: false,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',      // language code of the locale to use
        trim: true        // trim leading and trailing replacement chars, defaults to `true`        
    })
}

export function generateUUID() {

    let d = new Date().getTime();

    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
}


export function shortAddress(address: string, length: number = 4) {
    return address.slice(0, length) + "..." + address.slice(-length);
}

export function formatNumber(value: number | string, decimal: number = 2) {
    return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(Number(value));
}



type showLoaderProps = {
    title: string;
    html?: string;
    text?: string;
    allowOutsideClick?: boolean;
}
export function showLoader({ title, html, text, allowOutsideClick }: showLoaderProps = { title: 'Loading...' }) {

    Swal.fire({
        title,
        html,
        text,
        allowOutsideClick,
        didOpen: () => {
            Swal.showLoading()
        }
    });
}

export function stopLoader() {
    Swal.close();
}
